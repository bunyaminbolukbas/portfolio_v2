export type Project = {
  slug: string;
  name: string;
  client?: string;
  category: string;
  year?: string;
  summary: string;
  problem?: string;
  solution?: string;
  role?: string;
  stack: string[];
  logo?: string;
  logoOnDark?: boolean;
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
    logo: '/images/club49.png',
  },
  {
    slug: 'operations-grid',
    name: 'Operations Grid',
    category: 'Eigen product / Software',
    summary:
      'Whiteboard-tool waarmee bedrijven hun waardeketen visualiseren: processen, SOP’s, KPI’s en taken op één canvas, met AI-procesanalyse.',
    stack: ['React', 'TypeScript', 'Supabase'],
    logo: '/images/operations-grid.png',
  },
  {
    slug: 'highground',
    name: 'Highground',
    category: 'Eigen product / Software',
    summary:
      'Platform voor medewerkersprestaties: dagelijkse taken, puntensysteem, metrics en 360°-feedback, met een AI-consultant.',
    stack: ['React', 'TypeScript', 'Supabase'],
    logo: '/images/highground.png',
  },
  {
    slug: 'personal-intel',
    name: 'Personal Intel',
    category: 'Eigen product / AI',
    summary:
      'AI-assessmentplatform: gebruikers doorlopen scenario-simulaties in tekst of live spraak en krijgen een persoonlijk coachingsrapport.',
    stack: ['AI', 'NestJS', 'React'],
    logo: '/images/personal-intel.webp',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

// Naamstrip op de homepage: opdrachtgevers en eigen merken.
// Bewust als tekst (geen verouderde logobestanden); zodra actuele
// logobestanden beschikbaar zijn kan dit weer een beeldstrip worden.
export const proofNames = ['Beek Automotive', 'FinClean', 'Club49', 'Code49'];
