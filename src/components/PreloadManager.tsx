// src/components/PreloadManager.tsx - Optimiert für kritische Ressourcen
"use client";

import { useEffect } from "react";

export function PreloadManager() {
  useEffect(() => {
    // Preload kritischer Ressourcen nach initial load
    const preloadCriticalAssets = () => {
      const criticalAssets = [
        '/HeaderVideo-thumbnail.webp', // Hero Poster
        // Weitere kritische Assets hier hinzufügen
      ];

      criticalAssets.forEach(asset => {
        const link = document.createElement('link');
        link.rel = 'preload';
        
        // Bestimme den richtigen Type
        if (asset.endsWith('.webp') || asset.endsWith('.jpg') || asset.endsWith('.png')) {
          link.as = 'image';
        } else if (asset.endsWith('.mp4')) {
          link.as = 'video';
        }
        
        link.href = asset;
        document.head.appendChild(link);
      });
    };

    // Preload nach kurzer Verzögerung um initiales Rendering nicht zu blockieren
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(() => preloadCriticalAssets(), { timeout: 2000 });
    } else {
      setTimeout(preloadCriticalAssets, 100);
    }
  }, []);

  return null;
}
