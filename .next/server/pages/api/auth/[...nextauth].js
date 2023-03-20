"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n//import CredentialsProvider from \"next-auth/providers/credentials\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ3RDLG9FQUFvRTtBQUNaO0FBRXhELGlFQUFlQSxnREFBUUEsQ0FBQztJQUNwQixpREFBaUQ7SUFDakRFLFNBQVM7UUFDR0MsVUFBVTtJQUNkO0lBQ1JDLFdBQVc7UUFDUEgsaUVBQWNBLENBQUM7WUFDWEksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2xEO0tBR0g7QUFDTCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLXR1dG9yaWFsLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbi8vaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgc3RyYXRlZ3k6ICdqd3QnXG4gICAgICAgICAgICB9LFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmcsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIGFzIHN0cmluZyxcbiAgICAgICAgfSksXG4gICAgICBcbiAgICAgICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgICBdLFxufSlcblxuLy8gY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbi8vICAgICBzZXNzaW9uOiB7XG4vLyAgICAgICAgIHN0cmF0ZWd5OiAnand0J1xuLy8gICAgIH0sXG4vLyAgICAgcHJvdmlkZXJzOiBbXG4vLyAgICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuLy8gICAgICAgICAgICAgdHlwZTogJ2NyZWRlbnRpYWxzJyxcbi8vICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7fSxcbi8vICAgICAgICAgICAgIGF1dGhvcml6ZShjcmVkZW50aWFscyxyZXEpe1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbCxwYXNzd29yZH0gPSBjcmVkZW50aWFscyBhcyB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBzdHJpbmcsIFxuLy8gICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogc3RyaW5nLFxuLy8gICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICAgICAgLy9sb2dpbmxvZ2ljYyBcbi8vICAgICAgICAgICAgICAgICBpZiAoZW1haWwgIT0gXCJzbmVoYS5zcXVhc2hlckBnbWFpbC5jb21cIiAmJiBwYXNzd29yZCAhPT0gXCIxMjM0XCIpe1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgZmluZSBcbi8vICAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiAnMTIzNCcsIG5hbWU6ICdqb2huIGRvZScsIGVtYWlsOiAnc25laGEuc3F1YXNoZXJAZ21haWwuY29tJ31cbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgIH0pXG4vLyAgICAgXSwgXG4vLyAgICAgcGFnZXM6IHtcbi8vICAgICAgICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLCBcbi8vICAgICB9LFxuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5cblxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();