'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/werkwijze', label: 'Werkwijze' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/brand/thebunyaminn-black.svg"
            alt="thebunyaminn."
            width={150}
            height={20}
            priority
            className="h-[15px] w-auto"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-ink ${
                pathname === link.href ? 'text-ink' : 'text-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/start"
            className="bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
          >
            Bespreek een idee
          </Link>
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="mono-label sm:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Sluiten' : 'Menu'}
        </button>
      </nav>

      {open ? (
        <div id="mobiel-menu" className="border-t border-line bg-paper px-5 py-6 sm:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-2xl font-medium tracking-tight"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start"
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Bespreek een idee
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
