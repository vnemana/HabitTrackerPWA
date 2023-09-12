const serverAddress = "http://localhost:3000"
global.addUser = function (user) {
    console.log("Calling AddUser");
    let addUserAddress = serverAddress + "/users/add"
    let localhostHeaders = new Headers()
    localhostHeaders.append('Content-Type', 'application/json');
    fetch(addUserAddress, {
        method: "POST",
        body: JSON.stringify(user),
        headers: localhostHeaders
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
    addUser(responsePayload);
 }
