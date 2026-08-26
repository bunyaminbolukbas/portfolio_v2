import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { CalendlyLink } from '@/components/site/CalendlyLink';
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

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-20">
            <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
              <span className="mono-label text-paper/70">Navigatie</span>
              <Link href="/werk/" className="text-paper/70 transition-colors hover:text-paper">
                Werk
              </Link>
              <Link href="/werkwijze" className="text-paper/70 transition-colors hover:text-paper">
                Werkwijze
              </Link>
              <CalendlyLink
                location="footer"
                className="text-paper/70 transition-colors hover:text-paper"
              >
                Plan een call
              </CalendlyLink>
            </nav>

            <div className="flex flex-col gap-3 text-sm">
              <span className="mono-label text-paper/70">Volg</span>
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

            <div className="flex flex-col gap-3 text-sm">
              <span className="mono-label text-paper/70">Contact</span>
              <a
                href={`mailto:${site.email}`}
                className="text-paper/70 transition-colors hover:text-paper"
              >
                {site.email}
              </a>
              <span className="text-paper/70">{site.city}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start gap-8 border-t border-line-dark pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-paper/50">
            {site.name} is een handelsnaam van {site.legalName}. KvK {site.kvk}. {site.city}.
          </p>
          <BuiltBy />
        </div>
      </div>
    </footer>
  );
}
