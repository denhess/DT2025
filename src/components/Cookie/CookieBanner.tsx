// CookieBanner.tsx
"use client";

import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const CookieBanner = forwardRef((props, ref) => {
  const [showBanner, setShowBanner] = useState(true);
  const [essentialCookies, setEssentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [externalCookies, setExternalCookies] = useState(false);

  // Lade die Cookie-Einstellungen aus localStorage, falls vorhanden
  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem("cookiePreferences") || "{}");
    if (savedPreferences) {
      setEssentialCookies(savedPreferences.essentialCookies ?? true);
      setAnalyticsCookies(savedPreferences.analyticsCookies ?? false);
      setExternalCookies(savedPreferences.externalCookies ?? false);
      setShowBanner(savedPreferences.showBanner ?? true);
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
    savePreferences(); // Speichern der Einstellungen in localStorage
    console.log("Alle Cookies akzeptiert");
  };

  const handleSavePreferences = () => {
    setShowBanner(false);
    savePreferences(); // Speichern der Einstellungen in localStorage
    console.log("Präferenzen gespeichert", {
      essentialCookies,
      analyticsCookies,
      externalCookies,
    });
  };

  // Speichern der Cookie-Einstellungen im localStorage
  const savePreferences = () => {
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essentialCookies,
        analyticsCookies,
        externalCookies,
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
          <h2 className="text-lg font-bold mb-2">DATENSCHUTZEINSTELLUNGEN</h2>
          <p className="text-sm mb-4">Diese Website nutzt Cookies.</p>
        </div>
        <button
          className="text-white text-xl font-bold ml-4"
          onClick={() => setShowBanner(false)}
          aria-label="Schließen"
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
            <strong>Essenzielle Cookies:</strong> Notwendig für die Funktionalität der Website
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
            <strong>Analyse Cookies:</strong> Diese Website verwendet Google Analytics
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
            <strong>Externe Cookies:</strong> Zum Anzeigen von YouTube-Inhalten
          </span>
        </label>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleAcceptAll}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Alle Akzeptieren
        </button>
        <button
          onClick={handleSavePreferences}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Speichern
        </button>
      </div>
    </div>
  );
});

export default CookieBanner;
