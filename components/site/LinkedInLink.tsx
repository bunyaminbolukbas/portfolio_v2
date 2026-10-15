'use client';

import type { ReactNode } from 'react';
import { track } from '@vercel/analytics';
import { site } from '@/lib/site';

/**
 * De ene CTA van de site: een bericht via LinkedIn. Registreert een `linkedin_click`-event
 * met de plek op de pagina, zodat we zien waar mensen contact opnemen.
 */
export function LinkedInLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={site.social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track('linkedin_click', { location })}
    >
      {children}
    </a>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.6 4.77 6V21h-4v-5c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.3-1.94 2.66V21h-4V9.75Z" />
    </svg>
  );
}
