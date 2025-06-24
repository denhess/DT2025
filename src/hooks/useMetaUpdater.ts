// src/hooks/useMetaUpdater.ts
'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useMetaUpdater() {
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    // Update document title
    document.title = t('meta.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.title'));
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.description'));
    }
    
  }, [t, i18n.language]);
}

// Verwendung in page.tsx:
// import { useMetaUpdater } from '@/hooks/useMetaUpdater';
// 
// export default function Home() {
//   useMetaUpdater(); // An den Anfang der Komponente
//   
//   return (
//     // ... Rest der Komponente
//   );
// }