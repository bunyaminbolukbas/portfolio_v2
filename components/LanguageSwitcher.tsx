"use client";

import { Language } from "@/lib/translations";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const languages: { code: Language; label: string }[] = [
    { code: "nl", label: "NL" },
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
  ];

  return (
    <div className="flex items-center gap-1 text-sm">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => onLanguageChange(lang.code)}
            className={`px-2 py-1 rounded transition-colors ${
              currentLanguage === lang.code
                ? "text-white font-medium"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-zinc-600">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
