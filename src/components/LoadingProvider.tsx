// src/components/LoadingProvider.tsx - Optimiert mit echtem Loading-State
"use client";

import { useState, useEffect } from "react";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Warte auf DOM-Ready und wichtige Ressourcen
    const handleLoad = () => {
      // Kurze Verzögerung für smoother Übergang
      requestAnimationFrame(() => {
        setPageLoaded(true);
      });
    };

    // Prüfe ob Seite bereits geladen ist
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const loaderStyle = {
    width: '40px',
    height: '40px',
    background: 'no-repeat linear-gradient(#FFDD00 0 0), no-repeat linear-gradient(#FFDD00 0 0), no-repeat linear-gradient(#FFDD00 0 0), no-repeat linear-gradient(#FFDD00 0 0)',
    backgroundSize: '21px 21px',
    animation: 'l5 1.5s infinite cubic-bezier(0.3, 1, 0, 1)'
  };

  return (
    <>
      {!pageLoaded && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center" 
          style={{ backgroundColor: 'rgb(24, 21, 28)' }}
        >
          <div style={loaderStyle} className="loader-animation"></div>
        </div>
      )}
      {children}
      
      <style jsx global>{`
        @keyframes l5 {
          0%   {background-position: 0 0, 100% 0, 100% 100%, 0 100%}
          33%  {background-position: 0 0, 100% 0, 100% 100%, 0 100%; width: 60px; height: 60px}
          66%  {background-position: 100% 0, 100% 100%, 0 100%, 0 0; width: 60px; height: 60px}
          100% {background-position: 100% 0, 100% 100%, 0 100%, 0 0}
        }
        .loader-animation {
          animation: l5 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
        }
      `}</style>
    </>
  );
}
