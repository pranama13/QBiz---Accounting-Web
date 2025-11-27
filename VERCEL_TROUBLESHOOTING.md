# Vercel Environment Variables - Troubleshooting

## Still Getting "Email service not configured" Error?

Follow these steps to fix it:

## Step 1: Verify Environment Variables in Vercel

1. **Go to Vercel Dashboard:**
   - https://vercel.com/dashboard
   - Select your project

2. **Check Environment Variables:**
   - Go to **Settings** → **Environment Variables**
   - Make sure you see:
     - `GMAIL_USER`
     - `GMAIL_APP_PASSWORD`

3. **Verify the Values:**
   - Click on each variable to see if it has a value
   - Make sure there are no extra spaces or quotes

## Step 2: Check Environment Scope

**IMPORTANT:** Make sure the variables are set for the correct environment:

- ✅ **Production** - For your live site
- ✅ **Preview** - For preview deployments
- ✅ **Development** - For local development

**To fix:**
1. Click on each variable
2. Make sure all three checkboxes are selected:
   - ☑ Production
   - ☑ Preview  
   - ☑ Development
3. Click **Save**

## Step 3: Redeploy After Adding Variables

**CRITICAL:** You MUST redeploy after adding/changing environment variables!

### Option A: Redeploy from Dashboard
1. Go to **Deployments** tab
2. Find your latest deployment
3. Click the **⋯** (three dots) menu
4. Click **Redeploy**
5. Wait for deployment to complete

### Option B: Push a New Commit
1. Make a small change (add a comment or space)
2. Commit and push to your repository
3. Vercel will automatically redeploy

## Step 4: Check Vercel Function Logs

After redeploying, check the logs:

1. Go to **Deployments** → Click on your latest deployment
2. Click **Functions** tab
3. Click on `/api/contact`
4. Look for log messages:
   - Should see: `GMAIL_USER exists: true`
   - Should see: `GMAIL_APP_PASSWORD exists: true`

If you see `false`, the variables aren't being read correctly.

## Step 5: Common Issues

### Issue 1: Variables Not Set for Production
**Solution:** Make sure Production checkbox is selected when adding variables.

### Issue 2: Wrong Variable Names
**Solution:** Variable names must be EXACTLY:
- `GMAIL_USER` (not `GMAIL_EMAIL` or `GMAIL_USERNAME`)
- `GMAIL_APP_PASSWORD` (not `GMAIL_PASSWORD`)

### Issue 3: Extra Spaces or Quotes
**Solution:** 
- Don't add quotes around values
- Don't add spaces before/after values
- Example: `pearlcodelk@gmail.com` ✅
- Example: `"pearlcodelk@gmail.com"` ❌
- Example: ` pearlcodelk@gmail.com ` ❌

### Issue 4: Not Redeployed
**Solution:** You MUST redeploy after adding variables. Old deployments don't have the new variables.

## Step 6: Test Locally First

Before deploying, test locally:

1. Make sure `.env.local` exists in `qbiz` folder:
   ```env
   GMAIL_USER=pearlcodelk@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

2. Test locally:
   ```bash
   npm run dev
   ```

3. Submit the contact form
4. If it works locally but not on Vercel, it's an environment variable issue

## Step 7: Double-Check Everything

Use this checklist:

- [ ] Variables added in Vercel Dashboard
- [ ] Variable names are exactly: `GMAIL_USER` and `GMAIL_APP_PASSWORD`
- [ ] Values don't have quotes or extra spaces
- [ ] All three environments selected (Production, Preview, Development)
- [ ] Project redeployed after adding variables
- [ ] Checked Vercel logs for confirmation
- [ ] Works locally with `.env.local`

## Step 8: Still Not Working?

If it still doesn't work:

1. **Delete and Re-add Variables:**
   - Delete both variables in Vercel
   - Add them again with exact names
   - Redeploy

2. **Check Vercel Logs:**
   - Look for the debug information in the error response
   - It will show which variables are missing

3. **Verify Gmail App Password:**
   - Make sure 2-Step Verification is enabled
   - Generate a fresh App Password
   - Use the new password in Vercel

## Quick Fix Command

If you have Vercel CLI installed:

```bash
vercel env add GMAIL_USER
# Enter: pearlcodelk@gmail.com
# Select: Production, Preview, Development

vercel env add GMAIL_APP_PASSWORD
# Enter: your-app-password
# Select: Production, Preview, Development

vercel --prod
```

## Need More Help?

Check the Vercel Function logs for detailed error messages. The updated code now includes better logging to help identify the exact issue.

