// Minimal service worker — just enough to make the app installable on
// Android. No offline caching is attempted, since this app is useless
// without a live connection anyway (it only exists to read/write the
// current time from the shul's sheet).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {}); // required for Chrome's install prompt to appear
