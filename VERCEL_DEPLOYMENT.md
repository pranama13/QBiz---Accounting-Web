# Vercel Deployment - Email Setup

## Issue
You're getting "Email service not configured" error because environment variables are not set in Vercel.

## Solution: Add Environment Variables in Vercel

### Step 1: Go to Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Select your project: `q-biz-accounting-web`

### Step 2: Add Environment Variables
1. Click on your project
2. Go to **Settings** (top menu)
3. Click on **Environment Variables** (left sidebar)
4. Add these two variables:

#### Variable 1:
- **Name:** `GMAIL_USER`
- **Value:** `pearlcodelk@gmail.com` (or your Gmail address)
- **Environment:** Select all (Production, Preview, Development)
- Click **Save**

#### Variable 2:
- **Name:** `GMAIL_APP_PASSWORD`
- **Value:** `your-16-character-app-password` (your Gmail App Password)
- **Environment:** Select all (Production, Preview, Development)
- Click **Save**

### Step 3: Redeploy
After adding the environment variables:
1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger a new deployment

## Important Notes

### Gmail App Password Setup
If you don't have a Gmail App Password yet:

1. **Enable 2-Step Verification:**
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other (Custom name)"
   - Name it "Vercel Deployment"
   - Copy the 16-character password (remove spaces)

3. **Add to Vercel:**
   - Use this password as the value for `GMAIL_APP_PASSWORD`

## Verify Setup

After redeploying:
1. Test the contact form on your live site
2. Check Vercel logs if there are still errors:
   - Go to **Deployments** → Click on deployment → **Functions** tab
   - Check the logs for any errors

## Security Best Practices

✅ **DO:**
- Use App Passwords (not your regular Gmail password)
- Keep environment variables secret
- Use different App Passwords for different environments if needed

❌ **DON'T:**
- Commit `.env.local` to Git (it's already in .gitignore)
- Share your App Password publicly
- Use your regular Gmail password

## Troubleshooting

### Still getting errors?
1. **Check Vercel Logs:**
   - Go to your deployment → **Functions** tab
   - Look for error messages

2. **Verify Variables:**
   - Make sure variable names are exactly: `GMAIL_USER` and `GMAIL_APP_PASSWORD`
   - Make sure values don't have extra spaces or quotes

3. **Test Locally First:**
   - Make sure it works with `.env.local` locally
   - Then deploy to Vercel

4. **Check Gmail Security:**
   - Make sure 2-Step Verification is enabled
   - Make sure App Password is still valid (not revoked)

## Quick Checklist

- [ ] Gmail 2-Step Verification enabled
- [ ] Gmail App Password generated
- [ ] `GMAIL_USER` added to Vercel
- [ ] `GMAIL_APP_PASSWORD` added to Vercel
- [ ] Environment variables set for all environments
- [ ] Project redeployed after adding variables
- [ ] Tested contact form on live site

