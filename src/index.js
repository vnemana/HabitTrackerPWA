if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
        .then((req) => console.log('service worker was registered', req))
        .catch((err) => console.log('service worker was not registered', err))
}
