self.addEventListener('install', event => {
    console.log('Service worker has been installed', event)
})

self.addEventListener('activate', event => {
    console.log('Service worker has been activated', event)
})

//fetch event
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt)
})
