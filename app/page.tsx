import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendlyLink } from '@/components/site/CalendlyLink';
import { AccentUnderline } from '@/components/site/AccentUnderline';
import { Reveal } from '@/components/site/Reveal';
import { MediaSlot } from '@/components/site/MediaSlot';
import { MotionVideo } from '@/components/site/MotionVideo';
import { SocialPill } from '@/components/site/SocialPill';
import { Testimonials } from '@/components/site/Testimonials';
import { caseBlocks, featuredProjects } from '@/lib/projects';
import { site } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Bünyamin Bölükbaş | Meer klanten, meer omzet, minder handmatig werk',
  description: site.description,
  path: '/',
  image: '/og.png',
});

// De propositie: elke ondernemer wil een van deze drie uitkomsten.
const outcomes = [
  {
    id: 'meer-klanten',
    title: 'Meer klanten',
    promise: 'Een website die gevonden wordt, vertrouwen wekt en bezoekers omzet in aanvragen.',
  },
  {
    id: 'meer-omzet',
    title: 'Meer omzet',
    promise: 'Slimmere klantflows die van interesse sneller een offerte, boeking of klant maken.',
  },
  {
    id: 'minder-handmatig-werk',
    title: 'Minder handmatig werk',
    promise: 'Software en automatisering die repetitief werk overneemt en je uren teruggeeft.',
  },
];

const aboutFacts = ['5+ jaar ervaring', 'Volledig eigenaarschap', 'Zelf ontworpen en gebouwd'];

const differentiators = [
  { term: 'Business', detail: 'Wat moet het opleveren?' },
  { term: 'Gebruiker', detail: 'Voor wie maken we dit?' },
  { term: 'Conversie', detail: 'Wat moet iemand vervolgens doen?' },
  { term: 'Groei', detail: 'Werkt dit ook als je bedrijf groeit?' },
];

const processSteps = [
  {
    number: '01',
    title: 'Begrijpen',
    description: 'Wat wil je bereiken en wat staat nu in de weg?',
  },
  {
    number: '02',
    title: 'Richting',
    description: 'We bepalen wat daarvoor gebouwd moet worden.',
  },
  {
    number: '03',
    title: 'Bouwen',
    description: 'Ik ontwerp en ontwikkel de oplossing.',
  },
  {
    number: '04',
    title: 'Lanceren',
    description: 'We zetten het live en verbeteren waar nodig.',
  },
];

