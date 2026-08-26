import { absoluteUrl, site } from '@/lib/site';

const personId = `${site.url}/#person`;
const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

/**
 * Entiteiten die op elke pagina meegaan. Alles hier moet ook zichtbaar op de site
 * staan (naam, functie, socials, logo); Google en Bing eisen dat markup de
 * zichtbare inhoud weerspiegelt.
 */
export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: site.founder,
      alternateName: 'thebunyaminn',
      jobTitle: 'Developer, tech lead en ondernemer',
      url: site.url,
      image: absoluteUrl('/images/bunyamin-portret-strak.webp'),
      worksFor: { '@type': 'Organization', name: 'Code49' },
      sameAs: [site.social.instagram, site.social.linkedin],
    },
    {
      '@type': 'ProfessionalService',
      '@id': organizationId,
      name: site.name,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/brand/tb-logo-512.png'),
        width: 512,
        height: 512,
      },
      image: absoluteUrl('/og.png'),
      founder: { '@id': personId },
      description:
        'Helpt ondernemers aan meer klanten, meer omzet en minder handmatig werk met websites, software en automatisering.',
      areaServed: 'NL',
      knowsAbout: ['Websites', 'Webapplicaties', 'Software op maat', 'Procesautomatisering'],
      sameAs: [site.social.instagram, site.social.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: site.name,
      url: site.url,
      inLanguage: 'nl-NL',
      publisher: { '@id': organizationId },
    },
  ],
};

export type Crumb = { name: string; path: string };

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
