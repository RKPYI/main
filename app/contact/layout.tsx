import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('contact');
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
