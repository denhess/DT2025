"use client";

import { useRoutePreloader } from '@/hooks/useRoutePreloader';
import { useEffect } from 'react';

export function PreloadManager() {
  const { preloadAllCriticalResources } = useRoutePreloader();
  
  useEffect(() => {
    console.log('PreloadManager: Starting video preloading...');
    // Starte Preloading nach App-Mount
    preloadAllCriticalResources();
  }, [preloadAllCriticalResources]);
  
  return null; // Diese Komponente rendert nichts, läuft nur im Hintergrund
}