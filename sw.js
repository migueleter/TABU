// Service Worker para TABÚ - permite jugar sin conexión a internet
const CACHE = "tabu-v1";
const ARCHIVOS = [
  "index.html",
  "words.js",
  "manifest.json",
  "icon.svg"
];

// Al instalar: guardar todos los archivos en caché
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())
  );
});

// Al activar: borrar cachés antiguas
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Estrategia "cache primero": funciona offline
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});
