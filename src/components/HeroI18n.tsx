// src/components/HeroI18n.tsx
import React from 'react';

// Übersetzungen für die Hero-Komponente
const heroTranslations = {
  de: {
    subtitle: "Maßgeschneidertes",
    title: "Maschinendesign und Innovation",
    arrangeVideocall: "Videocall vereinbaren",
    phone: "+49 7073 91 89 0"
  },
  en: {
    subtitle: "Customized",
    title: "Machine Design and Innovation", 
    arrangeVideocall: "Arrange video call",
    phone: "+49 7073 91 89 0"
  }
};

interface HeroI18nProps {
  locale: string;
}

export default function HeroI18n({ locale }: HeroI18nProps) {
  const t = heroTranslations[locale as keyof typeof heroTranslations] || heroTranslations.de;

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 -rotate-45"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-yellow-400 font-light mb-4 tracking-wide">
          {t.subtitle}
        </p>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          {t.title}
        </h1>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t.arrangeVideocall}
          </button>
          
          <a 
            href={`tel:${t.phone}`}
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {t.phone}
          </a>
        </div>
        
        {/* Language Switcher */}
        <div className="mt-12">
          <a 
            href={locale === 'de' ? '/en' : '/de'} 
            className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
          >
            {locale === 'de' ? '🇬🇧 English' : '🇩🇪 Deutsch'}
          </a>
        </div>
      </div>
    </section>
  );
}