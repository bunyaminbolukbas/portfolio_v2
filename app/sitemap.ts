import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const base = 'https://bunyaminbolukbas.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/werkwijze/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/start/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ];
}
