// 無快取 Pass-Through Service Worker
// 目的：滿足 Android Chrome 安裝為獨立 App (WebAPK) 的條件，同時不快取網頁，確保日後更新 index.html 時手機不會卡在舊版

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 直接走網路請求，不攔截快取
  return;
});
