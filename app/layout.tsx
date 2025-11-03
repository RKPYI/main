import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://randk.me'),
    title: {
      default: "Rangga Danu Kusuma | Full-stack Developer & Student",
      template: "%s | Rangga Danu Kusuma"
    },
    description:
      "Personal portfolio of Rangga Danu Kusuma, a full-stack web developer from Indonesia. Experienced in Laravel, Next.js, React, and AWS. Building practical digital solutions from APIs to full-stack applications.",
    keywords: [
      "Rangga Danu Kusuma",
      "Full-stack Developer",
      "Web Developer Indonesia",
      "Laravel Developer",
      "Next.js Developer",
      "React Developer",
      "AWS Developer",
      "Web Development",
      "Portfolio",
      "Software Engineer",
    ],
    authors: [{ name: "Rangga Danu Kusuma", url: "https://randk.me" }],
    creator: "Rangga Danu Kusuma",
    publisher: "Rangga Danu Kusuma",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["id_ID"],
      url: "https://randk.me",
      siteName: "Rangga Danu Kusuma Portfolio",
      title: "Rangga Danu Kusuma | Full-stack Developer & Student",
      description:
        "Personal portfolio of Rangga Danu Kusuma. Full-stack web developer specializing in Laravel, Next.js, and modern web technologies.",
      images: [
        {
          url: "/profile-dark.svg",
          width: 1200,
          height: 630,
          alt: "Rangga Danu Kusuma - Full-stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Rangga Danu Kusuma | Full-stack Developer & Student",
      description:
        "Full-stack web developer specializing in Laravel, Next.js, and modern web technologies. Building practical digital solutions.",
      creator: "@ranggadanuk",
      images: ["/profile-dark.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: "Yapy14cqRJErtoTdJT3GFdXFpKhtiptPZ5VTNzsrITE", // Add your verification code
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  // Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rangga Danu Kusuma',
    url: 'https://randk.me',
    image: 'https://randk.me/profile-dark.svg',
    sameAs: [
      'https://github.com/RKPYI',
      'https://linkedin.com/in/ranggadanuk',
    ],
    jobTitle: 'Full-stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    description: 'Full-stack web developer specializing in Laravel, Next.js, React, and modern web technologies.',
    knowsAbout: ['Laravel', 'Next.js', 'React', 'TypeScript', 'AWS', 'Web Development'],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="description" content="Personal portfolio of Rangga Danu Kusuma, a full-stack web developer from Indonesia. Experienced in Laravel, Next.js, React, and AWS. Building practical digital solutions from APIs to full-stack applications." />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
