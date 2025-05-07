// /public/service-worker.js

const CACHE_NAME = 'designtech-cache-v1';

// Ressourcen, die beim Service Worker-Installation gecacht werden sollen
const PRECACHE_ASSETS = [
  '/',
  '/designtech',
  '/karriere',
  '/designtosuccess',
  '/HeaderVideo-thumbnail.png',
  '/DesignTechVideo-thumbnail.png',
  '/DesignToSuccessVideo-thumbnail.png',
  '/KarriereVideo-thumbnail.png',
  '/BodyVideo-thumbnail.png',
  // Logos und Icons
  '/favicon.png',
  '/icon/icon-linkedin-black.svg',
  '/icon/icon-kununu-black.svg',
  // Andere wichtige statische Assets
  '/logos/logo-arburg-black.svg',
  '/logos/logo-washtec-black.svg',
  '/logos/logo-liebherr-black.svg',
];

// Media Cache für Videos und große Bilder
const MEDIA_CACHE_NAME = 'designtech-media-cache-v1';
const MEDIA_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 Tage

// Installationsereignis - Cache vorbereiten und Ressourcen vorladen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Aktivierungsereignis - Alte Caches bereinigen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            // Lösche alte Versionen der Caches
            return (
              cacheName.startsWith('designtech-') &&
              cacheName !== CACHE_NAME &&
              cacheName !== MEDIA_CACHE_NAME
            );
          })
          .map((cacheName) => {
            console.log('Deleting outdated cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      // Medien-Cache aufräumen (ältere Einträge entfernen)
      return cleanMediaCache();
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Aufräumen des Medien-Caches - ältere Einträge entfernen
async function cleanMediaCache() {
  try {
    const mediaCache = await caches.open(MEDIA_CACHE_NAME);
    const requests = await mediaCache.keys();
    const now = Date.now();

    const deletionPromises = requests.map(async (request) => {
      // Abrufen der Cache-Antwort und der zugehörigen Metadaten
      const response = await mediaCache.match(request);
      const headers = response.headers;
      
      // Timestamp aus Headers oder Cache-Metadaten lesen
      const cachedTime = headers.get('x-cached-time') || 
                          request.headers.get('x-cached-time');
      
      if (cachedTime) {
        const timestamp = parseInt(cachedTime, 10);
        if (now - timestamp > MEDIA_MAX_AGE) {
          // Eintrag ist zu alt, löschen
          console.log('Removing old media cache entry:', request.url);
          return mediaCache.delete(request);
        }
      }
      
      return Promise.resolve(); // Nichts zu tun
    });

    return Promise.all(deletionPromises);
  } catch (error) {
    console.error('Error cleaning media cache:', error);
    return Promise.resolve();
  }
}

// Entscheidungsfunktion: Welche Strategie für welche Ressource?
function getStrategyForUrl(url) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  
  // API-Anfragen immer zum Netzwerk leiten
  if (pathname.startsWith('/api/')) {
    return 'network-only';
  }
  
  // HTML-Seiten: Netzwerk-First mit Fallback auf Cache
  if (pathname === '/' || 
      !pathname.includes('.') || 
      pathname.endsWith('.html')) {
    return 'network-first';
  }
  
  // Video-Dateien: Cache-First mit Zeitbegrenzung
  if (pathname.match(/\.(mp4|webm|ogg)$/i)) {
    return 'cache-first-media';
  }
  
  // Bilder: Stashed-Cache (Cache First, dann Update)
  if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    return 'stale-while-revalidate';
  }
  
  // CSS, JS, Fonts: Cache First (lange Gültigkeit)
  if (pathname.match(/\.(css|js|woff|woff2|ttf|otf)$/i)) {
    return 'cache-first';
  }
  
  // Standard: Netzwerk mit Cache-Fallback
  return 'network-first';
}

// Fetch-Ereignis - Ressourcen nach verschiedenen Strategien abrufen
self.addEventListener('fetch', (event) => {
  // Navigation Preload ignorieren, wenn verfügbar
  if (event.preloadResponse) {
    return;
  }

  const requestUrl = event.request.url;
  const strategy = getStrategyForUrl(requestUrl);
  
  switch (strategy) {
    case 'network-only':
      // Direkt vom Netzwerk laden, kein Cache-Fallback
      event.respondWith(fetch(event.request));
      break;
      
    case 'network-first':
      // Erst vom Netzwerk versuchen, dann aus Cache
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            // Nur erfolgreiche Antworten cachen
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            console.log('Fallback to cache for:', requestUrl);
            return caches.match(event.request);
          })
      );
      break;
      
    case 'cache-first':
      // Erst aus Cache, dann vom Netzwerk
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          });
        })
      );
      break;
      
    case 'cache-first-media':
      // Medien-Cache mit längerer Lebenszeit
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(MEDIA_CACHE_NAME).then((cache) => {
                cacheResponseWithTimestamp(cache, event.request, responseClone);
              });
            }
            return response;
          });
        })
      );
      break;
      
    case 'stale-while-revalidate':
      // Aus Cache liefern, im Hintergrund aktualisieren
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          }).catch(() => {
            console.log('Failed to fetch:', requestUrl);
            return null; // Explizit null zurückgeben bei Fehler
          });
          
          // Zuerst gecachte Antwort zurückgeben, dann aktualisieren
          return cachedResponse || fetchPromise;
        })
      );
      break;
      
    default:
      // Standard: Network-First
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            return response;
          })
          .catch(() => {
            return caches.match(event.request);
          })
      );
  }
});

// Funktion zum Cachen einer Antwort mit Zeitstempel
async function cacheResponseWithTimestamp(cache, request, response) {
  // Erstellen einer neuen Response mit einem Zeitstempel-Header
  const clonedResponse = response.clone();
  const headers = new Headers(clonedResponse.headers);
  headers.set('x-cached-time', Date.now().toString());
  
  // Neue Response mit aktualisierten Headers erstellen
  const timestampedResponse = new Response(await clonedResponse.blob(), {
    status: clonedResponse.status,
    statusText: clonedResponse.statusText,
    headers: headers
  });
  
  // In Cache speichern
  return cache.put(request, timestampedResponse);
}