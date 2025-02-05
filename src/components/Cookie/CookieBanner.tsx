"use client";

import React, { useState, useEffect } from "react";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [essentialCookies, setEssentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [externalCookies, setExternalCookies] = useState(false);

  // Prüfen, ob der Benutzer bereits eine Entscheidung getroffen hat
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");

    if (cookieConsent === "accepted" || cookieConsent === "saved") {
      setShowBanner(false); // Banner ausblenden, wenn der Benutzer bereits zugestimmt hat
    } else {
      setShowBanner(true); // Banner anzeigen, wenn der Benutzer noch keine Entscheidung getroffen hat
    }

    // Wenn Präferenzen gespeichert wurden, die Einstellungen wiederherstellen
    if (cookieConsent === "saved") {
      const savedPreferences = localStorage.getItem("cookiePreferences");
      if (savedPreferences) {
        const { essential, analytics, external } = JSON.parse(savedPreferences);
        setEssentialCookies(essential);
        setAnalyticsCookies(analytics);
        setExternalCookies(external);
      }
    }
  }, []);

  // Speichert die Entscheidung des Nutzers
  const handleAcceptAll = () => {
    setEssentialCookies(true);
    setAnalyticsCookies(true);
    setExternalCookies(true);
    setShowBanner(false);

    localStorage.setItem("cookieConsent", "accepted"); // Speichert, dass der Nutzer alle Cookies akzeptiert hat
    console.log("Alle Cookies akzeptiert");
  };

  // Speichert die individuellen Präferenzen
  const handleSavePreferences = () => {
    setShowBanner(false);

    // Speichern der Präferenzen
    localStorage.setItem("cookieConsent", "saved");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essential: essentialCookies,
        analytics: analyticsCookies,
        external: externalCookies,
      })
    );
    console.log("Präferenzen gespeichert", {
      essentialCookies,
      analyticsCookies,
      externalCookies,
    });
  };

  // Banner ausblenden, wenn es geschlossen wird
  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null; // Banner ausblenden, wenn es geschlossen wurde
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-6 z-50">
      <div className="flex justify-between items-start">
        {/* Titel und Beschreibung */}
        <div>
          <h2 className="text-lg font-bold mb-2">DATENSCHUTZEINSTELLUNGEN</h2>
          <p className="text-sm mb-4">Diese Website nutzt Cookies.</p>
        </div>
        {/* Schließen-Button */}
        <button
          className="text-white text-xl font-bold ml-4"
          onClick={handleCloseBanner}
          aria-label="Schließen"
        >
          ×
        </button>
      </div>

      {/* Checkboxen für Cookies */}
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={essentialCookies}
            onChange={() => setEssentialCookies(!essentialCookies)}
            className="mr-2"
            disabled // Essentielle Cookies können nicht deaktiviert werden
          />
          <span className="text-sm">
            <strong>Essenzielle Cookies:</strong> Notwendig für die
            Funktionalität der Website
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
            <strong>Analyse Cookies:</strong> Diese Website verwendet Google
            Analytics
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

      {/* Buttons */}
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
};

export default CookieBanner;
