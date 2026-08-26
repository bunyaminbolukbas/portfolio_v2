import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * Datum van de laatste inhoudelijke wijziging per pagina. Bewust handmatig:
 * Bing gebruikt `lastmod` als freshness-signaal en negeert het als het bij
 * elke build verandert. Pas aan wanneer de copy van de pagina wijzigt.
 */
const pages: { path: string; updatedAt: string; priority: number }[] = [
  { path: '/', updatedAt: '2026-08-25', priority: 1 },
  { path: '/werk', updatedAt: '2026-08-26', priority: 0.8 },
  { path: '/werkwijze', updatedAt: '2026-08-25', priority: 0.6 },
  { path: '/start', updatedAt: '2026-08-25', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: new Date(p.updatedAt),
      priority: p.priority,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/werk/${project.slug}`),
      lastModified: new Date(project.updatedAt),
      priority: 0.7,
    })),
  ];
}
