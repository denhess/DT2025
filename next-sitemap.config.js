module.exports = {
  siteUrl: 'https://designtech.eu',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // Static Export: Sitemap und robots.txt direkt in den Export-Ordner schreiben.
  // (Standard wäre public/ – dort landen sie erst beim nächsten Build in out/.)
  outDir: 'out',

  // WICHTIG für Static Export: trailing slash verwenden
  trailingSlash: true,

  // Exclude-Patterns: Diese Seiten NICHT in Sitemap aufnehmen
  // (Impressum/Datenschutz sind per noindex ausgeschlossen, nicht per robots.txt)
  exclude: [
    '/impres',
    '/impres/',
    '/impressum',
    '/impressum/',
    '/privacy-policy',
    '/privacy-policy/',
    '/datenschutz',
    '/datenschutz/',
    '/404',
    '/404/',
    '/500',
    '/500/',
  ],

  // Robots.txt: alles crawlbar. /_next/ enthält die Skripte und Styles,
  // die Google zum Rendern braucht, und darf nicht gesperrt werden.
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // "Host:" wird von Google nicht unterstützt – Zeile weglassen
    transformRobotsTxt: async (_, robotsTxt) =>
      robotsTxt.replace(/\n# Host\nHost: .*\n/, '\n'),
  },

  // Keine Video-Einträge: Die Videos sind stumme Hintergrund-Loops im Hero,
  // nicht der Hauptinhalt der Seiten.
  transform: async (config, path) => {
    // Priority und Changefreq basierend auf Seiten-Typ
    let priority = 0.7;
    let changefreq = 'weekly';

    // Normalisiere path (entferne trailing slash für Vergleich)
    const normalizedPath = path.replace(/\/$/, '') || '/';

    // Homepage = höchste Priorität
    if (normalizedPath === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Maschinendesign = höchste Priorität (SEO-Fokusseite)
    else if (normalizedPath === '/maschinendesign') {
      priority = 1.0;
      changefreq = 'weekly';
    }
    // Hauptseiten = hohe Priorität
    else if (['/designtech', '/designtosuccess', '/karriere', '/erfolgsgeschichte'].includes(normalizedPath)) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Job-Seiten = mittlere Priorität
    else if (normalizedPath.startsWith('/karriere/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  }
};
