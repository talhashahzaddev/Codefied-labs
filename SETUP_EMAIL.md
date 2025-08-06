# Email Setup Instructions (100% FREE)

Your contact form is now configured to send emails using EmailJS - a free service that doesn't require any backend or payment.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account (FREE)
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Connect Your Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Any SMTP service**
4. Follow the connection wizard
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
Sent from Codified Labs website contact form
```

4. **Copy the Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find "Public Key" 
3. **Copy the Public Key**

### Step 5: Update Your Website
1. Open `.env.local` file in your project
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

3. Save the file and restart your development server:
```bash
npm run dev
```

## 🎯 Alternative Quick Setup (No Environment Variables)

If you prefer not to use environment variables, you can hardcode the values directly in the component:

1. Open `components/contact/ContactForm.tsx`
2. Find this section:
```javascript
const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xxxxxxx',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
}
```
3. Replace the placeholder values with your actual IDs:
```javascript
const emailConfig = {
  serviceId: 'service_abc123',  // Your actual service ID
  templateId: 'template_xyz789', // Your actual template ID
  publicKey: 'your_actual_public_key', // Your actual public key
}
```

## 📧 Email Template Variables

These variables are automatically filled from the form:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - Company name
- `{{phone}}` - Phone number
- `{{project_type}}` - Selected project type
- `{{budget}}` - Budget range
- `{{timeline}}` - Project timeline
- `{{message}}` - User's message

## 🆓 Free Tier Limits
- **200 emails per month** (more than enough for most businesses)
- No credit card required
- No expiration date
- Can upgrade later if needed

## ✅ Testing Your Setup
1. Fill out your contact form
2. Submit it
3. Check your email inbox
4. You should receive the form submission within seconds!

## 🔧 Troubleshooting

### Form not sending emails?
1. Check browser console for errors
2. Verify your Service ID, Template ID, and Public Key are correct
3. Make sure your email service is connected in EmailJS dashboard
4. Check your spam folder

### Getting "Failed to send" error?
1. Verify your EmailJS credentials
2. Check that your email service is active
3. Try with a different email address

### Need help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact EmailJS Support: help@emailjs.com

## 🚀 Ready to Deploy?

Once everything is working locally:
1. Deploy your website to Vercel, Netlify, or any hosting service
2. Make sure to add your environment variables to your hosting provider
3. Your contact form will work automatically!

---

**💡 Pro Tip**: You can also set up auto-reply emails to thank users for contacting you. Just create another template and uncomment the auto-reply code in the ContactForm component. 