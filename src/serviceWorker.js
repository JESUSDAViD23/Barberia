const CACHE_NAME = 'my-pwa-cache';

const precacheResources = [
  '/src/components/common/footer.js',
        './components/common/header.js',
        './components/home/about.js',
        './components/home/contact.js',
        './components/home/faq.js',
        './components/home/feature.js',
        './components/home/hero.js',
        './components/home/pricing.js',
        './components/home//works.js'
  // Agrega más recursos que quieras precachear aquí
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request).then((response) => {
          if (response.ok) {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          }
        });
      })
  );
});
