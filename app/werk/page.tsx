import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/site/Reveal';
import { MediaSlot } from '@/components/site/MediaSlot';
import { CalendlyLink } from '@/components/site/CalendlyLink';
import { JsonLd } from '@/components/site/JsonLd';
import { breadcrumbList } from '@/lib/jsonld';
import { projects } from '@/lib/projects';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Werk: cases van ondernemers die ik heb geholpen',
  description:
    'Wat het andere ondernemers opleverde: per case de situatie, wat ik heb gedaan en het resultaat. Websites, software en automatisering voor FinClean, Beek Automotive en Club49.',
  path: '/werk',
});

export default function Werk() {
  return (
    <div className="pt-16">
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Werk', path: '/werk' },
        ])}
      />
      <section aria-labelledby="werk-titel" className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="mono-label text-muted">Werk</p>
          <h1
            id="werk-titel"
            className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl"
          >
            Wat het andere ondernemers opleverde.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Per case lees je waar de ondernemer stond, wat ik heb gebouwd en wat het opleverde. Geen
            technische specificaties, wel het resultaat.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.slug} className="bg-paper">
              <article className="flex h-full flex-col p-8">
                <MediaSlot
                  image={project.image}
                  video={project.video}
                  scrollImage={project.scrollImage}
                  slideImages={project.slideImages}
                  alt={`Website van ${project.name}`}
                  chromeUrl={project.url?.replace(/^https?:\/\//, '')}
                  fallbackText={project.name}
                  fallbackMeta={project.category}
                  className={project.image || project.video ? '' : 'aspect-video'}
                />
                <p className="mono-label mt-8 text-muted">{project.category}</p>
                <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  <Link href={`/werk/${project.slug}/`} className="hover:text-accent">
                    {project.name}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-muted">
                  {project.outcome ?? project.summary}
                </p>
                <Link
                  href={`/werk/${project.slug}/`}
                  className="mono-label mt-8 self-start border-b border-ink/30 pb-1 transition-colors hover:border-accent hover:text-accent"
                >
                  Lees de case
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="werk-cta-titel" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="werk-cta-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Waar wil je naartoe met je bedrijf?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              Vertel het in een kort gesprek. Je krijgt een eerlijk antwoord over de beste aanpak.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CalendlyLink location="werk-slot" className="btn-primary-inverted">
                Plan een call
              </CalendlyLink>
              <Link href="/start" className="btn-secondary-inverted">
                Stuur een bericht
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
