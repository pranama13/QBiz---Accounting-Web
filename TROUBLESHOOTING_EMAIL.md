# Email Troubleshooting Guide

If emails aren't being received, follow these steps:

## Step 1: Check Server Console

When you submit the contact form, check your terminal/console where `npm run dev` is running. Look for:
- ✅ "SMTP connection verified successfully" - Connection is working
- ✅ "Email sent successfully" - Email was sent
- ❌ Any error messages - These will tell you what's wrong

## Step 2: Verify .env.local File

1. Make sure `.env.local` exists in the `qbiz` folder (not parent folder)
2. Check the file contents:
   ```env
   GMAIL_USER=pranamalakshan360@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-password
   ```
3. **Important:**
   - No quotes around values
   - No spaces in the App Password
   - Restart server after creating/editing `.env.local`

## Step 3: Check Gmail Setup

### Verify 2-Step Verification is Enabled:
1. Go to: https://myaccount.google.com/security
2. Check if "2-Step Verification" shows as "On"

### Verify App Password:
1. Go to: https://myaccount.google.com/apppasswords
2. Make sure you have an App Password created
3. If not, create a new one:
   - Select "Mail"
   - Select "Other (Custom name)"
   - Name it "QBiz Website"
   - Copy the 16-character password (remove spaces)

## Step 4: Common Issues

### Issue: "Invalid login" or "Authentication failed"
**Solution:**
- Make sure you're using an App Password, NOT your regular Gmail password
- Verify the App Password has no spaces
- Try generating a new App Password

### Issue: "Less secure app access" error
**Solution:**
- Google no longer supports this
- You MUST use App Passwords with 2-Step Verification enabled

### Issue: Email sent but not received
**Check:**
1. **Spam/Junk folder** - Check your spam folder
2. **Email filters** - Check if Gmail filtered it
3. **Server logs** - Check terminal for "Email sent successfully" message
4. **Wait a few minutes** - Sometimes there's a delay

### Issue: "Connection timeout"
**Solution:**
- Check your internet connection
- Try again in a few minutes
- Gmail might be temporarily blocking the connection

## Step 5: Test Email Configuration

You can test if your credentials work by checking the server console when submitting the form:

**Success looks like:**
```
SMTP connection verified successfully
Attempting to send email to: pranamalakshan360@gmail.com
Email sent successfully: <message-id>
```

**Error looks like:**
```
Error sending email: Invalid login: 535-5.7.8 Username and Password not accepted
```

## Step 6: Alternative - Check Gmail Activity

1. Go to: https://myaccount.google.com/security
2. Click "Recent security activity"
3. Look for login attempts from your server
4. If you see blocked attempts, you may need to:
   - Allow less secure apps (if available)
   - Or use a different Gmail account

## Step 7: Manual Test

If you want to test manually, you can use this Node.js script:

```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pranamalakshan360@gmail.com',
    pass: 'your-app-password-here'
  }
});

transporter.sendMail({
  from: 'pranamalakshan360@gmail.com',
  to: 'pranamalakshan360@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email'
}, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
```

## Still Not Working?

If none of the above works:
1. Check the exact error message in the server console
2. Try using a different Gmail account
3. Consider using a service like Resend or SendGrid instead

