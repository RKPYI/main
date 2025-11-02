import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rangga Danu Kusuma | Full-stack Developer & Student",
  description:
    "Personal portfolio and link hub of Rangga Danu Kusuma. Full-stack developer building practical digital solutions from APIs to full-stack apps.",
  keywords: [
    "Rangga Danu Kusuma",
    "Full-stack Developer",
    "Laravel",
    "Next.js",
    "React",
    "AWS",
    "Web Development",
  ],
  authors: [{ name: "Rangga Danu Kusuma" }],
  openGraph: {
    title: "Rangga Danu Kusuma | Full-stack Developer & Student",
    description:
      "Personal portfolio and link hub of Rangga Danu Kusuma. Full-stack developer building practical digital solutions.",
    url: "https://randk.me",
    siteName: "Rangga Danu Kusuma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangga Danu Kusuma | Full-stack Developer & Student",
    description:
      "Personal portfolio and link hub of Rangga Danu Kusuma. Full-stack developer building practical digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
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
      </body>
    </html>
  );
}
