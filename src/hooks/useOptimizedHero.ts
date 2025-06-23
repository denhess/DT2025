"use client";

import { useRef, useEffect, useState } from "react";

interface UseOptimizedHeroProps {
  enableAnimations?: boolean;
}

export function useOptimizedHero({ 
  enableAnimations = true 
}: Omit<UseOptimizedHeroProps, 'videoSrc' | 'posterSrc'>) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isLCPComplete, setIsLCPComplete] = useState(false);

  // LCP-Optimierung
  useEffect(() => {
    const lcpTimer = setTimeout(() => {
      setIsLCPComplete(true);
    }, 100);
    
    return () => clearTimeout(lcpTimer);
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
                delay: 2, // Reduziert von 6s auf 2s
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

  // Video-Loading optimiert
  useEffect(() => {
    if (!isLCPComplete) return;

    const playVideo = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => setVideoLoaded(true))
            .catch(() => setVideoLoaded(true));
        }
      }
    };

    requestAnimationFrame(playVideo);
  }, [isLCPComplete]);

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