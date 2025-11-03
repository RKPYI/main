"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { memo } from "react";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
] as const;

function LanguageSwitcherComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentLang = searchParams.get('lang') || 'en';

  const switchLanguage = (langCode: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', langCode);
    const newUrl = `${pathname}?${params.toString()}`;
    
    // Force a full page reload to apply the new language
    window.location.href = newUrl;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Switch language">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={currentLang === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Memoize to prevent unnecessary re-renders
export const LanguageSwitcher = memo(LanguageSwitcherComponent);
