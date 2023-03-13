/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b21a2c00a50c925dbee59b784ecbc563"
  },
  {
    "url": "about.html",
    "revision": "2e022eb4f53200a964de97f301267eb4"
  },
  {
    "url": "about/index.html",
    "revision": "c83605dc7e59840e508a6e135a1188f4"
  },
  {
    "url": "assets/css/0.styles.62f053a6.css",
    "revision": "ab6d7e3025dc1e9b56cb43ed7e5014ec"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "cfdc6615def5ecdbbf50e088e2eeca77"
  },
  {
    "url": "assets/js/1.862c9585.js",
    "revision": "07302e8661af3b829adadf1d88511870"
  },
  {
    "url": "assets/js/10.7e130adc.js",
    "revision": "64672ced71f0a10c0d98ada3a8111ec1"
  },
  {
    "url": "assets/js/11.65ad8e9f.js",
    "revision": "6120ec418538032b8b03ff83b562a452"
  },
  {
    "url": "assets/js/12.46643dd4.js",
    "revision": "bc58b2a2ccfce2bdb0a4980f34461f46"
  },
  {
    "url": "assets/js/13.f1520614.js",
    "revision": "3cfeb4ef5002d2c3d9ac53c29d0df3a7"
  },
  {
    "url": "assets/js/14.d216077d.js",
    "revision": "98603648e4a15e82c1c5da1af208836e"
  },
  {
    "url": "assets/js/15.6837f92b.js",
    "revision": "430ae2e3fb85e41ac4bbf9274ff62028"
  },
  {
    "url": "assets/js/16.14429adf.js",
    "revision": "f25e4e07932bd6736217691915e288fb"
  },
  {
    "url": "assets/js/17.c9feb33e.js",
    "revision": "4eaf34d92e7cd9aabbbd869c024025fd"
  },
  {
    "url": "assets/js/18.a73900b5.js",
    "revision": "3eb79a1b904b386cd335d867604273a5"
  },
  {
    "url": "assets/js/19.689342f6.js",
    "revision": "0d2ff5f71bcee3030f136f25e8d8f1f0"
  },
  {
    "url": "assets/js/20.00e6892d.js",
    "revision": "a2fce1898acd75a2ceed220a15e01b2e"
  },
  {
    "url": "assets/js/21.41144380.js",
    "revision": "5f7f290d342d1ede9fe8901dc44e41c3"
  },
  {
    "url": "assets/js/22.e850c241.js",
    "revision": "2f989be9b66c518dd4dd307e3d6c1d4d"
  },
  {
    "url": "assets/js/23.7073b41a.js",
    "revision": "6a645891ea6aeebf59d34c1a68945b51"
  },
  {
    "url": "assets/js/24.1788692f.js",
    "revision": "105c76f5f00a03b9855fe8c3ffe58729"
  },
  {
    "url": "assets/js/25.e773d63b.js",
    "revision": "8fd964d3225c1021d7f1a9e8d663efcd"
  },
  {
    "url": "assets/js/26.f0609ac9.js",
    "revision": "f46c0a581fe6e7988160749cde50ef90"
  },
  {
    "url": "assets/js/27.f2d2a212.js",
    "revision": "7513ca373dc2ed999d3132ae1008b9f3"
  },
  {
    "url": "assets/js/3.496349f1.js",
    "revision": "834c3ef99678042441a1c2da16908472"
  },
  {
    "url": "assets/js/4.b59b6e9d.js",
    "revision": "f236f8eba4f2f69c56e32f34a55aea63"
  },
  {
    "url": "assets/js/5.54b80a51.js",
    "revision": "54bd6416b51cbeb8c93703ddb647efce"
  },
  {
    "url": "assets/js/6.06959b3a.js",
    "revision": "b4af0f5521302f82659cd7ee3c584ab8"
  },
  {
    "url": "assets/js/7.d7f381ff.js",
    "revision": "82a0e8e60ec4046905fbef1b214f3607"
  },
  {
    "url": "assets/js/8.5c4c3e32.js",
    "revision": "fe01e69cd64b1bb829b43a481ab9053f"
  },
  {
    "url": "assets/js/9.8ca5af17.js",
    "revision": "4b3166c12f64b9bad52d61d8ee0050d7"
  },
  {
    "url": "assets/js/app.07c7a9d2.js",
    "revision": "a517c5e6cfde7853e2fd417d18ace830"
  },
  {
    "url": "backend/java/java0.html",
    "revision": "43c7e95613ccd8950a354a07cda68292"
  },
  {
    "url": "backend/java/java1.html",
    "revision": "fb6753286b29e189f1aa90425afbe928"
  },
  {
    "url": "backend/java/java2.html",
    "revision": "d93ab478baa437ea42bbedf7697db050"
  },
  {
    "url": "backend/java/java3.html",
    "revision": "2c1c04aaf9432c3043be215777ca251c"
  },
  {
    "url": "backend/java/java4.html",
    "revision": "4e1a4201145afaae65d127005a62fb40"
  },
  {
    "url": "backend/java/java5.html",
    "revision": "7d8ac177ea973d6039b13602bfa00ff6"
  },
  {
    "url": "backend/java/java6.html",
    "revision": "b8b7c0f3b9b712f713f273b56b73b77f"
  },
  {
    "url": "backend/java/java7.html",
    "revision": "139915e3fece8ff24ab5831d9b0410f8"
  },
  {
    "url": "backend/java/java8.html",
    "revision": "2b5744bd959df7b3a2b36ce91ec4a4c7"
  },
  {
    "url": "backend/java/java9.html",
    "revision": "10392f3871cb1f8309b522508baafeda"
  },
  {
    "url": "categories/index.html",
    "revision": "6d2311b14c44cd43c6b2b75c71f0e99e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "71507a82a73a009258d108760893bf9a"
  },
  {
    "url": "config.html",
    "revision": "6c85038d6dab72ae3f56ac6e0311194b"
  },
  {
    "url": "icons/192x192.png",
    "revision": "cfdc6615def5ecdbbf50e088e2eeca77"
  },
  {
    "url": "icons/512x512.png",
    "revision": "64279652e03a2e4ecafb0bd509764f64"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "2f7b8c2618d4adf0888191a7a244439d"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "fdc935dc0341b932a0cb26b38184ded1"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "5bc7483d81c470a50383e8f465a21014"
  },
  {
    "url": "index.html",
    "revision": "75ad4b3c6b6f3b6f7bdeccb90328f8ec"
  },
  {
    "url": "quanxue.html",
    "revision": "494032547b1a434dbeda15e8633323f9"
  },
  {
    "url": "star.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
  },
  {
    "url": "tag/index.html",
    "revision": "43bd8e3ffe7194f0cc6ea0a88f9079d1"
  },
  {
    "url": "tag/java/index.html",
    "revision": "7a741a9ae1ba73dd74fadae9b7ab2ce0"
  },
  {
    "url": "timeline/index.html",
    "revision": "8c7938ef444a0b54dc69a49c7e38b3a5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
