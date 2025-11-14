"use client";

import { useRef, useEffect, useState } from "react";

interface UseOptimizedHeroProps {
  enableAnimations?: boolean;
  videoSrc: string;
  videoSrcMobile?: string;
}

export function useOptimizedHero({ 
  enableAnimations = true,
  videoSrc,
  videoSrcMobile
}: UseOptimizedHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isLCPComplete, setIsLCPComplete] = useState(false);

  // LCP-Optimierung - warte auf echtes LCP-Event oder Fallback
  useEffect(() => {
    let lcpObserver: PerformanceObserver | null = null;
    
    if ('PerformanceObserver' in window) {
      try {
        lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          // LCP ist fertig, starte Animationen
          setIsLCPComplete(true);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        // Fallback wenn PerformanceObserver fehlschlägt
        setIsLCPComplete(true);
      }
    } else {
      // Fallback für ältere Browser
      setIsLCPComplete(true);
    }
    
    // Timeout Fallback nach 2s
    const fallbackTimer = setTimeout(() => {
      setIsLCPComplete(true);
    }, 2000);
    
    return () => {
      lcpObserver?.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Lazy GSAP loading für bessere TBT
  useEffect(() => {
    if (!enableAnimations || !isLCPComplete) return;

    const initAnimations = async () => {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger')
        ]);

        gsap.registerPlugin(ScrollTrigger);

        requestIdleCallback(() => {
          if (!containerRef.current || !textRef.current) return;

          // Parallax-Effekt
          gsap.to(textRef.current, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          // Fade-Animation mit reduziertem Delay
          setTimeout(() => {
            if (textRef.current) {
              gsap.to(textRef.current, {
                opacity: 0.1,
                delay: 2,
                duration: 1.5,
              });
            }
          }, 1500);
        });
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    initAnimations();
  }, [isLCPComplete, enableAnimations]);

  // Video-Loading optimiert mit Media-Query Prüfung
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    
    // Nutze videoSrcMobile falls vorhanden, sonst videoSrc
    const finalVideoSrc = isMobile && videoSrcMobile ? videoSrcMobile : videoSrc;
    
    console.log('🎬 Setting up video:', finalVideoSrc);
    
    // Setze Video-Quelle
    video.src = finalVideoSrc;
    
    // Event-Listener für erfolgreichen Load
    const handleCanPlay = () => {
      console.log('✅ Video can play:', finalVideoSrc);
      setVideoLoaded(true);
    };
    
    const handleLoadedData = () => {
      console.log('📦 Video data loaded:', finalVideoSrc);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    
    // Lade und spiele Video ab
    video.load();
    
    const playVideo = () => {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('▶️ Video playing:', finalVideoSrc);
          })
          .catch((error) => {
            console.warn('⚠️ Video autoplay failed:', error);
            // Markiere trotzdem als geladen, damit kein Lade-Bildschirm hängen bleibt
            setVideoLoaded(true);
          });
      }
    };
    
    // Verzögere Play leicht für bessere Kompatibilität
    requestAnimationFrame(() => {
      setTimeout(playVideo, 100);
    });
    
    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [videoSrc, videoSrcMobile]); // Reagiert auf Änderungen

  // CSS-basierte Hover-Effekte (kein GSAP)
  const handleMouseEnter = () => {
    if (!isLCPComplete || !textRef.current) return;
    textRef.current.style.transition = 'opacity 0.5s ease';
    textRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!isLCPComplete || !textRef.current) return;
    textRef.current.style.transition = 'opacity 0.5s ease';
    textRef.current.style.opacity = '0.1';
  };

  return {
    containerRef,
    videoRef,
    textRef,
    videoLoaded,
    isLCPComplete,
    handleMouseEnter,
    handleMouseLeave
  };
}
