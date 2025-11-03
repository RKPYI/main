"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

// Lazy load language switcher to reduce initial bundle
const LanguageSwitcher = dynamic(
  () => import("./language-switcher").then(mod => ({ default: mod.LanguageSwitcher })),
  { ssr: false }
);

// Lazy load mobile menu
const MobileMenu = dynamic(
  () => import("./mobile-menu").then(mod => ({ default: mod.MobileMenu })),
  { ssr: false }
);

export function Navigation() {
  const pathname = usePathname();
  const t = useTranslations('nav');
  
  const navItems = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('about') },
    { href: "/contact", label: t('contact') },
  ];

  return (
    <nav className="border-b" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" aria-label={t('brand')}>
          {t('brand')}
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          {/* Desktop: Show individual buttons */}
          <div className="hidden md:flex items-center gap-2" aria-label="Settings">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          {/* Mobile: Show menu dropdown */}
          <div className="md:hidden" aria-label="Mobile settings menu">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
