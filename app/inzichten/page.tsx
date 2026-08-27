import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/site/Reveal';
import { JsonLd } from '@/components/site/JsonLd';
import { breadcrumbList } from '@/lib/jsonld';
import { formatDate, getAllInzichten } from '@/lib/inzichten';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Inzichten: antwoorden op de vragen die ondernemers mij stellen',
  description:
    'Wat kost een website, wat heb je echt nodig, wat kun je automatiseren. Antwoorden uit mijn eigen projecten, met echte prijzen en zonder verzonnen cijfers.',
  path: '/inzichten',
});

export default async function Inzichten() {
  const artikelen = await getAllInzichten();

  return (
    <div className="pt-16">
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Inzichten', path: '/inzichten' },
        ])}
      />
      <section aria-labelledby="inzichten-titel" className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="mono-label text-muted">Inzichten</p>
          <h1
            id="inzichten-titel"
            className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl"
          >
            De vragen die ondernemers mij stellen.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Beantwoord vanuit mijn eigen projecten. Met echte prijzen, echte keuzes en zonder cijfers
            die ik niet gemeten heb.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {artikelen.map((a) => (
            <Reveal key={a.slug}>
              <article className="grid gap-4 border-b border-line py-10 sm:grid-cols-12 sm:gap-8">
                <div className="mono-label text-muted sm:col-span-3">
                  <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                  <span className="mx-2" aria-hidden="true">
                    /
                  </span>
                  {a.category}
                </div>
                <div className="sm:col-span-9">
                  <h2 className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                    <Link href={`/inzichten/${a.slug}/`} className="hover:text-accent">
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{a.answer}</p>
                  <Link
                    href={`/inzichten/${a.slug}/`}
                    className="mono-label mt-6 inline-block border-b border-ink/30 pb-1 transition-colors hover:border-accent hover:text-accent"
                  >
                    Lees verder
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
