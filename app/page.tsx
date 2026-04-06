"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { translations, Language } from '@/lib/translations';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState<Language>('nl');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Vervang met Kit (ConvertKit) form action URL
      await fetch('https://formspree.io/f/mnndnple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'newsletter_signup', language }),
      });
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Language Switcher */}
      <div className="absolute top-6 right-6">
        <LanguageSwitcher
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full text-center space-y-8">

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          {t.headline}
          <br />
          {t.headlineBreak}
        </h1>

        {/* Social Links */}
        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
          <Link
            href="https://youtube.com/@thebunyaminn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors px-3 sm:px-4 py-2 rounded-full text-sm"
          >
            <svg className="w-[18px] h-[18px] text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>{t.youtube}</span>
          </Link>

          <Link
            href="https://instagram.com/thebunyaminn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors px-3 sm:px-4 py-2 rounded-full text-sm"
          >
            <svg className="w-[18px] h-[18px] text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>{t.instagram}</span>
          </Link>

          <Link
            href="https://linkedin.com/in/bunyaminbolukbas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors px-3 sm:px-4 py-2 rounded-full text-sm"
          >
            <svg className="w-[18px] h-[18px] text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>{t.linkedin}</span>
          </Link>

        </div>

        {/* Werkwijze Link */}
        <div className="pt-2">
          <Link
            href="/werkwijze"
            className="group relative inline-block text-zinc-400 hover:text-white transition-colors"
          >
            <span>{t.workWithMe}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* Email Signup */}
        <div className="pt-6">
          <p className="text-zinc-400 mb-6 text-base sm:text-lg max-w-lg mx-auto">
            {t.subtext}
          </p>

          {isSubmitted ? (
            <p className="text-blue-400">{t.success}</p>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-xs mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                required
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black font-medium px-4 py-2 text-sm rounded-lg hover:bg-zinc-200 transition-colors"
              >
                {t.signUp}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 flex flex-col items-center gap-3">
        <Image
          src="/images/Scherm­afbeelding 2025-10-25 om 14.34.26.png"
          alt="BBE"
          width={50}
          height={25}
          className="opacity-60"
        />
        <p className="text-zinc-600 text-sm">
          {t.copyright}
        </p>
      </footer>
    </div>
  );
}
