"use client";

import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Moon, Sun, Languages } from "lucide-react";
import { memo } from "react";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
] as const;

function MobileMenuComponent() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentLang = searchParams.get('lang') || 'en';

  const switchLanguage = (langCode: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', langCode);
    const newUrl = `${pathname}?${params.toString()}`;
    window.location.href = newUrl;
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Theme Toggle */}
        <DropdownMenuItem onClick={toggleTheme}>
          {theme === "dark" ? (
            <>
              <Sun className="mr-2 h-4 w-4" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="mr-2 h-4 w-4" />
              Dark Mode
            </>
          )}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex items-center">
          <Languages className="mr-2 h-4 w-4" />
          Language
        </DropdownMenuLabel>
        
        {/* Language Options */}
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

export const MobileMenu = memo(MobileMenuComponent);
