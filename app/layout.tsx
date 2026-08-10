import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { SmoothScroll } from '@/components/site/SmoothScroll';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bunyaminbolukbas.com'),
  title: {
    default: 'Bünyamin Bölükbaş | Digitale systemen die bedrijven slimmer laten werken',
    template: '%s | thebunyaminn.',
  },
  description:
    'Van probleem naar werkend product: custom software, automatisering, AI en digitale producten voor ondernemers en groeiende bedrijven.',
  openGraph: {
    title: 'Bünyamin Bölükbaş | Digitale systemen die bedrijven slimmer laten werken',
    description:
      'Van probleem naar werkend product: custom software, automatisering, AI en digitale producten, ontworpen en gebouwd door Bünyamin Bölükbaş.',
    locale: 'nl_NL',
    type: 'website',
    siteName: 'thebunyaminn.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'thebunyaminn.' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bünyamin Bölükbaş',
  alternateName: 'thebunyaminn',
  jobTitle: 'Developer, tech lead en ondernemer',
  url: 'https://bunyaminbolukbas.com',
  worksFor: {
    '@type': 'Organization',
    name: 'Code49',
  },
  sameAs: [site.social.youtube, site.social.instagram, site.social.linkedin],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'thebunyaminn.',
  url: 'https://bunyaminbolukbas.com',
  founder: { '@type': 'Person', name: 'Bünyamin Bölükbaş' },
  description:
    'Custom software, automatisering, AI en digitale producten voor ondernemers en groeiende bedrijven.',
  areaServed: 'NL',
  knowsAbout: [
    'Custom software',
    'Procesautomatisering',
    'AI-workflows',
    'Webapplicaties',
    'Websites',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <body className="font-sans">
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
