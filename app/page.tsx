import Link from 'next/link';
import { Reveal } from '@/components/site/Reveal';
import { MediaSlot } from '@/components/site/MediaSlot';
import { ProjectForm } from '@/components/site/ProjectForm';
import { NewsletterForm } from '@/components/site/NewsletterForm';
import { Testimonials } from '@/components/site/Testimonials';
import { featuredProjects } from '@/lib/projects';
import { site } from '@/lib/site';

const capabilities = [
  {
    number: '01',
    title: 'Meer omzet',
    description:
      'Digitale producten die klanten binnenhalen en vasthouden: van premium websites tot leadflows en klantportalen.',
    items: ['Websites & positionering', 'Leadflows & conversie', 'Klantportalen'],
  },
  {
    number: '02',
    title: 'Minder handmatig werk',
    description:
      'Stop met werk dat software voor je kan uitvoeren. AI en automatiseringen die je operatie efficiënter maken.',
    items: ['AI-workflows', 'Procesautomatisering', 'Integraties (n8n, API’s)'],
  },
  {
    number: '03',
    title: 'Betere systemen',
    description:
      'Custom software, dashboards en platforms, gebouwd rond hoe je bedrijf daadwerkelijk werkt.',
    items: ['Webapplicaties & platforms', 'Dashboards & interne tooling', 'Technische architectuur'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Begrijpen',
    description: 'We bepalen eerst welk probleem er daadwerkelijk opgelost moet worden.',
  },
  {
    number: '02',
    title: 'Richting',
    description: 'Positionering, structuur en oplossing worden helder, vóór er iets gebouwd wordt.',
  },
  {
    number: '03',
    title: 'Bouwen',
    description: 'Design en development zonder onnodige complexiteit, met wekelijkse updates.',
  },
  {
    number: '04',
    title: 'Lanceren',
    description: 'Live zetten, meten en verbeteren.',
  },
];

const differentiators = [
  { term: 'Business', detail: 'Wat moet dit opleveren?' },
  { term: 'Gebruiker', detail: 'Voor wie bouwen we dit echt?' },
  { term: 'Positionering', detail: 'Hoe kom je over op je markt?' },
  { term: 'Conversie', detail: 'Beweegt dit bezoekers tot actie?' },
  { term: 'Technologie', detail: 'De juiste oplossing, niet de hipste.' },
  { term: 'Schaalbaarheid', detail: 'Werkt dit ook als je groeit?' },
];

export default function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="flex min-h-svh flex-col justify-center pt-16">
        <div className="mx-auto w-full max-w-site px-5 sm:px-8">
          <Reveal>
            <p className="mono-label text-muted">Developer · Tech Lead · Ondernemer</p>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ik bouw digitale systemen die bedrijven slimmer laten werken.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Van probleem naar werkend product. Ik combineer business, design en
              development — van interne tools en automatiseringen tot digitale
              producten die klanten opleveren.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/start" className="btn-primary">
                Bespreek een idee
              </Link>
              <Link href="/werk" className="btn-secondary">
                Bekijk mijn werk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — PROBLEEM / VISIE */}
      <section aria-labelledby="visie-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="mono-label text-muted">Hoe ik denk</p>
            <h2
              id="visie-titel"
              className="mt-6 max-w-4xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
            >
              Ik begin niet bij technologie. Ik begin bij het{' '}
              <em className="not-italic underline decoration-1 underline-offset-8">probleem</em>.
            </h2>
            <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Soms is een website de oplossing. Soms een automatisering, soms
                custom software. En soms hoef je helemaal niets te bouwen.
              </p>
              <p>
                Daarom begint elk traject met begrijpen wat je bedrijf
                daadwerkelijk nodig heeft. Je krijgt een eerlijk antwoord, ook
                als dat betekent dat je mij niet nodig hebt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — CAPABILITIES */}
      <section aria-labelledby="capabilities-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="mono-label text-muted">Wat ik oplos</p>
            <h2
              id="capabilities-titel"
              className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Drie soorten problemen.
            </h2>
          </Reveal>
          <div className="mt-14">
            {capabilities.map((cap) => (
              <Reveal key={cap.number}>
                <div className="grid gap-6 border-t border-line py-10 sm:grid-cols-12 sm:gap-8">
                  <span className="mono-label text-muted sm:col-span-1">{cap.number}</span>
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:col-span-5 sm:text-3xl">
                    {cap.title}
                  </h3>
                  <p className="leading-relaxed text-muted sm:col-span-4">{cap.description}</p>
                  <ul className="space-y-2 sm:col-span-2">
                    {cap.items.map((item) => (
                      <li key={item} className="mono-label text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="mono-label text-muted">
              Hiervoor gebruik ik o.a. Next.js, TypeScript, Supabase, n8n en AI/LLM’s.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 05 — FEATURED WORK */}
      <section id="werk" aria-label="Uitgelicht werk" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <MediaSlot
                    image={project.image}
                    video={project.video}
                    alt={`Website van ${project.name}`}
                    chromeUrl={project.url?.replace(/^https?:\/\//, '')}
                    fallbackText={project.name}
                    fallbackMeta={`Project ${String(index + 1).padStart(2, '0')}`}
                    className={`${project.image || project.video ? '' : 'aspect-video'} ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  />
                  <div>
                    <p className="mono-label text-muted">
                      Project {String(index + 1).padStart(2, '0')} / {project.category}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                      {project.name}
                    </h3>
                    <dl className="mt-8 space-y-6">
                      {project.problem && (
                        <div>
                          <dt className="mono-label text-muted">Probleem</dt>
                          <dd className="mt-2 leading-relaxed">{project.problem}</dd>
                        </div>
                      )}
                      {project.solution && (
                        <div>
                          <dt className="mono-label text-muted">Oplossing</dt>
                          <dd className="mt-2 leading-relaxed">{project.solution}</dd>
                        </div>
                      )}
                      {project.result && (
                        <div>
                          <dt className="mono-label text-muted">Resultaat</dt>
                          <dd className="mt-2 leading-relaxed">{project.result}</dd>
                        </div>
                      )}
                      {project.role && (
                        <div>
                          <dt className="mono-label text-muted">Mijn rol</dt>
                          <dd className="mt-2 leading-relaxed">{project.role}</dd>
                        </div>
                      )}
                    </dl>
                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                      <p className="mono-label text-muted">{project.stack.join(' · ')}</p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono-label border-b border-ink/30 pb-1 transition-colors hover:border-ink"
                        >
                          Bekijk live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <Link href="/werk" className="btn-secondary w-full sm:w-auto">
              Alle projecten →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 06 — DIFFERENTIATOR */}
      <section aria-labelledby="aanpak-titel" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="mono-label text-paper/50">Waarom het werkt</p>
            <h2
              id="aanpak-titel"
              className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
            >
              Ik bouw niet alleen wat je vraagt.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              Goede software begint niet bij code, maar bij begrijpen wat je
              bedrijf nodig heeft. Ik werkte als developer en tech lead in
              softwareteams en bouw nu producten voor ondernemers. Ik denk dus
              mee over meer dan techniek alleen, en neem ownership over het
              eindresultaat.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <Reveal key={item.term} className="bg-ink p-8">
                <p className="mono-label text-paper/40">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight">
                  {item.term}
                </h3>
                <p className="mt-2 text-sm text-paper/60">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — SOCIAL PROOF (verschijnt zodra er echte testimonials zijn) */}
      <Testimonials />

      {/* 08 — PROCES */}
      <section aria-labelledby="proces-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="mono-label text-muted">Zo werken we samen</p>
            <h2
              id="proces-titel"
              className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Vier stappen. Geen gedoe.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Reveal key={step.number} className="bg-paper py-8 sm:p-8 sm:pl-0 lg:pl-8">
                <p className="mono-label text-muted">{step.number}</p>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/werkwijze"
              className="mono-label border-b border-ink/30 pb-1 transition-colors hover:border-ink"
            >
              Meer over mijn werkwijze →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 09 — ABOUT / PERSONAL BRAND */}
      <section aria-labelledby="over-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaSlot
                video="/videos/over-mij.mp4"
                poster="/videos/over-mij-poster.jpg"
                className="aspect-[4/5] max-w-md"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mono-label text-muted">De persoon achter het werk</p>
              <h2
                id="over-titel"
                className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Ik ben Bünyamin Bölükbaş.
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Developer, tech lead en ondernemer. Ik werk als Tech Lead bij
                  Code49, het bedrijf van Tibor Olgers, waar ik aan OS49 bouw:
                  architectuur, development en het aansturen van het
                  developmentteam.
                </p>
                <p>
                  Daarnaast bouw ik zelfstandig digitale producten voor
                  ondernemers. Geen bureau met lagen ertussen: je werkt direct
                  met de persoon die je product ontwerpt én bouwt.
                </p>
              </div>
              <div className="mt-8 flex gap-6">
                {(
                  [
                    ['YouTube', site.social.youtube],
                    ['Instagram', site.social.instagram],
                    ['LinkedIn', site.social.linkedin],
                  ] as const
                ).map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-label border-b border-ink/30 pb-1 transition-colors hover:border-ink"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10 — CONTENT / PERSONAL BRAND */}
      <section aria-labelledby="content-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="mono-label text-muted">Content</p>
              <h2
                id="content-titel"
                className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Ik bouw software en deel wat ik onderweg leer.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Op YouTube en in mijn nieuwsbrief deel ik wat werkt, wat niet
                werkt en wat ik onderweg leer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {(
                  [
                    ['YouTube', site.social.youtube],
                    ['Instagram', site.social.instagram],
                    ['LinkedIn', site.social.linkedin],
                  ] as const
                ).map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-5 py-3"
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <NewsletterForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11 — FINAL CTA */}
      <section aria-labelledby="cta-titel" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="mono-label text-paper/50">Volgende stap</p>
              <h2
                id="cta-titel"
                className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                Heb je iets dat gebouwd moet worden?
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
                Vertel me waar je aan werkt, dan hoor je welke aanpak ik zou
                kiezen.
              </p>
              <p className="mt-8 text-sm text-paper/60">
                Liever direct praten?{' '}
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-paper"
                >
                  Plan een gesprek van 30 minuten
                </a>
                . Vrijblijvend.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectForm dark />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
