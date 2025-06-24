// CookieBanner.tsx
"use client";

import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useTranslation } from 'react-i18next';

interface CookieBannerRef {
  openBanner: () => void;
}

const CookieBanner = forwardRef<CookieBannerRef, unknown>((_, ref) => {
  const { t } = useTranslation('cookiebanner');
  const [showBanner, setShowBanner] = useState(true);
  const [essentialCookies, setEssentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [externalCookies, setExternalCookies] = useState(false);

  // Lade die Cookie-Einstellungen aus localStorage, falls vorhanden
  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem("cookiePreferences") || "{}");
    if (savedPreferences && Object.keys(savedPreferences).length > 0) {
      setEssentialCookies(savedPreferences.essentialCookies ?? true);
      setAnalyticsCookies(savedPreferences.analyticsCookies ?? false);
      setExternalCookies(savedPreferences.externalCookies ?? false);
      setShowBanner(savedPreferences.showBanner ?? false);
    }
  }, []);

  // Verwende useImperativeHandle, um Methoden über den ref verfügbar zu machen
  useImperativeHandle(ref, () => ({
    openBanner: () => {
      setShowBanner(true); // Zeige das Banner an, wenn openBanner aufgerufen wird
    },
  }));

  const handleAcceptAll = () => {
    setEssentialCookies(true);
    setAnalyticsCookies(true);
    setExternalCookies(true);
    setShowBanner(false);
    savePreferences(true, true, true); // Speichern der Einstellungen in localStorage
    console.log("Alle Cookies akzeptiert");
  };

  const handleSavePreferences = () => {
    setShowBanner(false);
    savePreferences(essentialCookies, analyticsCookies, externalCookies); // Speichern der Einstellungen in localStorage
    console.log("Präferenzen gespeichert", {
      essentialCookies,
      analyticsCookies,
      externalCookies,
    });
  };

  // Speichern der Cookie-Einstellungen im localStorage
  const savePreferences = (essential: boolean, analytics: boolean, external: boolean) => {
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essentialCookies: essential,
        analyticsCookies: analytics,
        externalCookies: external,
        showBanner: false,
      })
    );
  };

  // Banner nicht anzeigen, wenn der Nutzer es bereits geschlossen hat oder Präferenzen gespeichert wurden
  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-6 z-50">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold mb-2">{t('title')}</h2>
          <p className="text-sm mb-4">{t('description')}</p>
        </div>
        <button
          className="icon-btn-gradient-white"
          onClick={() => setShowBanner(false)}
          aria-label={t('buttons.close')}
        >
          ×
        </button>
      </div>

      <div className="mb-4">
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={essentialCookies}
            onChange={() => setEssentialCookies(!essentialCookies)}
            className="mr-2"
            disabled
          />
          <span className="text-sm">
            <strong>{t('essential.title')}</strong> {t('essential.description')}
          </span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={analyticsCookies}
            onChange={() => setAnalyticsCookies(!analyticsCookies)}
            className="mr-2"
          />
          <span className="text-sm">
            <strong>{t('analytics.title')}</strong> {t('analytics.description')}
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={externalCookies}
            onChange={() => setExternalCookies(!externalCookies)}
            className="mr-2"
          />
          <span className="text-sm">
            <strong>{t('external.title')}</strong> {t('external.description')}
          </span>
        </label>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleAcceptAll}
          className="btn-gradient-trans whitespace-nowrap"
        >
          {t('buttons.acceptAll')}
        </button>
        <button
          onClick={handleSavePreferences}
          className="btn-gradient-white-noanimation whitespace-nowrap"
        >
          {t('buttons.save')}
        </button>
      </div>
    </div>
  );
});

CookieBanner.displayName = "CookieBanner";

export default CookieBanner;