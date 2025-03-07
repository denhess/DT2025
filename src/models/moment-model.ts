export interface MomentData {
    // Basisinformationen
    img: string;                // URL des Hauptbilds
    imgMobile?: string;         // Optional: URL des alternativen Bilds für Mobilgeräte
    logo?: string;              // Optional: URL des Logos
    logoColor?: string;         // Optional: Farbe des Logos (Hex, RGB, etc.)
    video?: string;             // Optional: URL des Videos
    title?: string;             // Name des Produkts (Deutsch)
    titleEn?: string;           // Name des Produkts (Englisch)
    description?: string;        // Beschreibung des Produkts (Deutsch)
    descriptionEn?: string;      // Beschreibung des Produkts (Englisch)
    textColor?: string;         // Optional: Schriftfarbe (Hex, RGB, etc.)

    // Veröffentlichungs- und Copyright-Informationen
    release?: boolean;          // Gibt an, ob das Projekt veröffentlicht ist
    releaseDate?: string;       // Optional: Veröffentlichungsdatum (ISO 8601 Format)
    copyright?: string;         // Copyright-Informationen

    // SEO-relevante Metadaten
    metaTitle?: string;         // SEO-Titel (max. 60 Zeichen)
    metaTitleEN?: string;       // SEO-Titel auf Englisch
    metaDescription?: string;   // SEO-Beschreibung (max. 160 Zeichen)
    metaDescriptionEN?: string; // SEO-Beschreibung auf Englisch
    keywords?: string[];        // Stichwörter für SEO
    keywordsEN?: string[];      // Stichwörter auf Englisch
    canonicalURL?: string;      // Canonical URL für Google

    // Strukturierte Daten für Rich Snippets
    schemaType?: string;        // Schema.org Typ, z.B. "Product" oder "CreativeWork"
    schemaAttributes?: {        // Zusätzliche Attribute für strukturierte Daten
        [key: string]: string | number | boolean;
    };

    // Zusatzinformationen
    tags?: string[];            // Tags für Filter oder Kategorisierung
    lang?: "de" | "en" | "both"; // Sprachoptionen (Deutsch, Englisch oder beide)
}