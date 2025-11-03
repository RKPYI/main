import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'id'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Get locale from request (will be set by our custom locale detection)
  let locale = await requestLocale;
  
  // Fallback to default if not valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    // Enable time zone support if needed
    timeZone: 'Asia/Jakarta',
    now: new Date()
  };
});
