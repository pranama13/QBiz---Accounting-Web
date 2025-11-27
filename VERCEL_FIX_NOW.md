# URGENT: Fix Vercel Environment Variables

## Your Error: `envKeys: []` means variables are NOT being read!

## Step-by-Step Fix (Do This Now)

### Step 1: Verify Variables in Vercel Dashboard

1. **Go to:** https://vercel.com/dashboard
2. **Click your project:** `q-biz-accounting-web`
3. **Go to:** Settings → Environment Variables
4. **Check if you see:**
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`

**If you DON'T see them, add them now (see Step 2)**

**If you DO see them, check Step 3**

---

### Step 2: Add Variables (If Missing)

#### Variable 1: GMAIL_USER
1. Click **"Add New"**
2. **Key:** Type exactly: `GMAIL_USER`
   - Must be uppercase
   - No spaces before or after
3. **Value:** `pearlcodelk@gmail.com`
   - No quotes
   - No spaces
4. **Environment:** Check ALL THREE boxes:
   - ☑ Production
   - ☑ Preview
   - ☑ Development
5. Click **Save**

#### Variable 2: GMAIL_APP_PASSWORD
1. Click **"Add New"** again
2. **Key:** Type exactly: `GMAIL_APP_PASSWORD`
   - Must be uppercase
   - No spaces
3. **Value:** Your 16-character Gmail App Password
   - Example: `abcdefghijklmnop`
   - No spaces, no quotes
4. **Environment:** Check ALL THREE boxes:
   - ☑ Production
   - ☑ Preview
   - ☑ Development
5. Click **Save**

---

### Step 3: Verify Variable Settings

For EACH variable you see:

1. **Click on the variable name**
2. **Check the "Environment" section:**
   - Must have ☑ Production checked
   - Should also have Preview and Development
3. **Check the value:**
   - No quotes around it
   - No extra spaces
4. **If Production is NOT checked:**
   - Click the variable
   - Check the Production box
   - Click Save

---

### Step 4: Delete and Re-add (If Still Not Working)

If variables exist but still not working:

1. **Delete both variables:**
   - Click on each variable
   - Click "Remove" or trash icon
   - Confirm deletion

2. **Add them again:**
   - Follow Step 2 exactly
   - Make sure Production is checked
   - Double-check spelling: `GMAIL_USER` and `GMAIL_APP_PASSWORD`

---

### Step 5: REDEPLOY (MUST DO THIS!)

**After adding/changing variables, you MUST redeploy:**

#### Method 1: Redeploy from Dashboard
1. Go to **Deployments** tab
2. Find your latest deployment
3. Click **⋯** (three dots menu)
4. Click **Redeploy**
5. Click **Redeploy** in popup
6. **Wait 2-3 minutes** for deployment to complete

#### Method 2: Push a Commit
1. Make a tiny change to any file
2. Commit and push to GitHub
3. Vercel will auto-deploy

---

### Step 6: Test Environment Variables

After redeploying, test if variables are being read:

1. Go to: `https://q-biz-accounting-web.vercel.app/api/check-env`
2. You should see JSON with:
   ```json
   {
     "gmailUser": {
       "exists": true,
       "length": 20
     },
     "gmailPassword": {
       "exists": true,
       "length": 16
     }
   }
   ```

**If you see `exists: false`, the variables are still not set correctly.**

---

### Step 7: Check Vercel Function Logs

1. Go to **Deployments** → Latest deployment
2. Click **Functions** tab
3. Click on `/api/contact`
4. Look for logs that show:
   - `GMAIL_USER exists: true` ✅
   - `GMAIL_APP_PASSWORD exists: true` ✅

**If you see `false`, variables are not set.**

---

## Common Mistakes

### ❌ Wrong Variable Names:
- `gmail_user` (lowercase)
- `GMAIL_EMAIL` (wrong name)
- `GMAIL_USER ` (extra space)
- `GMAIL_USERNAME` (wrong name)

### ✅ Correct:
- `GMAIL_USER` ✅
- `GMAIL_APP_PASSWORD` ✅

### ❌ Wrong Values:
- `"pearlcodelk@gmail.com"` (quotes)
- ` pearlcodelk@gmail.com ` (spaces)
- `pearlcodelk@gmail.com ` (trailing space)

### ✅ Correct:
- `pearlcodelk@gmail.com` ✅

### ❌ Not Checking Production:
- Only Development checked ❌
- Only Preview checked ❌

### ✅ Correct:
- Production, Preview, Development all checked ✅

### ❌ Not Redeploying:
- Adding variables but not redeploying ❌

### ✅ Correct:
- Add variables → Redeploy → Test ✅

---

## Verification Checklist

After following all steps:

- [ ] Variables exist in Vercel Dashboard
- [ ] Variable names are EXACTLY: `GMAIL_USER` and `GMAIL_APP_PASSWORD`
- [ ] **Production checkbox is checked** (most important!)
- [ ] Values have no quotes or spaces
- [ ] **Redeployed after adding/changing variables**
- [ ] Tested `/api/check-env` endpoint
- [ ] Checked Vercel logs show `exists: true`
- [ ] Tested contact form again

---

## If Still Not Working

1. **Check Vercel Logs:**
   - Deployments → Functions → `/api/contact`
   - Look for the actual error message

2. **Test the Check Endpoint:**
   - Visit: `https://q-biz-accounting-web.vercel.app/api/check-env`
   - Share what you see

3. **Verify Project:**
   - Make sure you're editing the correct Vercel project
   - Project name should be: `q-biz-accounting-web`

4. **Try Different Approach:**
   - Delete all GMAIL variables
   - Wait 1 minute
   - Add them again with exact names
   - Make sure Production is checked
   - Redeploy

---

## Quick Test

After redeploying, visit this URL to check if variables are set:
```
https://q-biz-accounting-web.vercel.app/api/check-env
```

You should see `exists: true` for both variables. If you see `exists: false`, the variables are not configured correctly.

