export const translations = {
  nl: {
    headline: "Ik bouw software en",
    headlineBreak: "deel wat ik leer.",
    workWithMe: "Hoe ga ik te werk?",
    subtext: "Ik schrijf over software, business, en alles wat ik onderweg leer. Schrijf je in.",
    emailPlaceholder: "naam@email.com",
    signUp: "Aanmelden",
    success: "Je bent aangemeld! Check je inbox.",
    copyright: "© 2026 BBE Operations. Alle rechten voorbehouden.",
    youtube: "@thebunyaminn",
    instagram: "@thebunyaminn",
    linkedin: "@bunyamin",
  },
  en: {
    headline: "I build software and",
    headlineBreak: "share what I learn.",
    workWithMe: "How do I work?",
    subtext: "I write about software, business, and everything I learn along the way. Join the list.",
    emailPlaceholder: "name@email.com",
    signUp: "Sign up",
    success: "You're in! Check your inbox.",
    copyright: "© 2026 BBE Operations. All rights reserved.",
    youtube: "@thebunyaminn",
    instagram: "@thebunyaminn",
    linkedin: "@bunyamin",
  },
  tr: {
    headline: "Kod yazıyorum ve",
    headlineBreak: "paylaşıyorum.",
    workWithMe: "Nasıl çalışıyorum?",
    subtext: "Yazılım, iş ve yolda öğrendiğim her şey hakkında yazıyorum. Listeye katıl.",
    emailPlaceholder: "isim@email.com",
    signUp: "Kaydol",
    success: "Kaydoldun! Gelen kutunu kontrol et.",
    copyright: "© 2026 BBE Operations. Tüm hakları saklıdır.",
    youtube: "@thebunyaminn",
    instagram: "@thebunyaminn",
    linkedin: "@bunyamin",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.nl;
