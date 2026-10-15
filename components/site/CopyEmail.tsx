'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

/** Mailadres als tekst met een klik-om-te-kopiëren; werkt ook zonder mailprogramma. */
export function CopyEmail() {
  const [hint, setHint] = useState('kopieer');

  return (
    <button
      type="button"
      className="copy"
      onClick={() => {
        navigator.clipboard
          .writeText(site.email)
          .then(() => setHint('gekopieerd'))
          .catch(() => setHint(site.email));
      }}
    >
      <span>{site.email}</span>
      <span className="hint" aria-live="polite">
        {hint}
      </span>
    </button>
  );
}
