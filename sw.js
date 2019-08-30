const version = "190830.v3";
const cacheName = `virtualArch-${version}`;
const cacheFile = [
  './',
  './3dhop/canopaDelLago/css/3dhop.css',
  './3dhop/canopaDelLago/css/calisio.css',
  './3dhop/canopaDelLago/img/back.png',
  './3dhop/canopaDelLago/img/close_on.png',
  './3dhop/canopaDelLago/img/close.png',
  './3dhop/canopaDelLago/img/full_on.png',
  './3dhop/canopaDelLago/img/full.png',
  './3dhop/canopaDelLago/img/help_on.png',
  './3dhop/canopaDelLago/img/help.png',
  './3dhop/canopaDelLago/img/home1.png',
  './3dhop/canopaDelLago/img/home2.png',
  './3dhop/canopaDelLago/img/home3.png',
  './3dhop/canopaDelLago/img/home.png',
  './3dhop/canopaDelLago/img/lightcontrol_on.png',
  './3dhop/canopaDelLago/img/lightcontrol.png',
  './3dhop/canopaDelLago/img/lucerna.jpg',
  './3dhop/canopaDelLago/img/minatore1.jpg',
  './3dhop/canopaDelLago/img/minatore2.jpg',
  './3dhop/canopaDelLago/img/minatore3.jpg',
  './3dhop/canopaDelLago/img/pin_on.png',
  './3dhop/canopaDelLago/img/pin.png',
  './3dhop/canopaDelLago/img/rota.jpg',
  './3dhop/canopaDelLago/img/sacco.jpg',
  './3dhop/canopaDelLago/img/secchi.jpg',
  './3dhop/canopaDelLago/img/zoomin.png',
  './3dhop/canopaDelLago/img/zoomout.png',
  './3dhop/canopaDelLago/js/init.js',
  './3dhop/canopaDelLago/js/jquery.js',
  './3dhop/canopaDelLago/js/nexus.js',
  './3dhop/canopaDelLago/js/ply.js',
  './3dhop/canopaDelLago/js/presenter.js',
  './3dhop/canopaDelLago/js/spidergl.js',
  './3dhop/canopaDelLago/js/trackball_pantilt.js',
  './3dhop/canopaDelLago/js/trackball_sphere.js',
  './3dhop/canopaDelLago/js/trackball_turntable.js',
  './3dhop/canopaDelLago/js/trackball_turntable_pan.js',
  './3dhop/canopaDelLago/models/singleres/cube1.ply',
  './3dhop/canopaDelLago/models/singleres/cube2.ply',
  './3dhop/canopaDelLago/models/singleres/cube3.ply',
  './3dhop/canopaDelLago/models/singleres/cube4.ply',
  './3dhop/canopaDelLago/models/singleres/cube5.ply',
  './3dhop/canopaDelLago/models/singleres/cube6.ply',
  './3dhop/canopaDelLago/models/singleres/cube7.ply',
  './3dhop/canopaDelLago/models/singleres/totale.ply',
  './3dhop/canopaDelLago/start.html',
  './ar.html',
  './asset/aframe-ar.js',
  './asset/aframe-master.js',
  './asset/aframe.min.js',
  './asset/bootstrap.min.js',
  './asset/camera_para.dat',
  './asset/hammer.min.js',
  './asset/jquery.images-compare.js',
  './asset/jquery.min.js',
  './asset/leaflet/images/layers-2x.png',
  './asset/leaflet/images/layers.png',
  './asset/leaflet/images/marker-icon-2x.png',
  './asset/leaflet/images/marker-icon.png',
  './asset/leaflet/images/marker-shadow.png',
  './asset/leaflet/leaflet.css',
  './asset/leaflet/leaflet.js',
  './asset/leaflet.spin.min.js',
  './asset/lozad.min.js',
  './asset/spin.min.js',
  './cache-polyfill.js',
  './css/bootstrap.min.css',
  './css/fa.css',
  './css/main.css',
  './gnomi360.html',
  './img/360/gnomi.JPG',
  './img/gallerie/metallica/large/metallica01.jpg',
  './img/gallerie/metallica/large/metallica02.jpg',
  './img/gallerie/metallica/large/metallica03.jpg',
  './img/gallerie/metallica/large/metallica04.jpg',
  './img/gallerie/metallica/large/metallica05.jpg',
  './img/gallerie/metallica/large/metallica06.jpg',
  './img/gallerie/metallica/large/metallica07.jpg',
  './img/gallerie/metallica/large/metallica08.jpg',
  './img/gallerie/metallica/large/metallica09.jpg',
  './img/gallerie/metallica/small/metallica01.jpg',
  './img/gallerie/metallica/small/metallica02.jpg',
  './img/gallerie/metallica/small/metallica03.jpg',
  './img/gallerie/metallica/small/metallica04.jpg',
  './img/gallerie/metallica/small/metallica05.jpg',
  './img/gallerie/metallica/small/metallica06.jpg',
  './img/gallerie/metallica/small/metallica07.jpg',
  './img/gallerie/metallica/small/metallica08.jpg',
  './img/gallerie/metallica/small/metallica09.jpg',
  './img/gallerie/minerali/large/argentite_calisio.jpg',
  './img/gallerie/minerali/large/azzurrite_brusadi01.jpg',
  './img/gallerie/minerali/large/azzurrite_brusadi02.jpg',
  './img/gallerie/minerali/large/azzurrite_lavis.jpg',
  './img/gallerie/minerali/large/barite_furli_lavis.jpg',
  './img/gallerie/minerali/large/galena_furli.jpg',
  './img/gallerie/minerali/large/malachite_lavis.jpg',
  './img/gallerie/minerali/large/mimetite_slacche.jpg',
  './img/gallerie/minerali/large/minerali_rame_slacche.jpg',
  './img/gallerie/minerali/small/argentite_calisio.jpg',
  './img/gallerie/minerali/small/azzurrite_brusadi01.jpg',
  './img/gallerie/minerali/small/azzurrite_brusadi02.jpg',
  './img/gallerie/minerali/small/azzurrite_lavis.jpg',
  './img/gallerie/minerali/small/barite_furli_lavis.jpg',
  './img/gallerie/minerali/small/galena_furli.jpg',
  './img/gallerie/minerali/small/malachite_lavis.jpg',
  './img/gallerie/minerali/small/mimetite_slacche.jpg',
  './img/gallerie/minerali/small/minerali_rame_slacche.jpg',
  './img/gallerie/redebus/large/redebus01.jpg',
  './img/gallerie/redebus/large/redebus02.jpg',
  './img/gallerie/redebus/large/redebus03.jpg',
  './img/gallerie/redebus/large/redebus04.jpg',
  './img/gallerie/redebus/large/redebus05.jpg',
  './img/gallerie/redebus/large/redebus06.jpg',
  './img/gallerie/redebus/large/redebus07.jpg',
  './img/gallerie/redebus/large/redebus08.jpg',
  './img/gallerie/redebus/large/redebus09.jpg',
  './img/gallerie/redebus/small/redebus01.jpg',
  './img/gallerie/redebus/small/redebus02.jpg',
  './img/gallerie/redebus/small/redebus03.jpg',
  './img/gallerie/redebus/small/redebus04.jpg',
  './img/gallerie/redebus/small/redebus05.jpg',
  './img/gallerie/redebus/small/redebus06.jpg',
  './img/gallerie/redebus/small/redebus07.jpg',
  './img/gallerie/redebus/small/redebus08.jpg',
  './img/gallerie/redebus/small/redebus09.jpg',
  './img/ico/cd-arrows.svg',
  './img/ico/favicon.ico',
  './img/ico/interreg_icon.png',
  './img/ico/launcher-icon-192.png',
  './img/ico/launcher-icon-512.png',
  './img/ico/logo.jpg',
  './img/poi/banner/banner_calcara.jpg',
  './img/poi/banner/banner_canopa_acque.jpg',
  './img/poi/banner/banner_canopa_bamponi.jpg',
  './img/poi/banner/banner_canopa_lago.jpg',
  './img/poi/banner/banner_canopa_raita.jpg',
  './img/poi/banner/banner_canopa_uccello.jpg',
  './img/poi/banner/banner_dos_brusadi.jpg',
  './img/poi/banner/banner_dos_cuz.jpg',
  './img/poi/banner/banner_dos_grave.jpg',
  './img/poi/banner/banner_lago_s_colomba.jpg',
  './img/poi/banner/banner_montepiano.jpg',
  './img/poi/banner/banner_pannelli_acque.jpg',
  './img/poi/banner/banner_panorama.jpg',
  './img/poi/banner/banner_sentiero_gnomi.jpg',
  './img/poi/banner/banner_sentiero_grave.jpg',
  './img/poi/banner/banner_torbiera_grave.jpg',
  './img/poi/banner/test.jpg',
  './img/poi/slider/cuz_dtm.jpg',
  './img/poi/slider/cuz_foto.jpg',
  './img/poi/slider/dtm.jpg',
  './img/poi/slider/egeos.jpg',
  './img/poi/testo/atlas.jpg',
  './img/poi/testo/barite.jpg',
  './img/poi/testo/calcara.jpg',
  './img/poi/testo/canopo.jpg',
  './img/poi/testo/drosera.jpg',
  './img/poi/testo/erdemolo.jpg',
  './img/poi/testo/gliadiolo_palustre.jpg',
  './img/poi/testo/immagine_rospo.jpg',
  './img/poi/testo/iris.jpg',
  './img/poi/testo/kuttenberg.jpg',
  './img/poi/testo/metallica_bamponi.jpg',
  './img/poi/testo/nani.jpg',
  './img/poi/testo/pozzo_damocle.jpg',
  './img/poi/testo/scavo_gallerie.jpg',
  './img/poi/testo/stemma_pergine.jpg',
  './img/poi/testo/trener.jpg',
  './img/poi/testo/vaia.jpg',
  './img/sentieri/banner/pendenza_canope.jpg',
  './img/sentieri/banner/pendenza_gnomi.jpg',
  './img/sentieri/banner/pendenza_grave.jpg',
  './index.html',
  './js/event.js',
  './js/function.js',
  './js/lang.js',
  './js/map.js',
  './json/punti.geojson',
  './json/sentieri.geojson',
  './LICENSE',
  './manifest.json',
  './map/baseWgs84.png',
  './model/luce2.mtl',
  './model/luce2.obj',
  './model/luce.png',
  './model/luce_text.png',
  './model/martello2.mtl',
  './model/martello2.obj',
  './model/martello.png',
  './model/martello_tex2.png',
  './model/pala2.mtl',
  './model/pala2.obj',
  './model/pala.png',
  './model/pala_text.png',
  './model/vaschetta.mtl',
  './model/vaschetta.obj',
  './model/vaschetta.png',
  './model/vaschetta_text.png',
  './patt/pattern-logo_va_bw.patt',
  './patt/pattern-logo_va_bw.png',
  './sw.js',
  './video/poi10.mp4',
  './video/poi13.mp4',
  './video/poi3.mp4',
  './video/poi4.mp4',
  './video/poi9.mp4',
  './webfonts/fa-brands-400.eot',
  './webfonts/fa-brands-400.svg',
  './webfonts/fa-brands-400.ttf',
  './webfonts/fa-brands-400.woff',
  './webfonts/fa-brands-400.woff2',
  './webfonts/fa-regular-400.eot',
  './webfonts/fa-regular-400.svg',
  './webfonts/fa-regular-400.ttf',
  './webfonts/fa-regular-400.woff',
  './webfonts/fa-regular-400.woff2',
  './webfonts/fa-solid-900.eot',
  './webfonts/fa-solid-900.svg',
  './webfonts/fa-solid-900.ttf',
  './webfonts/fa-solid-900.woff',
  './webfonts/fa-solid-900.woff2',
  './webfonts/Montserrat/Montserrat-BlackItalic.ttf',
  './webfonts/Montserrat/Montserrat-Black.ttf',
  './webfonts/Montserrat/Montserrat-BoldItalic.ttf',
  './webfonts/Montserrat/Montserrat-Bold.ttf',
  './webfonts/Montserrat/Montserrat-ExtraBoldItalic.ttf',
  './webfonts/Montserrat/Montserrat-ExtraBold.ttf',
  './webfonts/Montserrat/Montserrat-ExtraLightItalic.ttf',
  './webfonts/Montserrat/Montserrat-ExtraLight.ttf',
  './webfonts/Montserrat/Montserrat-Italic.ttf',
  './webfonts/Montserrat/Montserrat-LightItalic.ttf',
  './webfonts/Montserrat/Montserrat-Light.ttf',
  './webfonts/Montserrat/Montserrat-MediumItalic.ttf',
  './webfonts/Montserrat/Montserrat-Medium.ttf',
  './webfonts/Montserrat/Montserrat-Regular.ttf',
  './webfonts/Montserrat/Montserrat-SemiBoldItalic.ttf',
  './webfonts/Montserrat/Montserrat-SemiBold.ttf',
  './webfonts/Montserrat/Montserrat-ThinItalic.ttf',
  './webfonts/Montserrat/Montserrat-Thin.ttf',
  './webfonts/Montserrat/OFL.txt'
];

self.addEventListener('install', e => {
  console.log('The service worker is being installed.');
  e.waitUntil(precache())
  // e.waitUntil(
  //   caches.open(cacheName).then(cache => {
  //     return cache.addAll(cacheFile).then(() => self.skipWaiting());
  //   })
  // );
});

function precache() {
  return caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheFile);
  });
}

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(oldCache => {
          if (cacheWhitelist.indexOf(oldCache) === -1) {
            return caches.delete(oldCache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('The service worker is serving the asset.');
  event.respondWith(
    fromCache(event.request)
    // caches.open(cacheName)
    //   .then(cache => cache.match(event.request, {ignoreSearch: true}))
    //   .then(response => {
    //     console.log('response ', event.request.url);
    //     return response || fetch(event.request)
    //   })
  );
  event.waitUntil(update(event.request));
});

function fromCache(request) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
function update(request) {
  return caches.open(cacheName).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
