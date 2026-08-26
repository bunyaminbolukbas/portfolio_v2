# Plan: vindbaar in Google, AI Overviews, Gemini, ChatGPT, Copilot, Claude en Perplexity

Datum: 25 augustus 2026. Bronnen en onderbouwing: `docs/seo/bronnen-ai-vindbaarheid.md`.

## Uitgangspunt in één zin

Alle AI-zoekmachines putten uit twee indexen (Google en Bing) en citeren pagina's die geïndexeerd, snippet-eligible en inhoudelijk uniek zijn. Er bestaat geen aparte "AI-SEO"; er bestaat wel een lijst technische fouten die je uitsluiten, en één echte hefboom: eerste-hands content die een model niet zelf kan verzinnen.

## Waar de site nu staat (audit 25 aug 2026)

Goed:
- Server-rendered, semantische HTML, correcte h1/h2/h3, geen content achter JS
- Metadata met OG-image, `lang="nl"`, Person + ProfessionalService JSON-LD
- robots.ts en sitemap.ts aanwezig

Gaten die uitsluiten of schaden:
1. Geen canonical op enige pagina
2. `/portfolio/` en `/contact/` zijn indexeerbare duplicaten van de homepage (client-side redirect met HTTP 200, geen noindex)
3. Geen Search Console- en geen Bing Webmaster Tools-verificatie: je kunt nu niets meten
4. Sitemap: 3 URL's, `lastModified` is de builddatum
5. Geen expliciete robots-directives (`max-image-preview`, `max-snippet`)

Gaten die kansen laten liggen:
6. Nul informatiecontent: geen kennisbank, geen FAQ, geen aparte case- of over-pagina's. AI-assistenten hebben niets om te citeren behalve de homepage.
7. `club49` staat in `lib/projects.ts` maar is nergens zichtbaar
8. Geen NAP (plaats, e-mail, KvK) op de site en niet in structured data
9. OG-metadata is op elke pagina identiek aan de homepage
10. Geen conversie-events (Calendly-klik, formulier)
11. Domein 5x hardcoded

## Beslissingen die jij moet nemen

| # | Vraag | Mijn advies |
|---|---|---|
| A | Trainingsbots (GPTBot, ClaudeBot, Google-Extended, CCBot) toelaten of blokkeren? | **Toelaten.** Voor een personal brand wil je dat modellen je naam kennen, ook zonder live zoeken. Google-Extended blokkeren haalt je uit Gemini-app-antwoorden. Blokkeren heeft geen zichtbaarheidsvoordeel. |
| B | Welke bedrijfsgegevens mogen op de site? | Minimaal plaats (stad), e-mail en KvK-nummer in de footer en in Organization-schema. Telefoon optioneel. Zonder bezoekadres geen LocalBusiness maar ProfessionalService/Organization (wat er nu al staat). |
| C | Is "Code49" de juridische entiteit achter thebunyaminn.? | Nu staat `worksFor: Code49` in het Person-schema en je mail is @code49.nl. Kies één consistent verhaal (bijv. "thebunyaminn. is het merk van Bünyamin Bölükbaş, eigenaar van Code49") en gebruik dat identiek op site, LinkedIn en Instagram. |
| D | Kennisbank ja/nee? | **Ja.** Dit is volgens Google de grootste hefboom. Zonder eigen content ben je alleen citeerbaar voor je eigen naam. |
| E | Static export houden? | Ja. Alles in dit plan werkt met `output: 'export'`; redirects gaan via `vercel.json`. |

Aannames als je niets zegt: A toelaten, B alleen plaats + e-mail + KvK, D ja, E ja.

## Fase 1: technische basis (1 dag werk)

Doel: geen enkele pagina meer die om technische redenen niet geciteerd kan worden, en meten aanzetten.

1.1 **Centraliseer het domein** in `lib/site.ts` (`url: 'https://bunyaminbolukbas.com'`) en gebruik het in `layout.tsx`, `sitemap.ts`, `robots.ts` en JSON-LD.

1.2 **Canonical per pagina** via `alternates.canonical` in de metadata van elke `page.tsx` (met trailing slash, want `trailingSlash: true`).

1.3 **Robots-directives** in root-metadata:
```ts
robots: {
  index: true, follow: true,
  googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
}
```
Nooit `noarchive`, `nocache` of `nosnippet` (Bing sluit je daarmee uit van Copilot).

1.4 **Redirect-stubs vervangen door 301's.** Verwijder `app/portfolio/page.tsx` en `app/contact/page.tsx`, voeg `vercel.json` toe:
```json
{ "redirects": [
  { "source": "/portfolio", "destination": "/#werk", "permanent": true },
  { "source": "/contact", "destination": "/start", "permanent": true }
] }
```
(`/portfolio` gaat in fase 2 naar `/werk/`.)

1.5 **robots.ts** uitbreiden: expliciet `Allow: /` voor `bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Applebot`; `User-agent: *` blijft allow. Trainingsbots volgens beslissing A.

