// Globaler Video-Cache für bessere Performance
export class VideoCache {
  private static instance: VideoCache;
  private cache = new Map<string, HTMLVideoElement>();
  
  static getInstance() {
    if (!VideoCache.instance) {
      VideoCache.instance = new VideoCache();
    }
    return VideoCache.instance;
  }
  
  getVideo(src: string): HTMLVideoElement | null {
    return this.cache.get(src) || null;
  }
  
  setVideo(src: string, video: HTMLVideoElement) {
    this.cache.set(src, video);
  }
  
  preloadVideo(src: string): Promise<HTMLVideoElement> {
    return new Promise((resolve, reject) => {
      const existingVideo = this.cache.get(src);
      if (existingVideo && existingVideo.readyState >= 3) {
        resolve(existingVideo);
        return;
      }
      
      const video = document.createElement('video');
      video.src = src;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      
      const handleCanPlay = () => {
        this.cache.set(src, video);
        resolve(video);
      };
      
      const handleError = () => {
        reject(new Error(`Failed to load video: ${src}`));
      };
      
      video.addEventListener('canplay', handleCanPlay, { once: true });
      video.addEventListener('error', handleError, { once: true });
      
      video.load();
    });
  }
}