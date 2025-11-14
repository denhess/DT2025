// src/utils/scrollUtils.ts

/**
 * Deaktiviert Scroll-Snap temporär beim Scrollen zu Anchors
 * Verhindert, dass Scroll-Snap die Navigation zu Hash-Links stört
 */
export function initScrollToAnchorHandler() {
  if (typeof window === 'undefined') return;

  // Handler für alle Links mit Hash
  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (!link) return;
    
    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;
    
    // Deaktiviere Scroll-Snap
    document.documentElement.classList.add('scrolling-to-anchor');
    
    // Reaktiviere nach Scroll (mit Buffer)
    setTimeout(() => {
      document.documentElement.classList.remove('scrolling-to-anchor');
    }, 1000);
  };
  
  // Event-Listener hinzufügen
  document.addEventListener('click', handleAnchorClick);
  
  // Cleanup-Funktion zurückgeben
  return () => {
    document.removeEventListener('click', handleAnchorClick);
  };
}
