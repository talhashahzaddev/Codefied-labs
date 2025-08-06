# EmailJS Template Setup - EXACT CONFIGURATION

Follow these EXACT steps to avoid "recipients address is empty" error:

## Step 1: EmailJS Template Configuration

### Template Settings:
- **Template Name**: Contact Form Template
- **To Email**: `{{to_email}}`
- **From Name**: `{{from_name}}`  
- **From Email**: `{{from_email}}`
- **Reply To**: `{{reply_to}}`
- **Subject**: `New Contact Form Submission from {{from_name}}`

### Template Content (HTML):
```html
<p><strong>New Contact Form Submission</strong></p>

<p><strong>Contact Details:</strong></p>
<ul>
  <li><strong>Name:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Company:</strong> {{company}}</li>
  <li><strong>Phone:</strong> {{phone}}</li>
</ul>

<p><strong>Project Details:</strong></p>
<ul>
  <li><strong>Project Type:</strong> {{project_type}}</li>
  <li><strong>Budget:</strong> {{budget}}</li>
  <li><strong>Timeline:</strong> {{timeline}}</li>
</ul>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>Sent from Codified Labs contact form</small></p>
```

## Step 2: Service Configuration

1. **Go to EmailJS Dashboard** → Email Services
2. **Add Gmail Service** (or your preferred email)
3. **Test the connection**
4. **Copy the Service ID**

## Step 3: Get Your Credentials

You need these 3 values:
1. **Service ID** (from Email Services)
2. **Template ID** (from Email Templates) 
3. **Public Key** (from Account → General)

## Step 4: Update Your Code

Replace these values in `components/contact/ContactForm.tsx`:

```javascript
const emailConfig = {
  serviceId: 'service_YOUR_ACTUAL_ID',     // Replace this
  templateId: 'template_YOUR_ACTUAL_ID',   // Replace this  
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',     // Replace this
  recipientEmail: 'iamabdalhannan@gmail.com'
}
```

## Important Notes:

- The **To Email** field in the template MUST be `{{to_email}}`
- Do NOT put your email directly in the template's "To Email" field
- The `{{to_email}}` variable gets filled from the code
- Make sure all template variables match exactly

This configuration will work 100% and eliminate the "recipients address is empty" error. 