/**
 * Email Service Configuration
 * 
 * This service handles sending emails from the contact form.
 * Uses EmailJS for reliable email delivery without a backend.
 * 
 * Setup Instructions:
 * 1. Sign up for a free account at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Get your Public Key, Service ID, and Template ID
 * 5. Add them to your environment variables or replace the placeholders below
 */

// EmailJS configuration
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Recipient email (will be set in EmailJS template)
const RECIPIENT_EMAIL = 'lancecadle4@gmail.com';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consultation: boolean;
}

// Helper to check if EmailJS is configured
export const isEmailJSConfigured = (): boolean => {
  const isConfigured = 
    EMAILJS_SERVICE_ID &&
    EMAILJS_TEMPLATE_ID &&
    EMAILJS_PUBLIC_KEY &&
    EMAILJS_SERVICE_ID !== 'your_service_id' &&
    EMAILJS_TEMPLATE_ID !== 'your_template_id' &&
    EMAILJS_PUBLIC_KEY !== 'your_public_key';
  
  if (!isConfigured) {
    console.log('EmailJS Configuration Check:');
    console.log('  SERVICE_ID:', EMAILJS_SERVICE_ID ? 'Set' : 'Missing');
    console.log('  TEMPLATE_ID:', EMAILJS_TEMPLATE_ID ? 'Set' : 'Missing');
    console.log('  PUBLIC_KEY:', EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing');
    console.log('  → See QUICK_EMAIL_SETUP.md for setup instructions');
  }
  
  return isConfigured;
};

export const sendEmail = async (formData: ContactFormData, serviceName?: string): Promise<boolean> => {
  // Check if EmailJS is configured
  if (!isEmailJSConfigured()) {
    return false;
  }

  try {
    // Dynamically import EmailJS
    const emailjs = await import('@emailjs/browser');
    
    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Prepare template parameters
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: serviceName || formData.service || 'Not specified',
      consultation: formData.consultation ? 'Yes' : 'No',
      message: formData.message,
      subject: `Quote Request${serviceName ? ` - ${serviceName}` : ''}`,
    };
    
    // Send email
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Fallback: Use mailto if EmailJS is not configured
export const sendEmailFallback = (formData: ContactFormData, serviceName?: string): void => {
  const subject = encodeURIComponent(
    `Quote Request${serviceName ? ` - ${serviceName}` : ''}`
  );
  
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone || 'Not provided'}\n` +
    `Service: ${serviceName || formData.service || 'Not specified'}\n` +
    `Request On-Site Consultation: ${formData.consultation ? 'Yes' : 'No'}\n\n` +
    `Message:\n${formData.message}`
  );
  
  window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
};

