// src/components/TranslationTest.tsx
"use client";

import { useTranslations, useLocale } from 'next-intl';

interface Props {
  initialLocale: string;
}

export function TranslationTestComponent({ initialLocale }: Props) {
  const locale = useLocale();
  
  console.log('🚀 Client component rendering with locale:', locale);
  
  try {
    const t = useTranslations('hero');
    
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '32px'
      }}>
        {/* Erfolg - Grundfunktion */}
        <div style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '16px'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
            ✅ Seite lädt erfolgreich!
          </h1>
          <p>Server Locale: <strong>{initialLocale}</strong></p>
          <p>Client Locale: <strong>{locale}</strong></p>
        </div>

        {/* Erfolg - Übersetzungen */}
        <div style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
            🎉 Übersetzungen funktionieren!
          </h2>
          <p><strong>Subtitle:</strong> {t('subtitle')}</p>
          <p><strong>Title:</strong> {t('title')}</p>
        </div>

        {/* Info */}
        <div style={{
          backgroundColor: '#fbbf24',
          color: 'black',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
            🔍 Nächste Schritte:
          </h3>
          <p>• Teste /de und /en URLs</p>
          <p>• Wenn das funktioniert, können wir deine Hero-Komponente anpassen</p>
          <p>• Dann Header und Footer hinzufügen</p>
        </div>
      </div>
    );
    
  } catch (error) {
    console.error('Translation error:', error);
    
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '32px'
      }}>
        <div style={{
          backgroundColor: '#ef4444',
          color: 'white',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
            ❌ Übersetzungen laden nicht
          </h2>
          <p><strong>Fehler:</strong> {String(error)}</p>
          <p><strong>Locale:</strong> {locale}</p>
          <p><strong>Check:</strong> src/messages/{locale}.json existiert?</p>
        </div>
      </div>
    );
  }
}