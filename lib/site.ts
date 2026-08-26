export const site = {
  name: 'thebunyaminn.',
  founder: 'Bünyamin Bölükbaş',
  // Productiedomein. Enige plek waar dit staat: metadata, sitemap, robots en JSON-LD lezen het hier.
  url: 'https://thebunyaminn.nl',
  description:
    'Ik help ondernemers aan meer klanten, meer omzet en minder handmatig werk. Ik ontwerp en bouw wat daarvoor nodig is: websites, software en automatisering.',
  calendly: 'https://calendly.com/bunyaminbolukbas',
  formspree: 'https://formspree.io/f/mnndnple',
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
