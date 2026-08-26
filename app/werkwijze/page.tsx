import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/site/Reveal';
import { CalendlyLink } from '@/components/site/CalendlyLink';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Werkwijze',
  description:
    'In vier duidelijke stappen naar het resultaat dat je zoekt: begrijpen, richting, bouwen, lanceren. Je weet altijd waar je aan toe bent.',
  path: '/werkwijze',
});

const steps = [
  {
    number: '01',
    title: 'Begrijpen',
    description:
      'We bespreken waar je aan werkt. Ik stel vragen om te begrijpen wat het je moet opleveren, wie je klant is en welk probleem er daadwerkelijk opgelost moet worden.',
    outcome: 'Je weet of we een match zijn',
  },
  {
    number: '02',
    title: 'Richting',
    description:
      'Positionering, structuur en oplossing worden helder, met een concept en een duidelijk plan. Je ziet precies wat je krijgt voordat er iets gebouwd wordt.',
    outcome: 'Je weet wat je krijgt',
  },
  {
    number: '03',
    title: 'Bouwen',
    description:
      'Design en development zonder onnodige complexiteit. Je krijgt wekelijkse updates en kunt tussentijds bijsturen. Geen verrassingen.',
    outcome: 'Je ziet het ontstaan',
  },
  {
    number: '04',
    title: 'Lanceren',
    description:
      'Je product gaat live. Ik help met de lancering, zorg dat alles werkt en blijf beschikbaar om te meten en te verbeteren.',
    outcome: 'Een product dat af is en blijft werken',
  },
];

const forYou = [
  'Je website straalt niet uit hoe goed je bedrijf werkelijk is',
  'Je werk zit vol handmatige stappen die software kan overnemen',
  'Je zoekt iemand die meedenkt over business én techniek, niet alleen bouwt',
  'Je wilt één aanspreekpunt van idee tot livegang',
];

export default function Werkwijze() {
  return (
    <div className="pt-16">
      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="mono-label text-muted">Werkwijze</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Van idee naar uitkomst. In vier stappen.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Geen agency-proces met twaalf fases en drie accountmanagers. Wel een duidelijke aanpak
            waarbij je altijd weet waar je aan toe bent.
          </p>
        </Reveal>
      </section>

      <section aria-label="De vier stappen" className="mx-auto max-w-site px-5 sm:px-8">
        <div className="border-t border-line">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <div className="grid gap-4 border-b border-line py-12 sm:grid-cols-12 sm:gap-8">
                <p className="mono-label text-muted sm:col-span-1">{step.number}</p>
                <h2 className="font-display text-2xl font-medium tracking-tight sm:col-span-3 sm:text-3xl">
                  {step.title}
                </h2>
                <p className="max-w-xl leading-relaxed text-muted sm:col-span-5">
                  {step.description}
                </p>
                <p className="mono-label self-start text-ink sm:col-span-3">→ {step.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="voor-jou-titel"
        className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mono-label text-muted">Herkenbaar?</p>
            <h2
              id="voor-jou-titel"
              className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Dit is voor jou als…
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line border-y border-line">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-4 py-5">
                  <span className="mono-label mt-1 text-muted" aria-hidden>
                    →
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="werkwijze-cta" className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-24 text-center sm:px-8">
          <Reveal>
            <h2
              id="werkwijze-cta"
              className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
            >
              Klaar voor stap één?
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CalendlyLink
                location="werkwijze-slot"
                className="btn-primary-inverted"
              >
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
