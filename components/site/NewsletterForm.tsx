'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(site.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, type: 'newsletter_signup' }),
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-sm">
        <p>Je bent aangemeld voor de nieuwsbrief. Check je inbox.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 text-muted underline underline-offset-4 transition-colors hover:text-ink"
        >
          Ander e-mailadres aanmelden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-wrap gap-2">
      <label htmlFor="nl-email" className="sr-only">
        E-mailadres voor de nieuwsbrief
      </label>
      <input
        id="nl-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="naam@email.com"
        required
        className="input-field flex-1"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'sending' ? '…' : 'Aanmelden'}
      </button>
      {status === 'error' ? (
        <p className="w-full text-sm text-muted">
          Aanmelden is niet gelukt. Controleer je e-mailadres en probeer het opnieuw.
        </p>
      ) : null}
    </form>
  );
}
