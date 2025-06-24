// src/contexts/HeaderContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

  useEffect(() => {
    const updateBackgroundType = () => {
      const sections = document.querySelectorAll('[data-background]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        
        if (scrollPosition >= sectionTop) {
          const bgType = section.getAttribute('data-background') as 'light' | 'dark';
          if (bgType && bgType !== backgroundType) {
            setBackgroundType(bgType);
          }
          break;
        }
      }
    };

    // Initial check
    updateBackgroundType();

    // Add scroll listener
    window.addEventListener('scroll', updateBackgroundType, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateBackgroundType);
    };
  }, [backgroundType]);

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