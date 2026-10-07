// src/lib/i18n.ts - Erweiterte Konfiguration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import aller Übersetzungsdateien
import commonDE from '@/locales/de/common.json';
import commonEN from '@/locales/en/common.json';
import designtechDE from '@/locales/de/designtech.json';
import designtechEN from '@/locales/en/designtech.json';
import designtosuccessDE from '@/locales/de/designtosuccess.json';
import designtosuccessEN from '@/locales/en/designtosuccess.json';
import karriereDE from '@/locales/de/karriere.json';
import karriereEN from '@/locales/en/karriere.json';
import legalDE from '@/locales/de/legal.json';
import legalEN from '@/locales/en/legal.json';
import cookiebannerDE from '@/locales/de/cookiebanner.json';
import cookiebannerEN from '@/locales/en/cookiebanner.json';
import maschinendesignDE from '@/locales/de/maschinendesign.json';
import maschinendesignEN from '@/locales/en/maschinendesign.json';

const resources = {
  de: {
    common: commonDE,
    designtech: designtechDE,
    designtosuccess: designtosuccessDE,
    karriere: karriereDE,
    legal: legalDE,
    cookiebanner: cookiebannerDE,
    maschinendesign: maschinendesignDE
  },
  en: {
    common: commonEN,
    designtech: designtechEN,
    designtosuccess: designtosuccessEN,
    karriere: karriereEN,
    legal: legalEN,
    cookiebanner: cookiebannerEN,
    maschinendesign: maschinendesignEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // Standard-Sprache
    fallbackLng: 'de',
    ns: ['common', 'designtech', 'designtosuccess', 'karriere', 'legal', 'cookiebanner', 'maschinendesign'], // Alle verfügbaren Namespaces
    defaultNS: 'common', // Standard-Namespace

    // Synchron initialisieren, damit Texte beim statischen Export im HTML stehen
    initImmediate: false,

    interpolation: {
      escapeValue: false, // React escaped bereits
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
