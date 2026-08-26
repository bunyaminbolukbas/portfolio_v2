import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/site/Reveal';
import { MediaSlot } from '@/components/site/MediaSlot';
import { CalendlyLink } from '@/components/site/CalendlyLink';
import { JsonLd } from '@/components/site/JsonLd';
import { breadcrumbList } from '@/lib/jsonld';
import { caseBlocks, getProject, projects } from '@/lib/projects';
import { testimonialForProject } from '@/lib/testimonials';
import { pageMetadata } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.name}: ${project.category.toLowerCase()}`,
    description: project.outcome ?? project.summary,
    path: `/werk/${project.slug}`,
  });
}

export default async function Case({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const testimonial = testimonialForProject(project.slug);
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Werk', path: '/werk' },
    { name: project.name, path: `/werk/${project.slug}` },
  ];

  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbList(crumbs)} />
      <article>
        <header className="mx-auto max-w-site px-5 pt-12 sm:px-8 sm:pt-16">
          <Reveal>
            <nav aria-label="Kruimelpad" className="mono-label text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                {crumbs.map((c, i) => (
                  <li key={c.path} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i < crumbs.length - 1 ? (
                      <Link href={c.path === '/' ? '/' : `${c.path}/`} className="hover:text-ink">
                        {c.name}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-ink">
                        {c.name}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="mono-label mt-10 text-muted">{project.category}</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {project.outcome ?? project.summary}
            </p>
          </Reveal>
        </header>

        <div className="mx-auto max-w-site px-5 py-14 sm:px-8 sm:py-20">
          <Reveal>
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
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <dl className="space-y-10">
                {project.outcome && project.summary !== project.outcome && (
                  <div>
                    <dt className="mono-label text-muted">In het kort</dt>
                    <dd className="mt-3 text-lg leading-relaxed">{project.summary}</dd>
                  </div>
                )}
                {caseBlocks.map(({ key, label }) =>
                  project[key] ? (
                    <div key={key}>
                      <dt className="mono-label text-muted">{label}</dt>
                      <dd className="mt-3 text-lg leading-relaxed">{project[key]}</dd>
                    </div>
                  ) : null,
                )}
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="space-y-6 border-t border-line pt-6 lg:border-t-0 lg:pt-0">
                {project.role && (
                  <div>
                    <dt className="mono-label text-muted">Mijn rol</dt>
                    <dd className="mt-2 leading-relaxed">{project.role}</dd>
                  </div>
                )}
                {project.client && (
                  <div>
                    <dt className="mono-label text-muted">Opdrachtgever</dt>
                    <dd className="mt-2 leading-relaxed">{project.client}</dd>
                  </div>
                )}
                {project.url && (
                  <div>
                    <dt className="mono-label text-muted">Live</dt>
                    <dd className="mt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-ink/30 pb-1 transition-colors hover:border-accent hover:text-accent"
                      >
                        {project.url.replace(/^https?:\/\//, '')} ↗
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>

          {testimonial && (
            <Reveal className="mt-20 border-t border-line pt-12">
              <blockquote className="max-w-3xl text-xl leading-relaxed sm:text-2xl">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-6">
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="mono-label mt-1 text-muted">{testimonial.role}</p>
              </footer>
            </Reveal>
          )}
        </div>
      </article>

      <section aria-labelledby="case-cta-titel" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="case-cta-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Wil jij dit ook voor je bedrijf?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              Vertel in een kort gesprek waar je naartoe wilt. Je krijgt een eerlijk antwoord over de
              beste aanpak.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CalendlyLink location={`case-${project.slug}`} className="btn-primary-inverted">
                Plan een call
              </CalendlyLink>
              <Link href="/werk" className="btn-secondary-inverted">
                Alle cases
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
