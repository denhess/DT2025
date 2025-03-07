// utils/smoothScroll.js
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Sanftes Scrollen zu einem Element mit anpassbarer Geschwindigkeit
 * @param {HTMLElement} element - Das Zielelement
 * @param {Object} options - Scroll-Optionen
 * @param {number} [options.duration=500] - Dauer der Animation in ms
 * @param {string} [options.easing='easeInOutCubic'] - Easing-Funktion
 * @param {number} [options.offset=0] - Zusätzlicher Offset in Pixeln
 */
export function smoothScrollTo(element, options = {}) {
  const { 
    duration = 500, 
    easing = 'easeInOutCubic',
    offset = 0
  } = options;
  
  const easings = {
    // Sehr sanft mit langsamer Beschleunigung und Abbremsung
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    // Noch sanftere Funktion für extra weiche Übergänge
    easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,
    // Sinusförmige Bewegung für natürliches Gefühl
    easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2
  };
  
  const easingFunction = easings[easing] || easings.easeInOutCubic;
  
  // Aktuelle Position
  const scrollTop = window.pageYOffset;
  
  // Zielposition (mit optionalem Offset)
  const targetPosition = element.getBoundingClientRect().top + scrollTop + offset;
  
  // Distanz zum Scrollen
  const distance = targetPosition - scrollTop;
  
  // Wenn die Distanz sehr klein ist, können wir die Animation überspringen
  if (Math.abs(distance) < 10) return;
  
  // Startzeit
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const eased = easingFunction(progress);
    
    window.scrollTo(0, scrollTop + distance * eased);
    
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
 * @param {string} [direction='down'] - 'up' oder 'down'
 */
export function scrollToNextSection(direction = 'down') {
  const sections = Array.from(document.querySelectorAll('section'));
  const currentPosition = window.pageYOffset;
  
  // Finde den aktuellen sichtbaren Abschnitt
  let currentSectionIndex = sections.findIndex(section => {
    const rect = section.getBoundingClientRect();
    // Wir betrachten einen Abschnitt als "aktuell", wenn er größtenteils im Viewport ist
    return rect.top <= 100 && rect.bottom > window.innerHeight / 2;
  });
  
  // Fallback, falls kein Abschnitt als "aktuell" identifiziert wurde
  if (currentSectionIndex === -1) {
    currentSectionIndex = sections.findIndex(section => {
      return section.offsetTop > currentPosition;
    }) - 1;
    
    if (currentSectionIndex < 0) currentSectionIndex = 0;
  }
  
  // Bestimme den Zielabschnitt
  const targetIndex = direction === 'up' 
    ? Math.max(0, currentSectionIndex - 1)
    : Math.min(sections.length - 1, currentSectionIndex + 1);
  
  // Scrolle zu diesem Abschnitt
  if (sections[targetIndex]) {
    smoothScrollTo(sections[targetIndex], { 
      duration: 800,  // Längere Dauer für sanftere Übergänge
      easing: 'easeInOutQuint' // Sehr sanfte Easing-Funktion
    });
  }
}

/**
 * Event-Handler für Mausrad, der für Wheel-Events verwendet werden kann
 * @param {WheelEvent} event - Das Wheel-Event
 */
export function handleWheelEvent(event) {
  // Verhindere Standard-Scrollverhalten
  event.preventDefault();
  
  // Bestimme Scrollrichtung
  const direction = event.deltaY > 0 ? 'down' : 'up';
  
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