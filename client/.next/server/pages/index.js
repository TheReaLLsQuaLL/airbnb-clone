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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n\n\nfunction Home({ properties  }) {\n    console.log(properties);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: properties && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feed-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Place to stay near you\"\n                    }, void 0, false, {\n                        fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"feed\",\n                        children: properties.map((property, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_sanity__WEBPACK_IMPORTED_MODULE_1__.urlFor)(property.mainImage)\n                                }, void 0, false, {\n                                    fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 19\n                                }, this)\n                            }, property._id, false, {\n                                fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                                lineNumber: 13,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\nconst getServerSideProps = async ()=>{\n    const query = `*[ _type == \"property\"]`;\n    const properties = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    if (!properties.length) {\n        return {\n            props: {\n                properties: []\n            }\n        };\n    } else {\n        return {\n            props: {\n                properties\n            }\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlEO0FBRWxDLFNBQVNFLEtBQUssRUFBRUMsV0FBVSxFQUFFLEVBQUU7SUFDM0NDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDRTtrQkFDR0EsNEJBQ0MsOERBQUNHO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0Y7d0JBQUlDLFdBQVU7a0NBQ1pKLFdBQVdNLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDekIsOERBQUNMO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSztvQ0FBSUMsS0FBS1osK0NBQU1BLENBQUNTLFNBQVNJLFNBQVM7Ozs7OzsrQkFEVkosU0FBU0ssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV2RCxDQUFDO0FBRU0sTUFBTUMscUJBQXFCLFVBQVk7SUFDNUMsTUFBTUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO0lBQ3ZDLE1BQU1kLGFBQWEsTUFBTUgsdURBQWtCLENBQUNpQjtJQUU1QyxJQUFJLENBQUNkLFdBQVdnQixNQUFNLEVBQUU7UUFDdEIsT0FBTztZQUNMQyxPQUFPO2dCQUNMakIsWUFBWSxFQUFFO1lBQ2hCO1FBQ0Y7SUFDRixPQUFPO1FBQ0wsT0FBTztZQUNMaUIsT0FBTztnQkFDTGpCO1lBQ0Y7UUFDRjtJQUNGLENBQUM7QUFDSCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gXCIuLi9zYW5pdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb3BlcnRpZXMgfSkge1xuICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb3BlcnRpZXMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+UGxhY2UgdG8gc3RheSBuZWFyIHlvdTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWRcIj5cbiAgICAgICAgICAgICAge3Byb3BlcnRpZXMubWFwKChwcm9wZXJ0eSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Byb3BlcnR5Ll9pZH0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKHByb3BlcnR5Lm1haW5JbWFnZSl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgKlsgX3R5cGUgPT0gXCJwcm9wZXJ0eVwiXWA7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xuXG4gIGlmICghcHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvcGVydGllczogW10sXG4gICAgICB9LFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwidXJsRm9yIiwiSG9tZSIsInByb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaW1nIiwic3JjIiwibWFpbkltYWdlIiwiX2lkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicXVlcnkiLCJmZXRjaCIsImxlbmd0aCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    /**\n   * Find your project ID and dataset in `sanity.json` in your studio project.\n   * These are considered “public”, but you can use environment variables\n   * if you want differ between local dev and production.\n   *\n   * https://nextjs.org/docs/basic-features/environment-variables\n   **/ dataset: \"production\" || 0,\n    projectId: \"kqfxc4mk\",\n    useCdn: \"development\" === \"production\"\n};\n/**\n * Set up a helper function for generating Image URLs with only the asset reference data in your documents.\n * Read more: https://www.sanity.io/docs/image-url\n **/ const urlFor = (source)=>(0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createImageUrlBuilder)(config).image(source);\n// Set up the client for fetching data in the getProps page functions\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRTtBQUVsRSxNQUFNRSxTQUFTO0lBQ2I7Ozs7OztJQU1FLEdBQ0ZDLFNBQVNDLFlBQXNDLElBQUksQ0FBWTtJQUMvREcsV0FBV0gsVUFBeUM7SUFDcERLLFFBQVFMLGtCQUF5QjtBQU1uQztBQUNBOzs7RUFHRSxHQUNLLE1BQU1NLFNBQVMsQ0FBQ0MsU0FBV1Ysa0VBQXFCQSxDQUFDQyxRQUFRVSxLQUFLLENBQUNELFFBQVE7QUFFOUUscUVBQXFFO0FBQzlELE1BQU1FLGVBQWViLHlEQUFZQSxDQUFDRSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc2FuaXR5LmpzPzg1ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBjcmVhdGVJbWFnZVVybEJ1aWxkZXIgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICAvKipcbiAgICogRmluZCB5b3VyIHByb2plY3QgSUQgYW5kIGRhdGFzZXQgaW4gYHNhbml0eS5qc29uYCBpbiB5b3VyIHN0dWRpbyBwcm9qZWN0LlxuICAgKiBUaGVzZSBhcmUgY29uc2lkZXJlZCDigJxwdWJsaWPigJ0sIGJ1dCB5b3UgY2FuIHVzZSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICogaWYgeW91IHdhbnQgZGlmZmVyIGJldHdlZW4gbG9jYWwgZGV2IGFuZCBwcm9kdWN0aW9uLlxuICAgKlxuICAgKiBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9lbnZpcm9ubWVudC12YXJpYWJsZXNcbiAgICoqL1xuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCBcInByb2R1Y3Rpb25cIixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIC8qKlxuICAgKiBTZXQgdXNlQ2RuIHRvIGBmYWxzZWAgaWYgeW91ciBhcHBsaWNhdGlvbiByZXF1aXJlIHRoZSBmcmVzaGVzdCBwb3NzaWJsZVxuICAgKiBkYXRhIGFsd2F5cyAocG90ZW50aWFsbHkgc2xpZ2h0bHkgc2xvd2VyIGFuZCBhIGJpdCBtb3JlIGV4cGVuc2l2ZSkuXG4gICAqIEF1dGhlbnRpY2F0ZWQgcmVxdWVzdCAobGlrZSBwcmV2aWV3KSB3aWxsIGFsd2F5cyBieXBhc3MgdGhlIENETlxuICAgKiovXG59O1xuLyoqXG4gKiBTZXQgdXAgYSBoZWxwZXIgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgSW1hZ2UgVVJMcyB3aXRoIG9ubHkgdGhlIGFzc2V0IHJlZmVyZW5jZSBkYXRhIGluIHlvdXIgZG9jdW1lbnRzLlxuICogUmVhZCBtb3JlOiBodHRwczovL3d3dy5zYW5pdHkuaW8vZG9jcy9pbWFnZS11cmxcbiAqKi9cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpO1xuXG4vLyBTZXQgdXAgdGhlIGNsaWVudCBmb3IgZmV0Y2hpbmcgZGF0YSBpbiB0aGUgZ2V0UHJvcHMgcGFnZSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoY29uZmlnKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJ1c2VDZG4iLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInNhbml0eUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sanity.js\n");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();