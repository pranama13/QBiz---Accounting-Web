# Vercel Environment Variables - Step by Step Guide

## ⚠️ CRITICAL: Your debug shows `envKeys: []` - Variables are NOT set!

The error shows: `{hasUser: false, hasPassword: false, envKeys: []}`

This means Vercel cannot find your environment variables. Follow these EXACT steps:

---

## Step-by-Step Instructions

### Step 1: Open Vercel Dashboard
1. Go to: **https://vercel.com/dashboard**
2. Sign in if needed
3. Find and click on your project: **q-biz-accounting-web**

### Step 2: Navigate to Environment Variables
1. Click on **Settings** (top menu bar)
2. Click on **Environment Variables** (left sidebar, under "General")

### Step 3: Add GMAIL_USER Variable
1. Click **Add New** button
2. In the **Key** field, type exactly: `GMAIL_USER`
   - Must be exactly this (case-sensitive, no spaces)
3. In the **Value** field, type: `pearlcodelk@gmail.com`
   - No quotes, no spaces
4. **IMPORTANT:** Check these boxes:
   - ☑ **Production**
   - ☑ **Preview**
   - ☑ **Development**
5. Click **Save**

### Step 4: Add GMAIL_APP_PASSWORD Variable
1. Click **Add New** button again
2. In the **Key** field, type exactly: `GMAIL_APP_PASSWORD`
   - Must be exactly this (case-sensitive, no spaces)
3. In the **Value** field, paste your Gmail App Password
   - Should be 16 characters (no spaces)
   - Example: `abcdefghijklmnop`
4. **IMPORTANT:** Check these boxes:
   - ☑ **Production**
   - ☑ **Preview**
   - ☑ **Development**
5. Click **Save**

### Step 5: Verify Variables Are Added
You should now see in the list:
- `GMAIL_USER` - Production, Preview, Development
- `GMAIL_APP_PASSWORD` - Production, Preview, Development

### Step 6: REDEPLOY (CRITICAL!)
**You MUST redeploy for the variables to take effect!**

#### Option A: Redeploy from Dashboard
1. Go to **Deployments** tab (top menu)
2. Find your latest deployment
3. Click the **⋯** (three dots) on the right
4. Click **Redeploy**
5. Click **Redeploy** in the popup
6. Wait for deployment to complete (2-3 minutes)

#### Option B: Push a New Commit
1. Make a tiny change to any file (add a space)
2. Commit and push to your repository
3. Vercel will auto-deploy

### Step 7: Test Again
1. Wait for deployment to finish
2. Go to your live site: https://q-biz-accounting-web.vercel.app/contact
3. Submit the form
4. Check if it works

---

## If You Don't Have Gmail App Password

### Get Gmail App Password:

1. **Enable 2-Step Verification:**
   - Go to: https://myaccount.google.com/security
   - Find "2-Step Verification"
   - Click and enable it (verify phone number)

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select **Mail**
   - Select **Other (Custom name)**
   - Type: `Vercel Website`
   - Click **Generate**
   - **COPY THE 16-CHARACTER PASSWORD IMMEDIATELY**
   - It looks like: `abcd efgh ijkl mnop`
   - Remove spaces: `abcdefghijklmnop`

3. **Add to Vercel:**
   - Use this password as the value for `GMAIL_APP_PASSWORD`

---

## Common Mistakes to Avoid

❌ **Wrong variable names:**
- `GMAIL_EMAIL` ❌
- `gmail_user` ❌ (wrong case)
- `GMAIL_USER ` ❌ (extra space)

✅ **Correct:**
- `GMAIL_USER` ✅
- `GMAIL_APP_PASSWORD` ✅

❌ **Wrong values:**
- `"pearlcodelk@gmail.com"` ❌ (quotes)
- ` pearlcodelk@gmail.com ` ❌ (spaces)
- `pearlcodelk@gmail.com ` ❌ (trailing space)

✅ **Correct:**
- `pearlcodelk@gmail.com` ✅

❌ **Not checking Production:**
- Only checking Development ❌
- Only checking Preview ❌

✅ **Correct:**
- Check all three: Production, Preview, Development ✅

❌ **Not redeploying:**
- Adding variables but not redeploying ❌

✅ **Correct:**
- Add variables → Redeploy → Test ✅

---

## Verify It's Working

After redeploying, check Vercel logs:

1. Go to **Deployments** → Click on latest deployment
2. Click **Functions** tab
3. Click on `/api/contact`
4. Look for logs that show:
   - `GMAIL_USER exists: true`
   - `GMAIL_APP_PASSWORD exists: true`

If you still see `false`, the variables aren't set correctly.

---

## Still Not Working?

1. **Delete and Re-add:**
   - Delete both variables
   - Add them again with exact names
   - Make sure Production is checked
   - Redeploy

2. **Check Variable Names:**
   - They must be EXACTLY: `GMAIL_USER` and `GMAIL_APP_PASSWORD`
   - Case-sensitive, no spaces

3. **Check Vercel Project:**
   - Make sure you're editing the correct project
   - Check the project name matches: `q-biz-accounting-web`

4. **Contact Support:**
   - If nothing works, the issue might be with Vercel
   - Check Vercel status page

---

## Quick Checklist

- [ ] Variables added in Vercel Dashboard
- [ ] Variable names are EXACTLY: `GMAIL_USER` and `GMAIL_APP_PASSWORD`
- [ ] Values have no quotes or spaces
- [ ] **Production checkbox is checked** (most important!)
- [ ] Preview and Development also checked
- [ ] **Redeployed after adding variables** (critical!)
- [ ] Tested the form after redeploy
- [ ] Checked Vercel logs for confirmation

---

## The Debug Output Explained

Your current error shows:
```json
{
  "hasUser": false,      // GMAIL_USER not found
  "hasPassword": false,  // GMAIL_APP_PASSWORD not found
  "envKeys": []          // No GMAIL variables found at all
}
```

This means Vercel cannot see your environment variables. The most common causes:
1. Variables not added to Vercel
2. Variables not set for Production environment
3. Project not redeployed after adding variables

Follow the steps above to fix it!

