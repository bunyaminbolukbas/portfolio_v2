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
    return <p className="text-sm">Je bent aangemeld. Check je inbox.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
      <label htmlFor="nl-email" className="sr-only">
        E-mailadres
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
        <p className="mt-2 w-full text-sm text-muted">Er ging iets mis. Probeer het opnieuw.</p>
      ) : null}
    </form>
  );
}
