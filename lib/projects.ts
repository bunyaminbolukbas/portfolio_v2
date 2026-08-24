export type Project = {
  slug: string;
  name: string;
  client?: string;
  category: string;
  year?: string;
  summary: string;
  // Eén regel die de uitkomst voor de klant samenvat; staat direct onder de naam.
  outcome?: string;
  situation?: string;
  work?: string;
  result?: string;
  role?: string;
  // Techniek staat bewust niet op de site; alleen voor eigen administratie.
  stack?: string[];
  url?: string;
  // MediaSlot: vul `image` of `video` zodra materiaal beschikbaar is.
  image?: string;
  video?: string;
  // Lange full-page screenshot voor de scrollende preview in het browser-frame.
  scrollImage?: string;
  // Pagina-captures die als slideshow door het browser-frame crossfaden.
  slideImages?: { src: string; alt: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'finclean',
    name: 'FinClean',
    category: 'Rebranding en website',
    summary:
      'Nieuwe uitstraling en website voor schoonmaakspecialist FinClean, met een offerteflow waarmee bezoekers direct aangeven wat ze nodig hebben.',
    outcome: 'Van verouderde uitstraling naar een professionele website die nieuwe leads oplevert.',
    situation:
      'FinClean wilde professioneler overkomen bij VvE’s en vastgoedbeheerders en aanvragen beter kwalificeren.',
    work: 'Een nieuwe uitstraling, website en offerteflow waarmee bezoekers direct aangeven wat ze nodig hebben.',
    result:
      'FinClean krijgt nieuwe leads via de website, met de belangrijkste informatie al ingevuld. Minder heen-en-weer contact, meer gekwalificeerde aanvragen.',
    role: 'Branding, ontwerp en development.',
    url: 'https://finncleaning.nl',
    image: '/images/cases/finclean.jpeg',
    scrollImage: '/images/cases/finclean-scroll.webp',
    featured: true,
  },
  {
    slug: 'beek-automotive',
    name: 'Beek Automotive',
    category: 'Rebranding en website',
    summary:
      'Volledige rebranding en een nieuwe autowebsite waarin de occasionvoorraad automatisch actueel blijft.',
    outcome:
      'Een nieuw merk, een autowebsite die nieuwe leads oplevert en voorraad die automatisch actueel blijft.',
    situation:
      'Beek Automotive wilde professioneler naar buiten treden en zijn occasions beter online presenteren.',
    work: 'Een volledige rebranding en nieuwe website waarin de actuele occasionvoorraad automatisch wordt verwerkt.',
    result:
      'Een professionelere uitstraling, nieuwe leads via de website en geen handmatig beheer van de voertuigvoorraad.',
    role: 'Branding, ontwerp en volledige development.',
    url: 'https://www.beekautomotive.nl',
    image: '/images/cases/beek-automotive.jpeg',
    slideImages: [
      {
        src: '/images/cases/beek-slide-1.webp',
        alt: 'Homepage van Beek Automotive',
      },
      {
        src: '/images/cases/beek-slide-2.webp',
        alt: 'Occasionvoorraad van Beek Automotive',
      },
      {
        src: '/images/cases/beek-slide-3.webp',
        alt: 'Autopagina van Beek Automotive',
      },
      {
        src: '/images/cases/beek-slide-4.webp',
        alt: 'Servicepagina van Beek Automotive',
      },
    ],
    featured: true,
  },
  {
    slug: 'club49',
    name: 'Club49',
    category: 'Software',
    summary:
      'Boekingsplatform en ledenapp voor Club49: zalen boeken met live beschikbaarheid, offertes en betalingen, plus een community-app met agenda, chat en teams.',
    work: 'Een boekingsflow waarin klanten zaal, datum, catering en pakketten kiezen en direct betalen, naast een ledenapp voor de community.',
    role: 'Product, ontwerp en development.',
    stack: ['React', 'TypeScript', 'Supabase', 'Firebase'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
