import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: 'tb.',
    description: site.description,
    start_url: '/',
    display: 'browser',
    lang: 'nl',
    background_color: '#faf9f6',
    theme_color: '#111110',
    icons: [
      { src: '/brand/tb-logo-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/brand/tb-logo-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
