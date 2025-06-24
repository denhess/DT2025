// src/components/LanguageSwitcher.tsx - Im Burger-Button Style
'use client';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function LanguageSwitcher({ variant = 'light', className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    // Toggle zwischen DE und EN
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
    
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
    }
  };

  // Aktuelle Sprache anzeigen
  const currentLang = i18n.language === 'de' ? 'DE' : 'EN';

  // Button-Klassen - genau wie beim Burger-Menu
  const buttonClasses = variant === 'dark' 
    ? "burger-dark" 
    : "burger-light";

  return (
    <button
      onClick={handleLanguageChange}
      className={clsx(
        "inline-flex items-center justify-center rounded-full w-10 h-10 transition-all duration-300",
        buttonClasses,
        className
      )}
      aria-label={`Sprache wechseln zu ${currentLang === 'DE' ? 'Englisch' : 'Deutsch'}`}
    >
      <span className="text-xs font-bold">
        {currentLang}
      </span>
    </button>
  );
}