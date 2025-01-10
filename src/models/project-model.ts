export interface ProjectData {
    // Basisinformationen
    imageURL: string;                // URL des Hauptbilds
    logoURL?: string;                // Optional: URL des Logos
    videoURL?: string;               // Optional: URL des Videos
    productName?: string;            // Name des Produkts (Deutsch)
    productNameEN?: string;          // Name des Produkts (Englisch)
    productDescription?: string;     // Beschreibung des Produkts (Deutsch)
    productDescriptionEN?: string;   // Beschreibung des Produkts (Englisch)

    // Veröffentlichungs- und Copyright-Informationen
    release?: boolean;               // Gibt an, ob das Projekt veröffentlicht ist
    releaseDate?: string;            // Optional: Veröffentlichungsdatum (ISO 8601 Format)
    copyright?: string;              // Copyright-Informationen

    // SEO-relevante Metadaten
    metaTitle?: string;              // SEO-Titel (max. 60 Zeichen)
    metaTitleEN?: string;            // SEO-Titel auf Englisch
    metaDescription?: string;        // SEO-Beschreibung (max. 160 Zeichen)
    metaDescriptionEN?: string;      // SEO-Beschreibung auf Englisch
    keywords?: string[];             // Stichwörter für SEO
    keywordsEN?: string[];           // Stichwörter auf Englisch
    canonicalURL?: string;           // Canonical URL für Google

    // Strukturierte Daten für Rich Snippets
    schemaType?: string;             // Schema.org Typ, z.B. "Product" oder "CreativeWork"
    schemaAttributes?: {             // Zusätzliche Attribute für strukturierte Daten
        [key: string]: string | number | boolean;
    };

    // Zusatzinformationen
    tags?: string[];                 // Tags für Filter oder Kategorisierung
    lang?: "de" | "en" | "both";     // Sprachoptionen (Deutsch, Englisch oder beide)
}
