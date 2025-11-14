module.exports = {
  siteUrl: 'https://designtech.eu',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  
  // WICHTIG für Static Export: trailing slash verwenden
  trailingSlash: true,
  
  // Exclude-Patterns: Diese Seiten NICHT in Sitemap aufnehmen
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
    '/api/*',
    '/_next/*',
  ],

  // Robots.txt Konfiguration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/impres',
          '/privacy-policy',
          '/api/',
          '/_next/',
        ],
      },
    ],
  },

  transform: async (config, path) => {
    // Priority und Changefreq basierend auf Seiten-Typ
    let priority = 0.7;
    let changefreq = 'weekly';

    // Normalisiere path (entferne trailing slash für Vergleich)
    const normalizedPath = path.replace(/\/$/, '') || '/';

    // Homepage = höchste Priorität
    if (normalizedPath === '') {
      priority = 1.0;
      changefreq = 'daily';
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

    // Liste mit Seiten und ihren zugehörigen Videos
    // WICHTIG: Keys mit trailing slash für Static Export
    const videoData = {
      '/': [
        {
          thumbnailLoc: 'https://designtech.eu/HeaderVideo-thumbnail.webp',
          title: 'Design Tech - Maschinendesign und Innovation',
          description: 'Preisgekröntes Maschinendesign für Marktführer im Investitionsgüterbereich',
          contentLoc: 'https://designtech.eu/HeaderVideo.mp4',
        },
        {
          thumbnailLoc: 'https://designtech.eu/BodyVideo-thumbnail.webp',
          title: 'Design Tech Erfolgsprojekte',
          description: 'Erfolgreiche Maschinendesign-Projekte von Design Tech',
          contentLoc: 'https://designtech.eu/BodyVideo.mp4',
        }
      ],
      '/designtech/': [
        {
          thumbnailLoc: 'https://designtech.eu/DesignTechVideo-thumbnail.webp',
          title: 'Design Tech - Über 210 internationale Design Awards',
          description: 'International führendes Designunternehmen für Maschinendesign',
          contentLoc: 'https://designtech.eu/DesignTechVideo.mp4',
        }
      ],
      '/karriere/': [
        {
          thumbnailLoc: 'https://designtech.eu/KarriereVideo-thumbnail.webp',
          title: 'Karriere bei Design Tech',
          description: 'Werde Teil unseres Teams - Jobs im Industriedesign',
          contentLoc: 'https://designtech.eu/KarriereVideo.mp4',
        }
      ],
      '/designtosuccess/': [
        {
          thumbnailLoc: 'https://designtech.eu/DesignToSuccessVideo-thumbnail.webp',
          title: 'Design To Success® - Strategisches Industriedesign',
          description: 'Unsere bewährte Innovationsstrategie für messbaren Erfolg',
          contentLoc: 'https://designtech.eu/DesignToSuccessVideo.mp4',
        }
      ],
      '/erfolgsgeschichte/': [
        {
          thumbnailLoc: 'https://designtech.eu/HeaderVideo-thumbnail.webp',
          title: 'HAILEY Case Study - 40% schnellere Rüstzeiten',
          description: 'Erfolgsgeschichte der HAILEY Doppelbandpresse von Held Technologie',
          contentLoc: 'https://designtech.eu/landingpage/held/HeaderVideo_held_animation.mp4',
        }
      ]
    };

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
      videos: videoData[path] || [], // Videos basierend auf path mit trailing slash
    };
  }
};
