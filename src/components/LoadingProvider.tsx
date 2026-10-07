// src/components/LoadingProvider.tsx - Kurzer Lade-Overlay bis zur Hydration
"use client";

import { useState, useEffect } from "react";

interface LoadingProviderProps {
  children: React.ReactNode;
}

// Der Inhalt steht bereits im statischen HTML. Der Overlay verdeckt ihn nur,
// bis React übernommen hat – und verschwindet per CSS-Animation spätestens
// nach 2,5 s auch dann, wenn JavaScript hängt oder fehlschlägt.
export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
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
      {!hydrated && (
        <div
          className="dt-page-loader fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'rgb(24, 21, 28)' }}
          aria-hidden="true"
        >
          <div style={loaderStyle} className="loader-animation"></div>
        </div>
      )}
      {children}
      {/* Styles (l5, dt-page-loader) liegen in globals.css, damit sie schon
          im statischen HTML greifen – styled-jsx wird ohne Registry nicht
          serverseitig ausgegeben. */}
    </>
  );
}
