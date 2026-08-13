import type { Metadata } from 'next';
import { Reveal } from '@/components/site/Reveal';
import { ProjectForm } from '@/components/site/ProjectForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Bespreek een idee',
  description:
    'Vertel wat je wilt bereiken: meer klanten, meer omzet of minder handmatig werk. Je krijgt een eerlijk advies over de beste aanpak.',
};

export default function Start() {
  return (
    <div className="pt-16">
      <section className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mono-label text-muted">Bespreek een idee</p>
            <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Vertel me wat je wilt bereiken.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Een korte omschrijving is genoeg, geen lange intake. Je krijgt een
              eerlijk antwoord over de beste aanpak, ook als dat betekent dat je
              mij niet nodig hebt.
            </p>
            <div className="mt-10 space-y-3 border-t border-line pt-6">
              <p className="mono-label text-muted">Liever direct praten?</p>
              <p className="text-sm leading-relaxed text-muted">
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-4"
                >
                  Plan een gesprek van 30 minuten
                </a>
                . Vrijblijvend.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProjectForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
