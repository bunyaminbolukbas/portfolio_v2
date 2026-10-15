import type { MetadataRoute } from 'next';
import { getAllInzichten } from '@/lib/inzichten';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * Datum van de laatste inhoudelijke wijziging per pagina. Bewust handmatig:
 * Bing gebruikt `lastmod` als freshness-signaal en negeert het als het bij
 * elke build verandert. Pas aan wanneer de copy van de pagina wijzigt.
 */
const pages: { path: string; updatedAt: string; priority: number }[] = [
  { path: '/', updatedAt: '2026-10-15', priority: 1 },
  { path: '/inzichten', updatedAt: '2026-08-27', priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const inzichten = await getAllInzichten();
  return [
    ...pages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: new Date(p.updatedAt),
      priority: p.priority,
    })),
    ...inzichten.map((a) => ({
      url: absoluteUrl(`/inzichten/${a.slug}`),
      lastModified: new Date(a.updatedAt),
      priority: 0.7,
    })),
  ];
}
