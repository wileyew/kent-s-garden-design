# EmailJS Setup Instructions

## Why EmailJS?

The contact form needs to send emails when deployed to AWS Amplify. EmailJS allows us to send emails directly from the browser without needing a backend server.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions:
   - For Gmail: You'll need to connect your Gmail account
   - The service will send emails FROM your connected email
5. Note your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Quote Request Template

**Subject:** `{{subject}}`

**Content:**
```
New Quote Request from Kent's Garden Website

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}
Request On-Site Consultation: {{consultation}}

Message:
{{message}}

---
This email was sent from the contact form on kentsgarden.com
```

4. Set **To Email** to: `lancecadle4@gmail.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{from_email}}`
7. Save the template
8. Note your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)
3. Copy this value

### 5. Configure Environment Variables

#### For Local Development:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

#### For AWS Amplify:

1. Go to your Amplify app dashboard
2. Navigate to **App settings** → **Environment variables**
3. Add these three variables:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key
4. Save and redeploy your app

### 6. Test the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check `lancecadle4@gmail.com` for the email
4. You should receive the quote request with all form details

## Troubleshooting

### Emails Not Sending

1. **Check Environment Variables**: Make sure all three variables are set correctly in Amplify
2. **Verify EmailJS Account**: Ensure your EmailJS account is active and not over the free tier limit
3. **Check Browser Console**: Open browser dev tools and check for any error messages
4. **Test Template**: Use EmailJS's test feature to verify your template works

### Fallback Behavior

If EmailJS is not configured, the form will fall back to opening the user's email client with a pre-filled email. This is a backup option but not ideal for production.

## EmailJS Free Tier Limits

- 200 emails per month
- For higher limits, upgrade to a paid plan

## Security Note

The Public Key is safe to expose in client-side code. EmailJS uses it to identify your account but doesn't grant full access. Your Service ID and Template ID are also safe to expose.

