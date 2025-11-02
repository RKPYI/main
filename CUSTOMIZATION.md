# Customization Guide

This guide will help you customize your personal portfolio website.

## 📸 Adding Your Profile Photo

### Step 1: Add Your Image

1. Place your profile photo in the `/public` folder (e.g., `profile.jpg` or `profile.png`)
2. Recommended size: 256x256 pixels or larger (square image works best)

### Step 2: Update the Home Page

Open `/app/page.tsx` and replace the placeholder profile section:

**Current code (lines ~26-33):**
```tsx
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
    <span className="text-4xl font-bold text-primary">RDK</span>
  </div>
</div>
```

**Replace with:**
```tsx
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
  <Image
    src="/profile.jpg"
    alt="Rangga Danu Kusuma"
    width={128}
    height={128}
    className="object-cover w-full h-full"
    priority
  />
</div>
```

## 🎨 Changing Theme Colors

### Neutral to Blue

Edit `/app/globals.css` and update the `:root` and `.dark` sections:

```css
:root {
  --primary: oklch(0.55 0.25 250);  /* Blue in light mode */
  /* ... keep other variables */
}

.dark {
  --primary: oklch(0.65 0.25 250);  /* Lighter blue in dark mode */
  /* ... keep other variables */
}
```

### Popular Color Schemes

**Purple Theme:**
```css
--primary: oklch(0.55 0.25 300);  /* Light mode */
--primary: oklch(0.70 0.25 300);  /* Dark mode */
```

**Green Theme:**
```css
--primary: oklch(0.55 0.20 150);  /* Light mode */
--primary: oklch(0.70 0.20 150);  /* Dark mode */
```

**Orange Theme:**
```css
--primary: oklch(0.60 0.20 50);   /* Light mode */
--primary: oklch(0.75 0.20 50);   /* Dark mode */
```

## 📝 Updating Content

### Personal Information

**Name and Title** - `/app/page.tsx`:
```tsx
<h1>Your Name Here</h1>
<p>Your Title Here</p>
```

**Bio** - `/app/page.tsx`:
```tsx
<p>Your custom bio here...</p>
```

### Social Links

Edit `/data/socials.ts`:

```typescript
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
    color: "hover:text-gray-400",
  },
  // Add more socials...
];
```

**Available Icons:**
- `Github`, `Linkedin`, `Twitter`, `Instagram`, `Facebook`, `Youtube`
- `Mail`, `Phone`, `MapPin`, `Link`, `BookOpen`, `Code`

Import them from `lucide-react`:
```typescript
import { Github, Twitter, Mail } from "lucide-react";
```

### Projects

Edit `/data/projects.ts`:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Brief description...",
    url: "https://project-url.com",
    tags: ["Tag1", "Tag2", "Tag3"],
  },
  // Add more projects...
];
```

### About Page

Edit `/app/about/page.tsx`:

1. **Bio paragraphs** (lines ~52-65)
2. **Skills section** - Update the `skills` array (lines ~11-31)
3. **Tech stack** - Update the array (lines ~123-136)

### Contact Information

Edit `/app/contact/page.tsx`:

**Update email** (line ~149):
```tsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

**Connect to real form service** (optional):

Replace the mock submit function (lines ~33-47) with a real API call:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  } catch (error) {
    toast.error("An error occurred. Please try again.");
  } finally {
    setIsLoading(false);
  }
};
```

## 🖼️ Adding a Favicon

1. Generate a favicon at [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Replace `/app/favicon.ico` with your new favicon
3. Optionally add `apple-touch-icon.png` and other sizes to `/public`

## 🌐 SEO Metadata

Edit `/app/layout.tsx` (lines ~18-40):

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your custom description...",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Your Title",
    description: "Your custom description...",
    url: "https://yourdomain.com",
    siteName: "Your Name",
    images: ["/og-image.png"],
  },
};
```

### Adding Open Graph Image

1. Create a 1200x630px image for social media previews
2. Save it as `/public/og-image.png`
3. Update the metadata as shown above

## 🎭 Animations

### Adjust Animation Speed

In any component using Framer Motion, modify the `duration` and `delay`:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}  // Adjust these values
>
```

- **duration**: How long the animation takes (in seconds)
- **delay**: Wait time before animation starts (in seconds)

### Disable Animations

If you prefer a simpler look without animations:

1. Remove `"use client";` from page files
2. Replace `<motion.div>` with regular `<div>`
3. Remove `initial`, `animate`, `transition` props

## 🚀 Performance Tips

1. **Optimize images**: Use WebP format and next/image component
2. **Lazy load**: Add `loading="lazy"` to images below the fold
3. **Minimize animations**: Too many can slow down mobile devices
4. **Code splitting**: Keep components in separate files

## 📱 Mobile Responsiveness

The site is already responsive, but you can adjust breakpoints in Tailwind classes:

- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```tsx
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  Title
</h1>
```

## 🔗 Adding More Pages

1. Create a new folder in `/app` (e.g., `/app/blog`)
2. Add a `page.tsx` file inside
3. Update the navigation in `/components/navigation.tsx`

Example navigation item:
```typescript
{ href: "/blog", label: "Blog" }
```

## 💡 Need Help?

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Visit [ShadCN UI docs](https://ui.shadcn.com/)
3. Check browser console for errors
4. Ensure all dependencies are installed with `npm install`

---

Happy customizing! 🎉
