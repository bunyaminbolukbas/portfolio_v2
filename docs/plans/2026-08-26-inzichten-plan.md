# Plan: Inzichten, drie artikelen uit echte ervaring

Datum: 26 augustus 2026. Vervangt de eerdere versie met acht vragen. Schrijfbron: `docs/content/context-bunyamin.md`. Hoort bij fase 3 van `2026-08-25-ai-vindbaarheid-plan.md`.

## Uitgangspunt

Drie artikelen die alleen Bünyamin kan schrijven, in plaats van acht die elke agency kan schrijven. Elk artikel beantwoordt één vraag die ondernemers letterlijk stellen (aan hem én aan ChatGPT, Gemini, Copilot, Google), vanuit een echt project, met echte prijzen en zonder verzonnen cijfers. De rode draad in alle drie: niet "een website", maar wat er achter de website gebeurt (bezoeker → interesse → aanvraag → opvolging → klant).

## De drie artikelen

### 1. Wat kost het om een website te laten maken in 2026?
Slug: `/inzichten/wat-kost-een-website-laten-maken-2026/`
Kort antwoord: Bij mij begint een serieus traject rond 1.200 tot 1.500 euro ex. btw. Een uitgebreidere website met branding, meerdere pagina's, SEO en conversieflows zit rond 2.000 tot 3.500 euro. Zodra er maatwerksoftware, koppelingen of AI bij komen, is het geen website meer maar een softwareproject, en dan maak ik eerst een scope.
Deelvragen (H2's):
- Wat krijg je voor 1.200 tot 1.500 euro? (voorbeeld Gencay: design, responsive site, basis branding, SEO, contact, domein en mail, feedbackrondes, livegang)
- Wanneer wordt het 2.000 tot 3.500 euro? (meerdere pagina's, rebranding, conversieflows; voorbeeld FinClean ca. 1.500 incl. rebranding, uitgebreider traject rond 2.000, automotive-pakketten 1.500 / 2.000 / 3.500)
- Waarom software op maat geen prijslijst heeft
- Wat kost het daarna? (hosting ca. 20 per maand, onderhoud ca. 50 per maand)
- Waar de prijs echt van afhangt (niet het aantal pagina's, wel wat er achter de site moet gebeuren)
- Wanneer ik nee zeg
Wat het onderscheidt: echte bedragen uit echte offertes, en de uitleg waarom "wat kost een website" de verkeerde vraag is.

### 2. Website of webapplicatie: wat heb je eigenlijk nodig?
Slug: `/inzichten/website-of-webapplicatie/`
Kort antwoord: Een website informeert en overtuigt; een webapplicatie laat mensen iets doen. De meeste ondernemers hebben een website nodig met één of twee slimme flows erachter, geen complete applicatie. Het omslagpunt is het moment dat je bedrijfsproces zelf op de site moet draaien.
Deelvragen:
- Wat is het verschil in gewone taal?
- Drie voorbeelden uit mijn eigen werk: FinClean (website met offerteflow), Beek Automotive (website met gekoppelde voorraad), Club49 (boekingsplatform en ledenapp, dus software)
- Dennis Kok: wanneer "een website" stilletjes een systeem wordt (betalingen, digitale producten, e-mailautomatisering)
- De vraag die ik altijd eerst stel: welke handeling moet verdwijnen?
- Waarom mijn softwareachtergrond hier uitmaakt (datastromen, onderhoud, wat er gebeurt na het formulier)
- Hoe je zelf bepaalt wat je nodig hebt (checklist van vier vragen)
Wat het onderscheidt: drie echte projecten naast elkaar, en een developer die uitlegt waarom hij meestal níet een applicatie adviseert.

### 3. Kun je je autovoorraad automatisch op je website krijgen?
Slug: `/inzichten/autovoorraad-automatisch-op-je-website/`
Kort antwoord: Ja. Als je voorraad al digitaal staat, hoort elke auto vanzelf op je website te verschijnen en te verdwijnen. Handmatig overtypen is verspilde tijd. Maar de voorraad op de site krijgen is het makkelijke deel; het echte probleem is dat bezoekers vijf auto's bekijken en dan weggaan.
Deelvragen:
- Waarom autobedrijven hun voorraad dubbel bijhouden (en waarom dat onlogisch is)
- Hoe ik het bij Beek Automotive heb aangepakt (voorraad synchroniseren, geen handmatig beheer)
- Wat ik daarna zag: mensen kijken, vergelijken en verdwijnen
- Waarom een WhatsApp-knop of "vraag beschikbaarheid aan" niet genoeg is
- Waar ik nu aan werk: in gewone taal door de voorraad zoeken en interesse als lead laten landen (eerlijk als idee/onderzoek, niet als bewezen product)
- Wat dit betekent als je een autobedrijf hebt
Wat het onderscheidt: technische ervaring en een echte automotive-case in één verhaal; niemand anders schrijft dit zo.

## Vaste opbouw per artikel

1. Eyebrow: categorie, datum, leestijd
2. H1 = de vraag
3. Kort antwoord (2 à 3 zinnen, staat op zichzelf; dit citeren AI Overviews en Copilot)
4. Secties met H2's als deelvragen
5. Voorbeeld uit een echte case, met link naar de case-pagina
6. "Wat betekent dit voor jou" (3 à 5 zinnen)
7. Auteur (Bünyamin, portret, één regel over zijn achtergrond) en één CTA: Plan een call

## Spelregels

- Alleen feiten uit `docs/content/context-bunyamin.md`. Geen verzonnen omzet-, conversie- of tijdcijfers. Niet gemeten? Dan staat er "dat heb ik niet gemeten".
- Ik-vorm, direct, geen agency-taal, geen streepjes.
- Klantnamen: FinClean/Ivan en Beek Automotive/Ilias staan al op de site. Gencay en Dennis Kok alleen met akkoord; anders "een recent traject".
- De AI Sales Assistant is een idee in onderzoek, geen product.

## Techniek

- Route `/inzichten/` (overzicht) en `/inzichten/[slug]/`. Artikelen als MDX in `content/inzichten/`, statisch gebouwd, geen CMS.
- Per artikel: Article-schema met author = bestaande Person (@id), datePublished en dateModified, BreadcrumbList, eigen OG-afbeelding met de vraag als titel.
- Sitemap en IndexNow lopen automatisch mee. "Inzichten" in nav en footer. Homepage ongewijzigd.
- Interne links: artikel → case-pagina en → /start/; case-pagina → gerelateerd artikel.

## Volgorde

1. Bouwen van de sectie plus artikel 3 (Beek, de sterkste) en artikel 2 (website of webapplicatie): kan direct, alle feiten zijn er.
2. Artikel 1 (prijzen): kan ook direct, alleen even akkoord op het noemen van Gencay en Dennis Kok bij naam.
3. Bünyamin leest alle drie, corrigeert wat niet klopt, dan live.
4. Daarna pas nieuwe onderwerpen, en alleen als er weer echte ervaring achter zit. Kandidaten voor later: "Waarom verlaten bezoekers je website zonder contact op te nemen?", "Wanneer heeft AI op een website wél nut?", "Wat is een offerteflow en wat levert het op?"

## Meten

Na 4 en 8 weken: Search Console → Prestaties gefilterd op `/inzichten/`; Bing → AI Performance; de drie vragen letterlijk stellen aan ChatGPT, Gemini, Copilot en Perplexity en noteren of thebunyaminn.nl genoemd wordt.