1.6 **Verificatie**: Google Search Console (domein-property via DNS TXT bij je registrar) en Bing Webmaster Tools (importeer vanuit Search Console, of meta-tag via `metadata.verification.other['msvalidate.01']`). Sitemap in beide indienen. In Search Console controleren dat "Search generative AI control" op ingesloten staat.

1.7 **IndexNow**: keyfile in `public/<key>.txt`; script `scripts/indexnow.mjs` dat na een productie-deploy alle sitemap-URL's naar `https://api.indexnow.org/indexnow` post. Aanroepen via GitHub Action op push naar `main` (of `vercel` deploy hook). Google gebruikt IndexNow niet; die krijgt de sitemap.

1.8 **Sitemap** met echte datums: `lastModified` per route uit een `updatedAt`-veld in data (cases in `lib/projects.ts`, artikelen in hun frontmatter), niet `new Date()`.

1.9 **Logo linksboven**: teruggedraaid op verzoek; de nav houdt het woordmerk `thebunyaminn-black.svg`. Wel toegevoegd: `app/apple-icon.png` (180x180) en `public/brand/tb-logo-512.png` voor het Organization-schema.

1.10 **Per-pagina OG**: `openGraph.title`/`description` per pagina meegeven, plus `opengraph-image.tsx` per route (werkt met static export) zodat gedeelde links in LinkedIn/WhatsApp niet allemaal de homepage-kaart tonen.

1.11 **Conversie-events** met `track()` uit `@vercel/analytics`: `calendly_click`, `form_submit`. Filter later op `utm_source=chatgpt.com` en referrers van perplexity.ai, copilot.microsoft.com, gemini.google.com.

Klaar als: Rich Results Test en URL Inspection zonder fouten, `site:bunyaminbolukbas.com` toont alleen bedoelde URL's, Bing WMT toont de sitemap als verwerkt.

## Fase 2: structuur en entiteit (2 à 3 dagen)

Doel: aparte, citeerbare URL's voor wie je bent, wat je doet en wat je hebt gedaan, met één onderwerp per URL (Bing) en consistente entiteit (Bing + Google).

2.1 **`/over-mij/`**: wie, ervaring, voor wie je werkt, hoe je werkt, links naar LinkedIn/Instagram. JSON-LD `ProfilePage` met `mainEntity: Person` (name, alternateName, jobTitle, image, sameAs, worksFor). Dit is Google's expliciete voorbeeld "An 'About Me' page".

2.2 **`/werk/[slug]/`** via `generateStaticParams` uit `lib/projects.ts` (slugs bestaan al): finclean, beek-automotive, club49. Structuur per case volgens homepage-funnel-principe: situatie, wat er is gedaan, resultaat, met cijfers waar toegestaan en een klantquote als die er is. Eén CTA "Plan een call". `BreadcrumbList` JSON-LD. `/werk/` als overzicht. Homepage-cases linken door.

2.3 **Organization-schema aanvullen** (op homepage en over-pagina): `logo` (de 512-PNG), `email`, `address.addressLocality`, `vatID`/KvK via `identifier`, `founder`, `sameAs`. `WebSite`-schema met `name` en `publisher`. Alles alleen als het ook zichtbaar op de pagina staat (Google en Bing eisen dat).

2.4 **NAP in footer**: bedrijfsnaam, plaats, e-mail, KvK. Consistent met LinkedIn en Instagram-bio.

2.5 **Zichtbare FAQ** op `/start/` (5 à 8 echte vragen die klanten stellen: kosten, doorlooptijd, wat je wel/niet doet, hoe een eerste call verloopt). Gewone `<h3>` + `<p>`, geen accordion, geen FAQPage-schema (heeft geen effect meer). Dit is precies het Q&A-formaat dat Bing voor Copilot aanbeveelt en het levert antwoorden op fan-out-queries.

2.6 **Titels, H1 en descriptions uitlijnen** per pagina (Bing: moeten overeenkomen en de pagina samenvatten). Kernboodschap in de eerste alinea. Geen streepjes in copy (huisregel).

2.7 **Google Business Profile** alleen als je een servicegebied wilt claimen; voor een online dienstverlener zonder bezoekadres is dit optioneel. Wel: knowledge panel claimen zodra die verschijnt (via Search Console-verificatie).

Klaar als: elke URL heeft eigen title/description/canonical/OG, structured data valideert, sitemap bevat alles met echte datums.

## Fase 3: kennisbank (doorlopend, start in week 2)

Doel: de enige echte hefboom. Content die een model niet zelf kan schrijven, omdat het jouw ervaring is.

3.1 **`/kennis/`** met artikelen als MDX of TS-data in `content/kennis/`, statisch gegenereerd. Per artikel: `Article`-schema met `author: Person` (url naar `/over-mij/`), `datePublished`, `dateModified`, afbeelding. `BreadcrumbList`. Zichtbare auteur en datum. Eén CTA onderaan.

