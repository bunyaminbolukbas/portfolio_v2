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
  // Lange full-page screenshot voor de scrollende preview in het browser-frame.
  scrollImage?: string;
  // Pagina-captures die als slideshow door het browser-frame crossfaden.
  slideImages?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'finclean',
    name: 'FinClean',
    category: 'Rebranding & website',
    summary:
      'Rebranding en nieuwe website voor schoonmaakspecialist FinClean, met een offerte-tool waarmee bezoekers direct een aanvraag samenstellen.',
    problem:
      'FinClean wilde een rebranding en een nieuwe website: de doelgroep van VvE’s en vastgoedbeheerders verwacht professionaliteit voordat ze een aanvraag doet.',
    solution:
      'Een fris merk en een strakke bedrijfswebsite met een offerte-tool waarin bezoekers pandtype, frequentie, oppervlakte en diensten kiezen en direct hun aanvraag versturen.',
    result:
      'Bezoekers stellen hun offerte-aanvraag zelf samen; aanvragen komen volledig gekwalificeerd binnen in plaats van als los telefoontje.',
    role: 'Ontwerp en development, van eerste opzet tot livegang',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://finncleaning.nl',
    image: '/images/cases/finclean.jpeg',
    scrollImage: '/images/cases/finclean-scroll.webp',
    featured: true,
  },
  {
    slug: 'beek-automotive',
    name: 'Beek Automotive',
    category: 'Rebranding, website & API-koppeling',
    summary:
      'Volledige rebranding en een complete autowebsite met live occasionvoorraad via een Hexon-koppeling.',
    problem:
      'Beek Automotive wilde een volledige rebranding én een complete autowebsite met live voorraad, voor een scherpe prijs.',
    solution:
      'Een compleet nieuwe website in de nieuwe huisstijl, met een API-koppeling naar Hexon: de occasionvoorraad loopt automatisch mee, inclusief opschoning en contactafhandeling.',
    result:
      'Voor een scherpe prijs een volledig nieuw merk en een complete autowebsite met live Hexon-voorraad, én meer leads via de formulieren op de site.',
    role: 'Design en de volledige build: frontend én backend',
    stack: ['Next.js', 'Neon Postgres', 'Hexon-koppeling', 'Vercel'],
    url: 'https://www.beekautomotive.nl',
    image: '/images/cases/beek-automotive.jpeg',
    slideImages: [
      '/images/cases/beek-slide-1.webp',
      '/images/cases/beek-slide-2.webp',
      '/images/cases/beek-slide-3.webp',
      '/images/cases/beek-slide-4.webp',
    ],
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
