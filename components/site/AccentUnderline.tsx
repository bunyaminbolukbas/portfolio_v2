'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Signatuur-onderstreping: een accentlijn die zich onder het woord
 * uittekent zodra het in beeld komt. Bij prefers-reduced-motion staat
 * de lijn er direct; zonder JavaScript blijft de tekst gewoon leesbaar.
 */
export function AccentUnderline({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="relative inline-block">
      {children}
      <motion.span
        aria-hidden
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-accent"
      />
    </span>
  );
}
