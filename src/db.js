const serverAddress = "http://localhost:3000"
global.addUser = function (user) {
    console.log("Calling AddUser");
    let addUserAddress = serverAddress + "/users/add"
    fetch(addUserAddress, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8"}
    });
}

function decodeJwtResponse (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function handleCallbackFunction(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    console.log("Callback is called")
    console.log("Credential: " + response.credential)
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
    console.log("Invoking AddUser")
    addUser(responsePayload);
 }
