const CACHE_NAME = 'bricks-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/logo.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/images/brand.jpg',
  '/images/1751896102245.jpg',
  '/images/1754770686852.jpg',
  '/images/damie.jpg',
  '/images/icon-192.jpg',
  '/images/icon-512.jpg',
  '/images/Screenshot_20251103-162615_TrebEdit.png',
  '/images/worker.png',

  '/sounds/boss.mp3',      // Add all your sound files here
  '/sounds/button.mp3',
  '/sounds/cleared1.mp3',
  '/sounds/cleared2.mp3',
  '/sounds/click.mp3',
  '/sounds/clock.mp3',
  '/sounds/down.mp3',
  '/sounds/gameOver.mp3',
  '/sounds/keyed.wav',
  '/sounds/levelup.mp3',
  '/sounds/menu.mp3',
  '/sounds/menuSound.mp3',
  '/sounds/newlevel.wav',
  '/sounds/tune1.mp3',
  '/sounds/tune2.mp3',
  '/sounds/tune3.mp3',
  '/sounds/tune4.mp3',
  '/sounds/tune5.mp3',
  '/sounds/tune6.mp3',
  '/sounds/tune7.mp3',
  '/sounds/tune8.mp3',
  '/sounds/tune9.mp3',
  '/sounds/tune10.mp3',
  '/sounds/tune11.mp3',
  '/sounds/tune12.mp3',
];

// Install: Save everything to cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activate: Delete old cache versions
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    })
  );
});

// Fetch: Serve from cache first, then network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});