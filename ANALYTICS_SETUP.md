# Google Analytics Setup Instructions

Your website is now ready for Google Analytics tracking. Follow these steps to activate it:

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" → "Create Account"

## Step 2: Set Up a Property

1. Enter an **Account name** (e.g., "CNRS Research Profile")
2. Configure data sharing settings (optional)
3. Click "Next"
4. Enter a **Property name** (e.g., "Scientific Profile Website")
5. Select your **timezone** and **currency**
6. Click "Next"

## Step 3: Configure Data Stream

1. Select **Web** as the platform
2. Enter your website URL: `https://cnrs-oguzumut.github.io/scientific-profile/`
3. Enter a **Stream name**: "Main Website"
4. Click "Create stream"

## Step 4: Get Your Measurement ID

After creating the stream, you'll see a **Measurement ID** that looks like:
```
G-XXXXXXXXXX
```

Copy this ID.

## Step 5: Update Your Website

1. Open `index.html` in your project
2. Find these two lines (around line 11 and 16):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
   and
   ```javascript
   gtag('config', 'G-XXXXXXXXXX');
   ```

3. Replace **both** instances of `G-XXXXXXXXXX` with your actual Measurement ID

## Step 6: Commit and Push

```bash
git add index.html
git commit -m "Add Google Analytics tracking ID"
git push
```

## Step 7: Verify It's Working

1. Wait 1-2 minutes for GitHub Pages to rebuild
2. Visit your website: https://cnrs-oguzumut.github.io/scientific-profile/
3. Go back to Google Analytics
4. Click "Realtime" in the left sidebar
5. You should see yourself as an active user!

## What You'll Get

With Google Analytics, you can track:
- **Visitor count** - Total and unique visitors
- **Page views** - Which pages are most popular
- **Geographic data** - Where your visitors are from
- **Traffic sources** - How people find your site
- **Device info** - Desktop vs mobile usage
- **Real-time data** - See who's on your site right now

## Privacy Note

Google Analytics is GDPR-compliant when configured properly. If you're concerned about privacy, consider these alternatives:
- **Plausible Analytics** - Privacy-focused, simple ($9/month after trial)
- **GoatCounter** - Free, open-source, privacy-friendly
- **Fathom Analytics** - Privacy-first ($14/month)

## Need Help?

If you need assistance setting this up, let me know and I can help you through the process!

---

*File location: /ANALYTICS_SETUP.md*
