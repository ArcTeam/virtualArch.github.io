importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('VirtualArch').then(function(cache) {
     return cache.addAll([
       '/virtualArch.github.io/',
       '/virtualArch.github.io/css/',
       '/virtualArch.github.io/img/',
       '/virtualArch.github.io/js/',
       '/virtualArch.github.io/json/',
       '/virtualArch.github.io/map/',
       '/virtualArch.github.io/webfonts/',
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});

// self.addEventListener('fetch', function(event) {
//  console.log(event.request.url);
// });
