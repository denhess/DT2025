'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (isOpen && isClient) {
      // Erst Display setzen, dann animieren
      gsap.set(overlayRef.current, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Zentriert horizontal
        justifyContent: "space-between"
      });
      
      // Dann Opacity animieren
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut"
      });

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        });
      }
      
      if (footerRef.current) {
        gsap.from(footerRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.4,
        });
      }
    } else {
      // Erst Opacity animieren
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          // Nach Animation display auf none setzen
          gsap.set(overlayRef.current, {
            display: "none"
          });
        }
      });
    }
  }, [isOpen, isClient]);

  const handleLinkClick = () => {
    onClose();
  };

  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 hidden opacity-0"
      style={{
        backgroundColor: 'white',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'none'
      }}
    >
      {/* Gelber Kreis Hintergrund */}
      <div
        ref={circleRef}
        className="absolute"
        style={{
          width: '140%',
          height: '140%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 70% 70%, #ffdd30 20%, #ffd000 50%, rgba(239,239,239,0.8) 90%, rgba(255,255,255,0) 100%)',
          bottom: '-60%',
          right: '-40%',
          filter: 'blur(300px)',
          opacity: 0.85,
          transform: 'scale(1)',
          transformOrigin: 'center center',
          zIndex: 1,
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
          zIndex: 1
        }}
      />

      <div 
        className="flex flex-col justify-between w-full h-full overflow-auto mt-20"
        style={{ zIndex: 10, position: "relative" }}
      >
        {/* Hauptnavigation in der Mitte, linksbündig - mit angepasster Mobildarstellung */}
        <div className="flex-grow flex items-center w-full py-12 md:py-0">
          <div ref={contentRef} className="text-left w-full max-w-5xl px-8 md:px-8 lg:px-8 z-10">
            <div className="flex flex-col">
              <Link href="/" onClick={handleLinkClick}>
                <h2 className="mb-2 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative py-1 md:py-2 z-10 inline-block nav-link">
                  STARTSEITE
                </h2>
              </Link>

              <Link href="/#projects" onClick={handleLinkClick}>
                <h2 className="mb-2 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative py-1 md:py-2 z-10 inline-block nav-link">
                  PROJEKTE
                </h2>
              </Link>

              <Link href="/designtech" onClick={handleLinkClick}>
                <h2 className="mb-2 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative py-1 md:py-2 z-10 inline-block nav-link">
                  DESIGN TECH
                </h2>
              </Link>

              <Link href="/designtosuccess" onClick={handleLinkClick}>
                <h2 className="mb-2 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative py-1 md:py-2 z-10 inline-block nav-link">
                  DESIGN TO SUCCESS
                </h2>
              </Link>

              <Link href="/karriere" onClick={handleLinkClick}>
                <h2 className="mb-2 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative py-1 md:py-2 z-10 inline-block nav-link">
                  KARRIERE
                </h2>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer mit 4 Spalten im unteren Bereich - responsive für Mobile */}
        <div 
          ref={footerRef} 
          className="w-full pb-8 px-8 md:px-8 lg:px-8 z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Spalte 1: */}
            <div className="footer-column">
              <div className="space-y-2 md:space-y-3">
                <a
                  href="/erfolgsgeschichte" 
                  onClick={handleLinkClick}
                  className="text-black cursor-pointer text-base md:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block"
                >
                  Erfolgsgeschichte
                </a>

                <a
                  href="https://www.ammerbucher-design-talk.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black cursor-pointer text-base md:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block"
                >
                  Ammerbucher Design Talk
                </a>
              </div>
            </div>
            
            {/* Spalte 2: Sonstige Links */}
            <div className="footer-column">
              <div className="space-y-2 md:space-y-3">
                <a
                  href="http://werkzeugderzukunft.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black cursor-pointer text-base md:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block"
                >
                  Werkzeug der Zukunft
                </a>
                <a
                  href="http://maschine2020.com/de_DE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black cursor-pointer text-base md:text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-300 block"
                >
                  Maschine 2020
                </a>
              </div>
            </div>
            
            {/* Spalte 3: Kontakt - nun rechtsbündig */}
            <div className="footer-column mt-4 sm:mt-0">
              <div className="flex flex-col items-start sm:items-end space-y-2 md:space-y-3">
                <a
                  href="mailto:info@designtech.eu?subject=Anfrage%20für%20ein%20Videocall&body=Sehr%20geehrte%20Frau%20Mayer,%0A%0A"
                  className="btn-gradient whitespace-nowrap text-sm md:text-base"
                >
                  VIDEOCALL
                </a>
                
                <a
                  href="tel:+49707391890"
                  className="btn-gradient whitespace-nowrap text-sm md:text-base"
                >
                  +49 7073 91 89 0
                </a>
              </div>
            </div>
            
            {/* Spalte 4: Social Media - rechtsbündig */}
            <div className="footer-column mt-4 sm:mt-0">
              <div className="flex justify-start sm:justify-end space-x-3">
                <Link
                  href="https://www.linkedin.com/company/designtechschmid/posts/?feedView=all"
                  className="icon-btn-gradient"
                  onClick={handleLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icon/icon-linkedin-black.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </Link>

                <Link
                  href="https://www.kununu.com/de/design-tech1/kultur"
                  className="icon-btn-gradient"
                  onClick={handleLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icon/icon-kununu-black.svg"
                    alt="Kununu"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;