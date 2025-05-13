"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export function VideoBodyFour() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [debugInfo, setDebugInfo] = useState('');

  // Video laden und abspielen
  useEffect(() => {
    // Funktion zum Starten des Videos
    const playVideo = () => {
      if (videoRef.current) {
        // Video explizit laden
        videoRef.current.load();
        // Versuch, das Video zu spielen
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setVideoLoaded(true);
              console.log("BodyVideo started playing successfully");
            })
            .catch(error => {
              console.error("Error playing BodyVideo:", error);
              // Versuch, nach einem Benutzerinteraktionsereignis erneut abzuspielen
              document.addEventListener('touchstart', () => {
                videoRef.current?.play();
              }, { once: true });
            });
        }
      }
    };
    
    // Video nach dem Mounting neu laden und abspielen
    playVideo();
    
    // Event-Listener für Seitenwechsel zurück
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Parallax-Effekt mit nativem JavaScript, optimiert für Snap-Scrolling
  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    // Letzte Animation speichern, um sie abbrechen zu können
    let animationFrame: number | null = null;
    let lastProgress = 0;
    
    // Scroll-Handler für den Parallax-Effekt
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      
      // Aktuelle Scroll-Position speichern und für Debug-Zwecke verwenden
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Debug-Informationen aktualisieren
      setDebugInfo(`Scroll: ${currentScrollY}`);

      // Animation canceln, wenn bereits eine läuft
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      // Animation mit requestAnimationFrame für bessere Performance
      animationFrame = requestAnimationFrame(() => {
        if (!containerRef.current || !videoRef.current) return;
        
        // Berechnung der Container-Position relativ zum Viewport
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top;
        const containerHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Überprüfen, ob der Container im Viewport ist
        if (containerTop < windowHeight && containerTop > -containerHeight) {
          // Berechnen wie weit der Container im Viewport ist (0 bis 1)
          const rawProgress = (windowHeight - containerTop) / (windowHeight + containerHeight);
          
          // Sanftes Easing für die Parallax-Bewegung
          // Wir verwenden eine Interpolation zwischen dem letzten und dem aktuellen Wert
          const progress = lastProgress + (rawProgress - lastProgress) * 0.1;
          lastProgress = progress;
          
          // Parallax-Bewegung berechnen (30% wie in der GSAP-Version)
          // Wir starten bei -15% und bewegen uns bis zu +15%
          const yMove = -15 + (progress * 30);
          
          // Auf das Video-Element anwenden
          if (videoRef.current) {
            videoRef.current.style.transform = `translateY(${yMove}%)`;
          }
        }
      });
    };

    // Initial aufrufen und Scroll-Event-Listener hinzufügen
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Event-Listener entfernen beim Unmounting
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Laufende Animation abbrechen
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section 
      data-background="dark" 
      ref={containerRef} 
      className="h-screen w-full relative overflow-hidden"
      style={{
        height: '100vh', // Explizite Vollbildhöhe
        minHeight: '100vh' // Mindesthöhe für kleine Bildschirme
      }}
    >
      {/* Debug-Element, das scrollY verwendet - nur im Development sichtbar */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 right-0 bg-black bg-opacity-50 text-white p-2 z-50 text-xs">
          ScrollY: {scrollY}px<br/>
          {debugInfo}
        </div>
      )}

      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-[130%] object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="/BodyVideo-thumbnail.png"
          preload="metadata"
          onCanPlay={() => setVideoLoaded(true)}
          style={{ 
            willChange: 'transform', // Optimierung für Performance
            transformStyle: 'preserve-3d',
            top: '-15%', // Startposition, um Platz für Bewegung zu schaffen
            height: '130%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        >
          {/* Video for larger screens */}
          <source src="/BodyVideo.mp4" media="(min-width: 768px)" type="video/mp4" />
          {/* Video for smaller screens */}
          <source src="/BodyVideo-small.mp4" media="(max-width: 767px)" type="video/mp4" />
        </video>
      </div>

      {/* Untere Navigationsleiste mit Buttons und Logo */}
      <div className="absolute bottom-0 left-0 right-0 w-full px-8 py-6 flex justify-between items-center z-10">
        {/* Buttons links unten */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="btn-gradient-trans whitespace-nowrap"
          >
            MASCHINENDESIGN
          </a>
          
          <a
            href="#"
            className="btn-gradient-trans whitespace-nowrap"
          >
            Plattform 3
          </a>
        </div>
        
        {/* Logo rechts unten */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}