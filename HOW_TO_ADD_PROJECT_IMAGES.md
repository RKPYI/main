# Adding Your Project Images - Quick Guide

## ✅ What's Been Changed

I've successfully implemented image support for your project cards! Here's what was updated:

### Files Modified:
1. **`/data/projects.ts`** - Added `image` property to each project
2. **`/components/project-card.tsx`** - Added image display with Next.js Image component
3. **Created** `/public/projects/` directory with placeholder images

## 🎨 Current Setup

Your projects now display **placeholder gradient images** with your project names. These are SVG files that will show up immediately.

**Current placeholders:**
- `rantale.svg` - Purple gradient for Rantale
- `cryptotip.svg` - Orange gradient for CryptoTip

## 📸 How to Add Your Real Screenshots

### Method 1: Quick Screenshot (Recommended)

1. **Visit your live projects:**
   - Rantale: https://rantale.randk.me
   - CryptoTip: https://dapp-ui-six.vercel.app

2. **Take a screenshot:**
   - On Mac: `Cmd + Shift + 4` then select area
   - On Windows: `Win + Shift + S`
   - On Linux: Use Screenshot tool or `gnome-screenshot -a`
   - **Tip:** Capture the main landing page or dashboard

3. **Save the screenshots** in `/public/projects/`:
   ```
   /public/projects/rantale.png
   /public/projects/cryptotip.png
   ```

4. **Update** `/data/projects.ts`:
   ```typescript
   image: "/projects/rantale.png",  // Change .svg to .png
   image: "/projects/cryptotip.png", // Change .svg to .png
   ```

### Method 2: Use Browser Tools

1. **Open your project** in a browser
2. **Use browser screenshot tools:**
   - Firefox: Right-click → "Take Screenshot" → "Save full page"
   - Chrome Extension: "Full Page Screen Capture"
3. **Crop to ~1200x630px** (or any 16:9 ratio)
4. **Save to** `/public/projects/`

### Method 3: Use Online Tools

If your projects aren't live yet, create mockups:

1. **Screenshot.rocks** - https://screenshot.rocks/
2. **Screely** - https://www.screely.com/
3. **MockUPhone** - https://mockuphone.com/

## 🎯 Recommended Image Specs

- **Format:** PNG or JPG (PNG recommended for better quality)
- **Dimensions:** 1200x630px (16:9 ratio)
- **File Size:** Under 500KB
- **Quality:** High resolution, web-optimized

## 🔧 Optimize Your Images (Optional but Recommended)

Before adding images, optimize them for web:

1. **TinyPNG** - https://tinypng.com/
   - Drag and drop your images
   - Download compressed versions
   - Save to `/public/projects/`

2. **Command line** (if you have ImageMagick):
   ```bash
   cd /home/randk/repo/main/public/projects
   convert your-image.png -resize 1200x630^ -quality 85 rantale.png
   ```

## 📁 File Structure

```
/public/projects/
  ├── README.md           # Instructions
  ├── rantale.svg        # Placeholder (replace with rantale.png)
  ├── cryptotip.svg      # Placeholder (replace with cryptotip.png)
  └── [your images here]
```

## 🚀 Quick Command to Add Images

```bash
# Navigate to projects folder
cd /home/randk/repo/main/public/projects

# Copy your screenshots here (adjust paths as needed)
# cp ~/Downloads/rantale-screenshot.png ./rantale.png
# cp ~/Downloads/cryptotip-screenshot.png ./cryptotip.png

# Then update /data/projects.ts to use .png instead of .svg
```

## ✨ Features Added

The project cards now have:

- ✅ **Image at the top** of each card (height: 192px)
- ✅ **Hover effect** - Image scales slightly on hover
- ✅ **Responsive** - Uses Next.js Image component for optimization
- ✅ **Fallback** - Cards work fine even without images
- ✅ **Lazy loading** - Images load as user scrolls

## 🎨 Customization Options

### Change Image Height

Edit `/components/project-card.tsx` line 31:
```tsx
<div className="relative w-full h-48"> // Change h-48 to h-64 for taller
```

### Change Hover Effect

Edit `/components/project-card.tsx` line 36:
```tsx
className="... hover:scale-105" // Change to hover:scale-110 for more zoom
```

### Add Image Border/Overlay

Add classes to the image container:
```tsx
<div className="relative w-full h-48 border-b border-border">
```

## 🔍 Preview Your Changes

The dev server should auto-reload when you add images. Just:

1. Add your images to `/public/projects/`
2. Update the paths in `/data/projects.ts`
3. Check http://localhost:3000 - images should appear!

## 💡 Pro Tips

1. **Consistency**: Use the same dimensions for all project images
2. **Branding**: Consider adding your logo/watermark to screenshots
3. **Quality**: Dark mode screenshots often look better
4. **Update**: Refresh images when you redesign your projects

## 🆘 Troubleshooting

**Images not showing?**
- Check file path is correct (case-sensitive)
- Ensure file is in `/public/projects/` folder
- Try refreshing the page (`Cmd/Ctrl + R`)
- Check browser console for errors

**Images too large?**
- Optimize with TinyPNG or similar tools
- Convert to WebP for even smaller sizes

**Want to remove images?**
- Simply don't include the `image` property in projects.ts
- Or set it to `undefined`

---

Need help? The placeholder images are working now, so you can already see how they look!
