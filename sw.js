const VERSION='2.0.0-rc1';
const STATIC_CACHE=`labmaster-c2-static-${VERSION}`;
const RUNTIME_CACHE=`labmaster-c2-runtime-${VERSION}`;
const PRECACHE=[
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',
  './professional-shell-v1.1.css',
  './professional-shell-v1.1.js',
  './final-v1.2.js',
  './app-v2.css',
  './app-v2-loader.js',
  './app-v2.001.b64',
  './app-v2.002.b64',
  './app-v2.003a.b64',
  './app-v2.003b.b64',
  './app-v2.004.b64',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './VERSION',
  './payload/app.001.b64',
  './payload/app.002.b64',
  './payload/app.003.b64',
  './payload/app.004.b64',
  './payload/app.005.b64',
  './payload/app.006.b64',
  './payload/app.007.b64',
  './payload/app.008.b64',
  './payload/app.009.b64',
  './payload/app.010.b64',
  './payload/app.011.b64',
  './payload/app.012.b64',
  './payload/app.013.b64',
  './payload/app.014.b64'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(STATIC_CACHE).then(cache=>cache.addAll(PRECACHE)))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>![STATIC_CACHE,RUNTIME_CACHE].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(RUNTIME_CACHE).then(c=>c.put(event.request,copy));return response}).catch(async()=>await caches.match(event.request)||await caches.match('./index.html')||await caches.match('./offline.html')));return}event.respondWith(caches.match(event.request).then(cached=>{const network=fetch(event.request).then(response=>{if(response?.ok){const copy=response.clone();caches.open(RUNTIME_CACHE).then(c=>c.put(event.request,copy))}return response}).catch(()=>cached);return cached||network}))});
