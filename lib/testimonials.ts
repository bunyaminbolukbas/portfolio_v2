export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Slug uit lib/projects.ts, zodat de case-pagina de quote kan tonen. */
  project?: string;
};

/** Alleen echte opdrachtgevers. Lege lijst = sectie verdwijnt vanzelf. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Ik heb Bunyamin leren kennen tijdens een traject voor ondernemers. Hij is erg fijn om mee samen te werken en begreep direct wat ik nodig had. Mijn nieuwe website heeft me goed geholpen: ik krijg veel aanvragen binnen, door simpele oplossingen waar ik zelf niet aan gedacht had.',
    name: 'Ivan',
    role: 'Eigenaar FinClean',
    project: 'finclean',
  },
  {
    quote:
      'Ik was op zoek naar een nieuwe branding en een website die mijn occasions goed laat zien. We hebben intensief samengewerkt en Bunyamin dacht overal in mee, ook over zaken waar ik zelf niet aan dacht. Het resultaat is een merk waar ik trots op ben, en de aanvragen komen nu via de site binnen.',
    name: 'Ilias',
    role: 'Eigenaar Beek Automotive',
    project: 'beek-automotive',
  },
];

export function testimonialForProject(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.project === slug);
}
