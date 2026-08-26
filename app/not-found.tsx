import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 pt-16 text-center">
      <p className="mono-label text-muted">404</p>
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
        Deze pagina bestaat niet.
      </h1>
      <Link href="/" className="btn-primary mt-8">
        Naar de homepage
      </Link>
    </div>
  );
}
