import { site } from '@/lib/site';
import { BuiltBy } from './BuiltBy';

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[720px] flex-col items-center gap-5 px-4 pb-12 pt-10 text-center text-[13px] text-ink/45">
      <p className="leading-relaxed">
        © {new Date().getFullYear()} thebunyaminn<span className="text-accent">.</span>
        <br />
        Handelsnaam van {site.legalName}, KvK <span className="tabular-nums">{site.kvk}</span>
      </p>
      <BuiltBy variant="light" />
    </footer>
  );
}
