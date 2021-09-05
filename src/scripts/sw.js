import 'regenerator-runtime';
// import CacheHelper from './utils/cache-helper';

// const { assets } = global.serviceWorkerOption;

self.addEventListener('install', () => {
  console.log('Installing Service Worker ...');
});

self.addEventListener('activate', () => {
  console.log('activateing Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
