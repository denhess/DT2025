import { useRef, useState, useEffect } from "react";
import { VideoCache } from "@/lib/video-cache";

export function useOptimizedVideo(src: string, autoplay = true) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cache = VideoCache.getInstance();
  
  useEffect(() => {
    let isMounted = true;
    
    const loadVideo = async () => {
      try {
        // Versuche Video aus Cache zu laden
        const cachedVideo = cache.getVideo(src);
        
        if (cachedVideo && videoRef.current) {
          // Kopiere Eigenschaften vom gecachten Video
          videoRef.current.src = cachedVideo.src;
          videoRef.current.currentTime = 0;
          
          if (isMounted) {
            setIsLoaded(true);
            if (autoplay) {
              await videoRef.current.play();
              setIsPlaying(true);
            }
          }
          return;
        }
        
        // Preload Video wenn nicht im Cache
        const video = await cache.preloadVideo(src);
        
        if (isMounted && videoRef.current) {
          videoRef.current.src = video.src;
          setIsLoaded(true);
          
          if (autoplay) {
            await videoRef.current.play();
            setIsPlaying(true);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          console.error('Video loading error:', err);
        }
      }
    };
    
    loadVideo();
    
    return () => {
      isMounted = false;
    };
  }, [src, autoplay, cache]);
  
  // Visibility Change Handler optimiert
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible' && videoRef.current && isLoaded) {
        if (videoRef.current.paused && autoplay) {
          try {
            await videoRef.current.play();
            setIsPlaying(true);
          } catch {
            console.log('Autoplay prevented after visibility change');
          }
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isLoaded, autoplay]);
  
  return {
    videoRef,
    isLoaded,
    isPlaying,
    error,
    play: async () => {
      if (videoRef.current) {
        await videoRef.current.play();
        setIsPlaying(true);
      }
    },
    pause: () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
}