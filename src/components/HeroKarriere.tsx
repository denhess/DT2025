"use client";

import { useTranslation } from 'react-i18next';
import { useOptimizedHero } from "@/hooks/useOptimizedHero";

export function HeroKarriere() {
  const { t } = useTranslation('karriere');
  const {
    containerRef,
    videoRef,
    textRef,
    videoLoaded,
    handleMouseEnter,
    handleMouseLeave
  } = useOptimizedHero({ 
    enableAnimations: true,
    videoSrc: '/KarriereVideo.mp4'
  });

  return (
    <section 
      ref={containerRef} 
      data-background="dark" 
      className="hero h-screen relative overflow-hidden"
    >
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop
        playsInline 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        poster="/KarriereVideo-thumbnail.webp"
        preload="none"
      >
        <source src="/KarriereVideo.mp4" type="video/mp4" />
      </video>
      
      <div id="background-check" className="h-screen w-full bg-gray-900" />
      
      <div
        ref={textRef}
        className="absolute bottom-10 sm:bottom-20 flex flex-col px-8 md:px-8 lg:px-8"
        style={{
          opacity: 1,
          visibility: 'visible',
          transform: 'translate3d(0, 0, 0)',
          transition: 'opacity 0.5s ease'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="font-thin uppercase text-white z-10 leading-[0.9] tracking-[-0.02em] text-left whitespace-nowrap">
          {t('hero.title')}
        </h1>
      </div>
    </section>
  );
}