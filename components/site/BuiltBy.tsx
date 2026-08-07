/**
 * Herbruikbare signature voor eigen site en klantwebsites.
 * Op klantsites: <BuiltBy href="https://…" /> met absolute URL naar thebunyaminn.
 */
export function BuiltBy({
  href = '/',
  className = '',
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`mono-label inline-flex items-center gap-1 opacity-50 transition-opacity hover:opacity-100 ${className}`}
    >
      built by thebunyaminn. <span aria-hidden>↗</span>
    </a>
  );
}
