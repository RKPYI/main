import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('about');
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
