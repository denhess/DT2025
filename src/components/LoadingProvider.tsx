// src/components/LoadingProvider.tsx
"use client";

import { useState, useEffect } from "react";

interface LoadingProviderProps {
  children: React.ReactNode;
  debugMode?: boolean; // Optional Debug-Modus Parameter
  debugDuration?: number; // Optional Dauer in Millisekunden
}

export default function LoadingProvider({ 
  children, 
  debugMode = false, 
  debugDuration = 3000 
}: LoadingProviderProps) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (debugMode) {
      // Im Debug-Modus: zeige den Loader für die angegebene Zeit
      const timer = setTimeout(() => {
        setPageLoaded(true);
      }, debugDuration);
      
      return () => clearTimeout(timer);
    } else {
      // Normaler Modus: sofort laden
      setPageLoaded(true);
    }
  }, [debugMode, debugDuration]);

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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: 'rgb(24, 21, 28)' }}>
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