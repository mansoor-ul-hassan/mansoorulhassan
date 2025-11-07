# Web3Forms Setup (2 Minutes)

## Step 1: Get Your Access Key
1. Go to https://web3forms.com/
2. Enter your email: **mansoor.hassan.communicator@gmail.com**
3. Click "Create Access Key"
4. Copy the **Access Key** they give you

## Step 2: Update Contact.js
Open `components/Contact/Contact.js` and replace line 16:

**Replace this:**
```javascript
formData.append('access_key', '66d4e1a5-7f8d-4f9a-b7e3-9c8f5a2d3e4b');
```

**With your actual key:**
```javascript
formData.append('access_key', 'YOUR_ACTUAL_KEY_HERE');
```

## Step 3: Verify Email
- Check your email (mansoor.hassan.communicator@gmail.com)
- Click the verification link Web3Forms sends
- Done! ✅

## That's it!
Now when someone fills the contact form, you'll get email at mansoor.hassan.communicator@gmail.com

**Free Plan:** 250 emails/month (perfect for portfolio!)
