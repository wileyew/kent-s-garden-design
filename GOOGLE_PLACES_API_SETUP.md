# Google Places API Setup for AWS Amplify

This guide will help you set up Google Places API integration with AWS Amplify to display Google reviews on your website.

## Prerequisites

1. Google Cloud Platform (GCP) account
2. AWS Amplify app configured
3. Access to your Google Business Profile

## Step 1: Get Your Google Place ID

**What is a Place ID?**  
A Place ID is a unique identifier that Google assigns to every place (business, location, etc.) in Google Maps. It looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`

**How to Find Your Place ID:**

### Method 1: From Google Maps URL (Easiest)
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business name (e.g., "Kent's Garden LLC")
3. Click on your business listing to open it
4. Look at the URL in your browser - it will look like one of these:
   - `https://www.google.com/maps/place/Kent's+Garden+LLC/@38.7509,-77.4753,15z`
   - `https://www.google.com/maps/place/?q=place_id:ChIJN1t_tDeuEmsRUsoyG83frY4`
5. If you see `place_id:` in the URL, that's your Place ID!
6. If not, the Place ID might be embedded in the page data. Continue to Method 2.

### Method 2: Using Place ID Finder Tool (Recommended)
1. Go to the [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) tool
2. Enter your business name and address
3. Click "Find Place ID"
4. Copy the Place ID that appears (it will look like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

### Method 3: From Your Google Business Profile Share Link
If you have a Google share link like `https://share.google/nnvoXXlJlLOG2bc2K`:
1. Open the share link in a browser
2. It will redirect to your Google Business Profile
3. Look at the final URL - it may contain the Place ID
4. Or use Method 2 above to find it directly

### Method 4: Using Google Maps Embed
1. Go to your business on Google Maps
2. Click the "Share" button
3. Select "Embed a map"
4. In the embed code, look for `place_id=` - the value after that is your Place ID

**Example Place ID format:** `ChIJN1t_tDeuEmsRUsoyG83frY4` (starts with "ChIJ" and is about 27 characters long)

**Important:** The `VITE_GOOGLE_PLACE_ID` environment variable should contain exactly this Place ID value - no extra characters, no quotes, just the ID itself.

## Step 2: Enable Google Places API

**Which API to choose?**

- **Places API (New)** - Recommended for new projects, future-proof
- **Places API** - Classic version, also works and is simpler

**For this implementation, either will work!** The Lambda function uses the classic Places API endpoint which works with both APIs enabled. However, **Places API (New) is recommended** for future-proofing.

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API** or **Places API (New)**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API"
   - **Recommended**: Enable **"Places API (New)"** (the updated version)
   - **Alternative**: You can also enable the classic **"Places API"** - both work
   - Click "Enable"
4. Create an API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
   - (Optional but recommended) Restrict the API key:
     - Click "Restrict Key"
     - Under "API restrictions", select "Restrict key" and choose:
       - **"Places API (New)"** if you enabled that, OR
       - **"Places API"** if you enabled the classic version
     - Under "Application restrictions", you can restrict by HTTP referrer for web apps

**Note**: The Lambda function uses the classic Places API endpoint format which works with either API enabled. Both APIs provide access to reviews.

## Step 3: Create AWS Lambda Function

**Note**: AWS Amplify static hosting doesn't automatically deploy Lambda functions. You'll need to create the function manually in AWS Lambda Console.

### Using AWS Lambda Console (Recommended)

1. Go to [AWS Lambda Console](https://console.aws.amazon.com/lambda/)
2. Click "Create function"
3. Choose "Author from scratch"
4. Configure:
   - **Function name**: `googleReviews` (or any name you prefer)
   - **Runtime**: Node.js 18.x or later
   - **Architecture**: x86_64
5. Click "Create function"
6. In the function code editor, replace the default code with the contents from `amplify/backend/function/googleReviews/src/index.js`
7. Click "Deploy" to save the code
8. Go to "Configuration" > "Environment variables"
9. Click "Edit" and add:
   - **Key**: `GOOGLE_PLACES_API_KEY`
   - **Value**: Your Google Places API key from Step 2
   - Click "Add environment variable" to add another:
   - **Key**: `GOOGLE_PLACE_ID` (optional - can also be passed as query parameter)
   - **Value**: Your Google Place ID from Step 1
10. Save the environment variables
11. Create a Function URL:
    - Go to "Configuration" > "Function URL"
    - Click "Create function URL"
    - **Auth type**: Select "NONE" (CORS is handled in the function code)
    - **CORS**: You can leave default settings or configure if needed
    - Click "Save"
    - **Copy the Function URL** - you'll need this for Step 4

## Step 4: Configure Environment Variables in Amplify

1. Go to your AWS Amplify app
2. Navigate to "App settings" > "Environment variables"
3. Add the following variables:

   **Variable 1:**
   - **Key**: `VITE_GOOGLE_REVIEWS_API_URL`
   - **Value**: `https://your-function-url.lambda-url.region.on.aws/`
   - Replace `your-function-url` with your actual Lambda Function URL from Step 3
   - **Important**: Include the trailing slash `/` at the end

   **Variable 2:**
   - **Key**: `VITE_GOOGLE_PLACE_ID`
   - **Value**: Your Google Place ID (the one you found in Step 1)
   - Example: `ChIJN1t_tDeuEmsRUsoyG83frY4`
   - **Important**: 
     - This is the same as your Google Place ID - just paste it directly
     - No quotes, no extra spaces, just the ID itself
     - It should be about 27 characters long and start with "ChIJ"

4. Click "Save" to save the environment variables

**Note:** After saving, you'll need to trigger a new deployment for the changes to take effect. Amplify will automatically redeploy, or you can manually trigger a deployment.

## Step 5: Update CORS Configuration (if needed)

The Lambda function already includes CORS headers, but if you encounter CORS issues:

1. In your Lambda function, ensure the headers include:
   ```javascript
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Headers': 'Content-Type',
   'Access-Control-Allow-Methods': 'GET, OPTIONS',
   ```

2. If using API Gateway, configure CORS there as well

## Step 6: Test the Integration

1. Redeploy your Amplify app (or wait for automatic deployment)
2. Visit your Reviews page
3. Check the browser console for any errors
4. Reviews should load automatically

## Troubleshooting

### Reviews not loading

1. **Check browser console**: Look for error messages
2. **Verify API key**: Ensure `GOOGLE_PLACES_API_KEY` is set correctly
3. **Verify Place ID**: Ensure `GOOGLE_PLACE_ID` is correct
4. **Check Lambda logs**: Go to CloudWatch Logs for your Lambda function
5. **Test Lambda directly**: Use the Function URL in a browser or Postman:
   ```
   https://your-function-url.lambda-url.region.on.aws/?placeId=YOUR_PLACE_ID
   ```

### CORS errors

- Ensure the Lambda function returns proper CORS headers
- Check that the Function URL allows CORS

### API quota exceeded

- Google Places API has usage limits
- Check your usage in Google Cloud Console
- Consider enabling billing for higher limits

## Cost Considerations

- **Google Places API**: 
  - First $200/month free (covers ~40,000 requests)
  - Then $0.017 per request
  - Reviews are included in Place Details requests
  
- **AWS Lambda**:
  - Free tier: 1M requests/month
  - Very low cost for typical usage

## Security Best Practices

1. **Restrict API Key**: Limit your Google API key to only Places API
2. **Use Environment Variables**: Never commit API keys to git
3. **Rate Limiting**: Consider adding rate limiting to your Lambda function
4. **API Key Rotation**: Rotate your API keys periodically

## Alternative: Using Place ID in Query Parameter

If you prefer to pass the Place ID dynamically, you can call the API like this:

```
https://your-function-url.lambda-url.region.on.aws/?placeId=ChIJN1t_tDeuEmsRUsoyG83frY4
```

The Lambda function will use the query parameter if provided, otherwise it will fall back to the `GOOGLE_PLACE_ID` environment variable.

## Support

For issues with:
- **Google Places API**: Check [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service)
- **AWS Lambda**: Check [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- **AWS Amplify**: Check [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)

