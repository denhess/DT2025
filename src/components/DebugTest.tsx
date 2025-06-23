// src/components/DebugTest.tsx
"use client";

import { useTranslations, useLocale } from 'next-intl';

export function DebugTest() {
  const locale = useLocale();
  
  console.log('Current locale:', locale);
  
  try {
    const t = useTranslations('hero');
    console.log('Translations loaded successfully');
    
    return (
      <div className="bg-green-500 text-white p-4 m-4 rounded">
        <h2>✅ next-intl funktioniert!</h2>
        <p><strong>Locale:</strong> {locale}</p>
        <p><strong>Subtitle:</strong> {t('subtitle')}</p>
        <p><strong>Title:</strong> {t('title')}</p>
      </div>
    );
  } catch (error) {
    console.error('Translation error:', error);
    return (
      <div className="bg-red-500 text-white p-4 m-4 rounded">
        <h2>❌ Fehler beim Laden der Übersetzungen</h2>
        <p><strong>Locale:</strong> {locale}</p>
        <p><strong>Error:</strong> {String(error)}</p>
      </div>
    );
  }
}

// Zusätzliche Debug-Infos
export function DebugInfo() {
  return (
    <div className="bg-blue-500 text-white p-4 m-4 rounded">
      <h2>🔍 Debug Informationen</h2>
      <p><strong>Umgebung:</strong> {process.env.NODE_ENV}</p>
      <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
    </div>
  );
}