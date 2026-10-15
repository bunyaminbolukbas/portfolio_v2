import Link from 'next/link';

/** Artikelpagina's hebben geen navigatie; alleen het woordmerk brengt je terug naar de homepage. */
export default function InzichtenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="mx-auto flex max-w-site justify-center px-5 pt-10 sm:px-8">
        <Link href="/" className="text-[22px] font-semibold tracking-[-0.03em]">
          thebunyaminn<span className="text-accent">.</span>
        </Link>
      </header>
      {children}
    </>
  );
}
