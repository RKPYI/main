# Rangga Danu Kusuma - Personal Portfolio & Link Hub

A modern personal portfolio and link hub website built with Next.js and ShadCN UI.

## 🌟 Features

- **Modern Design**: Clean, minimal, and slightly futuristic aesthetic
- **Dark Mode**: Default dark theme with light mode toggle
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Complete metadata and Open Graph tags
- **Fast Performance**: Built with Next.js 16+ and optimized for speed

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Library**: [ShadCN UI](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📁 Project Structure

```
/app
  /page.tsx           → Home page with hero and projects
  /about/page.tsx     → About page with skills and bio
  /contact/page.tsx   → Contact form page
  layout.tsx          → Root layout with theme provider
  globals.css         → Global styles and theme variables

/components
  navigation.tsx      → Navigation bar with theme toggle
  footer.tsx          → Footer component
  project-card.tsx    → Animated project card component
  theme-provider.tsx  → Theme context provider
  theme-toggle.tsx    → Dark/light mode toggle
  /ui                 → ShadCN UI components

/data
  socials.ts          → Social media links data
  projects.ts         → Projects data

/public               → Static assets (images, favicon)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Personal Information

1. **Social Links**: Edit `/data/socials.ts`
2. **Projects**: Edit `/data/projects.ts`
3. **Bio & About**: Edit `/app/about/page.tsx`
4. **Contact Email**: Update in `/app/contact/page.tsx`

### Add Profile Photo

Replace the placeholder in `/app/page.tsx` with your actual image:

```tsx
<Image
  src="/profile.jpg"
  alt="Rangga Danu Kusuma"
  width={128}
  height={128}
  className="rounded-full"
/>
```

### Theme Colors

Modify colors in `/app/globals.css` under the `:root` and `.dark` selectors.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

## 📝 Pages

- **Home** (`/`): Hero section with profile, bio, social links, and featured projects
- **About** (`/about`): Background, skills, and tech stack
- **Contact** (`/contact`): Contact form with toast notifications

## 🎯 Features Breakdown

### Home Page
- Circular profile image (placeholder with initials)
- Animated hero section with name and tagline
- Social media icons with hover animations
- Project cards with smooth animations and hover effects

### About Page
- Personal bio and background
- Skill cards with icons
- Tech stack tags with staggered animations

### Contact Page
- Beautiful contact form with validation
- Loading state for submit button
- Success toast notifications
- Email display for direct contact

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rangga Danu Kusuma**

- Website: [randk.me](https://randk.me)
- GitHub: [@RKPYI](https://github.com/RKPYI)
- LinkedIn: [Rangga Danu Kusuma](https://www.linkedin.com/in/rangga-danu-kusuma-62b34a310/)

---

© 2025 Rangga Danu Kusuma — Built with Next.js & ShadCN
