import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/site/Reveal';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Werk',
  description:
    'Een selectie van websites, software en automatiseringen die ik ontwierp en bouwde voor ondernemers, bedrijven en organisaties.',
};

export default function Werk() {
  return (
    <div className="pt-16">
      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="mono-label text-muted">Werk</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Gebouwd voor bedrijven die vooruit willen.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Websites, software en automatiseringen: van dashboards en portalen
            tot AI-workflows. Hieronder een overzicht van projecten waar ik aan
            werkte.
          </p>
        </Reveal>
      </section>

      <section aria-label="Alle projecten" className="mx-auto max-w-site px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="border-t border-line">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article className="grid gap-4 border-b border-line py-10 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                <p className="mono-label text-muted sm:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="sm:col-span-4">
                  <h2 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                    {project.name}
                  </h2>
                  <p className="mono-label mt-3 text-muted">{project.category}</p>
                </div>
                <p className="leading-relaxed text-muted sm:col-span-5">{project.summary}</p>
                <p className="mono-label text-muted sm:col-span-2">
                  {project.stack.join(' · ')}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Hier kan jouw project staan.
            </h2>
            <Link href="/start" className="btn-primary">
              Bespreek een idee
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
