const serverAddress = "http://localhost:3000"

global.addUser = async function (user) {
    // console.log("Calling AddUser ", user);
    let addUserAddress = serverAddress + "/users/add"
    let localhostHeaders = new Headers()
    localhostHeaders.append('Content-Type', 'application/json');
    fetch(addUserAddress, {
        method: "POST",
        body: JSON.stringify(user),
        headers: localhostHeaders
    }).then((response) => {
        // console.log("response: ");
        // console.log("response status: ", response.status);
        return response.json();
    })
    .then(data => {
        // console.log('data:', data[0]);
        const signinDiv = document.getElementById('google_signin');
        if (signinDiv) {
            signinDiv.style.display = 'none';
        } else {
            console.log("Couldn't find a signIn element");
        }
    });
}

global.decodeJwtResponse = function (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

global.handleCallbackFunction = function (response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = decodeJwtResponse(response.credential);
    addUser(responsePayload).then(()=>{});
 }
