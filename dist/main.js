/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAboutPage: () => (/* binding */ generateAboutPage)\n/* harmony export */ });\nfunction generateAboutPage(){\n    // grab div#content\n    const mainContent = document.getElementById(\"content\");\n\n    // create div\n    let aboutPageMainContent = document.createElement(\"div\");\n\n    // add content/styling\n    aboutPageMainContent.innerHTML= \"Do you mess with Being?\";\n    aboutPageMainContent.id=\"contentSection\";\n    aboutPageMainContent.style.backgroundColor=\"#00308F\";\n    aboutPageMainContent.style.color=\"white\";\n    aboutPageMainContent.style.width=\"50vw\";\n    aboutPageMainContent.style.height=\"75vh\";\n    aboutPageMainContent.style.zIndex=\"1\";\n    aboutPageMainContent.style.position=\"absolute\";\n    aboutPageMainContent.style.top=\"100px\";\n    aboutPageMainContent.style.left=\"25vw\";\n    // homePageMainContent.style.display=\"flexbox\";\n    // homePageMainContent.style.justifyContent=\"center\";\n    // homePageMainContent.style.marginBottom=\"1000px\";\n\n    // append the div to the homepage\n    mainContent.appendChild(aboutPageMainContent);\n\n}\n\n\n\n//# sourceURL=webpack://rest/./src/about.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHomePageContent: () => (/* binding */ generateHomePageContent)\n/* harmony export */ });\nfunction generateHomePageContent(){\n    // grab div#content\n    const mainContent = document.getElementById(\"content\");\n\n    // create div\n    let homePageMainContent = document.createElement(\"div\");\n    console.log(homePageMainContent);\n\n    // add content/styling\n    homePageMainContent.innerHTML= \"This is test content. Nay, this IS content. Indeed, one might think that just becuase they say this or they say that that this isn't VALUE. Let me teach you how the world works, kid- entertainment and information are one and the same in the 21st century. Indeed, for better or for worse! You would be wise to remember that, my child. Now go... I have to read a Murakami novel....\";\n    homePageMainContent.id=\"contentSection\";\n    homePageMainContent.style.backgroundColor=\"#00308F\";\n    homePageMainContent.style.color=\"white\";\n    homePageMainContent.style.width=\"50vw\";\n    homePageMainContent.style.height=\"75vh\";\n    homePageMainContent.style.zIndex=\"1\";\n    homePageMainContent.style.position=\"absolute\";\n    homePageMainContent.style.top=\"100px\";\n    homePageMainContent.style.left=\"25vw\";\n    // homePageMainContent.style.display=\"flexbox\";\n    // homePageMainContent.style.justifyContent=\"center\";\n    // homePageMainContent.style.marginBottom=\"1000px\";\n\n    // append the div to the homepage\n    mainContent.appendChild(homePageMainContent);\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://rest/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.setWaifuBackground)();\n(0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.generateHomePageContent)();\n\n// grab tabs\nconst homeTab = document.querySelectorAll(\"button\")[0];\nconst menuTab = document.querySelectorAll(\"button\")[1];\nconst aboutTab = document.querySelectorAll(\"button\")[2];\n\nmenuTab.addEventListener(\"click\",_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenuPage)\nhomeTab.addEventListener(\"click\",_homePage_js__WEBPACK_IMPORTED_MODULE_1__.generateHomePageContent)\naboutTab.addEventListener(\"click\",_about_js__WEBPACK_IMPORTED_MODULE_3__.generateAboutPage)\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenuPage: () => (/* binding */ generateMenuPage)\n/* harmony export */ });\nfunction generateMenuPage(){\n    // grab div#content\n    const mainContent = document.getElementById(\"content\");\n\n    // create div\n    let menuPageMainContent = document.createElement(\"div\");\n\n    // add content/styling\n    menuPageMainContent.innerHTML= \"You want some sloppy sloppy joe aintcha, lad?\";\n    menuPageMainContent.id=\"contentSection\";\n    menuPageMainContent.style.backgroundColor=\"#00308F\";\n    menuPageMainContent.style.color=\"white\";\n    menuPageMainContent.style.width=\"50vw\";\n    menuPageMainContent.style.height=\"75vh\";\n    menuPageMainContent.style.zIndex=\"1\";\n    menuPageMainContent.style.position=\"absolute\";\n    menuPageMainContent.style.top=\"100px\";\n    menuPageMainContent.style.left=\"25vw\";\n    // homePageMainContent.style.display=\"flexbox\";\n    // homePageMainContent.style.justifyContent=\"center\";\n    // homePageMainContent.style.marginBottom=\"1000px\";\n\n    // append the div to the homepage\n    mainContent.appendChild(menuPageMainContent);\n\n}\n\n\n\n//# sourceURL=webpack://rest/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setWaifuBackground: () => (/* binding */ setWaifuBackground)\n/* harmony export */ });\n\nfunction setWaifuBackground(){\n// grab div#content\nconst mainContent = document.getElementById(\"content\");\nconsole.log(mainContent);\n\n// add waifu background\nlet waifuBackground = document.createElement(\"img\");\nwaifuBackground.src = \"anime-waifu.jpg\";\nwaifuBackground.style.position=\"relative\";\nmainContent.appendChild(waifuBackground);\n}\n\n// setWaifuBackground();\n\n\n\n//# sourceURL=webpack://rest/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;