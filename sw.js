// Service worker for Court Rotation.
// Strategy: serve from cache immediately (so the app opens with no signal),
// then quietly fetch a fresh copy in the background for next time.

var CACHE = 'court-rotation-v2';
var CORE = [
  './',
  './index.html',
  './appbundle.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(CORE.map(function (u) {
        return fetch(u, { cache: 'reload' }).then(function (r) {
          if (r && r.status === 200) return c.put(u, r);
        }).catch(function () {});
      }));
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: true }).then(function (cached) {
        // Always try the network in the background to pick up updates.
        // cache:'reload' bypasses the browser's own HTTP cache, otherwise the
        // background check can be answered with the same stale copy forever.
        var fresh = fetch(req, { cache: 'reload' }).then(function (res) {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        }).catch(function () {
          return null;
        });
        // Serve the cached copy straight away if we have one.
        return cached || fresh.then(function (res) {
          if (res) return res;
          throw new Error('offline and not cached');
        });
      });
    })
  );
});
