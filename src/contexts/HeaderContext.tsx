// src/contexts/HeaderContext.tsx - Optimiert ohne Dependency-Problem
'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useRef } from 'react';

interface HeaderContextType {
  backgroundType: 'light' | 'dark';
  setBackgroundType: (type: 'light' | 'dark') => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

interface HeaderProviderProps {
  children: ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [backgroundType, setBackgroundType] = useState<'light' | 'dark'>('dark');
  const backgroundTypeRef = useRef<'light' | 'dark'>('dark');

  // Sync ref with state
  useEffect(() => {
    backgroundTypeRef.current = backgroundType;
  }, [backgroundType]);

  // Memoized update function ohne backgroundType in dependencies
  const updateBackgroundType = useCallback(() => {
    const sections = document.querySelectorAll('[data-background]');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;
      
      if (scrollPosition >= sectionTop) {
        const bgType = section.getAttribute('data-background') as 'light' | 'dark';
        // Verwende ref für Vergleich um Re-Render zu vermeiden
        if (bgType && bgType !== backgroundTypeRef.current) {
          setBackgroundType(bgType);
        }
        break;
      }
    }
  }, []); // Keine Dependencies mehr!

  useEffect(() => {
    // Initial check
    updateBackgroundType();

    // Add scroll listener mit passive für bessere Performance
    window.addEventListener('scroll', updateBackgroundType, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateBackgroundType);
    };
  }, [updateBackgroundType]);

  const value = {
    backgroundType,
    setBackgroundType,
  };

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
}

// Custom Hook für einfache Verwendung
export function useHeaderContext() {
  const context = useContext(HeaderContext);
  
  if (context === undefined) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  
  return context;
}
