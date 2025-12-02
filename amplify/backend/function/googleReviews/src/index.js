/**
 * AWS Lambda function to fetch Google Reviews using Places API
 * This function is deployed via AWS Amplify
 */

const https = require('https');

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Get API key from environment variable
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Google Places API key not configured',
          message: 'Please set GOOGLE_PLACES_API_KEY in AWS Amplify environment variables',
        }),
      };
    }

    // Get Place ID from query parameters or use default from share link
    // The share link https://share.google/nnvoXXlJlLOG2bc2K needs to be converted to Place ID
    // You'll need to extract the Place ID from your Google Business Profile
    const placeId = event.queryStringParameters?.placeId || process.env.GOOGLE_PLACE_ID;

    if (!placeId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Place ID is required',
          message: 'Please provide a placeId query parameter or set GOOGLE_PLACE_ID environment variable',
        }),
      };
    }

    // Fetch reviews from Google Places API
    const reviews = await fetchGoogleReviews(apiKey, placeId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        reviews,
      }),
    };
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to fetch reviews',
        message: error.message,
      }),
    };
  }
};

/**
 * Fetches reviews from Google Places API
 * Tries Places API (New) first, falls back to classic Places API
 */
async function fetchGoogleReviews(apiKey, placeId) {
  return new Promise((resolve, reject) => {
    // First, try the classic Places API (more reliable and simpler)
    // This works with both "Places API" and "Places API (New)" enabled
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          
          // Check for API errors
          if (response.status === 'REQUEST_DENIED') {
            reject(new Error(`Google Places API error: ${response.status} - ${response.error_message || 'API key may be invalid or API not enabled'}`));
            return;
          }
          
          if (response.status !== 'OK' && response.status !== 'ZERO_RESULTS') {
            reject(new Error(`Google Places API error: ${response.status} - ${response.error_message || 'Unknown error'}`));
            return;
          }

          if (!response.result || !response.result.reviews) {
            resolve([]);
            return;
          }

          // Transform Google Places API reviews to our format
          const reviews = response.result.reviews.map((review, index) => ({
            id: `google-review-${review.time || index}-${Date.now()}`,
            author: review.author_name || 'Anonymous',
            rating: review.rating || 5,
            text: review.text || '',
            date: review.time ? new Date(review.time * 1000).toISOString() : new Date().toISOString(),
            relativeTime: review.relative_time_description || '',
            profilePhotoUrl: review.profile_photo_url || null,
          }));

          resolve(reviews);
        } catch (error) {
          reject(new Error(`Failed to parse API response: ${error.message}`));
        }
      });
    }).on('error', (error) => {
      reject(new Error(`HTTP request failed: ${error.message}`));
    });
  });
}