3.2 **Onderwerpkeuze**: alleen non-commodity. Niet "7 tips voor een goede website" maar wat je bij Finclean, Beek Automotive en Club49 concreet hebt gezien: wat het probleem was, wat je hebt geprobeerd, wat wel en niet werkte, wat het opleverde. Koppen als vragen die een ondernemer letterlijk aan ChatGPT stelt ("Wat kost het om offertes te automatiseren voor een autobedrijf?"), met een antwoord van 1 à 2 zinnen direct onder de kop en daarna de uitleg.

3.3 **Ritme**: één artikel per twee weken. Bij publicatie: `lastmod` bijwerken, IndexNow-ping, delen op LinkedIn (echte externe link, geen "mention-farming").

3.4 **Interne links**: artikelen linken naar de relevante case en naar `/start/`; cases linken terug naar artikelen.

3.5 **Startlijst** (5 artikelen uit bestaande projecten):
1. Finclean: wat er veranderde in leads na de nieuwe site, met cijfers
2. Beek Automotive: welk handmatig werk je hebt geautomatiseerd en hoeveel uur dat scheelt
3. Club49: waarom dit project nu onzichtbaar is en wat het leerde
4. "Website of webapplicatie: hoe je kiest" vanuit je eigen projecten
5. "Wat een eerste call met mij oplevert" (verwachtingen, voorbereiding, uitkomst)

## Fase 4: meten en bijsturen (maandelijks, 30 min)

- Search Console: Performance (incl. gen-AI-rapport zodra beschikbaar), Index coverage, Rich results
- Bing Webmaster Tools: AI Performance (citaties in Copilot), indexstatus, IndexNow-status
- Vercel Analytics: referrers chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com; events `calendly_click`, `form_submit`
- Handmatig: vraag ChatGPT, Gemini, Perplexity en Copilot elke maand drie vragen ("wie bouwt websites voor MKB in [plaats]", "Bünyamin Bölükbaş developer", "thebunyaminn") en noteer of en welke pagina wordt geciteerd

## Bewust niet doen

- `llms.txt` (geen aanbieder gebruikt het; mag als je wilt, tien minuten, geen prioriteit)
- FAQPage- of AggregateRating-schema
- Meta keywords, woordaantal-doelen, "AI-geoptimaliseerde" herschrijvingen
- Aparte landingspagina's per zoekvariant of per stad (spam-risico bij Google)
- `noarchive`/`nocache`/`nosnippet` waar dan ook
- Homepage aanpassen buiten het logo: funnel-principes blijven staan (één CTA, geen tech stack, geen nieuwsbrief)

## Status

**26 aug 2026: fase 1 volledig geïmplementeerd, plus uit fase 2 de onderdelen zonder input van de gebruiker** (`/werk/` overzicht, `/werk/[slug]/` case-pagina's met zichtbaar kruimelpad en BreadcrumbList, Organization-logo, WebSite-schema, @id-koppelingen). Build en lint slagen; output geverifieerd.

Domein (26 aug 2026): hoofddomein is `https://thebunyaminn.nl` (apex primair, `www` verwijst 308 door). DNS bij Vimexx wijst naar Vercel; Search Console domein-property geverifieerd. `bunyaminbolukbas.com` staat nog in het Vercel-team OS49 en moet naar team thebunyaminn verhuisd worden en als 308-redirect naar thebunyaminn.nl aan `portfolio-v2` gekoppeld worden.

Nog te doen door de gebruiker (kan niet vanuit code):
- Search Console: domein-property aanmaken, DNS TXT bij registrar; daarna eventueel `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel zetten (alleen nodig bij meta-tag-verificatie)
- Bing Webmaster Tools: site importeren vanuit Search Console of `NEXT_PUBLIC_BING_SITE_VERIFICATION` zetten; sitemap indienen
- Controleren dat de GitHub-repo aan Vercel gekoppeld is (anders IndexNow handmatig via `npm run indexnow`)

Beslissingen B en C afgerond (26 aug): thebunyaminn. is een handelsnaam van BBE Operations, KvK 89397703, Utrecht, hallo@thebunyaminn.nl. Staat in footer en Organization-schema (2.3 en 2.4 klaar).

Nog te bouwen (fase 2 en 3): `/over-mij/` met ProfilePage, FAQ op `/start/`, NAP in footer, kennisbank.

## Volgorde en inschatting

| Fase | Wat | Tijd |
|---|---|---|
| 1 | Technische basis + logo + verificatie + IndexNow | 1 dag |
| 2 | Over-mij, case-pagina's, FAQ, NAP, schema | 2 à 3 dagen |
| 3 | Kennisbank opzetten + eerste 2 artikelen | 2 dagen, daarna 1 artikel per 2 weken |
| 4 | Meten | 30 min per maand |

Fase 1 en het logo kunnen direct na jouw akkoord op de beslissingen A t/m E.
