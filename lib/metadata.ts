import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function getMetadata(page: 'root' | 'about' | 'contact'): Promise<Metadata> {
  const t = await getTranslations('metadata');
  const baseUrl = 'https://randk.me';
  
  const metadata: Record<string, Metadata> = {
    root: {
      metadataBase: new URL(baseUrl),
      title: {
        default: t('root.title'),
        template: t('root.titleTemplate'),
      },
      description: t('root.description'),
      keywords: t('root.keywords').split(', '),
      authors: [{ name: 'Rangga Danu Kusuma', url: baseUrl }],
      creator: 'Rangga Danu Kusuma',
      publisher: 'Rangga Danu Kusuma',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      icons: {
        icon: [
          { url: '/favicon.ico', sizes: 'any' },
          { url: '/favicon.ico', type: 'image/x-icon' },
        ],
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
      },
      alternates: {
        canonical: baseUrl,
        languages: {
          'en': `${baseUrl}?lang=en`,
          'id': `${baseUrl}?lang=id`,
        },
      },
      openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['id_ID'],
        url: baseUrl,
        siteName: 'Rangga Danu Kusuma Portfolio',
        title: t('root.ogTitle'),
        description: t('root.ogDescription'),
        images: [
          {
            url: '/banner.png',
            width: 1200,
            height: 630,
            alt: 'Rangga Danu Kusuma - Full-stack Developer',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: t('root.twitterTitle'),
        description: t('root.twitterDescription'),
        creator: '@ranggadanuk',
        images: ['/banner.png'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      verification: {
        google: 'Yapy14cqRJErtoTdJT3GFdXFpKhtiptPZ5VTNzsrITE',
      },
    },
    about: {
      title: t('about.title'),
      description: t('about.description'),
      alternates: {
        canonical: `${baseUrl}/about`,
        languages: {
          'en': `${baseUrl}/about?lang=en`,
          'id': `${baseUrl}/about?lang=id`,
        },
      },
      openGraph: {
        title: t('about.ogTitle'),
        description: t('about.ogDescription'),
        url: `${baseUrl}/about`,
      },
      twitter: {
        title: t('about.twitterTitle'),
        description: t('about.twitterDescription'),
      },
    },
    contact: {
      title: t('contact.title'),
      description: t('contact.description'),
      alternates: {
        canonical: `${baseUrl}/contact`,
        languages: {
          'en': `${baseUrl}/contact?lang=en`,
          'id': `${baseUrl}/contact?lang=id`,
        },
      },
      openGraph: {
        title: t('contact.ogTitle'),
        description: t('contact.ogDescription'),
        url: `${baseUrl}/contact`,
      },
      twitter: {
        title: t('contact.twitterTitle'),
        description: t('contact.twitterDescription'),
      },
    },
  };

  return metadata[page];
}
