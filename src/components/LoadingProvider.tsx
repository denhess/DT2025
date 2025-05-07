// src/components/LoadingProvider.tsx
"use client";

import { useState, useEffect } from "react";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      {!pageLoaded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {children}
    </>
  );
}