// sw.js
/**
 * Service Worker
 */

const _version = 'v5';
const cacheName = 'v2';

const log = msg => {
    console.log(`[ServiceWorker ${_version}] ${msg}`);
}

// Life cycle: INSTALL
self.addEventListener('install', event => {
    log('INSTALL');
});

// Life cycle: ACTIVATE
self.addEventListener('activate', event => {
    log('Activate');
});

// Functional: FETCH
self.addEventListener('fetch', event => {
    log('Fetch ');
});