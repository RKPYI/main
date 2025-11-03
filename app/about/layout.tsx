import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description:
      "Learn more about Rangga Danu Kusuma, a 12th-grade high school student and full-stack web developer from Indonesia. Passionate about building practical digital solutions with Laravel, Next.js, and modern web technologies.",
    openGraph: {
      title: "About Rangga Danu Kusuma | Full-stack Developer",
      description:
        "12th-grade student and full-stack web developer from Indonesia. Experienced in Laravel, Next.js, React, and cloud deployment. Winner of Web Technology competitions.",
      url: "https://randk.me/about",
    },
    twitter: {
      title: "About Rangga Danu Kusuma | Full-stack Developer",
      description:
        "12th-grade student and full-stack web developer from Indonesia. Experienced in Laravel, Next.js, React, and cloud deployment.",
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
