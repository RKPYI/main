import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://randk.me';
  const locales = ['en', 'id'];
  const currentDate = new Date();
  
  // Define routes with their properties
  const routes = [
    {
      path: '',
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      path: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Generate sitemap entries for all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}${route.path}?lang=${locale}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}${route.path}?lang=${l}`])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
