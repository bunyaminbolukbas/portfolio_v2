import { Reveal } from './Reveal';
import { testimonials } from '@/lib/testimonials';

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-titel" className="border-t border-line">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2
            id="testimonials-titel"
            className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Wat opdrachtgevers zeggen.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal key={t.name} className="bg-paper p-8">
              <blockquote className="text-lg leading-relaxed">{t.quote}</blockquote>
              <footer className="mt-6">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="mono-label mt-1 text-muted">{t.role}</p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
