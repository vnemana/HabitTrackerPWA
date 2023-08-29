if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
        .then((req) => console.log('service worker was registered', req))
        .catch((err) => console.log('service worker was not registered', err))
}

function onSignIn(googleUser) {
    // Access the user's ID token and other information
    var idToken = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
    var email = profile.getEmail();
    // Send the ID token and email to your backend for verification and further processing
    // ...
    console.log("idToken: ", idToken)
  }
  