'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ProjectForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');

  const inputClass = dark
    ? 'w-full border border-paper/25 bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-paper/40 focus:border-paper focus:outline-none transition-colors'
    : 'input-field';
  const labelClass = `mono-label mb-2 block ${dark ? 'text-paper/50' : 'text-muted'}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch(site.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, type: 'project_aanvraag' }),
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={dark ? 'text-paper' : 'text-ink'}>
        <p className="font-display text-2xl font-medium tracking-tight">
          Dank, je aanvraag is binnen.
        </p>
        <p className={`mt-3 text-sm ${dark ? 'text-paper/60' : 'text-muted'}`}>
          Ik neem snel contact met je op. Liever direct praten?{' '}
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Plan een gesprek
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="pf-naam" className={labelClass}>
          Naam
        </label>
        <input id="pf-naam" name="naam" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="pf-bedrijf" className={labelClass}>
          Bedrijf
        </label>
        <input id="pf-bedrijf" name="bedrijf" autoComplete="organization" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="pf-email" className={labelClass}>
          E-mail
        </label>
        <input
          id="pf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="pf-type" className={labelClass}>
          Wat wil je laten bouwen?
        </label>
        <select id="pf-type" name="projecttype" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Maak een keuze
          </option>
          <option>Website</option>
          <option>Software of platform</option>
          <option>AI & automatisering</option>
          <option>Weet ik nog niet precies</option>
        </select>
      </div>
      <div>
        <label htmlFor="pf-budget" className={labelClass}>
          Indicatief budget
        </label>
        <select id="pf-budget" name="budget" className={inputClass} defaultValue="">
          <option value="">Nog geen idee</option>
          <option>Tot €5.000</option>
          <option>€5.000 tot €10.000</option>
          <option>€10.000 tot €25.000</option>
          <option>€25.000+</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="pf-bericht" className={labelClass}>
          Bericht
        </label>
        <textarea
          id="pf-bericht"
          name="bericht"
          rows={4}
          required
          placeholder="Vertel kort waar je aan werkt en wat er gebouwd moet worden."
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`${dark ? 'btn-primary-inverted' : 'btn-primary'} w-full disabled:opacity-60 sm:w-auto`}
        >
          {status === 'sending' ? 'Versturen…' : 'Verstuur'}
        </button>
        {status === 'error' ? (
          <p className={`mt-3 text-sm ${dark ? 'text-paper/70' : 'text-muted'}`}>
            Er ging iets mis bij het versturen. Probeer het opnieuw, of{' '}
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              plan direct een gesprek
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
