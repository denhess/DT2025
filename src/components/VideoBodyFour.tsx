"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function VideoBodyFour() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      
      // Aktuelle Scroll-Position speichern
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Performance-Optimierung: Nur weitermachen, wenn sich die Scroll-Position signifikant geändert hat
      if (Math.abs(currentScrollY - scrollY) < 5) return;

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
  }, [scrollY]); // scrollY als Abhängigkeit hinzugefügt

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
          className={`absolute inset-0 w-full h-[140%] object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="/BodyVideo-thumbnail.png"
          preload="metadata"
          onCanPlay={() => setVideoLoaded(true)}
          style={{ 
            willChange: 'transform', // Optimierung für Performance
            transformStyle: 'preserve-3d',
            top: '0%', // Startposition, nach oben verschoben um mehr Platz für Bewegung zu schaffen
            height: '140%', // Größere Höhe, um weißen Rand zu vermeiden
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        >
          {/* Video for larger screens */}
          <source src="/Vecoplan_desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
          {/* Video for smaller screens */}
          <source src="/Vecoplan_mobil.mp4" media="(max-width: 767px)" type="video/mp4" />
        </video>
      </div>

      {/* Angepasste Navigationsleiste für bessere Mobile-Ansicht */}
      <div className="absolute bottom-0 left-0 right-0 w-full px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center z-10">
        {/* Buttons links unten - vertikal auf Mobilgeräten */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4 sm:mb-0">
          <a className="btn-gradient-white-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
            MASCHINENDESIGN
          </a>

          <a className="btn-gradient-white-noanimation whitespace-nowrap inline-flex self-start sm:self-auto">
            Zerkleinerer
          </a>
        </div>
        
        {/* Logo - auf allen Geräten links */}
        <div className="flex items-center self-start sm:self-auto">
          <Image
            src="logos/logo-vecoplan-white.svg"
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