/**
 * Google Reviews Service
 * Fetches Google Reviews using AWS Lambda function with Google Places API
 */

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  relativeTime?: string;
  profilePhotoUrl?: string | null;
}

// API endpoint - will be set via environment variable or use default
const getApiEndpoint = (): string => {
  // In production, this will be the AWS Lambda function URL
  // Set via VITE_GOOGLE_REVIEWS_API_URL environment variable
  return import.meta.env.VITE_GOOGLE_REVIEWS_API_URL || '/api/google-reviews';
};

// Place ID - can be set via environment variable
const getPlaceId = (): string | null => {
  return import.meta.env.VITE_GOOGLE_PLACE_ID || null;
};

/**
 * Fetches Google reviews using AWS Lambda function with Google Places API
 */
export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  try {
    const apiEndpoint = getApiEndpoint();
    const placeId = getPlaceId();
    
    console.log("Fetching Google reviews from API:", apiEndpoint);
    
    // Build query parameters
    const params = new URLSearchParams();
    if (placeId) {
      params.append('placeId', placeId);
    }
    
    const url = placeId 
      ? `${apiEndpoint}?${params.toString()}`
      : apiEndpoint;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(errorData.error || errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || data.message || 'Failed to fetch reviews');
    }
    
    console.log("Successfully fetched reviews:", data.reviews?.length || 0);
    return data.reviews || [];
    
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    
    // Return empty array on error - the UI will handle this gracefully
    // But log the error for debugging
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    
    return [];
  }
}
