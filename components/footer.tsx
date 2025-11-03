"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('footer');
  
  return (
    <footer className="border-t mt-auto" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        {t('copyright')}
      </div>
    </footer>
  );
}
