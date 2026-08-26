import type { Metadata } from 'next';
import { absoluteUrl, site } from '@/lib/site';

type PageMeta = {
  title: string;
  description: string;
  /** Pad zonder domein, bijv. '/werkwijze'. */
  path: string;
  /** Eigen OG-afbeelding; standaard wordt de file-based opengraph-image van de route gebruikt. */
  image?: string;
};

/**
 * Bouwt de metadata voor een pagina. Next merget `openGraph` en `alternates` niet diep,
 * dus elke pagina levert het complete blok aan; dit voorkomt dat subpagina's de
 * OG-titel van de homepage erven.
 */
export function pageMetadata({ title, description, path, image }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: 'nl_NL',
      type: 'website',
      siteName: site.name,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: site.name }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
