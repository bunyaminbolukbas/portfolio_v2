import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { BuiltBy } from './BuiltBy';

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <Image
            src="/brand/thebunyaminn-white.svg"
            alt="thebunyaminn."
            width={280}
            height={37}
            className="h-7 w-auto sm:h-8"
          />

          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
              <span className="mono-label text-paper/40">Navigatie</span>
              <Link href="/werk" className="text-paper/70 transition-colors hover:text-paper">
                Werk
              </Link>
              <Link href="/werkwijze" className="text-paper/70 transition-colors hover:text-paper">
                Werkwijze
              </Link>
              <Link href="/start" className="text-paper/70 transition-colors hover:text-paper">
                Start een project
              </Link>
            </nav>

            <div className="flex flex-col gap-3 text-sm">
              <span className="mono-label text-paper/40">Volg</span>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/70 transition-colors hover:text-paper"
              >
                YouTube
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/70 transition-colors hover:text-paper"
              >
                Instagram
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/70 transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-paper/40">© 2026 thebunyaminn.</p>
          <BuiltBy className="text-paper" />
        </div>
      </div>
    </footer>
  );
}
