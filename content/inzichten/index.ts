/**
 * Register van artikelen. Nieuw artikel = nieuw .mdx-bestand in deze map
 * plus één regel hieronder. Sitemap, overzicht, OG-afbeelding en schema volgen automatisch.
 */
export const inzichtModules = {
  'wat-kost-een-website-laten-maken-2026': () =>
    import('./wat-kost-een-website-laten-maken-2026.mdx'),
} as const;

export type InzichtSlug = keyof typeof inzichtModules;
