"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Awards() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

    // Text Fade-in Animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  // Funktion zum Erzeugen eines einzelnen Konfetti-Elements
  const createConfetti = (isRed: boolean) => {
    const confetti = document.createElement('div');
    confetti.className = 'awards-confetti';
    
    // Setze Styling
    Object.assign(confetti.style, {
      position: 'fixed',
      zIndex: '9999',
      left: `${Math.random() * 100}vw`,
      top: '-10px',
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      backgroundColor: isRed ? '#FF0000' : '#C0C0C0',
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      transform: `rotate(${Math.random() * 360}deg)`,
      opacity: '0.8',
      pointerEvents: 'none'
    });
    
    document.body.appendChild(confetti);
    
    // Animiere das Konfetti
    gsap.to(confetti, {
      top: '110vh',
      left: `+=${(Math.random() * 100) - 50}px`,
      rotation: `+=${Math.random() * 360}`,
      duration: Math.random() * 2 + 3,
      ease: 'power1.in',
      onComplete: () => {
        if (document.body.contains(confetti)) {
          document.body.removeChild(confetti);
        }
      }
    });
    
    return confetti;
  };
  
  // Mit useCallback die Funktion memorisieren
  const startConfettiRain = useCallback(() => {
    // Lösche vorhandene Konfetti-Elemente
    document.querySelectorAll('.awards-confetti').forEach(el => el.remove());
    
    // Erstelle initial 200 Konfetti-Teilchen
    for (let i = 0; i < 200; i++) {
      createConfetti(Math.random() > 0.5);
    }
    
    // Setze einen Intervall, um kontinuierlich Konfetti zu erzeugen
    const intervalId = setInterval(() => {
      if (!isHovering) {
        clearInterval(intervalId);
        return;
      }
      
      for (let i = 0; i < 5; i++) {
        createConfetti(Math.random() > 0.5);
      }
    }, 100);
    
    // Speichere die Intervall-ID zum Aufräumen
    return intervalId;
  }, [isHovering]); // isHovering als Abhängigkeit für useCallback
  
  // Effekt zum Starten/Stoppen des Konfetti-Regens
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    
    if (isHovering) {
      intervalId = startConfettiRain();
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovering, startConfettiRain]);
  
  // Textfarbe ändern beim Hover
  const handleMouseEnter = () => {
    setIsHovering(true);
    
    if (textRef.current) {
      gsap.to(textRef.current, {
        color: "#FF0000",
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    
    if (textRef.current) {
      gsap.to(textRef.current, {
        color: "black",
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  return (
    <section 
      data-background="light"
      ref={sectionRef}
      className="relative min-h-screen w-full"
    >
      
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-8 md:px-8 lg:px-8">
          <h1 
            ref={textRef}
            className="uppercase leading-[0.9] tracking-[-0.02em] cursor-pointer relative z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Über 210 Awards <br /> belegen den Erfolg!
          </h1>
        </div>
      </div>
    </section>
  );
}