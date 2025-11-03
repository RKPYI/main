import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description:
      "Get in touch with Rangga Danu Kusuma. Send a message for collaboration opportunities, project inquiries, or general questions about web development and technology.",
    openGraph: {
      title: "Contact Rangga Danu Kusuma | Full-stack Developer",
      description:
        "Have a question or want to work together? Get in touch with Rangga Danu Kusuma for web development projects and collaboration opportunities.",
      url: "https://randk.me/contact",
    },
    twitter: {
      title: "Contact Rangga Danu Kusuma | Full-stack Developer",
      description:
        "Get in touch for web development projects and collaboration opportunities.",
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