export default function Home() {
  return (
    <>
      {/* 01 - HERO: wat bouw ik en wat levert het op */}
      <section className="relative flex min-h-svh flex-col justify-center pt-16">
        <div className="mx-auto w-full max-w-site px-5 sm:px-8">
          <Reveal>
            <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Ik bouw websites en software die je bedrijf{' '}
              <span className="underline decoration-accent decoration-[3px] underline-offset-8">
                vooruithelpen
              </span>
              .
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Voor mkb-ondernemers die willen groeien: meer aanvragen, meer omzet of minder
              handmatig werk. Ik ontwerp en bouw wat daarvoor nodig is.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CalendlyLink location="home-hero" className="btn-primary">
                Plan een call
              </CalendlyLink>
              <a href="#werk" className="btn-secondary">
                Bekijk mijn werk
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 - OVER MIJ: eerst wie, dan wat het oplevert */}
      <section aria-labelledby="over-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaSlot
                image="/images/bunyamin-portret-strak.webp"
                alt="Portret van Bunyamin"
                className="aspect-[4/5] max-w-md"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="over-titel"
                className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Ik ben Bunyamin.
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Al vijf jaar bouw ik dagelijks digitale producten, als developer en tech lead. Ik
                  werk met de nieuwste technologie, zodat wat ik bouw snel, veilig en klaar voor de
                  toekomst is. Dat niveau neem ik mee naar elk project dat ik voor ondernemers doe.
                </p>
                <p>
                  Bij mij werk je niet met een bureau, maar met de persoon die je oplossing zelf
                  ontwerpt en bouwt. Ik neem volledig eigenaarschap: van het eerste gesprek tot
                  livegang en daarna. Ik denk mee over je bedrijf en je klanten en zeg eerlijk wat
                  wel en niet werkt.
                </p>
              </div>
              <ul className="mt-8 flex max-w-xl flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
                {aboutFacts.map((fact) => (
                  <li key={fact} className="font-display font-medium tracking-tight">
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <SocialPill
                  platform="instagram"
                  handle="@thebunyaminn"
                  href={site.social.instagram}
                />
                <SocialPill
                  platform="linkedin"
                  handle="bunyaminbolukbas"
                  href={site.social.linkedin}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 - RESULTATEN: de drie uitkomsten */}
      <section aria-labelledby="uitkomsten-titel" className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="uitkomsten-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Alles wat ik bouw moet iets <AccentUnderline>opleveren</AccentUnderline>.
            </h2>
          </Reveal>
          <div className="mt-14">
            {outcomes.map((outcome) => (
              <Reveal key={outcome.id}>
                <div
                  id={outcome.id}
                  className="grid scroll-mt-16 gap-4 border-t border-line py-10 sm:grid-cols-12 sm:gap-8 last:border-b"
                >
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:col-span-4 sm:text-3xl">
                    {outcome.title}
                  </h3>
                  <p className="text-lg leading-relaxed sm:col-span-7 sm:text-xl">
                    {outcome.promise}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 - BEWIJS: featured cases */}
      <section id="werk" aria-labelledby="werk-titel" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="werk-titel"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Wat het andere ondernemers opleverde.
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
                    <h3 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                      {project.name}
                    </h3>
                    {project.outcome && (
                      <p className="mt-4 text-lg leading-relaxed sm:text-xl">{project.outcome}</p>
                    )}
                    <dl className="mt-8 space-y-6">
                      {caseBlocks.map(({ key, label }) =>
                        project[key] ? (
                          <div key={key}>
                            <dt className="mono-label text-muted">{label}</dt>
                            <dd className="mt-2 leading-relaxed text-muted">{project[key]}</dd>
                          </div>
                        ) : null,
                      )}
                    </dl>
                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                      {project.role && <p className="text-sm text-muted">{project.role}</p>}
                      <Link
                        href={`/werk/${project.slug}/`}
                        className="mono-label border-b border-ink/30 pb-1 transition-colors hover:border-accent hover:text-accent"
                      >
                        Lees de case
                      </Link>
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

      {/* Social proof verschijnt zodra er echte testimonials zijn */}
      <Testimonials />

      {/* 05 - WAAROM: ik bouw niet alleen wat je vraagt */}
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
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/80 sm:text-xl">
                Voordat ik iets bouw, wil ik begrijpen wat je ermee wilt bereiken. Daarom denk ik
                mee over je bedrijf, je klant en de beste oplossing. Soms is dat een website. Soms
                software. En soms is de beste oplossing juist veel simpeler.
              </p>
              <p className="mt-6 max-w-2xl font-display text-xl font-medium tracking-tight sm:text-2xl">
                Het doel is niet iets opleveren. Het doel is een probleem oplossen.
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
                <p className="mt-2 text-paper/70">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 - PROCES + 07 - ONDERHOUD */}
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
                <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              Ook na livegang kan ik betrokken blijven bij hosting, onderhoud, updates en
              doorontwikkeling.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 08 - FINAL CTA: één actie */}
      <section aria-labelledby="cta-titel" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2
              id="cta-titel"
              className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
            >
              Waar wil je naartoe met je bedrijf?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl">
              Plan een vrijblijvende call. Dan kijken we samen wat er nodig is om daar te komen.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <CalendlyLink
                location="home-slot"
                className="btn-primary-inverted"
              >
                Plan een call
              </CalendlyLink>
              <Link
                href="/start"
                className="text-sm text-paper/70 underline underline-offset-4 transition-colors hover:text-paper"
              >
                Liever eerst iets sturen? Stuur een bericht
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
