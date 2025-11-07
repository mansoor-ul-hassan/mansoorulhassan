# EmailJS Setup Instructions

Follow these steps to complete the email integration:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up with your Google account (mansoor.hassan.communicator@gmail.com)

## 2. Add Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Select "Gmail"
- Connect your Gmail account (mansoor.hassan.communicator@gmail.com)
- Note the **Service ID** (e.g., service_abc123)

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

**Template Name:** Contact Form Portfolio

**Subject:** New Contact from {{from_name}}

**Content:**
```
You received a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

- Save and note the **Template ID** (e.g., template_xyz789)

## 4. Get Public Key
- Go to "Account" → "General"
- Copy your **Public Key** (e.g., user_AbC123XyZ)

## 5. Update Contact.js
Replace these lines in `components/Contact/Contact.js`:

```javascript
const serviceID = 'YOUR_SERVICE_ID';     // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
```

## 6. Test
- Save the file
- Fill out the contact form on your website
- Check your email: mansoor.hassan.communicator@gmail.com
- You should receive the message!

## Note
EmailJS free plan allows 200 emails/month which is perfect for a portfolio contact form.
