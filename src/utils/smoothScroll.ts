// utils/smoothScroll.ts

// Erweitere das Window Interface um unsere isScrolling-Property
declare global {
    interface Window {
      isScrolling: boolean;
    }
  }
  
  /**
   * Sanftes Scrollen zu einem Element mit anpassbarer Geschwindigkeit
   */
  export function smoothScrollTo(element: HTMLElement, options: {
    duration?: number;
    easing?: string;
    offset?: number;
  } = {}) {
    const { 
      duration = 500, 
      easing = 'easeInOutCubic',
      offset = 0
    } = options;
    
    const easings: { [key: string]: (t: number) => number } = {
      // Sehr sanft mit langsamer Beschleunigung und Abbremsung
      easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      // Noch sanftere Funktion für extra weiche Übergänge
      easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,
      // Sinusförmige Bewegung für natürliches Gefühl
      easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2
    };
    
    const easingFunction = easings[easing] || easings.easeInOutCubic;
    
    // Aktuelle Position
    const startPosition = window.pageYOffset;
    
    // Zielposition (mit optionalem Offset)
    const targetPosition = element.getBoundingClientRect().top + startPosition + offset;
    
    // Distanz zum Scrollen
    const distance = targetPosition - startPosition;
    
    // Wenn die Distanz sehr klein ist, können wir die Animation überspringen
    if (Math.abs(distance) < 10) return;
    
    // Startzeit
    let startTime: number | null = null;
    
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const eased = easingFunction(progress);
      
      window.scrollTo(0, startPosition + distance * eased);
      
      // Animation fortsetzen, wenn noch nicht abgeschlossen
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    // Animation starten
    requestAnimationFrame(animation);
  }
  
  /**
   * Scrollt sanft zum nächsten Abschnitt basierend auf der Scrollrichtung
   */
  export function scrollToNextSection(direction: 'up' | 'down' = 'down') {
    // Typsichere Erfassung der Sections
    const sectionElements = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    const sectionsArray = Array.from(sectionElements);
    const currentPosition = window.pageYOffset;
    
    // Finde den aktuellen sichtbaren Abschnitt
    let currentSectionIndex = sectionsArray.findIndex((section) => {
      const rect = section.getBoundingClientRect();
      // Wir betrachten einen Abschnitt als "aktuell", wenn er größtenteils im Viewport ist
      return rect.top <= 100 && rect.bottom > window.innerHeight / 2;
    });
    
    // Fallback, falls kein Abschnitt als "aktuell" identifiziert wurde
    if (currentSectionIndex === -1) {
      currentSectionIndex = sectionsArray.findIndex((section) => {
        return section.offsetTop > currentPosition;
      }) - 1;
      
      if (currentSectionIndex < 0) currentSectionIndex = 0;
    }
    
    // Bestimme den Zielabschnitt
    const targetIndex = direction === 'up' 
      ? Math.max(0, currentSectionIndex - 1)
      : Math.min(sectionsArray.length - 1, currentSectionIndex + 1);
    
    // Scrolle zu diesem Abschnitt
    if (sectionsArray[targetIndex]) {
      smoothScrollTo(sectionsArray[targetIndex], { 
        duration: 800,  // Längere Dauer für sanftere Übergänge
        easing: 'easeInOutQuint' // Sehr sanfte Easing-Funktion
      });
    }
  }
  
  /**
   * Event-Handler für Mausrad, der für Wheel-Events verwendet werden kann
   */
  export function handleWheelEvent(event: WheelEvent) {
    // Verhindere Standard-Scrollverhalten
    event.preventDefault();
    
    // Bestimme Scrollrichtung
    const direction = event.deltaY > 0 ? 'down' : 'up';
    
    // Initialisierung der isScrolling-Eigenschaft, falls sie noch nicht existiert
    if (window.isScrolling === undefined) {
      window.isScrolling = false;
    }
    
    // Verzögerung für Debouncing (verhindert zu schnelles Scrollen)
    if (!window.isScrolling) {
      window.isScrolling = true;
      
      // Scrolle zum nächsten Abschnitt
      scrollToNextSection(direction);
      
      // Setze Timeout, um weitere Scroll-Events zu verhindern
      setTimeout(() => {
        window.isScrolling = false;
      }, 1000); // Längere Verzögerung für sanfteres Gefühl
    }
  }