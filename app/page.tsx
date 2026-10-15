import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CopyEmail } from '@/components/site/CopyEmail';
import { LinkedInIcon, LinkedInLink } from '@/components/site/LinkedInLink';
import { WorkList, type WorkItem } from '@/components/site/WorkList';
import { getAllInzichten } from '@/lib/inzichten';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Bunyamin | Software engineer en tech lead',
  description: site.description,
  path: '/',
});

const work: WorkItem[] = [
  {
    name: 'OS49',
    kind: 'SaaS-platform',
    body: (
      <>
        <div className="builds" style={{ marginBottom: 14 }}>
          <span className="os49">
            <Image src="/images/logos/os49.png" alt="OS49" width={640} height={188} />
          </span>
        </div>
        <p>
          Mijn grootste project. OS49 is een groot SaaS-platform voor de leden van Club49.
          Boekingen, betalingen, personeel aansturen, boekhouding, een winstvoorspeller en
          standaardprocedures zitten in één systeem.
        </p>
        <p>
          Ik bouw mee aan het platform en stuur een team van developers in Vietnam aan. Ik zorg
          dat wat we bouwen klopt, getest is en goed live gaat.
        </p>
        <p className="role">
          <b>Mijn rol:</b> software engineer en tech lead
        </p>
        <div className="builds">
          <span className="lbl">Onderdeel van</span>
          <a href="https://club49.org/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/logos/club49.png" alt="" width={128} height={128} />
            Club49 ↗
          </a>
        </div>
        <Tags items={['React', 'Supabase', 'PostgreSQL', 'Mollie', 'OAuth', 'Vercel', 'n8n']} />
      </>
    ),
  },
  {
    name: 'Prodenko Health',
    kind: 'Abonnementen en e-mailautomatisering',
    body: (
      <>
        <p>
          Een geautomatiseerde klantreis van aankoop tot toegang en opvolging, met betaalflows,
          abonnementen en e-mailautomatisering.
        </p>
        <Tags items={['Plug&Pay', 'MailBlue', 'Automatisering', 'Integraties']} />
      </>
    ),
  },
  {
    name: 'Beek Automotive',
    kind: 'Rebranding en voorraadkoppeling',
    body: (
      <>
        <p>
          Een complete rebranding en een nieuwe website. Via een API-koppeling met Hexon staat de
          voorraad automatisch op de site, zonder dat iemand auto&apos;s met de hand invoert.
        </p>
        <Tags items={['Rebranding', 'Hexon', 'API-integratie', 'Webdevelopment']} />
      </>
    ),
  },
  {
    name: 'Finn Cleaning',
    kind: 'Aanvraagflow',
    body: (
      <>
        <p>
          Zakelijke website met een gerichte aanvraagflow, zodat bezoekers makkelijk een concrete
          aanvraag doen.
        </p>
        <Tags items={['Webdevelopment', 'Leadflow', 'Hosting']} />
      </>
    ),
  },
];

// Onderwerpen die nog geschreven worden; haal ze hier weg zodra het stuk online staat.
const upcoming = [
  'Een boekingsplatform bouwen is meer dan een kalender maken.',
  'Waarom een werkende applicatie nog geen betrouwbaar product is.',
  'Van developer naar tech lead: ineens is code niet meer je enige verantwoordelijkheid.',
  'Wat Brazilian Jiu-Jitsu mij leert over problemen oplossen.',
];

const quotes = [
  {
    text: 'Een behulpzame en slimme ontwikkelaar die de kleinste details niet ontgaat. De communicatie is altijd open en hij heeft een can-do mentaliteit. Ik kan Bunyamin aanbevelen aan iedereen die een full-stack ontwikkelaar zoekt die tot het uiterste gaat.',
    name: 'Maurice Derksen',
    role: 'Politie Nederland',
  },
  {
    text: 'Bunyamin heeft snel en goed werk geleverd. Moest er iets gefixt worden, dan was het ook echt snel geregeld. Ik ben erg tevreden.',
    name: 'Ilias Mrabet',
    role: 'eigenaar Beek Automotive',
  },
];

