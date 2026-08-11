import Link from 'next/link';
import { AccentUnderline } from '@/components/site/AccentUnderline';
import { Reveal } from '@/components/site/Reveal';
import { MediaSlot } from '@/components/site/MediaSlot';
import { MotionVideo } from '@/components/site/MotionVideo';
import { ProjectForm } from '@/components/site/ProjectForm';
import { NewsletterForm } from '@/components/site/NewsletterForm';
import { SocialPill } from '@/components/site/SocialPill';
import { Testimonials } from '@/components/site/Testimonials';
import { featuredProjects } from '@/lib/projects';
import { site } from '@/lib/site';

// De propositie: elke ondernemer wil een van deze drie uitkomsten.
const outcomes = [
  {
    id: 'meer-klanten',
    title: 'Meer klanten',
    hook: 'Je wilt gevonden worden en meer aanvragen binnenkrijgen.',
    build:
      'Premium websites, scherpe positionering en leadflows die bezoekers omzetten in aanvragen.',
    items: ['Websites & positionering', 'Leadflows & conversie', 'Vindbaarheid & merk'],
    proof: 'Beek Automotive: nieuw merk, meer leads via de site',
  },
  {
    id: 'meer-omzet',
    title: 'Meer omzet',
    hook: 'Je wilt meer halen uit de bezoekers en klanten die je al hebt.',
    build:
      'Offerte- en boekingstools, klantportalen en conversie-optimalisatie die van interesse omzet maken.',
    items: ['Offerte- & boekingstools', 'Klantportalen', 'Conversie-optimalisatie'],
    proof: 'FinClean: aanvragen komen volledig gekwalificeerd binnen',
  },
  {
    id: 'minder-handmatig-werk',
    title: 'Minder handmatig werk',
    hook: 'Je wilt uren terug die nu in repeterend werk gaan zitten.',
    build: 'AI-workflows, integraties en custom software die het werk van je overnemen.',
    items: ['AI-workflows', 'Procesautomatisering', 'Integraties (n8n, API’s)'],
    proof: 'Beek Automotive: voorraad loopt automatisch mee via Hexon',
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
  { term: 'Conversie', detail: 'Beweegt dit bezoekers tot actie?' },
  { term: 'Schaalbaarheid', detail: 'Werkt dit ook als je groeit?' },
];

export default function Home() {
  return (
    <>
      {/* 01 — HERO: de propositie als vraag */}
      <section className="relative flex min-h-svh flex-col justify-center pt-16">
        <div className="mx-auto w-full max-w-site px-5 sm:px-8">
          <Reveal>
            <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="underline decoration-accent decoration-[3px] underline-offset-8">
                Wat wil je?
              </span>{' '}
              Meer klanten, meer omzet of minder handmatig werk?
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Drie uitkomsten, één aanpak. Ik ontwerp en bouw wat daarvoor nodig
              is — van premium website tot automatisering.
            </p>
            <div className="mt-10 max-w-2xl">
              {outcomes.map((outcome, index) => (
                <a
                  key={outcome.id}
                  href={`#${outcome.id}`}
                  className="group flex items-baseline gap-5 border-t border-line py-4 transition-colors last:border-b hover:text-accent"
                >
                  <span className="mono-label text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                    {outcome.title}
                  </span>
                  <span aria-hidden className="ml-auto transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/start" className="btn-primary">
                Vertel wat je wilt bereiken
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 hidden border-t border-line sm:block">
          <div className="mx-auto flex max-w-site items-center justify-between px-5 py-5 sm:px-8">
            <p className="mono-label text-muted">Developer · Tech Lead · Ondernemer</p>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-muted transition-colors hover:text-accent"
            >
              YouTube — @thebunyaminn ↗
            </a>
          </div>
        </div>
      </section>

      {/* 02 — WIE: vertrouwen vóór het bewijs */}
      <section aria-labelledby="over-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaSlot
                image="/images/bunyamin-portret-strak.webp"
                alt="Bünyamin Bölükbaş"
                className="aspect-[4/5] max-w-md"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="over-titel"
                className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Ik ben Bünyamin Bölükbaş.
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <SocialPill platform="youtube" handle="@thebunyaminn" href={site.social.youtube} />
                <SocialPill platform="instagram" handle="@thebunyaminn" href={site.social.instagram} />
                <SocialPill platform="linkedin" handle="bunyaminbolukbas" href={site.social.linkedin} />
              </div>
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
              <div className="mt-10 max-w-xl border-t border-line pt-8">
                <p className="text-lg leading-relaxed text-muted">
                  Op YouTube en in mijn nieuwsbrief deel ik wat werkt, wat niet
                  werkt en wat ik onderweg leer.
                </p>
                <div className="mt-6">
                  <NewsletterForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — DE DRIE UITKOMSTEN */}
      <section aria-labelledby="uitkomsten-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="uitkomsten-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Drie <AccentUnderline>uitkomsten</AccentUnderline>. Dat is wat ik verkoop.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Soms is een website de oplossing, soms een automatisering — en
              soms hoef je niets te bouwen. Je krijgt een eerlijk antwoord, ook
              als dat betekent dat je mij niet nodig hebt.
            </p>
          </Reveal>
          <div className="mt-14">
            {outcomes.map((outcome) => (
              <Reveal key={outcome.id}>
                <div
                  id={outcome.id}
                  className="grid scroll-mt-16 gap-6 border-t border-line py-10 sm:grid-cols-12 sm:gap-8"
                >
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:col-span-4 sm:text-3xl">
                    {outcome.title}
                  </h3>
                  <div className="sm:col-span-5">
                    <p className="leading-relaxed">{outcome.hook}</p>
                    <p className="mt-3 leading-relaxed text-muted">{outcome.build}</p>
                  </div>
                  <div className="sm:col-span-3">
                    <ul className="space-y-2">
                      {outcome.items.map((item) => (
                        <li key={item} className="mono-label text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {outcome.proof} —{' '}
                      <a
                        href="#werk"
                        className="underline underline-offset-4 transition-colors hover:text-accent"
                      >
                        bekijk de case
                      </a>
                    </p>
                  </div>
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

      {/* 04 — BEWIJS: featured cases */}
      <section id="werk" aria-labelledby="werk-titel" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="werk-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Enkele voorbeelden van mijn werk.
            </h2>
          </Reveal>
          <div className="mt-14 space-y-24">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <MediaSlot
                    image={project.image}
                    video={project.video}
                    scrollImage={project.scrollImage}
                    slideImages={project.slideImages}
                    alt={`Website van ${project.name}`}
                    chromeUrl={project.url?.replace(/^https?:\/\//, '')}
                    fallbackText={project.name}
                    fallbackMeta={project.category}
                    className={`${project.image || project.video ? '' : 'aspect-video'} ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  />
                  <div>
                    <p className="mono-label text-muted">
                      {project.proves ? `${project.proves} — ${project.category}` : project.category}
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
                          className="mono-label border-b border-ink/30 pb-1 transition-colors hover:border-accent hover:text-accent"
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

        </div>
      </section>

      {/* 05 — DIFFERENTIATOR + AAN HET WERK */}
      <section aria-labelledby="aanpak-titel" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-20">
            <Reveal>
              <h2
                id="aanpak-titel"
                className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
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
            <Reveal delay={0.1} className="lg:justify-self-end">
              <div className="relative aspect-[4/5] w-56 overflow-hidden sm:w-64">
                <MotionVideo
                  src="/videos/over-mij.mp4"
                  poster="/videos/over-mij-poster.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="mono-label mt-3 text-paper/70">Aan het werk</p>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <Reveal key={item.term} className="bg-ink p-8">
                <h3 className="font-display text-xl font-medium tracking-tight">{item.term}</h3>
                <p className="mt-2 text-sm text-paper/70">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — SOCIAL PROOF (verschijnt zodra er echte testimonials zijn) */}
      <Testimonials />

      {/* 07 — PROCES */}
      <section aria-labelledby="proces-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="proces-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
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
              className="mono-label border-b border-ink/30 pb-1 transition-colors hover:border-accent hover:text-accent"
            >
              Meer over mijn werkwijze →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 08 — FINAL CTA: de vraag uit de hero komt terug */}
      <section aria-labelledby="cta-titel" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2
                id="cta-titel"
                className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                Meer klanten, meer omzet of minder handmatig werk?
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
                Vertel me waar je aan werkt en wat je wilt bereiken, dan hoor je
                welke aanpak ik zou kiezen.
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
