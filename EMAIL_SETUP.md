# Email Setup Instructions

To enable email functionality for the contact form, you need to set up Resend API.

## Steps to Set Up Email:

1. **Sign up for Resend** (Free tier available)
   - Go to https://resend.com
   - Create a free account
   - Navigate to API Keys section

2. **Get your API Key**
   - In Resend dashboard, go to "API Keys"
   - Click "Create API Key"
   - Copy the API key (starts with `re_`)

3. **Set up Environment Variable**
   - Create a file named `.env.local` in the root directory (qbiz folder)
   - Add the following line:
     ```
     RESEND_API_KEY=re_your_actual_api_key_here
     ```
   - Replace `re_your_actual_api_key_here` with your actual Resend API key

4. **Verify Domain (Optional but Recommended)**
   - For production, you should verify your domain in Resend
   - This allows you to send from your own email address (e.g., noreply@yourdomain.com)
   - For testing, you can use the default `onboarding@resend.dev` sender

5. **Update Sender Email (Optional)**
   - In `app/api/contact/route.ts`, you can change the `from` field:
     ```typescript
     from: 'QBiz Solutions <noreply@yourdomain.com>',
     ```
   - Make sure the domain is verified in Resend first

## Testing:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the contact page and submit the form

3. Check your email inbox (pranamalakshan360@gmail.com) for the form submission

## Troubleshooting:

- Make sure `.env.local` is in the root `qbiz` directory
- Restart your dev server after adding the environment variable
- Check the browser console and server logs for any errors
- Verify your Resend API key is correct and active

## Free Tier Limits:

Resend free tier includes:
- 3,000 emails/month
- 100 emails/day
- Perfect for most small to medium businesses

