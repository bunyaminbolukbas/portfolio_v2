import Image from 'next/image';

/**
 * "made by thebunyaminn."-badge: herbruikbare sticker voor eigen site en
 * klantwebsites, helemaal onderaan de pagina.
 *
 * Op klantsites: absolute href naar thebunyaminn. gebruiken en de juiste
 * variant kiezen voor de achtergrond (dark = witte rand/logo).
 */
export function BuiltBy({
  href = '/',
  variant = 'dark',
  className = '',
}: {
  href?: string;
  variant?: 'dark' | 'light';
  className?: string;
}) {
  const dark = variant === 'dark';

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 border px-5 py-3 transition-colors ${
        dark ? 'border-paper/40 hover:border-paper' : 'border-ink/30 hover:border-ink'
      } ${className}`}
    >
      <span className={`mono-label ${dark ? 'text-paper/60' : 'text-muted'}`}>
        made by
      </span>
      <Image
        src={dark ? '/brand/thebunyaminn-white.svg' : '/brand/thebunyaminn-black.svg'}
        alt="thebunyaminn."
        width={150}
        height={20}
        className="h-[13px] w-auto"
      />
    </a>
  );
}
