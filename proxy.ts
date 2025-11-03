import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, type Locale } from './i18n';

function getLocaleFromRequest(request: NextRequest): Locale {
  // 1. Check query parameter first (?lang=id or ?lang=en)
  const langParam = request.nextUrl.searchParams.get('lang');
  if (langParam && locales.includes(langParam as Locale)) {
    return langParam as Locale;
  }

  // 2. Check cookie (for persistence)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 3. Check Accept-Language header (browser language) - optimized
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // Quick check for Indonesian
    if (acceptLanguage.toLowerCase().includes('id')) {
      return 'id';
    }
  }

  // 4. Default to English
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Skip locale detection for static files and API routes
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|avif|woff|woff2|ttf|eot)$/)
  ) {
    return response;
  }

  // Detect and set locale
  const locale = getLocaleFromRequest(request);
  
  // Set locale in request headers for next-intl
  response.headers.set('x-next-intl-locale', locale);
  
  // Set cookie for persistence (30 days) - only if lang param is present or cookie doesn't exist
  const langParam = request.nextUrl.searchParams.get('lang');
  if (langParam && locales.includes(langParam as Locale)) {
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax',
    });
  } else if (!request.cookies.get('NEXT_LOCALE')) {
    // Set cookie on first visit based on browser language
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax',
    });
  }

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  // Cache static assets aggressively
  if (
    pathname.startsWith('/_next/static') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|avif)$/)
  ) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
