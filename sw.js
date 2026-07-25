const CACHE='labmaster-c2-professional-v1-1';
<<<<<<< HEAD
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./README_FA.txt", "./QA_MANIFEST.json"];
=======
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./professional-shell-v1.1.css", "./professional-shell-v1.1.js", "./README.md", "./QA_MANIFEST.json", "./payload/app.001.b64", "./payload/app.002.b64", "./payload/app.003.b64", "./payload/app.004.b64", "./payload/app.005.b64", "./payload/app.006.b64", "./payload/app.007.b64", "./payload/app.008.b64", "./payload/app.009.b64", "./payload/app.010.b64", "./payload/app.011.b64", "./payload/app.012.b64", "./payload/app.013.b64", "./payload/app.014.b64"];
>>>>>>> f9347cb7174db18e32dc887be9f14db78fdbc7a9
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;}).catch(()=>caches.match('./index.html'))));});
