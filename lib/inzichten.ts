import type { ComponentType } from 'react';
import { inzichtModules, type InzichtSlug } from '@/content/inzichten';

export type InzichtMeta = {
  title: string;
  description: string;
  /** Kort antwoord van 2 à 3 zinnen; staat bovenaan het artikel en is wat AI-zoekmachines citeren. */
  answer: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  /** Concept: niet in overzicht, sitemap of build. */
  draft?: boolean;
};

export type Inzicht = InzichtMeta & { slug: string; Body: ComponentType };

type InzichtModule = { meta: InzichtMeta; default: ComponentType };

export const inzichtSlugs = Object.keys(inzichtModules) as InzichtSlug[];

export async function getInzicht(slug: string): Promise<Inzicht | null> {
  const load = inzichtModules[slug as InzichtSlug];
  if (!load) return null;
  const mod = (await load()) as unknown as InzichtModule;
  if (mod.meta.draft) return null;
  return { slug, ...mod.meta, Body: mod.default };
}

export async function getAllInzichten(): Promise<Inzicht[]> {
  const all = await Promise.all(inzichtSlugs.map((slug) => getInzicht(slug)));
  return all
    .filter((a): a is Inzicht => a !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
