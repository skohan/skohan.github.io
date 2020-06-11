'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "602462b5f206d83ed2d2d5bbb932b025",
"assets/assets/github.png": "438c93c081b9186539c398ef078a37c6",
"assets/assets/instagram.png": "dec24905ee9531c2f98406df2d1251c5",
"assets/assets/linkedin.png": "f1f23d1554afea532a6088166b65cadb",
"assets/assets/youtube.png": "9ba2a1116d7df98f7b7b90aa1581d481",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "ae5513ea28e9561c47c63cef2dfbaabf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fb34e7cba1130cca114bd95297195e73",
"/": "fb34e7cba1130cca114bd95297195e73",
"main.dart.js": "fff8207c2fb29c7bf77202472c8788cd",
"manifest.json": "334a2284d4addc275fc25658d3373c0d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
