# Quick Email Setup Guide

## The Error You're Seeing

"EmailJS not configured, will use fallback" means the environment variables are not set.

## Quick Fix - 3 Steps

### Step 1: Get EmailJS Credentials (5 minutes)

1. Go to https://www.emailjs.com/ and sign up (free)
2. Click **Email Services** → **Add New Service** → Choose **Gmail**
3. Connect your Gmail account (the one you want to send FROM)
4. Copy the **Service ID** (looks like `service_abc123`)

5. Click **Email Templates** → **Create New Template**
6. Use this template:

**Subject:** `{{subject}}`

**Content:**
```
New Quote Request

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}
Consultation Requested: {{consultation}}

Message:
{{message}}
```

7. Set **To Email** to: `lancecadle4@gmail.com`
8. Set **Reply To** to: `{{from_email}}`
9. Save and copy the **Template ID** (looks like `template_xyz789`)

10. Go to **Account** → **General** and copy your **Public Key**

### Step 2: Set Environment Variables in AWS Amplify

1. Go to your AWS Amplify Console
2. Select your app
3. Go to **App settings** → **Environment variables**
4. Click **Manage variables**
5. Add these 3 variables:

```
VITE_EMAILJS_SERVICE_ID = service_xxxxx (your service ID)
VITE_EMAILJS_TEMPLATE_ID = template_xxxxx (your template ID)
VITE_EMAILJS_PUBLIC_KEY = xxxxxxxxxxxxxx (your public key)
```

6. Click **Save**
7. **Redeploy your app** (this is important!)

### Step 3: Test

1. Go to your deployed website
2. Fill out the contact form
3. Submit it
4. Check `lancecadle4@gmail.com` - you should receive the email!

## For Local Testing

Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then restart your dev server.

## Still Not Working?

1. Make sure you **redeployed** after adding environment variables
2. Check that all 3 variables are set (no typos)
3. Verify your EmailJS account is active
4. Check browser console for detailed error messages

