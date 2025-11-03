import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rangga Danu Kusuma - Full-stack Developer',
    short_name: 'RDK Portfolio',
    description: 'Personal portfolio of Rangga Danu Kusuma, a full-stack web developer from Indonesia',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
