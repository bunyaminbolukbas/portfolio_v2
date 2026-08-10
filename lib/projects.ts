export type Project = {
  slug: string;
  name: string;
  client?: string;
  category: string;
  year?: string;
  summary: string;
  problem?: string;
  solution?: string;
  result?: string;
  role?: string;
  stack: string[];
  url?: string;
  // MediaSlot: vul `image` of `video` zodra materiaal beschikbaar is.
  image?: string;
  video?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'finclean',
    name: 'FinClean',
    category: 'Website',
    summary:
      'Bedrijfswebsite voor schoonmaakspecialist FinClean, gericht op VvE’s en vastgoedbeheerders, met een offerte-tool waarmee bezoekers direct een aanvraag samenstellen.',
    problem:
      'FinClean richt zich op VvE’s en vastgoedbeheerders: een doelgroep die professionaliteit verwacht voordat ze een aanvraag doet.',
    solution:
      'Een strakke bedrijfswebsite met een offerte-tool waarin bezoekers pandtype, frequentie, oppervlakte en diensten kiezen en direct hun aanvraag versturen.',
    result:
      'Bezoekers stellen hun offerte-aanvraag zelf samen; aanvragen komen volledig gekwalificeerd binnen in plaats van als los telefoontje.',
    role: 'Ontwerp en development, van eerste opzet tot livegang',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://finncleaning.nl',
    image: '/images/cases/finclean.jpeg',
    featured: true,
  },
  {
    slug: 'beek-automotive',
    name: 'Beek Automotive',
    category: 'Website & Automatisering',
    summary:
      'Showroom-website met live occasionvoorraad die automatisch meeloopt met het dealersysteem. Geen handmatig beheer meer.',
    problem:
      'De voorraad op de website handmatig bijhouden kost tijd en loopt altijd achter op het dealersysteem.',
    solution:
      'Een showroom-website waarvan de occasionvoorraad automatisch wordt gevoed vanuit het dealersysteem, inclusief automatische opschoning en contactafhandeling.',
    result:
      'Dubbel voorraadbeheer verdween: het dealersysteem is de enige bron en de website loopt er automatisch mee.',
    role: 'Ontwerp, development en integraties',
    stack: ['Next.js', 'Neon Postgres', 'Hexon-koppeling', 'Vercel'],
    url: 'https://www.beekautomotive.nl',
    image: '/images/cases/beek-automotive.jpeg',
    featured: true,
  },
  {
    slug: 'club49',
    name: 'Club49',
    category: 'Software & Digital Products',
    summary:
      'Boekingsplatform en ledenapp voor Club49: zalen boeken met live beschikbaarheid, offertes en betalingen, plus een community-app met agenda, chat en teams.',
    solution:
      'Een boekingsflow waarin klanten zaal, datum, catering en pakketten kiezen en direct betalen, naast een ledenapp voor de community.',
    role: 'Product, design en development',
    stack: ['React', 'TypeScript', 'Supabase', 'Firebase'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
