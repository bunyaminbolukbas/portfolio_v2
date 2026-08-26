# Bronnen: vindbaar worden in Google, AI Overviews, Gemini, ChatGPT, Copilot, Claude, Perplexity en Grok

Onderzoek uitgevoerd op 25 augustus 2026. Alleen officiële documentatie van de aanbieders zelf, tenzij expliciet gemarkeerd als secundair. Dit is het naslagwerk; het plan staat in `docs/plans/2026-08-25-ai-vindbaarheid-plan.md`.

## 1. Google (Search, AI Overviews, AI Mode, Gemini)

### Het officiële document
**Optimizing your website for generative AI features on Google Search**
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
Aangekondigd 15 mei 2026: https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing

Kern:
- AI Overviews en AI Mode "are rooted in our core Search ranking and quality systems". Ze halen pagina's uit de gewone Search-index (retrieval/grounding) en tonen links naar bronnen.
- "Query fan-out": één vraag wordt opgesplitst in meerdere deelzoekopdrachten. Voorbeeld: "how to fix a lawn full of weeds" wordt ook "best herbicides for lawns" en "remove weeds without chemicals".
- Vereiste: pagina moet geïndexeerd zijn en "eligible to be shown in Google Search with a snippet". Geen extra technische eisen.
- Belangrijkste hefboom: "Creating content that people find unique, compelling, and useful will likely influence your website's presence in generative AI search in the long run more than any of the other suggestions in this guide."
- Commodity vs non-commodity: "7 Tips for First-Time Homebuyers" is commodity. "Why We Waived the Inspection & Saved Money: A Look Inside the Sewer Line" is non-commodity: eerste-hands ervaring die je niet met een AI-model kunt genereren.
- Waarschuwing: aparte pagina's per zoekvariant maken om AI-antwoorden te beïnvloeden valt onder "scaled content abuse".

Mythes die Google in dit document letterlijk ontkracht:
- llms.txt: "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities), as Google Search itself doesn't use them."
- Chunking: "There's no requirement to break your content into tiny pieces." "There's no ideal page length."
- Schrijven voor AI: "You don't need to write in a specific way just for generative AI search."
- Structured data: "Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add." Wel nuttig voor rich results.
- Mentions kopen/regelen: "seeking inauthentic 'mentions' across the web isn't as helpful as it might seem."

### Overige Google-bronnen
- AI features and your website: https://developers.google.com/search/docs/appearance/ai-features (bijgewerkt 10 dec 2025). Checklist: crawlbaar in robots.txt en bij CDN, interne links, page experience, belangrijke content als tekst, structured data matcht zichtbare tekst, Business Profile up-to-date, Search Console verifiëren.
- Blog "Top ways to ensure your content performs well in Google's AI experiences" (21 mei 2025): https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Search Essentials (drie technische eisen: Googlebot niet geblokkeerd, HTTP 200, indexeerbare tekst): https://developers.google.com/search/docs/essentials
- Helpful content en E-E-A-T: https://developers.google.com/search/docs/fundamentals/creating-helpful-content. E-E-A-T is geen rankingfactor op zich, wel de lens waarmee kwaliteit wordt beoordeeld.
- Snippet-controls en AI: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag. `nosnippet` sluit je uit van AI Overviews en AI Mode. `max-snippet` beperkt hoeveel tekst als input mag dienen. Wil je geciteerd worden: geen van beide gebruiken.
- Google-Extended: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers. Regelt alleen Gemini-training en Gemini-app/Vertex grounding. "Google-Extended does not impact a site's inclusion in Google Search." Blokkeren houdt je NIET uit AI Overviews. Wil je in Gemini-app-antwoorden verschijnen: Google-Extended toelaten.
- Search Console: nieuwe opt-out "Search generative AI control" (standaard ingesloten) en "Generative AI performance report" (juni 2026): https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports

### Structured data die voor deze site relevant is
- Organization (bijgewerkt april 2026): op homepage of over-pagina. Aanbevolen: name, alternateName, legalName, url, logo (min. 112x112 px), description, email, telephone, address, sameAs, founder, vatID. https://developers.google.com/search/docs/appearance/structured-data/organization
- ProfilePage: voor een "About Me"-pagina met Person als mainEntity. https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Article/BlogPosting: headline, image, datePublished, dateModified, author (Person met url). https://developers.google.com/search/docs/appearance/structured-data/article
- BreadcrumbList: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- NIET doen: FAQPage-schema (rich result alleen nog voor overheid/gezondheid sinds aug 2023, documentatie verwijderd juni 2026). AggregateRating op eigen klantreviews: Google toont geen sterren als "the entity being reviewed controls the reviews". LocalBusiness zonder fysiek adres: address is verplicht, dus dan Organization/ProfessionalService gebruiken.
- Regel: "Don't mark up content that is not visible to readers of the page."

## 2. OpenAI (ChatGPT search, Atlas)
- Bots-documentatie: https://developers.openai.com/api/docs/bots
- Publishers FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq

| Bot | Doel | robots.txt-token |
|---|---|---|
| OAI-SearchBot | "used to surface websites in search results in ChatGPT's search features" | `OAI-SearchBot` |
| GPTBot | training van modellen | `GPTBot` |
| ChatGPT-User | gebruikersacties, geen automatische crawl | `ChatGPT-User` |

- Je kunt OAI-SearchBot toelaten en GPTBot blokkeren; ze staan los van elkaar. Wijzigingen in robots.txt binnen ~24 uur verwerkt.
- "Any public website can appear in ChatGPT search." ChatGPT werkt met "third-party search provider(s)"; OpenAI noemt Bing niet bij naam, maar berichtgeving (Kevin Weil, okt 2024) bevestigt Bing als hoofdbron. Praktisch: goed in Bing staan is de voorwaarde voor ChatGPT.
- Referrals herkenbaar aan `utm_source=chatgpt.com`.
- ChatGPT Agent/Atlas leest pagina's via ARIA-rollen en labels; toegankelijkheid telt.

