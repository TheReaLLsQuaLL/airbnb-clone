"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { properties  } = param;\n    console.log(properties);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: properties && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feed-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Place to stay near you\"\n                    }, void 0, false, {\n                        fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"feed\",\n                        children: properties.map((property)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                href: \"property/\".concat(property.slug.current),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_1__.urlFor)(property.mainImage)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, property._id, false, {\n                                        fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                                        lineNumber: 14,\n                                        columnNumber: 19\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                                lineNumber: 13,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"map\"\n                    }, void 0, false, {\n                        fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/squall/Desktop/airbnb/client/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlEOztBQUVsQyxTQUFTQyxLQUFLLEtBQWMsRUFBRTtRQUFoQixFQUFFQyxXQUFVLEVBQUUsR0FBZDtJQUMzQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFO2tCQUNHQSw0QkFDQyw4REFBQ0c7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRjt3QkFBSUMsV0FBVTtrQ0FDWkosV0FBV00sR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDQztnQ0FBS0MsTUFBTSxZQUFrQyxPQUF0QkYsU0FBU0csSUFBSSxDQUFDQyxPQUFPOztrREFDM0MsOERBQUNSO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDUTs0Q0FBSUMsS0FBS2YsK0NBQU1BLENBQUNTLFNBQVNPLFNBQVM7Ozs7Ozt1Q0FEVlAsU0FBU1EsR0FBRzs7Ozs7b0NBRWhDOzs7Ozs7Ozs7Ozs7a0NBSWIsOERBQUNaO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0IsQ0FBQztLQXZCdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FuaXR5Q2xpZW50LCB1cmxGb3IgfSBmcm9tIFwiLi4vc2FuaXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9wZXJ0aWVzIH0pIHtcbiAgY29uc29sZS5sb2cocHJvcGVydGllcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wZXJ0aWVzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPlBsYWNlIHRvIHN0YXkgbmVhciB5b3U8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkXCI+XG4gICAgICAgICAgICAgIHtwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgcHJvcGVydHkvJHtwcm9wZXJ0eS5zbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Byb3BlcnR5Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IocHJvcGVydHkubWFpbkltYWdlKX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbIF90eXBlID09IFwicHJvcGVydHlcIl1gO1xuICBjb25zdCBwcm9wZXJ0aWVzID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcblxuICBpZiAoIXByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb3BlcnRpZXM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInVybEZvciIsIkhvbWUiLCJwcm9wZXJ0aWVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvcGVydHkiLCJMaW5rIiwiaHJlZiIsInNsdWciLCJjdXJyZW50IiwiaW1nIiwic3JjIiwibWFpbkltYWdlIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});