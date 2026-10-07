import { useRef, useState, useEffect } from "react";

// Hintergrundvideo erst laden, wenn es in die Nähe des Viewports kommt.
// Das <video>-Element hat bewusst kein src/<source> im Markup: Die Quelle
// wird hier genau einmal gesetzt (mobil ggf. die kleinere Variante).
// Außerhalb des Viewports wird das Video pausiert.
export function useOptimizedVideo(src: string, autoplay = true, mobileSrc?: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let started = false;
    const handleLoaded = () => setIsLoaded(true);
    const handleError = () => setError(`Failed to load video: ${video.currentSrc || src}`);
    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('error', handleError);

    const play = () => {
      video.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay vom Browser verhindert (z. B. Energiesparmodus) – Video bleibt pausiert
      });
    };

    const start = () => {
      started = true;
      const useMobile = mobileSrc && window.matchMedia('(max-width: 767px)').matches;
      video.muted = true;
      video.src = useMobile ? mobileSrc : src;
      video.load();
    };

    // Fallback für Browser ohne IntersectionObserver: sofort laden
    if (!('IntersectionObserver' in window)) {
      start();
      if (autoplay) play();
      return () => {
        video.removeEventListener('loadeddata', handleLoaded);
        video.removeEventListener('error', handleError);
      };
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!started) start();
        if (autoplay) play();
      } else if (started && !video.paused) {
        video.pause();
        setIsPlaying(false);
      }
    }, { rootMargin: '200px 0px' });

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, [src, mobileSrc, autoplay]);

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
