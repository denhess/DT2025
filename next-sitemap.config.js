module.exports = {
    siteUrl: 'https://designtech.eu',
    generateRobotsTxt: true,
  
    transform: async (config, path) => {
      // Liste mit Seiten und ihren zugehörigen Videos
      const videoData = {
        '/page': [
          {
            thumbnailLoc: 'https://designtech.eu/thumbnails/video1.webp',
            title: 'Erfolgsprojekte',
            description: 'Erfolgsprojekte von Design Tech.',
            contentLoc: 'https://www.designtech.eu/HeaderVideo.mp4',
          },
          {
            thumbnailLoc: 'https://www.designtech.eu/BodyVideo-thumbnail.webp',
            title: 'Erfolgsprojekte',
            description: 'Erfolgsprojekte von Design Tech.',
            contentLoc: 'https://www.designtech.eu/BodyVideo.mp4',
          }
        ],
        '/designtech/page': [
          {
            thumbnailLoc: 'https://www.designtech.eu/DesignTechVideo-thumbnail.webp',
            title: 'Design Tech',
            description: 'Impressionen von Design Tech.',
            contentLoc: 'https://www.designtech.eu/DesignTechVideo.mp4',
          }
        ],
        '/karriere/page': [
          {
            thumbnailLoc: 'https://www.designtech.eu/KarriereVideo-thumbnail.webp',
            title: 'Karriere bei Design Tech',
            description: 'Impressionen von Design Tech als Arbeitgeber.',
            contentLoc: 'https://www.designtech.eu/KarriereVideo.mp4',
          }
        ],
        '/designtosuccess/page': [
          {
            thumbnailLoc: 'https://www.designtech.eu/DesignToSuccessVideo-thumbnail.webp',
            title: 'DESIGN TO SUCCESS',
            description: 'Illustration der "DESIGN TO SUCCESS" Methode von Design Tech.',
            contentLoc: 'https://www.designtech.eu/DesignToSuccessVideo.mp4',
          }
        ]
      };
  
      return {
        loc: `${config.siteUrl}${path}`,
        videos: videoData[path] || [], // Falls die Seite in der Liste ist, füge Videos hinzu
      };
    }
  };