const monthYear = new Intl.DateTimeFormat('nl-NL', { month: 'short', year: 'numeric' });

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

export default async function Home() {
  const artikelen = await getAllInzichten();

  return (
    <div className="home">
      <Image
        className="portrait rise"
        src="/images/bunyamin-portret-strak.webp"
        alt="Portret van Bunyamin"
        width={152}
        height={152}
        priority
      />
      <Link className="logo rise" href="/">
        thebunyaminn<span>.</span>
      </Link>
      <h1 className="rise">
        Hey, ik bouw <em>software</em> voor ondernemers.
      </h1>
      <div className="pills rise">
        <LinkedInLink location="home-hero" className="pill li">
          <LinkedInIcon />
          Stuur me een bericht
        </LinkedInLink>
        <a className="pill" href={site.social.instagram} target="_blank" rel="noopener noreferrer">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
          </svg>
          Instagram
        </a>
      </div>

      <p className="lead rise">
        Ik ben Bunyamin, software engineer en tech lead bij{' '}
        <a className="co" href="https://club49.org/" target="_blank" rel="noopener noreferrer">
          <Image src="/images/logos/club49.png" alt="" width={128} height={128} />
          Club49
        </a>
        . Ik ontwikkel <em>SaaS-platformen</em>, bouw integraties en stuur internationale
        developmentteams aan. Van architectuur en complexe backendlogica tot betalingen,
        automatiseringen en <em>livegang</em>.
      </p>
      <p className="lead small rise">
        Buiten mijn werk train ik Brazilian Jiu-Jitsu, verdiep ik me graag in geschiedenis en werk
        ik aan mijn eigen ideeën.
      </p>

      <section className="card rise" id="werk" aria-labelledby="werk-titel">
        <figure>
          <Image
            src="/images/bunyamin-portret-strak.webp"
            alt=""
            width={1200}
            height={1500}
            sizes="520px"
          />
          <figcaption>Bunyamin, {site.city}</figcaption>
        </figure>
        <div className="body">
          <h2 id="werk-titel" className="label">
            Geselecteerd werk
          </h2>
          <WorkList items={work} />
        </div>
      </section>

      <section className="card rise" aria-labelledby="logboek-titel">
        <div className="body">
          <h2 id="logboek-titel" className="label">
            Logboek
          </h2>
          <ol className="timeline">
            {artikelen.map((a) => (
              <li key={a.slug}>
                <div className="meta">
                  <time dateTime={a.publishedAt}>{monthYear.format(new Date(a.publishedAt))}</time>{' '}
                  · artikel
                </div>
                <Link className="t" href={`/inzichten/${a.slug}/`}>
                  {a.title}
                </Link>
              </li>
            ))}
            {upcoming.map((title) => (
              <li key={title} className="todo">
                <div className="meta">binnenkort</div>
                <div className="t">{title}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="qwrap rise" aria-labelledby="quotes-titel">
        <h2 id="quotes-titel" className="label">
          Wat mensen over mij zeggen
        </h2>
        <div className="quotes">
          {quotes.map((q) => (
            <figure key={q.name}>
              <blockquote>“{q.text}”</blockquote>
              <figcaption>
                {q.name} · {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="end" id="contact" aria-labelledby="contact-titel">
        <h2 id="contact-titel">
          Wat wil <em>jij</em> live hebben?
        </h2>
        <p>
          Een idee voor software, een proces dat slimmer kan of een systeem dat gekoppeld moet
          worden? Vertel me wat je wilt bereiken. Dan kijken we samen wat er mogelijk is.
        </p>
        <div className="pills">
          <LinkedInLink location="home-slot" className="pill li">
            <LinkedInIcon />
            Stuur me een bericht
          </LinkedInLink>
        </div>
        <CopyEmail />
      </section>
    </div>
  );
}
