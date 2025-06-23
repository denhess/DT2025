// src/components/Hero.tsx
"use client";

import { useOptimizedHero } from "@/hooks/useOptimizedHero";
import { useTranslations, useLocale } from 'next-intl';

export function Hero() {
  const locale = useLocale();
  
  // Debug: Schauen ob useTranslations funktioniert
  let t;
  let debugInfo = '';
  
  try {
    t = useTranslations('hero');
    debugInfo = `Locale: ${locale}, Translations loaded`;
  } catch (error) {
    debugInfo = `Error loading translations: ${error}`;
    console.error('Translation error:', error);
  }
  
  const {
    containerRef,
    videoRef,
    textRef,
    videoLoaded,
    handleMouseEnter,
    handleMouseLeave
  } = useOptimizedHero({ 
    enableAnimations: true
  });

  // Fallback Texte falls Übersetzungen nicht funktionieren
  const subtitle = t ? t('subtitle') : (locale === 'de' ? 'Maßgeschneidertes' : 'Customized');
  const title = t ? t('title') : (locale === 'de' ? 'Maschinendesign und Innovation' : 'Machine Design and Innovation');

  return (
    <section 
      ref={containerRef} 
      data-background="dark" 
      className="hero h-screen relative overflow-hidden"
      style={{ backgroundImage: "url('/HeaderVideo-thumbnail.webp')" }}
    >
      {/* Debug Info */}
      <div className="absolute top-4 left-4 z-50 bg-red-500 text-white p-2 text-sm">
        {debugInfo}
      </div>
      
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop
        playsInline 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        poster="/HeaderVideo-thumbnail.webp"
        preload="none"
      >
        <source src="/HeaderVideo.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/HeaderVideo-small.mp4" media="(max-width: 767px)" type="video/mp4" />
      </video>
      
      <div id="background-check" className="h-screen w-full bg-gray-900" />
      
      <div
        ref={textRef}
        className="absolute bottom-10 sm:bottom-8 flex flex-col px-8 md:px-8 lg:px-8"
        style={{
          opacity: 1,
          visibility: 'visible',
          transform: 'translate3d(0, 0, 0)',
          transition: 'opacity 0.5s ease'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h5 className="font-thin text-white z-10 xl:ml-2 text-2xl md:text-3xl xl:text-8xl mb-4">
          {subtitle}
        </h5>
        <h1 className="font-thin uppercase text-white z-10 leading-[0.9] tracking-[-0.02em] text-left">
          {title}
        </h1>
      </div>
    </section>
  );
}