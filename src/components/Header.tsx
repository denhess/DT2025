"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { DtLogo } from "./Dt-logo";
import MenuOverlay from "./MenuOverlay";
import clsx from "clsx";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname(); // Aktuelle Route
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  useEffect(() => {
    // Diese Funktion initialisiert den Observer
    const setupObserver = () => {
      // Initialer Check
      const visibleSection = document.querySelector("[data-background]");
      if (visibleSection) {
        setIsDark(visibleSection.getAttribute("data-background") === "dark");
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const background = entry.target.getAttribute("data-background");
              setIsDark(background === "dark");
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      // Alle Sections beobachten
      const sections = document.querySelectorAll("[data-background]");
      sections.forEach((section) => observer.observe(section));
      return observer;
    };

    // Warten auf DOM-Update nach Routenwechsel
    const timer = setTimeout(() => {
      const observer = setupObserver();
      
      // Cleanup
      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]); // Effekt wird bei Routenwechsel neu ausgeführt

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-8 md:px-8 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Dynamisches Logo */}
            <div className="flex-shrink-0 relative">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <DtLogo
                  className={clsx(
                    "z-50 w-60 sm:w-60 md:w-60 lg:w-80 cursor-pointer transition-colors duration-300",
                    isDark ? "text-white" : "text-black",
                    isMenuOpen && "opacity-0" // Verstecken, wenn das Menü offen ist
                  )}
                />
                
                {/* Fixes schwarzes Logo, das nur angezeigt wird, wenn das Menü offen ist */}
                {isMenuOpen && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DtLogo className="text-black w-60 sm:w-60 md:w-60 lg:w-80" />
                  </div>
                )}
              </Link>
            </div>

            {/* Menü-Button: X-Icon wenn offen, Burger-Menü wenn geschlossen */}
            {isMenuOpen ? (
              <button
                onClick={handleMenuToggle}
                className="icon-btn-gradient z-50"
                aria-expanded={true}
                aria-label="Menü schließen"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleMenuToggle}
                className={clsx(
                  "z-50 inline-flex items-center justify-center rounded-full w-10 h-10 transition-all duration-300",
                  isDark ? "burger-dark" : "burger-light"
                )}
                aria-expanded={false}
                aria-label="Hauptmenü öffnen"
              >
                <svg 
                  width="18" 
                  height="14" 
                  viewBox="0 0 18 14" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 1H17M1 7H17M1 13H17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Menü Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}