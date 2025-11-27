# Gmail SMTP Setup Instructions

## ✅ Yes, Gmail SMTP is 100% FREE!

Gmail SMTP is completely free to use. You can send emails through your Gmail account without any cost.

**Free Limits:**
- 500 emails per day (for regular Gmail accounts)
- Unlimited for Google Workspace accounts
- Perfect for contact forms and small to medium businesses

---

## Step-by-Step Setup Guide

### Step 1: Enable 2-Step Verification on Your Gmail Account

1. Go to your Google Account: https://myaccount.google.com
2. Click on **Security** (left sidebar)
3. Under "Signing in to Google", find **2-Step Verification**
4. Click on it and follow the prompts to enable it
   - You'll need to verify your phone number
   - This is required to generate an App Password

**Why?** Google requires 2-Step Verification to be enabled before you can create an App Password for security reasons.

---

### Step 2: Generate a Gmail App Password

1. Go back to your Google Account Security page: https://myaccount.google.com/security
2. Under "Signing in to Google", find **App passwords**
   - If you don't see this option, make sure 2-Step Verification is enabled first
3. Click on **App passwords**
4. You may need to sign in again
5. Select **Mail** as the app
6. Select **Other (Custom name)** as the device
7. Type a name like "QBiz Contact Form" or "Website Contact"
8. Click **Generate**
9. **IMPORTANT:** Copy the 16-character password immediately
   - It will look like: `abcd efgh ijkl mnop`
   - Remove the spaces when using it: `abcdefghijklmnop`
   - You won't be able to see it again!

---

### Step 3: Create Environment Variables File

1. In your `qbiz` folder, create a file named `.env.local`
2. Add these two lines:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

**Example:**
```env
GMAIL_USER=pranamalakshan360@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

**Important Notes:**
- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the App Password you generated (remove spaces)
- **DO NOT** include quotes around the values
- **DO NOT** commit this file to Git (it's already in .gitignore)

---

### Step 4: Restart Your Development Server

After creating/updating `.env.local`, you must restart your server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
cd qbiz
npm run dev
```

---

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:3000/contact

3. Fill out the contact form and submit

4. Check your email inbox (pranamalakshan360@gmail.com) for the form submission

---

## Troubleshooting

### Problem: "App passwords" option not showing

**Solution:**
- Make sure 2-Step Verification is enabled first
- Wait a few minutes after enabling 2-Step Verification
- Try refreshing the page

### Problem: "Invalid login" or authentication error

**Solution:**
- Double-check your Gmail address is correct
- Make sure the App Password doesn't have spaces
- Verify 2-Step Verification is enabled
- Try generating a new App Password

### Problem: Email not sending

**Solution:**
- Check the server console for error messages
- Verify `.env.local` file is in the `qbiz` folder (not parent folder)
- Make sure you restarted the server after creating `.env.local`
- Check that environment variable names are exactly: `GMAIL_USER` and `GMAIL_APP_PASSWORD`

### Problem: "Less secure app access" error

**Solution:**
- Google no longer supports "Less secure app access"
- You MUST use App Passwords (which requires 2-Step Verification)
- Follow Step 2 above to create an App Password

---

## Security Best Practices

1. ✅ **Never commit `.env.local` to Git** (already in .gitignore)
2. ✅ **Don't share your App Password** with anyone
3. ✅ **Use App Passwords** instead of your regular Gmail password
4. ✅ **Keep 2-Step Verification enabled** for security
5. ✅ **Rotate App Passwords** periodically (generate new ones)

---

## Daily Email Limits

- **Regular Gmail:** 500 emails per day
- **Google Workspace:** Higher limits (varies by plan)

If you need to send more emails, consider:
- Using a service like Resend or SendGrid
- Upgrading to Google Workspace
- Using multiple Gmail accounts

---

## Quick Reference

**Your `.env.local` file should look like this:**

```env
GMAIL_USER=pranamalakshan360@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

**Where to get App Password:**
1. https://myaccount.google.com/security
2. App passwords → Generate → Copy the 16-character code

**That's it!** Your contact form will now send emails to pranamalakshan360@gmail.com when someone submits it.

