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

eval("const serverAddress = \"http://localhost:3000\"\n__webpack_require__.g.addUser = function (user) {\n    console.log(\"Calling AddUser\");\n    let addUserAddress = serverAddress + \"/users/add\"\n    let localhostHeaders = new Headers()\n    localhostHeaders.append('Content-Type', 'application/json');\n    fetch(addUserAddress, {\n        method: \"POST\",\n        body: JSON.stringify(user),\n        headers: localhostHeaders\n    }).then(response => {response.json();})\n    .then(data => {\n        console.log('data:', data);\n        console.log('elements: ', document.getElementsByClassName);\n        const signinDiv = document.getElementById('google_signin');\n        if (signinDiv) {\n            console.log(\"Trying to hide the signIn element\");\n            signinDiv.style.display = 'none';\n        } else {\n            console.log(\"Couldn't find a signIn element\");\n        }\n    });\n}\n\n__webpack_require__.g.decodeJwtResponse = function (token) {\n    var base64Url = token.split('.')[1];\n    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');\n    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {\n        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);\n    }).join(''));\n\n    return JSON.parse(jsonPayload);\n}\n\n__webpack_require__.g.handleCallbackFunction = function (response) {\n    // decodeJwtResponse() is a custom function defined by you\n    // to decode the credential response.\n    const responsePayload = decodeJwtResponse(response.credential);\n    addUser(responsePayload);\n }\n\n\n//# sourceURL=webpack://habittracker/./src/db.js?");

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