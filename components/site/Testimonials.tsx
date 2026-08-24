import { Reveal } from './Reveal';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/**
 * Statisch testimonial-grid (geen carousel). Alleen echte opdrachtgevers;
 * de sectie verdwijnt vanzelf als de lijst leeg is.
 */
const testimonials: Testimonial[] = [
  {
    quote:
      'Ik heb Bunyamin leren kennen tijdens een traject voor ondernemers. Hij is erg fijn om mee samen te werken en begreep direct wat ik nodig had. Mijn nieuwe website heeft me goed geholpen: ik krijg veel aanvragen binnen, door simpele oplossingen waar ik zelf niet aan gedacht had.',
    name: 'Ivan',
    role: 'Eigenaar FinClean',
  },
  {
    quote:
      'Ik was op zoek naar een nieuwe branding en een website die mijn occasions goed laat zien. We hebben intensief samengewerkt en Bunyamin dacht overal in mee, ook over zaken waar ik zelf niet aan dacht. Het resultaat is een merk waar ik trots op ben, en de aanvragen komen nu via de site binnen.',
    name: 'Ilias',
    role: 'Eigenaar Beek Automotive',
  },
];

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
