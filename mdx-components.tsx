import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

/**
 * Typografie voor artikelen in /inzichten/. Eén onderwerp per kop, ruime regelafstand,
 * geen decoratie. Koppen krijgen een id zodat ze linkbaar zijn.
 */
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function textOf(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(textOf).join('');
  return '';
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2
        id={slugify(textOf(children))}
        className="mt-14 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-display text-xl font-medium tracking-tight">{children}</h3>
    ),
    p: ({ children }) => <p className="mt-6 text-lg leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="mt-6 space-y-3 pl-5 text-lg leading-relaxed">{children}</ul>,
    ol: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-3 pl-5 text-lg leading-relaxed">{children}</ol>
    ),
    li: ({ children }) => <li className="list-disc marker:text-muted">{children}</li>,
    strong: ({ children }) => <strong className="font-medium text-ink">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-2 border-ink pl-6 text-lg leading-relaxed text-muted">
        {children}
      </blockquote>
    ),
    a: ({ href = '', children }) =>
      href.startsWith('/') ? (
        <Link href={href} className="underline underline-offset-4 hover:text-accent">
          {children}
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-accent"
        >
          {children}
        </a>
      ),
    hr: () => <hr className="my-12 border-line" />,
    ...components,
  };
}
