// src/components/I18nProvider.tsx
'use client';

import { useEffect, useState } from 'react';
import '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Kurze Verzögerung um sicherzustellen, dass i18n initialisiert ist
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null; // Oder ein Loading-Indikator
  }

  return <>{children}</>;
}