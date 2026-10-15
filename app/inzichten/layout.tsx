import Image from 'next/image';
import Link from 'next/link';

/** Artikelpagina's hebben geen navigatie; alleen het logo brengt je terug naar de homepage. */
export default function InzichtenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="mx-auto flex max-w-site justify-center px-5 pt-10 sm:px-8">
        <Link href="/" aria-label="thebunyaminn.">
          <Image
            src="/brand/thebunyaminn-black.svg"
            alt="thebunyaminn."
            width={6766}
            height={900}
            className="h-5 w-auto"
          />
        </Link>
      </header>
      {children}
    </>
  );
}
