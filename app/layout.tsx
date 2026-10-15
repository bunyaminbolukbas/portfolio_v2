import './globals.css';
import type { Metadata } from 'next';
import { Inter, Instrument_Serif, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Footer } from '@/components/site/Footer';
import { JsonLd } from '@/components/site/JsonLd';
import { siteGraph } from '@/lib/jsonld';
import { site } from '@/lib/site';

// Strakke sans voor alles, een cursieve serif voor losse accentwoorden en een mono voor labels
// (naar het voorbeeld van danieldalen.com). latin-ext voor de ş in Bölükbaş.
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

const defaultTitle = 'Bunyamin | Software engineer en tech lead';

// Verificatiecodes komen uit Vercel-env (build-time). Zonder waarde wordt de tag weggelaten.
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: defaultTitle,
    template: '%s | thebunyaminn.',
  },
  description: site.description,
  authors: [{ name: site.founder, url: site.url }],
  creator: site.founder,
  publisher: site.name,
  // Volledige snippets en grote afbeeldingsvoorbeelden toestaan: dit is wat
  // Google (AI Overviews, AI Mode) en Bing (Copilot) nodig hebben om te citeren.
  // Nooit noarchive, nocache of nosnippet toevoegen.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification ? { other: { 'msvalidate.01': bingVerification } } : {}),
        },
      }
    : {}),
  openGraph: {
    title: defaultTitle,
    description: site.description,
    url: site.url,
    locale: 'nl_NL',
    type: 'website',
    siteName: site.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: site.description,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <body className="font-sans">
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Direct naar inhoud
        </a>
        <main id="inhoud">{children}</main>
        <Footer />
        <JsonLd data={siteGraph} />
        <Analytics />
      </body>
    </html>
  );
}
