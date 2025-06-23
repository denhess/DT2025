"use client";

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function YellowBackground() {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Funktion für den atmenden Effekt des Kreises
  useEffect(() => {
    if (isClient && circleRef.current) {
      // Anfangsposition
      gsap.set(circleRef.current, {
        scale: 1,
        x: "0%",
        y: "0%",
        filter: "blur(60px)"
      });
      
      // Endlose Animation, die hin und her geht
      const timeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5
      });
      
      // Animiere zum Zielzustand
      timeline.to(circleRef.current, {
        scale: 1.02,
        x: "2%", 
        y: "-2%",
        filter: "blur(70px)",
        duration: 15,
        ease: "sine.inOut"
      });
      
      return () => {
        // Aufräumen beim Unmounting
        timeline.kill();
      };
    }
  }, [isClient]);

  useGSAP(() => {
    // Die GSAP-Logik kann hier ergänzt werden, falls zusätzliche Animationen benötigt werden
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section 
      data-background="light"
      ref={sectionRef}
      className="absolute inset-0 w-full overflow-hidden"
    >
      {/* Hintergrund-Basisfarbe */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'white'
        }}
      />
      
      {/* Gelber Kreis Hintergrund */}
      <div
        ref={circleRef}
        className="absolute"
        style={{
          width: '180%',
          height: '180%',
          borderRadius: '120%',
          background: 'radial-gradient(circle at 70% 70%, #ffdd30 20%, #ffd000 50%, rgba(239,239,239,0.8) 90%, rgba(255,255,255,0) 100%)',
          bottom: '-80%',
          right: '-20%',
          filter: 'blur(300px)',
          opacity: 0.85,
          transform: 'scale(1)',
          transformOrigin: 'center center',
          zIndex: 0,
          transition: 'none' // Entferne ggf. vorhandene CSS-Transitions
        }}
      />
      
      {/* Frosted Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          opacity: 0.05,
          zIndex: 0
        }}
      />
    </section>
  );
}