// Zdarzenie 'install'
self.addEventListener("install", (event) => {
  console.log("Service Worker: Zainstalowany");
});

// Zdarzenie 'activate'
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Aktywny");
});

// Zdarzenie 'fetch'
self.addEventListener("fetch", (event) => {});
