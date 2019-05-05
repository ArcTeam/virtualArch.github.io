const version = "0.0.1";
const cacheName = `virtualArch-${version}`;
self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(['/virtualArch.github.io/'])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});





// self.addEventListener('install', function(e) {
//  e.waitUntil(
//    caches.open('VirtualArch').then(function(cache) {
//      return cache.addAll([
//        '/virtualArch.github.io/',
//        '/virtualArch.github.io/css/',
//        '/virtualArch.github.io/img/',
//        '/virtualArch.github.io/js/',
//        '/virtualArch.github.io/json/',
//        '/virtualArch.github.io/map/',
//        '/virtualArch.github.io/webfonts/'
//      ]);
//    })
//  );
// });


//self.addEventListener('fetch', function(event) {
//  event.respondWith(
//    caches.match(event.request).then(function(response) {
//      return response || new Response("Nothing in the cache for this request");
//    })
//  );
//});

// self.addEventListener('fetch', function(event) {
//   console.log(event.request.url);
// });
