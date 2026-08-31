'use client';

import { useId, useState } from 'react';

export type FaqItem = { question: string; answer: string };

/**
 * Editoriale accordion: één vraag per rij, dunne lijn ertussen, plus rechts.
 * Antwoorden staan altijd in de DOM (server-rendered, dus indexeerbaar) en
 * klappen visueel in via de grid-rows-truc; geen accordion-library nodig.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-faq-panel-${i}`;
        const buttonId = `${baseId}-faq-vraag-${i}`;
        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-7 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:py-9"
              >
                <span className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 h-6 w-6 shrink-0 sm:mt-2"
                >
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
                  <span
                    className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink motion-safe:transition-transform motion-safe:duration-200 ${
                      open ? 'rotate-90' : ''
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
              className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out ${
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-8 leading-relaxed text-muted sm:pb-10">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
