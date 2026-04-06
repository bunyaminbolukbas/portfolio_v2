# Website Funnel Ontwerp

## Doel
Website omzetten naar een klantentrechter voor high-ticket MVP development (€10k+).

## Doelgroep
Ondernemers met een app-idee die een developer zoeken om hun idee te bouwen.

## Funnel Flow
```
Content (YouTube, Instagram vlogs)
              ↓
        Homepage (email capture)
              ↓
        Email lijst (Kit)
              ↓
        /werk-met-mij (funnel pagina)
              ↓
        Strategiegesprek (Calendly)
              ↓
        MVP Project (€10k+)
```

---

## Fase 1: Homepage Aanpassen

### Taalwisselaar
- NL / EN / TR
- Standaard: NL
- Opgeslagen in localStorage

### Homepage Structuur
```
┌─────────────────────────────────────────┐
│                           [NL] EN  TR   │
│                                         │
│         Ik bouw software en             │
│         deel wat ik leer.               │
│                                         │
│   [YouTube] [Instagram] [LinkedIn]      │
│                                         │
│          [✉ Werk met mij]               │
│                                         │
│   Ik schrijf over software, business,   │
│   en alles wat ik onderweg leer.        │
│                                         │
│   [email input] [Aanmelden]             │
│                                         │
│              [BBE Logo]                 │
│        © 2026 BBE Operations            │
└─────────────────────────────────────────┘
```

### Teksten per taal

**Nederlands:**
- Headline: "Ik bouw software en deel wat ik leer."
- CTA: "Werk met mij"
- Subtekst: "Ik schrijf over software, business, en alles wat ik onderweg leer. Schrijf je in."
- Button: "Aanmelden"

**Engels:**
- Headline: "I build software and share what I learn."
- CTA: "Work with me"
- Subtekst: "I write about software, business, and everything I learn along the way. Join the list."
- Button: "Sign up"

**Turks:**
- Headline: "Yazılım geliştiriyorum ve öğrendiklerimi paylaşıyorum."
- CTA: "Benimle çalış"
- Subtekst: "Yazılım, iş ve yolda öğrendiğim her şey hakkında yazıyorum. Listeye katıl."
- Button: "Kaydol"

### Email Integratie
- Formspree vervangen door Kit (ConvertKit)
- Form action naar Kit endpoint

---

## Fase 2: /werk-met-mij Pagina

### Structuur
1. Hero met duidelijke belofte
2. Probleem + Oplossing
3. Proces visualisatie (idee → concept → product)
4. 2-3 beste cases
5. CTA naar strategiegesprek

### Later toe te voegen
- Calendly/Cal.com integratie
- Case study videos

---

## Fase 3: Mobilox (Apart)
- Eigen domein
- Simpele landingpage
- Aparte business

---

## Technische Implementatie

### Taalwisselaar Component
- React state + localStorage
- Context provider voor taal
- Translations object per taal

### Bestanden aan te passen
- `app/page.tsx` - Homepage met vertalingen
- Nieuw: `lib/translations.ts` - Alle teksten
- Nieuw: `components/LanguageSwitcher.tsx`
- Nieuw: `contexts/LanguageContext.tsx`
