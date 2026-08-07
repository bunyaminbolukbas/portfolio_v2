import Link from 'next/link';
import { Reveal } from '@/components/site/Reveal';
import { MediaSlot } from '@/components/site/MediaSlot';
import { ProjectForm } from '@/components/site/ProjectForm';
import { NewsletterForm } from '@/components/site/NewsletterForm';
import { Testimonials } from '@/components/site/Testimonials';
import { featuredProjects, proofNames } from '@/lib/projects';
import { site } from '@/lib/site';

const capabilities = [
  {
    number: '01',
    title: 'Websites & digital experiences',
    description:
      'Een website die net zo professioneel overkomt als het bedrijf erachter, en bezoekers richting actie beweegt.',
    items: ['Positionering & structuur', 'Design & development', 'Conversie & meetbaarheid'],
  },
  {
    number: '02',
    title: 'Software & digital products',
    description:
      'Custom platforms, portalen en dashboards, gebouwd rond hoe je bedrijf daadwerkelijk werkt.',
    items: ['Webapplicaties & portalen', 'Dashboards & interne tooling', 'Koppelingen met je systemen'],
  },
  {
    number: '03',
    title: 'AI & automation',
    description:
      'Stop met handmatig werk dat software voor je kan uitvoeren. Slimme workflows die je operatie efficiënter maken.',
    items: ['AI-workflows', 'Procesautomatisering', 'Integraties (n8n, API’s)'],
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
            <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Websites, software en AI die je bedrijf vooruithelpen.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Ik ontwerp en bouw digitale producten voor ondernemers en groeiende
              bedrijven. Van premium websites tot custom software en slimme
              automatisering: technologie, design en business in één hand.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/start" className="btn-primary">
                Start een project
              </Link>
              <Link href="/werk" className="btn-secondary">
                Bekijk mijn werk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT BEWIJS */}
      <section aria-label="Opdrachtgevers" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-14 sm:px-8">
          <Reveal>
            <p className="mono-label text-muted">Gewerkt met en gebouwd voor o.a.</p>
            <ul className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              {proofNames.map((name) => (
                <li
                  key={name}
                  className="font-display text-xl font-medium tracking-tight text-ink/40 transition-colors hover:text-ink sm:text-2xl"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 03 — PROBLEEM / VISIE */}
      <section aria-labelledby="visie-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="mono-label text-muted">Waar ik in geloof</p>
            <h2
              id="visie-titel"
              className="mt-6 max-w-4xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
            >
              Je bedrijf heeft niet méér software nodig. Het heeft{' '}
              <em className="not-italic underline decoration-1 underline-offset-8">betere</em>{' '}
              software nodig.
            </h2>
            <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Veel bedrijven hebben een website die technisch werkt, maar niet
                uitstraalt hoe goed het bedrijf werkelijk is. Dat kost vertrouwen.
                En dus aanvragen.
              </p>
              <p>
                Hetzelfde geldt intern: processen vol handmatige stappen die
                software allang zou kunnen overnemen. Ik bouw digitale producten
                die je positionering versterken én je operatie versimpelen.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — CAPABILITIES */}
      <section aria-labelledby="capabilities-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="mono-label text-muted">Wat ik doe</p>
            <h2
              id="capabilities-titel"
              className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Drie dingen. Goed.
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
              {/* Later: persoonlijke foto of korte video via image/video prop */}
              <MediaSlot fallbackText="tb." className="aspect-[4/5] max-w-md" />
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
                  Developer, tech lead en ondernemer. Ik bouw digitale producten,
                  stuur softwareteams aan en help bedrijven om ideeën en
                  operationele problemen te vertalen naar werkende technologie.
                </p>
                <p>
                  Geen bureau met lagen ertussen: je werkt direct met de persoon
                  die je product ontwerpt én bouwt.
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
                Ik bouw. Ik leer. Ik deel.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Over software bouwen, ondernemen en alles wat ik onderweg leer.
                Volg mee, of schrijf je in en blijf per mail op de hoogte.
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
                Vertel me waar je aan werkt. Je krijgt een eerlijk antwoord over
                de beste aanpak, ook als dat betekent dat je mij niet nodig hebt.
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
