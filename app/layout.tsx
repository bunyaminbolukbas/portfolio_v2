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
    default: 'Bünyamin Bölükbaş | Meer klanten, meer omzet, minder handmatig werk',
    template: '%s | thebunyaminn.',
  },
  description:
    'Ik help ondernemers aan meer klanten, meer omzet en minder handmatig werk. Ik ontwerp en bouw wat daarvoor nodig is: websites, software en automatisering.',
  openGraph: {
    title: 'Bünyamin Bölükbaş | Meer klanten, meer omzet, minder handmatig werk',
    description:
      'Ik help ondernemers aan meer klanten, meer omzet en minder handmatig werk. Bünyamin Bölükbaş ontwerpt en bouwt wat daarvoor nodig is: websites, software en automatisering.',
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
    'Helpt ondernemers aan meer klanten, meer omzet en minder handmatig werk met websites, custom software, AI en automatisering.',
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
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Direct naar inhoud
        </a>
        <SmoothScroll />
        <Nav />
        <main id="inhoud">{children}</main>
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
