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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBRUU7QUFFeEQsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3BCLGlEQUFpRDtJQUNqREUsU0FBUztRQUNHQyxVQUFVO0lBQ2Q7SUFDUkMsV0FBVztRQUNQSCxpRUFBY0EsQ0FBQztZQUNYSSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDbEQ7S0FHSDtBQUNMLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UtdHV0b3JpYWwvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gICAgc2Vzc2lvbjoge1xuICAgICAgICAgICAgICAgIHN0cmF0ZWd5OiAnand0J1xuICAgICAgICAgICAgfSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgYXMgc3RyaW5nLFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCBhcyBzdHJpbmcsXG4gICAgICAgIH0pLFxuICAgICAgXG4gICAgICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gICAgXSxcbn0pXG5cbi8vIGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4vLyAgICAgc2Vzc2lvbjoge1xuLy8gICAgICAgICBzdHJhdGVneTogJ2p3dCdcbi8vICAgICB9LFxuLy8gICAgIHByb3ZpZGVyczogW1xuLy8gICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbi8vICAgICAgICAgICAgIHR5cGU6ICdjcmVkZW50aWFscycsXG4vLyAgICAgICAgICAgICBjcmVkZW50aWFsczoge30sXG4vLyAgICAgICAgICAgICBhdXRob3JpemUoY3JlZGVudGlhbHMscmVxKXtcbi8vICAgICAgICAgICAgICAgICBjb25zdCB7ZW1haWwscGFzc3dvcmR9ID0gY3JlZGVudGlhbHMgYXMge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbWFpbDogc3RyaW5nLCBcbi8vICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHN0cmluZyxcbi8vICAgICAgICAgICAgICAgICB9O1xuLy8gICAgICAgICAgICAgICAgIC8vbG9naW5sb2dpY2MgXG4vLyAgICAgICAgICAgICAgICAgaWYgKGVtYWlsICE9IFwic25laGEuc3F1YXNoZXJAZ21haWwuY29tXCIgJiYgcGFzc3dvcmQgIT09IFwiMTIzNFwiKXtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAvLyBpZiBldmVyeXRoaW5nIGZpbmUgXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogJzEyMzQnLCBuYW1lOiAnam9obiBkb2UnLCBlbWFpbDogJ3NuZWhhLnNxdWFzaGVyQGdtYWlsLmNvbSd9XG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICB9KVxuLy8gICAgIF0sIFxuLy8gICAgIHBhZ2VzOiB7XG4vLyAgICAgICAgIHNpZ25JbjogXCIvYXV0aC9zaWduaW5cIiwgXG4vLyAgICAgfSxcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuXG5cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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