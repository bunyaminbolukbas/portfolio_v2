import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/site/Reveal';
import { CalendlyLink } from '@/components/site/CalendlyLink';
import { FaqAccordion } from '@/components/site/FaqAccordion';
import { JsonLd } from '@/components/site/JsonLd';
import { articleJsonLd, breadcrumbList, faqJsonLd } from '@/lib/jsonld';
import { formatDate, getInzicht, inzichtSlugs } from '@/lib/inzichten';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return inzichtSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = await getInzicht(slug);
  if (!a) return {};
  return {
    ...pageMetadata({ title: a.title, description: a.description, path: `/inzichten/${a.slug}` }),
    openGraph: {
      ...pageMetadata({ title: a.title, description: a.description, path: `/inzichten/${a.slug}` }).openGraph,
      type: 'article',
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
      authors: [site.url],
    },
  };
}

export default async function InzichtPagina({ params }: Params) {
  const { slug } = await params;
  const a = await getInzicht(slug);
  if (!a) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Inzichten', path: '/inzichten' },
    { name: a.title, path: `/inzichten/${a.slug}` },
  ];

  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbList(crumbs)} />
      <JsonLd data={articleJsonLd(a)} />
      {a.faq && <JsonLd data={faqJsonLd(`/inzichten/${a.slug}`, a.faq)} />}

      <article className="mx-auto max-w-site px-5 pt-12 sm:px-8 sm:pt-16">
        <header className="max-w-3xl">
          <Reveal>
            <nav aria-label="Kruimelpad" className="mono-label text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/inzichten/" className="hover:text-ink">
                    Inzichten
                  </Link>
                </li>
              </ol>
            </nav>
            <p className="mono-label mt-10 text-muted">
              {a.category}
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              {a.readingMinutes} min lezen
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              {a.title}
            </h1>
          </Reveal>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-3xl lg:col-span-8">
            <Reveal>
              <section aria-label="Kort antwoord" className="border-l-2 border-ink pl-6">
                <p className="mono-label text-muted">Kort antwoord</p>
                <p className="mt-3 text-xl leading-relaxed">{a.answer}</p>
              </section>
            </Reveal>
            <Reveal>
              <div className="pb-8">
                <a.Body />
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="border-t border-line pt-6 lg:sticky lg:top-24">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/bunyamin-portret-strak.webp"
                    alt={`Portret van ${site.founder}`}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{site.founder}</p>
                    <p className="mono-label mt-1 text-muted">Developer en ondernemer</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  Ik bouw websites, software en automatisering voor ondernemers, met een achtergrond in
                  softwareontwikkeling. Ik schrijf hier over wat ik in echte projecten tegenkom.
                </p>
                <CalendlyLink location={`inzicht-${a.slug}`} className="btn-primary mt-6 w-full">
                  Plan een call
                </CalendlyLink>
              </div>
            </Reveal>
          </aside>
        </div>
      </article>

      {a.faq && (
        <section aria-labelledby="faq-titel" className="mx-auto max-w-site px-5 sm:px-8">
          <div className="mt-20 max-w-3xl sm:mt-28">
            <Reveal>
              <h2
                id="faq-titel"
                className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Veelgestelde vragen
              </h2>
              <div className="mt-10 sm:mt-14">
                <FaqAccordion items={a.faq} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section aria-labelledby="inzicht-cta-titel" className="mt-16 bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="inzicht-cta-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Waar wil je naartoe met je bedrijf?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              Vertel het in een kort gesprek. Je krijgt een eerlijk antwoord over de beste aanpak, ook
              als dat betekent dat je mij niet nodig hebt.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CalendlyLink location={`inzicht-${a.slug}-slot`} className="btn-primary-inverted">
                Plan een call
              </CalendlyLink>
              <Link href="/inzichten" className="btn-secondary-inverted">
                Meer inzichten
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
