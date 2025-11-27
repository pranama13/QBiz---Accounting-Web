# Email Delivery Check

Since the form shows "Email sent successfully" but you're not receiving emails, let's check a few things:

## Step 1: Check Server Console (Terminal)

When you submit the form, look at the terminal where you ran `npm run dev`. You should see messages like:

**If working correctly:**
```
✅ SMTP connection verified successfully
📧 Attempting to send email...
From: pranamalakshan360@gmail.com
To: pranamalakshan360@gmail.com
✅ Email sent successfully!
Message ID: <some-id>
Response: 250 2.0.0 OK ...
```

**If there's an error:**
```
❌ SMTP verification failed: [error details]
```
or
```
Error sending email: [error message]
```

## Step 2: Check Your Email

1. **Check Spam/Junk Folder** - Gmail sometimes filters automated emails
2. **Check All Mail** - Search for "New Contact Form Submission"
3. **Check Promotions Tab** - Sometimes emails go there
4. **Wait 5-10 minutes** - Sometimes there's a delay

## Step 3: Verify Gmail Settings

1. Go to: https://myaccount.google.com/security
2. Check "Recent security activity" - Look for any blocked login attempts
3. If you see blocked attempts, click "Yes, it was me" to allow them

## Step 4: Test Gmail App Password

Make sure your App Password is correct:
1. Go to: https://myaccount.google.com/apppasswords
2. If you don't see any, create a new one
3. Make sure you copy it correctly (16 characters, no spaces)

## Step 5: Check .env.local File

Make sure your `.env.local` file in the `qbiz` folder has:
```env
GMAIL_USER=pranamalakshan360@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

**Important:**
- No quotes
- No spaces in the password
- Restart server after changes

## Step 6: Common Issues

### Issue: Email goes to spam
**Solution:** Check your spam folder. Gmail might mark automated emails as spam initially.

### Issue: "Less secure app" error
**Solution:** You MUST use App Passwords, not your regular password. Make sure 2-Step Verification is enabled.

### Issue: Email sent but delayed
**Solution:** Sometimes Gmail delays emails. Wait 5-10 minutes and check again.

## What to Share

If emails still don't arrive, please share:
1. What you see in the server console (terminal) when submitting the form
2. Any error messages
3. Whether you see "✅ Email sent successfully!" in the console

This will help identify the exact issue.

