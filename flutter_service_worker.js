'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "16c49467b30724ff245d43bdd82a385c",
"favicon.ico": "d928b66a52e205fd0a7895b2f9ba0b5f",
"index.html": "1be1e3ef6351673403d22c8447b9716a",
"/": "1be1e3ef6351673403d22c8447b9716a",
"main.dart.js": "f15867f3abcc5d8080068b55fed2379d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/logo.png": "41d057a583b234bbe317752a0919732d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9415671acea2cdf3f81e4afecc185fc3",
"assets/AssetManifest.json": "baeb6094dba0162c652adb658848a1bb",
"assets/NOTICES": "423f280ad9ef6970c62e83d78a9c67b6",
"assets/FontManifest.json": "d56e45da8374f9d2030d9481583420fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "7df6159021f009dcc5552511382a57e8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/interface/back_test_gif.gif": "7b58a4adffbd1efd0ed4b4fafae62ad9",
"assets/assets/images/interface/dark.png": "589fb1f37cf44c3f9f79c86e55d59fff",
"assets/assets/images/interface/demo.png": "c8501f66527aabca4b837cb8d42f6017",
"assets/assets/images/interface/debrief_background.png": "8f0f199f4f344d9db74c752e07b4d680",
"assets/assets/images/interface/light.png": "9438fad9d20e3a9ae8cdb7113c752d54",
"assets/assets/images/interface/twitter.png": "77cdafe823f43b53a41f12093e180ea3",
"assets/assets/images/interface/light_back.png": "31899853b1f20cd27702313cacce3fb2",
"assets/assets/images/interface/CheckCircleOutlined.png": "7a3de6fe1ac332853209a2928a2ac29a",
"assets/assets/images/interface/lightmodeLoading.gif": "d654967802c3373f48bb35f43902ea69",
"assets/assets/images/loading_icons/lightmode_loading.gif": "38e4d49813dbc64676fee0db0b4ae74d",
"assets/assets/images/loading_icons/darkmode_loading.gif": "fcf4b7623eaa306fc98921639744b7f5",
"assets/assets/images/externallink.png": "4c59ed976ababa0c039034744e6a4c9b",
"assets/assets/images/brain.svg": "65be2980a57b88d3a437b397fa63dc4d",
"assets/assets/images/spin.gif": "65c8f914a9dfe6fda77392ed0ea548a3",
"assets/assets/images/ryan.png": "f4989b8d04a4a63b7af307e8194475d4",
"assets/assets/images/google/btn_google_signin_light_normal_web@2x.png": "52a05e731e61db85e7d96bf3f10d919c",
"assets/assets/images/google/btn_google_signin_light_focus_web@2x.png": "9523da15d21a8526f31920a99994a44b",
"assets/assets/images/intent_icons/svg/content.svg": "597342b56c088e57f2df253c097a3dbc",
"assets/assets/images/intent_icons/svg/person.svg": "1efdee21709a79e60231418e43bfaebd",
"assets/assets/images/intent_icons/svg/addContext.svg": "96f0cd1af39b6e2e3d35ae5112559089",
"assets/assets/images/intent_icons/svg/earear.svg": "5671bad75a9b61d28297e693db499600",
"assets/assets/images/intent_icons/svg/cart.svg": "9bd01228c97ad8b9234fdb7d336d3b35",
"assets/assets/images/intent_icons/svg/time.svg": "e6b97b65fcf1eb2be41e1d3e9a50e2a5",
"assets/assets/images/intent_icons/svg/recipient.svg": "2d10d1d1f5d506484c1a11230ae04b25",
"assets/assets/images/intent_icons/svg/Iconshare.svg": "783615b16da5ce2f19db10f4479c0327",
"assets/assets/images/intent_icons/svg/Above.svg": "868369ed204a11bb3e1f33df1ec92968",
"assets/assets/images/intent_icons/svg/add.svg": "4e5fe6a361c40fbe99ff8afe1c2fec91",
"assets/assets/images/intent_icons/svg/setting_person.svg": "72ad2a24c6d6315655933edc8e35897d",
"assets/assets/images/intent_icons/svg/icon_filter_listfilter.svg": "e1bc19bf1f05ba04228c3ede643d827d",
"assets/assets/images/intent_icons/svg/Iconcustomize.svg": "889f578d765995afcd46b81d674c1fd2",
"assets/assets/images/intent_icons/svg/play.svg": "70b4ea0194e29f5cece0d3298293383b",
"assets/assets/images/intent_icons/svg/Iconsave.svg": "cb7b139f56702a004079bdf1eb0ce86f",
"assets/assets/images/intent_icons/svg/Iconrun.svg": "e0641c6ef4f19efbaded4017c91fa4d7",
"assets/assets/images/intent_icons/svg/Iconmessage.svg": "92566eaef3d45575790ccef141d1d2cb",
"assets/assets/images/intent_icons/svg/Iconemail.svg": "c1aaeee77699c7266aadcc6117fcd2c3",
"assets/assets/images/intent_icons/svg/reflash.svg": "28e892592d9c41735df253bc60db7bfb",
"assets/assets/images/intent_icons/svg/done.svg": "1d4b28ebf0023723ddd2801bbfb318aa",
"assets/assets/images/intent_icons/asana.png": "e2ee2e6de6582429eb522dd3aefee7e2",
"assets/assets/images/intent_icons/google_slide.png": "a85d2ef5a1d1497b443375b3aec8fd85",
"assets/assets/images/intent_icons/zoom.png": "dec8fdcdcf42088a91255a14562805aa",
"assets/assets/images/intent_icons/zoom.svg": "b6305922901364183ad9afe8551f54bb",
"assets/assets/images/intent_icons/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/intent_icons/gmail.png": "dfa19bfe001e82f237e073953577fe42",
"assets/assets/images/intent_icons/google_drive.png": "4ecf44558a5a4828debbad12277a5bf5",
"assets/assets/images/intent_icons/google_calendar.png": "8bc65c06e79ff362277128481ea1f4b5",
"assets/assets/images/intent_icons/info/recipient.png": "4aea49c527c35938857a05fdd6bf8b94",
"assets/assets/images/intent_icons/info/time.png": "826696c55e1dfedc0d4b8c3f82afc169",
"assets/assets/images/intent_icons/info/title.png": "eefa8072b5033c6209d99ba76b2d3ad0",
"assets/assets/images/intent_icons/info/link.png": "f1e84d5edcc45640aafb27e9f5bea9c9",
"assets/assets/images/intent_icons/info/person.png": "8c05379cee8742c94f534996f255f37d",
"assets/assets/images/intent_icons/info/Iconinput.png": "46d598d68dc080a1f05743a30aa56580",
"assets/assets/images/intent_icons/info/content.png": "938be69ec8dbafa59a6948aa5e554be1",
"assets/assets/images/intent_icons/info/recipient_light.png": "edd4736b9532c7bba5efbf11438ca223",
"assets/assets/images/intent_icons/info/content_light.png": "23b9588d46e8a4659e3d94991447dbcc",
"assets/assets/images/intent_icons/info/sendintent_send.png": "492b060e8548701dd26be2930697962e",
"assets/assets/images/intent_icons/info/Iconoutput.png": "70d8b173fb13f8cfe04158ffbbe63960",
"assets/assets/images/intent_icons/info/message.png": "634595fbc7a56faf7232b0f47f6fe848",
"assets/assets/images/intent_icons/avatar.png": "f8a6ca14ea61969387c54d4674107454",
"assets/assets/images/intent_icons/slack.png": "cd0c78940438c039ec1dabeb68b3f339",
"assets/assets/images/intent_icons/twitter.png": "66a1d5ba1042c4010f6ae9d26a6f772d",
"assets/assets/images/intent_icons/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/intent_icons/google_sheet.png": "ba423b2c9d7b676971e473762bb69844",
"assets/assets/images/intent_icons/workday.png": "b872a42c14791366d71ac0d351998f98",
"assets/assets/images/openai.svg": "60709abf1b9a69f8e4939960a44d025b",
"assets/assets/images/tasks.png": "ea9e03b80437842c484a411090db8920",
"assets/assets/images/intent.png": "98d298725145bf980a76f5a94522c65e",
"assets/assets/images/Placeholder.png": "5278341f91b0db9edba1da8292e28ac9",
"assets/assets/images/logo/logo.png": "41d057a583b234bbe317752a0919732d",
"assets/assets/images/logo.png": "49f4b2bebd2339e6765cba42322d1182",
"assets/assets/images/workflow/connection.png": "1eb529452c20b9bb1332a6aae0f0f3b3",
"assets/assets/images/workflow/Workflow_Expand_Notrunning.png": "63b837f704eca08c77471c3e074842af",
"assets/assets/images/workflow/Workflow_Noexpand_Notrunning.png": "83bf5d100d83d5dc144e0a44be70e392",
"assets/assets/images/workflow/workflow_white.svg": "da98c29fe7e746917ea54a7d8e22940e",
"assets/assets/images/workflow/down.png": "4f7809d35fbd18e55ea46f2c14f8fdbc",
"assets/assets/images/workflow/workflow_display.png": "245006f56e3d80c532a56be2d5530299",
"assets/assets/images/workflow/Icon/context_normal.svg": "8a6a94d1a2653d237e4c6b0138c81c5f",
"assets/assets/images/workflow/Icon/context_pen_normal.svg": "ed61b930f1d8bba1b8f422d9e156692e",
"assets/assets/images/workflow/Icon/deduck_hover.svg": "7a2c102c6193f5da8ddae0e58ca3f7a1",
"assets/assets/images/workflow/Icon/UserOutlineduser.png": "a678c38d51eaf591449953a0bbffe1fa",
"assets/assets/images/workflow/Icon/debug_hover.svg": "ff0bb56b9a00440a83975ff9cb56a720",
"assets/assets/images/workflow/Icon/TeamOutlined_24.png": "3117b73fdba3e31bbfef5db23e98836e",
"assets/assets/images/workflow/Icon/context_pen_hover.svg": "237d3f5f4c4de7d72f734b0d2e66f7ce",
"assets/assets/images/workflow/Icon/about_hover.svg": "9a5ca133313826a80d646e8c9f8a4e0b",
"assets/assets/images/workflow/Icon/FileOutlined.png": "c3e1a7a5aa42dc4e95590f82484e0eef",
"assets/assets/images/workflow/Icon/PlayCircleFilled.png": "af89a91bba0004955fd822507237f589",
"assets/assets/images/workflow/Icon/access_time_24px.png": "7e0c34285f38e1e867261c1560af0f6e",
"assets/assets/images/workflow/Icon/context_hover.svg": "202ef4f84238534d49e19713bf65c5fe",
"assets/assets/images/workflow/Icon/UserOutlined_20.png": "d20914b725ef1217fb913ee1c4b7f0a6",
"assets/assets/images/workflow/Icon/logout_normal.svg": "c96520fefd017b2b683fa4880b8ec7d3",
"assets/assets/images/workflow/Icon/start.svg": "01904431263195db56983632aba252ca",
"assets/assets/images/workflow/Icon/about_normal.svg": "fe7e44165cc1d05be6da9393451cdcf1",
"assets/assets/images/workflow/Icon/refresh_hover.svg": "5e5c8b3f6c4e6969159a9b1bb08bc030",
"assets/assets/images/workflow/Icon/deduck_normal.svg": "bf948a1a41d06c4c9fe77c8c596a5267",
"assets/assets/images/workflow/Icon/debug_normal.svg": "e6c91e3440417020afa5d99a4c561849",
"assets/assets/images/workflow/Icon/TeamOutlined.png": "ecda5915bc5a4ba4fcb23959476ffcfb",
"assets/assets/images/workflow/Icon/skip_normal.svg": "d3fce29ad16f58ed46ac7265140bb175",
"assets/assets/images/workflow/Icon/FileOutlined_20.png": "b8417fdfa814a7e63ed6a90e5f05a0c6",
"assets/assets/images/workflow/Icon/refresh_normal.svg": "5074a921f7023ffa9de3296c0d3b8905",
"assets/assets/images/workflow/Icon/logout_hover.svg": "8cd737b819823911344f76139343df6f",
"assets/assets/images/workflow/Icon/skip_hover.svg": "57728cfc50fd899036079460703af726",
"assets/assets/images/workflow/right.png": "1e174d8d12d1018052ed291b91c8647d",
"assets/assets/images/tree.png": "6a07b5014b390ef11a85c82f7f8f89da",
"assets/assets/images/timeline.png": "27fe51ed2945d8c97d06cd8050234eb6",
"assets/assets/images/task/placeholder_task.png": "0fe17dc4790104d6ea846283f688a988",
"assets/assets/images/task/add_task.png": "fa0ff9ddc3fbf8fe704d1723b4df6c8f",
"assets/assets/images/task/task_done.png": "9efa0e24a494cb8304096b657c4cc4fd",
"assets/assets/images/task/add_task_hover.png": "c15f2a284c0032f5c56ce7b4e47edfa1",
"assets/assets/images/gif/emailLoading.gif": "c27125c94699a38aa7929357191461f8",
"assets/assets/doc/initial_doc_data.json": "1e85529091c18b160d66129c88296b1b",
"assets/assets/doc/gmail.html": "e045a63fee0937c5b2e98aafc72041cd",
"assets/assets/doc/test.html": "73c3e434b1d15254e1a8ebfc60122efc",
"assets/assets/doc/a.html": "8e64437089b99a23110a730e46a5cb9d",
"assets/assets/fonts/calibri-bold.ttf": "8879a4caa29c42ce616cd5f172299366",
"assets/assets/fonts/calibri-bold-italic.ttf": "a3e6f73440d8535c2c7c43489e942a10",
"assets/assets/fonts/calibri-italic.ttf": "5e5c563c9151df02784454399060ffb0",
"assets/assets/fonts/inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/calibri-regular.ttf": "baf2d27a2cc7aea124138fb8b4fb5b4d",
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
