'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2a4bdd3370ee966319e180d97d91e050",
"index.html": "c23bbb229fc522f2403a624d3e8b02cd",
"/": "c23bbb229fc522f2403a624d3e8b02cd",
"main.dart.js": "bc9e70b83032b07240f30ee9b2dd6322",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"manifest.json": "113127b6d460446a90caaf13671ea5b3",
".git/config": "929149fb15a23b7ba53bd31e3130ac53",
".git/objects/95/81ef82423c1c115c2fb173839abe8ea9e3ff25": "ce762d7aab2b8897584522a265beebfd",
".git/objects/66/a69cb1850861f675e7ae3e8a650aca116a62a1": "8d3a836560d6c5a15c1662e6c90680ac",
".git/objects/57/d002f632f8f758bb14ab74423e3eb4fe8c5cf6": "686fcd1ade4988f8b3cbf26cd295aea1",
".git/objects/32/200dc3ceb26adf2ac66eebb802b2a0cc612aed": "cf2bf930e307dfc3a09660daad418899",
".git/objects/69/c31fc5d462286102af408cc9ee0d9b40eae356": "d4f8f2735da8694f4fec1a3906aaeb85",
".git/objects/5a/9d81eefb96ca24e2d921eee508bceb4c5b0d98": "603a711b596530c8dbbf66ec02cafe82",
".git/objects/a4/e1d952efd61314f7df3f4a0b5333602482e1fb": "68965f8741f738aa5ecee73ba19624e4",
".git/objects/d9/20815d38d2392bda953fb2c019604b20b12ce9": "75f7b444046e4c5e48895e4b8d836ef1",
".git/objects/d7/4121fc59a9ce5e43d9b396b3541d8f7c62c476": "434bd235d6c5b0d86af8a3ce6ee85cae",
".git/objects/be/2093593e8f820730c6b4c4af2e2241fefa0887": "0356897a49f45c322672d432dbe501d2",
".git/objects/df/2855787e1c1a546d8f701c51c510cf2580b2ee": "16cc6d99d10950aad56f3dedfddeac73",
".git/objects/bd/7d2bdb87fafaceb707447f96a83670df36a8cd": "d18c9365976e04274c898db71e85fa5a",
".git/objects/ab/e6ae0e12a38dc4e493d6de1ef80ffe33220c91": "8d270ec190c21a45f98e0425a9271001",
".git/objects/e5/19755239ececaf8dc8124c237751e564252616": "6d6f4502e085aea824a61fb1c9d9d8ad",
".git/objects/e2/509176ac02be39d02a05b3e53292550c089cab": "20c808fd7d939cae6ac7435fcfb33aaf",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c0/2da070160325c25c1b458c5f3a4257dd4f685b": "9515cea1659122c360c61050e6d47852",
".git/objects/ca/aa40a212633642e27bdeb50938d9fb86e8abc7": "4f407b8b9fbf38b7e6d9a90b53192e59",
".git/objects/c8/293f915b24a9bdf5d16f18a7b076c0346a0e6b": "1164fa537a3b9b574e24f7ba771c5c6f",
".git/objects/ec/1935846c611c68f8d76cc5a0f0b6ddbfd789d3": "82518fde14cef3025f2f5aa56d9414fe",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/329aed12a342adfbd2409d671a8c462fa8c373": "ed70b96e9b018fac0c532d0c86c51a8e",
".git/objects/74/2743fe9db212ce459c1ffacd78a507fb70eb25": "f0fdb4a58831f9372c92f48c472ce890",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/d069714b53964e3a5e2880a2d848dcab4da3e2": "17c589a74bd8dd56468c38b845f35f74",
".git/objects/26/7effa4e632170d822da64857d403b393fe2dc7": "4c58846e10e937c8e2872278ce38c4f6",
".git/objects/4d/fb6b2299302b24f31842f84dde7b55fd5d83c5": "d7e41155f516a52e2e72992d6d739a20",
".git/objects/44/15de7e37513c3318b6173589ea868a89b53b9d": "8eb33c6165c9f29c549c3327dd33a0df",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/88/4f8582f8ea6937a1c17a2e4669c2849c3ddf18": "ef511bde02578c468bfaf15f5c5fae73",
".git/objects/6b/a12f0e1cab0e7cd27d9bd21b2f3000f208ed45": "eb07aeae97ad8e13586bd1470bd442fe",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/6d/64209a7f5f05b8273716088194ac2643614213": "b18941d276f7c449b4b3046db73156dc",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/4a941f9f3e91dd84e77addae05601dd111dd96": "cb2a1af089b73fdb36ee58718c98615b",
".git/objects/d4/a2d45d466bee2ef522498e8981af41ae6569e4": "9aa767c191b8c5083ed0a9cd4a457ecf",
".git/objects/d4/b8dbf389eff952739a105fff38d23ce955278d": "407ecb074a69ec5bef350ab2c97c88e0",
".git/objects/ba/deabfd89fffdb872e508e0b2b7076bf9ac7629": "8bed069165ad31f03845ec5681184573",
".git/objects/b1/c0b1c3d385e250127fe3fbd2b551d1624b8395": "715d8db1fd2151a4062e10dc4479b42a",
".git/objects/b7/6ddfdb9805e0168b2ccb56e6e6b125373aee96": "a2944a8220af3d37b374b8f7fd50e6c0",
".git/objects/a8/40ec52b3ae95b205cbaff621df8db4038f32f3": "eedd5c4118adcd76fce7a3d7399b49d4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/c08fbdc53c626667fe8de52bee331ebc633b0d": "9a38a7fcf85ed9e59e0e53ad3e74b0a3",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f6/e22df0e9668c1056ae9e235e1e753e30e82a37": "e2cab2bd83ada250c9c5d23b2aac5591",
".git/objects/f1/d11751ec6a8d3bd4c26bafc6db58430dd81393": "4ede35881ab5c16d6bd721362f1fc81b",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/84/ef65bf460eeae7ad788ee5a6e399273f08c431": "c352ed67f329b816395b5359515d5904",
".git/objects/49/9099a168f7cb65438c73a0422a60a4fad12d62": "b88f5b4ce6f69e78e1f1c800998223ed",
".git/objects/40/049e305e158be77e58100b58ca40090994ae17": "653a8749d3a5bbf948a61a1b2be1f488",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/13/59be5bb7ba90c31133c616f157d39de75ede67": "fe3212702136ab4e38c32e6dfef2164f",
".git/objects/25/cce8b5b1e43c0c39f0d3a0645604feebbc748a": "3ab65a2386b30031254d780b7a713e8e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "7ed4a6a0cbc9be4290d68af77a6bc1fb",
".git/logs/refs/heads/master": "7ed4a6a0cbc9be4290d68af77a6bc1fb",
".git/logs/refs/remotes/origin/master": "b1c47921c8463898fb41216919865e4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2d29c8fde37f669ac17693fefd0b35b2",
".git/refs/remotes/origin/master": "2d29c8fde37f669ac17693fefd0b35b2",
".git/index": "84a7099696f5861952ac7f25ff24812c",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"assets/AssetManifest.json": "eca0904a6bb03acd9c25bdcd64d21a2f",
"assets/NOTICES": "9101f6827c59858c927048b79ec462bf",
"assets/FontManifest.json": "4d7575a0be9f0dc41cec7b59b6e92c62",
"assets/shaders/ink_sparkle.frag": "468c01c7e41d17cc4a27485aa6f57803",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/FontManifest.json": "9d49e88cde2554e286f2bb7b60c152d5",
"assets/assets/icons/ic_google.png": "8d61a1ae36dbd9d82305eab43cdb07fa",
"assets/assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/assets/icons/ic_dribbble.png": "ab2d08e303c4d0ee5467e4c272fdfd8b",
"assets/assets/icons/ic_evernote.png": "19de46a5b8348420d099e78fde665955",
"assets/assets/icons/ic_twitter.png": "83651994320dc0d3c7ad896ad058bb53",
"assets/assets/lottie/coder.json": "ece1d661050c8b5946e7ac4048d280b2",
"assets/assets/fonts/Quicksand-Bold.ttf": "517b4a8fa3577cc7066e9bcfebe4beff",
"assets/assets/fonts/Quicksand-Medium.ttf": "890d9ed927bb7f0c6b9eed04f9c329e5",
"assets/assets/fonts/Quicksand-Regular.ttf": "3dfedd2b3e7b35ec3ac8a295a166a880",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "60683c595c4de500713906b9ccf1e2ab",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Quicksand-Light.ttf": "34d0d3091e4f3de26ff0f2c4a4f6bfb7",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
