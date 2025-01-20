export interface JobPageData {
    // Basisinformationen
    title: string;                   // Titel des Jobs (Deutsch)
    titleEn?: string;                // Optional: Titel des Jobs (Englisch)
    shortDescription?: string;       // Kurze Beschreibung des Jobs (Deutsch, z. B. für Teaser)
    shortDescriptionEn?: string;     // Kurze Beschreibung des Jobs (Englisch)
    department?: string;             // Abteilung, z. B. "Marketing" oder "IT"
    location?: string;               // Standort des Jobs
    employmentType?: "full-time" | "part-time" | "freelance" | "internship"; // Beschäftigungsart

    // Inhalte für die Job-Seite
    detailedDescription?: string;    // Detaillierte Beschreibung des Jobs (Deutsch)
    detailedDescriptionEn?: string; // Detaillierte Beschreibung des Jobs (Englisch)
    responsibilities?: string[];     // Liste der Aufgaben und Verantwortlichkeiten
    qualifications?: string[];       // Anforderungen und Qualifikationen
    benefits?: string[];             // Vorteile und Leistungen für Mitarbeiter

    // Bewerbungsinformationen
    applicationLink?: string;        // Link zur Bewerbungsseite
    applicationEmail?: string;       // Optional: E-Mail-Adresse für Bewerbungen
    applicationDeadline?: string;    // Optional: Bewerbungsfrist (ISO 8601 Format)

    // Veröffentlichungsinformationen
    isActive: boolean;               // Gibt an, ob der Job aktuell verfügbar ist
    postingDate?: string;            // Optional: Datum der Veröffentlichung (ISO 8601 Format)
    lastUpdated?: string;            // Optional: Datum der letzten Aktualisierung (ISO 8601 Format)

    // SEO-relevante Metadaten
    metaTitle?: string;              // SEO-Titel (max. 60 Zeichen)
    metaTitleEn?: string;            // SEO-Titel auf Englisch
    metaDescription?: string;        // SEO-Beschreibung (max. 160 Zeichen)
    metaDescriptionEn?: string;      // SEO-Beschreibung auf Englisch
    keywords?: string[];             // Stichwörter für SEO
    keywordsEn?: string[];           // Stichwörter auf Englisch
    canonicalURL?: string;           // Canonical URL für Google

    // Zusatzinformationen
    tags?: string[];                 // Tags für Filter oder Kategorisierung
    lang?: "de" | "en" | "both";     // Sprachoptionen (Deutsch, Englisch oder beide)
}
