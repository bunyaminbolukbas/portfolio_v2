'use client';

import { useEffect, useState } from 'react';

/**
 * Crossfade-slideshow voor case-frames. Werkt met elk aantal slides,
 * respecteert prefers-reduced-motion (dan blijft de eerste slide staan)
 * en toont zonder JavaScript gewoon de eerste slide.
 */
export function SlidePreview({
  slides,
  interval = 4000,
}: {
  slides: { src: string; alt: string }[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      {slides.map((slide, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
