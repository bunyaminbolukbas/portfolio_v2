'use client';

import type { ReactNode } from 'react';
import { LinkedinLogo } from '@phosphor-icons/react';
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
  return <LinkedinLogo weight="fill" aria-hidden="true" className={className} />;
}
