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
  title: {
    default: 'thebunyaminn. | Websites, software en AI die je bedrijf vooruithelpen',
    template: '%s | thebunyaminn.',
  },
  description:
    'Ik ontwerp en bouw digitale producten voor ondernemers en groeiende bedrijven: premium websites, custom software en AI-automatisering.',
  openGraph: {
    title: 'thebunyaminn. | Websites, software en AI die je bedrijf vooruithelpen',
    description:
      'Premium websites, custom software en AI-automatisering, ontworpen en gebouwd door Bünyamin Bölükbaş.',
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
  sameAs: [site.social.youtube, site.social.instagram, site.social.linkedin],
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
        <Analytics />
      </body>
    </html>
  );
}
