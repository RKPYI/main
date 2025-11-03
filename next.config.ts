import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'next-intl'],
  },
  // Optimize bundle size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Reduce client-side bundle by tree-shaking unused modules
      config.optimization = {
        ...config.optimization,
        usedExports: true,
      };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
