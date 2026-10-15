'use client';

import { useState, type ReactNode } from 'react';

export type WorkItem = {
  name: string;
  kind: string;
  body: ReactNode;
};

/** Uitklapbare werkregels: naam en soort zichtbaar, het verhaal pas na een klik. */
export function WorkList({ items, initiallyOpen = 0 }: { items: WorkItem[]; initiallyOpen?: number }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([initiallyOpen]));

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <ul className="rows">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const panelId = `werk-${i}`;
        return (
          <li key={item.name} data-open={isOpen}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              <span>
                <strong>{item.name}</strong>
                <span className="sep">_</span>
                <span className="d">{item.kind}</span>
              </span>
              <span className="plus" aria-hidden="true">
                +
              </span>
            </button>
            <div className="more" id={panelId}>
              <div>{item.body}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
