import { useTranslations as useNextIntlTranslations } from 'next-intl';

// Re-export with memoization to prevent unnecessary re-renders
export const useTranslations = (namespace?: string) => {
  return useNextIntlTranslations(namespace);
};
