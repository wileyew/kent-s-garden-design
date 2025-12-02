/**
 * Google Reviews Service
 * Fetches and parses Google Business Profile reviews from a share link
 */

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  relativeTime?: string;
}

const GOOGLE_SHARE_URL = "https://share.google/nnvoXXlJlLOG2bc2K";

/**
 * Fetches Google reviews from the share link using a CORS proxy
 */
export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  try {
    // Try multiple CORS proxy services for better reliability
    const proxies = [
      `https://api.allorigins.win/get?url=${encodeURIComponent(GOOGLE_SHARE_URL)}`,
      `https://corsproxy.io/?${encodeURIComponent(GOOGLE_SHARE_URL)}`,
    ];
    
    let html = "";
    let lastError: Error | null = null;
    
    // Try each proxy until one works
    for (const proxyUrl of proxies) {
      try {
        const response = await fetch(proxyUrl, {
          headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        html = data.contents || data || "";
        
        // If we got HTML content, break out of the loop
        if (html && html.length > 100) {
          break;
        }
      } catch (error) {
        lastError = error as Error;
        console.warn(`Proxy failed, trying next one:`, error);
        continue;
      }
    }
    
    if (!html || html.length < 100) {
      throw lastError || new Error("Failed to fetch HTML from any proxy");
    }
    
    // Parse reviews from the HTML
    const reviews = parseReviewsFromHTML(html);
    
    // If no reviews found, try to extract the actual Google Maps URL and fetch from there
    if (reviews.length === 0) {
      const mapsUrl = extractGoogleMapsUrl(html);
      if (mapsUrl) {
        return await fetchReviewsFromMapsUrl(mapsUrl);
      }
    }
    
    return reviews;
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    // Return empty array on error - the UI will handle this gracefully
    return [];
  }
}

/**
 * Extracts the actual Google Maps/Business Profile URL from the share link HTML
 */
function extractGoogleMapsUrl(html: string): string | null {
  try {
    // Look for redirect URLs or Google Maps links
    const patterns = [
      /https?:\/\/[^\s"']*maps\.google[^\s"']*/gi,
      /https?:\/\/[^\s"']*google\.com\/maps[^\s"']*/gi,
      /https?:\/\/[^\s"']*business\.google[^\s"']*/gi,
      /window\.location\.href\s*=\s*["']([^"']+)["']/i,
      /<meta[^>]*http-equiv=["']refresh["'][^>]*content=["'][^;]*url=([^"']+)/i,
    ];
    
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match && match[0]) {
        return match[0].replace(/["']/g, '').trim();
      }
    }
  } catch (error) {
    console.error("Error extracting Maps URL:", error);
  }
  
  return null;
}

/**
 * Fetches reviews from a Google Maps URL
 */
async function fetchReviewsFromMapsUrl(mapsUrl: string): Promise<GoogleReview[]> {
  try {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(mapsUrl)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from Maps URL: ${response.statusText}`);
    }
    
    const data = await response.json();
    const html = data.contents || "";
    
    return parseReviewsFromHTML(html);
  } catch (error) {
    console.error("Error fetching from Maps URL:", error);
    return [];
  }
}

/**
 * Parses review data from Google Business Profile HTML
 */
function parseReviewsFromHTML(html: string): GoogleReview[] {
  const reviews: GoogleReview[] = [];
  
  try {
    // Create a temporary DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    // Google reviews are typically in specific containers
    // The structure may vary, so we'll try multiple selectors
    const reviewSelectors = [
      '[data-review-id]',
      '.review',
      '[jsname="fVa1Ff"]',
      '[data-review]',
      'div[itemprop="review"]',
    ];
    
    let reviewElements: NodeListOf<Element> | null = null;
    
    for (const selector of reviewSelectors) {
      reviewElements = doc.querySelectorAll(selector);
      if (reviewElements.length > 0) break;
    }
    
    // If no reviews found with standard selectors, try to find review-like content
    if (!reviewElements || reviewElements.length === 0) {
      // Look for star ratings and nearby text
      const starElements = doc.querySelectorAll('[aria-label*="star"], [aria-label*="Star"]');
      
      starElements.forEach((starEl, index) => {
        const reviewContainer = starEl.closest('div[class*="review"], div[class*="Review"]') || 
                               starEl.parentElement?.parentElement;
        
        if (reviewContainer) {
          const review = extractReviewFromElement(reviewContainer, index);
          if (review) reviews.push(review);
        }
      });
    } else {
      // Parse reviews from found elements
      reviewElements.forEach((element, index) => {
        const review = extractReviewFromElement(element, index);
        if (review) reviews.push(review);
      });
    }
    
    // If still no reviews, try extracting from JSON-LD structured data
    if (reviews.length === 0) {
      const jsonLdScripts = doc.querySelectorAll('script[type="application/ld+json"]');
      jsonLdScripts.forEach((script) => {
        try {
          const jsonData = JSON.parse(script.textContent || '{}');
          if (jsonData['@type'] === 'LocalBusiness' && jsonData.aggregateRating) {
            // Extract from structured data if available
            const extracted = extractFromStructuredData(jsonData);
            reviews.push(...extracted);
          }
        } catch (e) {
          // Ignore JSON parse errors
        }
      });
    }
    
  } catch (error) {
    console.error("Error parsing reviews from HTML:", error);
  }
  
  return reviews;
}

/**
 * Extracts review data from a DOM element
 */
function extractReviewFromElement(element: Element, index: number): GoogleReview | null {
  try {
    // Try to find author name
    const authorSelectors = [
      '[data-reviewer-name]',
      '.reviewer-name',
      '[itemprop="author"] [itemprop="name"]',
      'span[class*="name"]',
      'div[class*="name"]',
    ];
    
    let author = "Anonymous";
    for (const selector of authorSelectors) {
      const authorEl = element.querySelector(selector);
      if (authorEl) {
        author = authorEl.textContent?.trim() || author;
        break;
      }
    }
    
    // Try to find rating
    let rating = 5;
    const ratingSelectors = [
      '[aria-label*="star"]',
      '[data-rating]',
      '[itemprop="ratingValue"]',
      'span[class*="rating"]',
    ];
    
    for (const selector of ratingSelectors) {
      const ratingEl = element.querySelector(selector);
      if (ratingEl) {
        const ratingText = ratingEl.getAttribute('aria-label') || 
                          ratingEl.getAttribute('data-rating') ||
                          ratingEl.textContent || '';
        const ratingMatch = ratingText.match(/(\d+)/);
        if (ratingMatch) {
          rating = parseInt(ratingMatch[1]);
          break;
        }
      }
    }
    
    // Try to find review text
    const textSelectors = [
      '[data-review-text]',
      '.review-text',
      '[itemprop="reviewBody"]',
      'div[class*="text"]',
      'p[class*="text"]',
    ];
    
    let text = "";
    for (const selector of textSelectors) {
      const textEl = element.querySelector(selector);
      if (textEl) {
        text = textEl.textContent?.trim() || "";
        if (text) break;
      }
    }
    
    // If no text found, try getting all text content
    if (!text) {
      const allText = element.textContent?.trim() || "";
      // Remove author and rating from text
      text = allText.replace(author, "").replace(/\d+\s*star/i, "").trim();
    }
    
    // Try to find date
    const dateSelectors = [
      '[data-review-date]',
      '.review-date',
      '[itemprop="datePublished"]',
      'time',
      'span[class*="date"]',
    ];
    
    let date = new Date().toISOString();
    let relativeTime = "";
    
    for (const selector of dateSelectors) {
      const dateEl = element.querySelector(selector);
      if (dateEl) {
        const dateText = dateEl.getAttribute('datetime') || 
                        dateEl.getAttribute('data-date') ||
                        dateEl.textContent?.trim() || '';
        if (dateText) {
          relativeTime = dateText;
          // Try to parse date
          const parsedDate = new Date(dateText);
          if (!isNaN(parsedDate.getTime())) {
            date = parsedDate.toISOString();
          }
          break;
        }
      }
    }
    
    // Only return review if we have meaningful content
    if (text.length > 10 || author !== "Anonymous") {
      return {
        id: `review-${index}-${Date.now()}`,
        author,
        rating,
        text: text || "No review text available",
        date,
        relativeTime,
      };
    }
  } catch (error) {
    console.error("Error extracting review from element:", error);
  }
  
  return null;
}

/**
 * Extracts reviews from JSON-LD structured data
 */
function extractFromStructuredData(jsonData: any): GoogleReview[] {
  const reviews: GoogleReview[] = [];
  
  try {
    if (jsonData.review && Array.isArray(jsonData.review)) {
      jsonData.review.forEach((review: any, index: number) => {
        reviews.push({
          id: `structured-review-${index}`,
          author: review.author?.name || "Anonymous",
          rating: review.reviewRating?.ratingValue || 5,
          text: review.reviewBody || "",
          date: review.datePublished || new Date().toISOString(),
        });
      });
    }
  } catch (error) {
    console.error("Error extracting from structured data:", error);
  }
  
  return reviews;
}