## 3. Microsoft Bing (Bingbot, Copilot, IndexNow)
- Webmaster Guidelines (expliciet over Copilot en grounding): https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- "Bing and Copilot search experiences rely on the same core crawling, indexing, and ranking foundation as traditional search."
- Discovery: IndexNow, XML-sitemap met correcte `lastmod`, crawlbare interne links, externe links.
- Meta-directives die AI-gebruik direct sturen: `noarchive` sluit uit van Copilot en grounding; `nocache` beperkt Copilot tot URL, titel en snippet; `nosnippet` verlaagt citatiekwaliteit; `noindex` sluit volledig uit. Wil je geciteerd worden: geen van deze gebruiken.
- Content: "Be easy to understand without external context", "Facts and definitions are explicit", "Define Entities Clearly and Consistently", "Focus Each URL on a Single Topic", "Surface Key information early". Titel, H1 en meta description moeten overeenkomen.
- Content verborgen achter client-side rendering, tabs of accordions "may not render".
- Structured data (JSON-LD) "may support clearer grounding" maar garandeert niets; moet zichtbare content weerspiegelen.
- Blog "Optimizing Your Content for Inclusion in AI Search Answers" (okt 2025): https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers. Q&A-vorm, lijsten, tabellen, zelfstandige antwoordzinnen van 1 à 2 zinnen, geen vage koppen.
- IndexNow: https://www.indexnow.org/documentation. Keyfile op `https://domein/<key>.txt`, ping `https://api.indexnow.org/indexnow?url=<URL>&key=<KEY>`. Deelnemers: Bing, Yandex, Naver, Seznam, Amazon, Yep. Google en OpenAI doen niet mee.
- AI Performance-rapport in Bing Webmaster Tools (public preview feb 2026): citaties in Copilot en Bing AI-antwoorden.

## 4. Anthropic (Claude)
https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler

| Bot | Doel | Token |
|---|---|---|
| ClaudeBot | training | `ClaudeBot` |
| Claude-User | ophalen bij gebruikersvraag | `Claude-User` |
| Claude-SearchBot | index voor zoekkwaliteit | `Claude-SearchBot` |

Blokkeren van Claude-SearchBot of Claude-User "verlaagt zichtbaarheid in zoekresultaten".

## 5. Perplexity
https://docs.perplexity.ai/guides/bots. `PerplexityBot` (zoekindex, geen training) en `Perplexity-User` (gebruikersverzoeken, negeert robots.txt meestal). Aanbevolen: toelaten.

## 6. xAI / Grok
Er bestaat geen officiële xAI-documentatie over een crawler, user-agent of robots.txt-token (gecontroleerd op docs.x.ai en x.ai). Circulerende UA-strings als `GrokBot` zijn niet door xAI bevestigd. Er is niets specifieks te configureren; algemene SEO plus Bing-indexatie is het enige zinvolle.

## 7. Apple en Common Crawl
- Applebot (Siri, Spotlight, Safari) en Applebot-Extended (alleen trainingsschakelaar, crawlt niet): https://support.apple.com/en-us/119829
- CCBot (Common Crawl, open archief dat door derden voor training wordt gebruikt): https://commoncrawl.org/ccbot

## 8. llms.txt
- Voorstel van Jeremy Howard (Answer.AI), sept 2024: https://llmstxt.org/
- Geen enkele grote aanbieder heeft officieel verklaard het bestand te lezen. Google (John Mueller, 17 juni 2025): "FWIW no AI system currently uses llms.txt." Google's eigen gids (mei 2026) noemt het expliciet als onnodig. Gary Illyes (juli 2025): Google ondersteunt het niet en gaat dat niet doen.
- Conclusie: kan geen kwaad, kost tien minuten, maar is geen hefboom. Geen prioriteit.

## 9. Wat officieel NIET helpt (samenvatting)
1. llms.txt, Markdown-versies, "AI-bestanden"
2. Content opknippen in kleine stukjes
3. Herschrijven "voor AI" of long-tail-varianten afdekken
4. Aparte pagina's per zoekvariant (spam-risico)
5. Onauthentieke mentions regelen
6. Speciale schema.org-markup voor AI
7. Meta keywords
8. Ideale woordaantallen
9. FAQPage-schema (voor niet-overheid/gezondheid)
10. AggregateRating op eigen reviews
11. Google-Extended blokkeren om uit AI Overviews te blijven (werkt niet)
12. "GEO/AEO/LLMO"-trucs: Illyes: "You don't need GEO, LLMO or anything else."

## 10. Wat officieel WEL de hefbomen zijn (samenvatting)
1. Geïndexeerd en snippet-eligible: geen nosnippet, noarchive, nocache, max-snippet
2. Alle relevante bots toegelaten in robots.txt (Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot)
3. Belangrijke tekst server-side in de HTML, niet achter tabs of JS
4. Interne links, sitemap met echte lastmod, IndexNow voor Bing
5. Search Console en Bing Webmaster Tools geverifieerd
6. Unieke eerste-hands content met duidelijke koppen die vragen beantwoorden; één onderwerp per URL; kernboodschap bovenaan
7. Consistente entiteit: dezelfde naam, bedrijfsnaam, functie, locatie en diensten op site, LinkedIn, Instagram en in structured data
8. Structured data die exact matcht met de zichtbare tekst: Organization met logo, ProfilePage, Article, BreadcrumbList
9. Goede afbeeldingen met alt-tekst, mobiele page experience
10. Meten op conversies, niet alleen clicks (Google: bezoekers uit AI Overviews blijven langer)
