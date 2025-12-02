# Google Review Integration Setup

## Overview

The review system allows customers to submit reviews on your website and provides easy links to post reviews on Google Business Profile. Since Google doesn't allow direct API posting of reviews (for security reasons), we've created a system that:

1. Collects reviews on your website
2. Stores them locally (or you can integrate with a backend)
3. Provides direct links to Google Business Profile for customers to post reviews there

## Step 1: Get Your Google Review Link

1. **Go to Google Business Profile**:
   - Visit https://business.google.com
   - Sign in and select your business

2. **Get Your Review Link**:
   - Option A: In your Google Business Profile dashboard, go to "Home" → Look for "Get more reviews" → Copy the review link
   - Option B: Use this format: `https://g.page/r/YOUR_BUSINESS_ID/review`
   - Option C: Go to your Google Business Profile on Google Maps → Click "Write a review" → Copy the URL

3. **Update the Review Link**:
   - Open `src/pages/Reviews.tsx`
   - Find the line: `const GOOGLE_REVIEW_LINK = "https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review";`
   - Replace with your actual Google review link

## Step 2: Formspree Setup (Optional)

The review form uses Formspree. You can either:

1. **Use the same form ID** (currently `xkgdgvez`):
   - Reviews will be sent to the same Formspree inbox
   - You'll need to filter them by the "type" field (set to "Review Submission")

2. **Create a new Formspree form**:
   - Go to https://formspree.io
   - Create a new form
   - Copy the form ID
   - Update line in `Reviews.tsx`: `const [state, handleSubmit] = useForm("YOUR_NEW_FORM_ID");`

## Step 3: Review Storage

Reviews are currently stored in:
- **LocalStorage**: Browser's local storage (for demo/testing)
- **Formspree**: Email notifications

### To Store Reviews in a Database:

You'll need to:
1. Set up a backend API endpoint
2. Update the `handleFormSubmit` function in `Reviews.tsx`
3. Create an admin panel to approve/reject reviews

Example backend integration:
```typescript
const response = await fetch('/api/reviews', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newReview)
});
```

## Step 4: Displaying Reviews

Currently, the Reviews page shows:
- **Website Reviews**: From `siteConfig.home.testimonials`
- **Google Reviews**: Link to Google Business Profile

### To Display Submitted Reviews:

1. Load reviews from localStorage or your backend:
```typescript
const [reviews, setReviews] = useState(() => {
  const stored = localStorage.getItem("websiteReviews");
  return stored ? JSON.parse(stored).filter((r: any) => r.approved) : [];
});
```

2. Display them in the reviews section

## Step 5: Review Moderation

Before displaying user-submitted reviews, you should:
1. Review them for appropriateness
2. Verify they're from real customers
3. Approve them before displaying

You can add an admin interface or manually approve reviews stored in localStorage.

## Features Included

✅ Review form with star rating
✅ Formspree integration for email notifications
✅ LocalStorage backup
✅ Direct Google review link
✅ Responsive design
✅ Form validation
✅ Success/error handling

## Next Steps

1. **Update Google Review Link** in `src/pages/Reviews.tsx`
2. **Test the form** by submitting a review
3. **Set up backend** (optional) for permanent storage
4. **Add review moderation** system
5. **Link from other pages** (Contact page, after project completion emails, etc.)

## Adding Review Links to Other Pages

You can add a "Leave a Review" button anywhere:

```tsx
import { ExternalLink } from "lucide-react";

<Button asChild>
  <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
    Leave a Review
    <ExternalLink className="ml-2 h-4 w-4" />
  </a>
</Button>
```

## Best Practices

1. **Ask for reviews at the right time**:
   - After project completion
   - After positive interactions
   - In follow-up emails

2. **Make it easy**:
   - Provide direct links
   - Keep the form simple
   - Show appreciation for reviews

3. **Respond to reviews**:
   - Thank customers for positive reviews
   - Address concerns in negative reviews
   - Show you care about feedback

4. **Display reviews prominently**:
   - Homepage testimonials
   - Dedicated reviews page
   - Service pages

## Troubleshooting

**Reviews not submitting?**
- Check Formspree form ID is correct
- Verify Formspree account is active
- Check browser console for errors

**Google link not working?**
- Verify the URL is correct
- Test the link in an incognito window
- Make sure your Google Business Profile is verified

**Reviews not displaying?**
- Check localStorage in browser DevTools
- Verify reviews are marked as "approved"
- Check the reviews array is being loaded correctly

