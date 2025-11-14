// src/components/I18nProvider.tsx - Optimiert ohne künstliche Verzögerung
'use client';

import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Prüfe ob i18n bereits initialisiert ist
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      // Warte auf Initialisierung
      i18n.on('initialized', () => {
        setIsReady(true);
      });
    }

    // Cleanup
    return () => {
      i18n.off('initialized');
    };
  }, []);

  // Zeige nichts während i18n lädt (verhindert Flash of Untranslated Content)
  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
