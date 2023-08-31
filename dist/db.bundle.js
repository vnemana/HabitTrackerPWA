/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const serverAddress = \"http://localhost:3000\"\n__webpack_require__.g.addUser = function (user) {\n    console.log(\"Calling AddUser\");\n    let addUserAddress = serverAddress + \"/users/add\"\n    fetch(addUserAddress, {\n        method: \"POST\",\n        body: JSON.stringify(user),\n        headers: { \"Content-type\": \"application/json; charset=UTF-8\"}\n    });\n}\n\nfunction decodeJwtResponse (token) {\n    var base64Url = token.split('.')[1];\n    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');\n    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {\n        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);\n    }).join(''));\n\n    return JSON.parse(jsonPayload);\n}\n\nfunction handleCallbackFunction(response) {\n    // decodeJwtResponse() is a custom function defined by you\n    // to decode the credential response.\n    console.log(\"Callback is called\")\n    console.log(\"Credential: \" + response.credential)\n    const responsePayload = decodeJwtResponse(response.credential);\n\n    console.log(\"ID: \" + responsePayload.sub);\n    console.log('Full Name: ' + responsePayload.name);\n    console.log('Given Name: ' + responsePayload.given_name);\n    console.log('Family Name: ' + responsePayload.family_name);\n    console.log(\"Image URL: \" + responsePayload.picture);\n    console.log(\"Email: \" + responsePayload.email);\n    console.log(\"Invoking AddUser\")\n    addUser(responsePayload);\n }\n\n\n//# sourceURL=webpack://habittracker/./src/db.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/db.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;