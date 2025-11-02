# 🚀 Quick Start Guide

Welcome to your new personal portfolio website! This guide will help you get up and running quickly.

## ⚡ First Steps (5 minutes)

### 1. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Update Your Personal Information

**Edit these files in order:**

1. **`/data/socials.ts`** - Update your social media links
   ```typescript
   url: "https://github.com/YOUR_USERNAME",
   ```

2. **`/data/projects.ts`** - Add your real projects
   - Update titles, descriptions, and URLs
   - Modify tags to match your tech stack

3. **`/app/page.tsx`** - Update your bio (line ~61)
   ```typescript
   I build practical digital solutions...
   ```

4. **`/app/contact/page.tsx`** - Update your email (line ~149)
   ```typescript
   contact@randk.me  →  your@email.com
   ```

5. **`/app/about/page.tsx`** - Customize your story
   - Update bio paragraphs (lines ~52-65)
   - Modify skills if needed (lines ~11-31)
   - Update tech stack (lines ~123-136)

### 3. Add Your Profile Photo (Optional)

1. Save your photo as `/public/profile.jpg`
2. In `/app/page.tsx`, replace the placeholder (lines ~26-33) with:
   ```tsx
   <Image
     src="/profile.jpg"
     alt="Your Name"
     width={128}
     height={128}
     className="object-cover w-full h-full"
   />
   ```

## 🎨 Customization

### Change Theme Color

Edit `/app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.25 250);  /* Change this */
}
```

**Color presets:**
- Blue: `250`
- Purple: `300`
- Green: `150`
- Orange: `50`
- Pink: `350`

### Update Name & Title

In `/app/layout.tsx`:
```typescript
title: "Your Name | Your Title",
```

In `/app/page.tsx`:
```tsx
<h1>Your Name</h1>
<p>Your Title</p>
```

## 📂 File Structure Overview

```
/app
  page.tsx          → Home page (hero + projects)
  layout.tsx        → Site-wide layout (metadata, theme)
  
  /about
    page.tsx        → About page
  
  /contact
    page.tsx        → Contact page with form

/components
  navigation.tsx    → Top navigation bar
  footer.tsx        → Site footer
  project-card.tsx  → Project display component
  theme-toggle.tsx  → Dark/light mode toggle

/data
  socials.ts        → Your social media links
  projects.ts       → Your project portfolio

/public             → Images, favicon, static assets
```

## 🎯 What to Customize First

**Priority 1 (Essential):**
- [ ] Social media links (`/data/socials.ts`)
- [ ] Project information (`/data/projects.ts`)
- [ ] Contact email (`/app/contact/page.tsx`)
- [ ] Site title & description (`/app/layout.tsx`)

**Priority 2 (Important):**
- [ ] About page bio (`/app/about/page.tsx`)
- [ ] Home page bio (`/app/page.tsx`)
- [ ] Profile photo (optional but recommended)

**Priority 3 (Nice to Have):**
- [ ] Theme colors (`/app/globals.css`)
- [ ] Favicon (`/app/favicon.ico`)
- [ ] Tech stack list (`/app/about/page.tsx`)

## 🚀 Deploy to Vercel

When ready to go live:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

3. **Done!** Your site is live! 🎉

## 📚 Helpful Resources

- **Customization Guide**: See `CUSTOMIZATION.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Full README**: See `README.md`

## 🆘 Need Help?

**Common commands:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Check for code issues
```

**Issues?**
1. Clear cache: `rm -rf .next node_modules`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

## ✨ Features Included

✅ Responsive design (mobile, tablet, desktop)  
✅ Dark mode with toggle  
✅ Smooth animations  
✅ SEO optimized  
✅ Fast performance  
✅ Modern UI with ShadCN components  
✅ Contact form with validation  
✅ Social media integration  
✅ Project showcase  

## 🎉 You're All Set!

Your portfolio includes:
- **Home**: Hero section with profile and featured projects
- **About**: Your story, skills, and tech stack
- **Contact**: Beautiful contact form

**Next steps:**
1. Customize your content (see checklist above)
2. Add your profile photo
3. Test everything locally
4. Deploy to Vercel
5. Share your new portfolio! 🚀

---

**Questions?** Check the detailed guides:
- `CUSTOMIZATION.md` - How to customize everything
- `DEPLOYMENT.md` - How to deploy to production
- `README.md` - Full documentation

Good luck! 🌟
