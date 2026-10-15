export const site = {
  name: 'thebunyaminn.',
  founder: 'Bünyamin Bölükbaş',
  // Wettelijk verplichte bedrijfsgegevens (Handelsregisterwet): staan in de footer en in het Organization-schema.
  legalName: 'BBE Operations',
  kvk: '89397703',
  city: 'Utrecht',
  email: 'hallo@thebunyaminn.nl',
  // Productiedomein. Enige plek waar dit staat: metadata, sitemap, robots en JSON-LD lezen het hier.
  url: 'https://thebunyaminn.nl',
  description:
    'Ik ben Bunyamin, software engineer en tech lead bij Club49. Ik ontwikkel SaaS-platformen, bouw integraties en stuur developmentteams aan, van architectuur tot livegang.',
  social: {
    instagram: 'https://instagram.com/thebunyaminn',
    linkedin: 'https://linkedin.com/in/bunyaminbolukbas',
  },
} as const;

/** Absolute URL voor een pad, met trailing slash (next.config: trailingSlash: true). */
export function absoluteUrl(path: string): string {
  const withSlash = path.endsWith('/') || path.includes('.') ? path : `${path}/`;
  return new URL(withSlash, site.url).toString();
}
