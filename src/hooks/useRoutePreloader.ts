import { useCallback } from 'react';
import { VideoCache } from '@/lib/video-cache';

// Definiere welche Videos für welche Routen geladen werden sollen
const ROUTE_RESOURCES = {
  '/': [
    '/HeaderVideo.mp4',
    '/landingpage/held/HeaderVideo_held_animation.mp4'
  ],
  '/projects': [
    '/BodyVideo-vhf.mp4',
    '/BodyVideo-Junker.mp4',
    '/BodyVideo-BHS.mp4',
    '/Vecoplan_desktop.mp4',
    '/BodyVideo-TCB.mp4'
  ],
  '/design-tech': [
    '/DesignTechVideo.mp4'
  ],
  '/design-to-success': [
    '/DesignToSuccessVideo.mp4'
  ],
  '/karriere': [
    '/KarriereVideo.mp4'
  ]
};

export function useRoutePreloader() {
  const preloader = VideoCache.getInstance();
  
  const preloadRoute = useCallback(async (route: string) => {
    const resources = ROUTE_RESOURCES[route as keyof typeof ROUTE_RESOURCES];
    if (resources) {
      console.log(`Preloading resources for route: ${route}`);
      
      // Preload alle Videos für diese Route
      const promises = resources.map(async (videoSrc) => {
        try {
          await preloader.preloadVideo(videoSrc);
          console.log(`Successfully preloaded: ${videoSrc}`);
        } catch (error) {
          console.warn(`Failed to preload ${videoSrc}:`, error);
        }
      });
      
      await Promise.allSettled(promises);
    }
  }, [preloader]);
  
  const preloadAllCriticalResources = useCallback(async () => {
    console.log('Starting preload of critical resources...');
    
    // Preload Homepage resources sofort
    await preloadRoute('/');
    
    // Andere Routen mit 3 Sekunden Delay preloaden (damit Homepage nicht blockiert wird)
    setTimeout(() => {
      console.log('Starting background preload of other routes...');
      Object.keys(ROUTE_RESOURCES).forEach(route => {
        if (route !== '/') {
          preloadRoute(route);
        }
      });
    }, 3000);
  }, [preloadRoute]);
  
  return {
    preloadRoute,
    preloadAllCriticalResources,
    isResourcePreloaded: (src: string) => preloader.getVideo(src) !== null
  };
}