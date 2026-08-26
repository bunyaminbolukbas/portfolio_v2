'use client';

import type { MouseEvent, ReactNode } from 'react';
import { track } from '@vercel/analytics';
import { site } from '@/lib/site';

/**
 * De ene CTA van de site. Registreert een `calendly_click`-event met de plek op de
 * pagina, zodat we conversies kunnen meten in plaats van alleen pageviews.
 */
export function CalendlyLink({
  location,
  className,
  children,
  onClick,
}: {
  location: string;
  className?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={site.calendly}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        track('calendly_click', { location });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
