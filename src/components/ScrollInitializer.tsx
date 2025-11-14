// src/components/ScrollInitializer.tsx - Initialisiert Scroll-Utilities
"use client";

import { useEffect } from 'react';
import { initScrollToAnchorHandler } from '@/utils/scrollUtils';

export function ScrollInitializer() {
  useEffect(() => {
    // Initialisiere Scroll-to-Anchor Handler
    const cleanup = initScrollToAnchorHandler();
    
    return cleanup;
  }, []);

  return null;
}
