"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, FileText, Code, Rocket, Check } from 'lucide-react';
import { PopupButton } from 'react-calendly';
import { Language } from '@/lib/translations';

const content = {
  nl: {
    title: "Van idee naar werkend product",
    subtitle: "In 4 stappen van jouw visie naar een product dat klanten aantrekt",
    back: "Terug",
    cta: "Boek een call",
    ctaSubtext: "Vrijblijvend, 30 min",
    forYouTitle: "Dit is voor jou als...",
    forYou: [
      "Je hebt een app-idee maar geen technische kennis",
      "Je wilt snel de markt op met een MVP",
      "Je zoekt een developer die meedenkt, niet alleen bouwt",
      "Je wilt resultaat, geen excuses",
    ],
    steps: [
      {
        number: "01",
        title: "Gesprek",
        description: "We bespreken jouw idee. Ik stel vragen om te begrijpen wat je echt nodig hebt, wie je klant is, en welk probleem je oplost.",
        outcome: "Je weet of we een match zijn",
        icon: MessageSquare,
      },
      {
        number: "02",
        title: "Plan",
        description: "Ik maak een concept met wireframes en een duidelijk plan. Je ziet precies wat je krijgt voordat we beginnen met bouwen.",
        outcome: "Je weet wat je krijgt",
        icon: FileText,
      },
      {
        number: "03",
        title: "Bouw",
        description: "Ik ontwikkel jouw product. Je krijgt wekelijkse updates en kunt feedback geven. Geen verrassingen.",
        outcome: "Je ziet het ontstaan",
        icon: Code,
      },
      {
        number: "04",
        title: "Live",
        description: "Je product gaat live. Ik help met de lancering, zorg dat alles werkt, en blijf beschikbaar voor onderhoud en updates.",
        outcome: "Go-to-market ready product",
        icon: Rocket,
      },
    ],
  },
  en: {
    title: "From idea to working product",
    subtitle: "In 4 steps from your vision to a product that attracts customers",
    back: "Back",
    cta: "Book a call",
    ctaSubtext: "No strings attached, 30 min",
    forYouTitle: "This is for you if...",
    forYou: [
      "You have an app idea but no technical knowledge",
      "You want to get to market quickly with an MVP",
      "You're looking for a developer who thinks along, not just builds",
      "You want results, not excuses",
    ],
    steps: [
      {
        number: "01",
        title: "Conversation",
        description: "We discuss your idea. I ask questions to understand what you really need, who your customer is, and what problem you're solving.",
        outcome: "You know if we're a match",
        icon: MessageSquare,
      },
      {
        number: "02",
        title: "Plan",
        description: "I create a concept with wireframes and a clear plan. You see exactly what you'll get before we start building.",
        outcome: "You know what you're getting",
        icon: FileText,
      },
      {
        number: "03",
        title: "Build",
        description: "I develop your product. You get weekly updates and can provide feedback. No surprises.",
        outcome: "You see it come to life",
        icon: Code,
      },
      {
        number: "04",
        title: "Live",
        description: "Your product goes live. I help with the launch, make sure everything works, and stay available for maintenance and updates.",
        outcome: "Go-to-market ready product",
        icon: Rocket,
      },
    ],
  },
  tr: {
    title: "Fikirden çalışan ürüne",
    subtitle: "4 adımda vizyonundan müşteri çeken bir ürüne",
    back: "Geri",
    cta: "Görüşme ayarla",
    ctaSubtext: "Bağlayıcı değil, 30 dk",
    forYouTitle: "Bu senin için eğer...",
    forYou: [
      "Uygulama fikrin var ama teknik bilgin yok",
      "MVP ile hızlıca pazara girmek istiyorsun",
      "Sadece inşa etmeyen, birlikte düşünen bir geliştirici arıyorsun",
      "Sonuç istiyorsun, mazeret değil",
    ],
    steps: [
      {
        number: "01",
        title: "Görüşme",
        description: "Fikrini konuşuyoruz. Gerçekten neye ihtiyacın olduğunu, müşterinin kim olduğunu ve hangi sorunu çözdüğünü anlamak için sorular soruyorum.",
        outcome: "Uyumlu olup olmadığımızı bilirsin",
        icon: MessageSquare,
      },
      {
        number: "02",
        title: "Plan",
        description: "Wireframe'ler ve net bir plan ile konsept oluşturuyorum. İnşa etmeye başlamadan önce tam olarak ne alacağını görürsün.",
        outcome: "Ne alacağını bilirsin",
        icon: FileText,
      },
      {
        number: "03",
        title: "İnşa",
        description: "Ürününü geliştiriyorum. Haftalık güncellemeler alırsın ve geri bildirim verebilirsin. Sürpriz yok.",
        outcome: "Oluşumunu görürsün",
        icon: Code,
      },
      {
        number: "04",
        title: "Yayında",
        description: "Ürünün yayına giriyor. Lansmana yardımcı oluyorum, her şeyin çalıştığından emin oluyorum ve bakım ile güncellemeler için ulaşılabilir kalıyorum.",
        outcome: "Go-to-market ready product",
        icon: Rocket,
      },
    ],
  },
};

export default function Werkwijze() {
  const [language, setLanguage] = useState<Language>('nl');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language') as Language;
    if (saved && content[saved]) {
      setLanguage(saved);
    }
  }, []);

  const t = content[language];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>{t.back}</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="w-full max-w-5xl mx-auto mb-20">
          {/* Desktop: Horizontal */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-zinc-800" />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-6">
              {t.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex flex-col items-center text-center group cursor-pointer">
                    {/* Icon Circle */}
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-300 bg-zinc-800 border-2 border-zinc-700 group-hover:bg-blue-500/20 group-hover:border-blue-500">
                      <Icon className="w-10 h-10 text-zinc-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>

                    {/* Number */}
                    <span className="text-sm text-zinc-500 mb-2 transition-colors duration-300 group-hover:text-blue-400">{step.number}</span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-400">{step.title}</h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 transition-colors duration-300 group-hover:text-zinc-300">
                      {step.description}
                    </p>

                    {/* Outcome */}
                    <p className="text-blue-400 text-sm font-medium">
                      → {step.outcome}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden space-y-8">
            {t.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4 group">
                  {/* Left: Icon + Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-zinc-800 border-2 border-zinc-700 group-hover:bg-blue-500/20 group-hover:border-blue-500">
                      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    {index < t.steps.length - 1 && (
                      <div className="w-0.5 h-full bg-zinc-800 mt-2" />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="pb-8">
                    <span className="text-sm text-zinc-500">{step.number}</span>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-blue-400 text-sm font-medium">
                      → {step.outcome}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* For You Section */}
        <div className="w-full max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.forYouTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.forYou.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          {mounted && (
            <PopupButton
              url="https://calendly.com/bunyaminbolukbas"
              rootElement={document.body}
              text={t.cta}
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-zinc-200 transition-colors text-lg cursor-pointer"
              pageSettings={{
                backgroundColor: '18181b',
                primaryColor: '3b82f6',
                textColor: 'ffffff',
              }}
            />
          )}
          <p className="text-zinc-500 text-sm mt-3">{t.ctaSubtext}</p>
        </div>
      </div>
    </div>
  );
}
