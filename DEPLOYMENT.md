# Deployment Guide

This guide will help you deploy your personal portfolio website to Vercel or other platforms.

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application. It's created by the same team that built Next.js.

### Method 1: Deploy with Git (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `randk.me`)
   - Follow the DNS configuration instructions
   - Vercel will automatically provision SSL certificate

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## 🌐 Environment Variables

If you add features that require environment variables (like a contact form API):

1. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   EMAIL_SERVICE_KEY=your_key_here
   ```

2. Add to Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable with its value
   - Redeploy the project

## 🔧 Custom Domain Setup (randk.me)

### For Vercel:

1. **Add Domain in Vercel Dashboard:**
   - Project Settings → Domains
   - Add `randk.me` and `www.randk.me`

2. **Configure DNS (with your domain registrar):**

   **For root domain (randk.me):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. **Wait for DNS propagation** (can take up to 48 hours, usually faster)

## 🏗️ Other Deployment Options

### Deploy to Netlify

1. **Connect Repository:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18` (or higher)

3. **Deploy!**

### Deploy to Railway

1. **Install Railway CLI:**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login and Deploy:**
   ```bash
   railway login
   railway init
   railway up
   ```

### Deploy to AWS Amplify

1. **Connect Repository:**
   - Go to AWS Amplify Console
   - Click "Host web app"
   - Connect your GitHub repository

2. **Build Settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

## 📊 Analytics (Optional)

### Add Vercel Analytics

1. **Install package:**
   ```bash
   npm install @vercel/analytics
   ```

2. **Update layout.tsx:**
   ```typescript
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

### Add Google Analytics

1. **Get tracking ID** from Google Analytics

2. **Create `/app/analytics.tsx`:**
   ```typescript
   import Script from 'next/script';
   
   export function Analytics() {
     return (
       <>
         <Script
           src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-XXXXXXXXXX');
           `}
         </Script>
       </>
     );
   }
   ```

3. **Add to layout.tsx**

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All content is updated with your information
- [ ] Social links point to your profiles
- [ ] Project URLs are correct
- [ ] Contact email is yours
- [ ] Metadata (SEO) is customized
- [ ] Favicon is added
- [ ] Profile photo is added (optional)
- [ ] Build runs successfully (`npm run build`)
- [ ] Site works in production mode (`npm run build && npm start`)
- [ ] Tested on mobile devices
- [ ] All links open correctly
- [ ] Forms work as expected

## 🐛 Common Issues

### Build Fails

**Error: Module not found**
```bash
npm install
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run build
# Fix any errors shown
```

### Domain Not Working

1. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/)
2. Verify DNS records in your domain registrar
3. Wait up to 48 hours for full propagation
4. Clear your browser cache

### Images Not Loading

1. Ensure images are in `/public` folder
2. Use correct path: `/image.jpg` not `./image.jpg`
3. Check image file names (case-sensitive)

## 📈 Post-Deployment

### Monitor Performance

- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Check [GTmetrix](https://gtmetrix.com/)
- Monitor Vercel Analytics dashboard

### SEO Verification

- Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- Verify Open Graph tags with [Open Graph Debugger](https://www.opengraph.xyz/)
- Test structured data with [Rich Results Test](https://search.google.com/test/rich-results)

## 🔄 Continuous Deployment

With Vercel + GitHub:
- Every push to `main` branch = automatic deployment
- Pull requests get preview deployments
- Rollback to previous deployments with one click

## 📝 Update Your Site

To make changes:

1. Edit files locally
2. Test: `npm run dev`
3. Commit changes: `git commit -am "Update content"`
4. Push: `git push`
5. Vercel automatically deploys!

---

🎉 **Congratulations!** Your portfolio is now live!

Share it:
- Add to LinkedIn profile
- Share on social media
- Add to GitHub README
- Include in email signature
