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

/***/ "./components/DashboardMap.js":
/*!************************************!*\
  !*** ./components/DashboardMap.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DashBoardMap = (param)=>{\n    let { properties  } = param;\n    var _properties__location, _properties__location1, _properties__location2;\n    _s();\n    const { isLoaded  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({\n        id: \"google-map-script\",\n        googleMapsApiKey: process.env.googlePlacesAPI\n    });\n    console.log((_properties__location = properties[0].location) === null || _properties__location === void 0 ? void 0 : _properties__location.lat);\n    const containerStyle = {\n        width: \"100%\",\n        height: \"100vh\"\n    };\n    const center = {\n        lat: (_properties__location1 = properties[0].location) === null || _properties__location1 === void 0 ? void 0 : _properties__location1.lat,\n        lng: (_properties__location2 = properties[0].location) === null || _properties__location2 === void 0 ? void 0 : _properties__location2.lng\n    };\n    const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const onLoad = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        // This is just an example of getting and using the map instance!!! don't just blindly copy!\n        const bounds = new window.google.maps.LatLngBounds();\n        map.fitBounds(bounds);\n        setMap(map);\n    }, []);\n    const onUnmount = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        setMap(null);\n    }, []);\n    const image = \"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png\";\n    return isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n        mapContainerStyle: containerStyle,\n        center: center,\n        zoom: 10,\n        onLoad: onLoad,\n        onUnmount: onUnmount,\n        children: [\n            properties.map((property, index)=>{\n                var _property_location, _property_location1;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                    position: {\n                        lat: property === null || property === void 0 ? void 0 : (_property_location = property.location) === null || _property_location === void 0 ? void 0 : _property_location.lat,\n                        lng: property === null || property === void 0 ? void 0 : (_property_location1 = property.location) === null || _property_location1 === void 0 ? void 0 : _property_location1.lng\n                    },\n                    icon: {\n                        url: image,\n                        anchor: new google.maps.Point(5, 58)\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/squall/Desktop/airbnb/client/components/DashboardMap.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/squall/Desktop/airbnb/client/components/DashboardMap.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(DashBoardMap, \"sc/DS85Udqb0HC94DVNruSImuio=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader\n    ];\n});\n_c = DashBoardMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = react__WEBPACK_IMPORTED_MODULE_1___default().memo(DashBoardMap));\nvar _c, _c1;\n$RefreshReg$(_c, \"DashBoardMap\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZE1hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2lEO0FBRTNFLE1BQU1JLGVBQWUsU0FBb0I7UUFBbkIsRUFBRUMsV0FBVSxFQUFFO1FBTXRCQSx1QkFRTEEsd0JBQ0FBOztJQWRQLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdKLHNFQUFjQSxDQUFDO1FBQ2xDSyxJQUFJO1FBQ0pDLGtCQUFrQkMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0lBQy9DO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1IsQ0FBQUEsd0JBQUFBLFVBQVUsQ0FBQyxFQUFFLENBQUNTLFFBQVEsY0FBdEJULG1DQUFBQSxLQUFBQSxJQUFBQSxzQkFBd0JVLEdBQUc7SUFFdkMsTUFBTUMsaUJBQWlCO1FBQ3JCQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUVBLE1BQU1DLFNBQVM7UUFDYkosS0FBS1YsQ0FBQUEseUJBQUFBLFVBQVUsQ0FBQyxFQUFFLENBQUNTLFFBQVEsY0FBdEJULG9DQUFBQSxLQUFBQSxJQUFBQSx1QkFBd0JVLEdBQUc7UUFDaENLLEtBQUtmLENBQUFBLHlCQUFBQSxVQUFVLENBQUMsRUFBRSxDQUFDUyxRQUFRLGNBQXRCVCxvQ0FBQUEsS0FBQUEsSUFBQUEsdUJBQXdCZSxHQUFHO0lBQ2xDO0lBRUEsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUd0QixxREFBYyxDQUFDLElBQUk7SUFFekMsTUFBTXdCLFNBQVN4Qix3REFBaUIsQ0FBQyxTQUFTMEIsU0FBU0wsR0FBRyxFQUFFO1FBQ3RELDRGQUE0RjtRQUM1RixNQUFNTSxTQUFTLElBQUlDLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxZQUFZO1FBQ2xEVixJQUFJVyxTQUFTLENBQUNMO1FBRWRMLE9BQU9EO0lBQ1QsR0FBRyxFQUFFO0lBRUwsTUFBTVksWUFBWWpDLHdEQUFpQixDQUFDLFNBQVMwQixTQUFTTCxHQUFHLEVBQUU7UUFDekRDLE9BQU8sSUFBSTtJQUNiLEdBQUcsRUFBRTtJQUVMLE1BQU1ZLFFBQ0o7SUFFRixPQUFPNUIseUJBQ0wsOERBQUNMLDZEQUFTQTtRQUNSa0MsbUJBQW1CbkI7UUFDbkJHLFFBQVFBO1FBQ1JpQixNQUFNO1FBQ05aLFFBQVFBO1FBQ1JTLFdBQVdBOztZQUVWNUIsV0FBV2dCLEdBQUcsQ0FBQyxDQUFDZ0IsVUFBVUM7b0JBR2hCRCxvQkFDQUE7OEJBSFQscUVBQUNsQywwREFBTUE7b0JBQ0xvQyxVQUFVO3dCQUNSeEIsS0FBS3NCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEscUJBQUFBLFNBQVV2QixRQUFRLGNBQWxCdUIsZ0NBQUFBLEtBQUFBLElBQUFBLG1CQUFvQnRCLEdBQUY7d0JBQ3ZCSyxLQUFLaUIscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxzQkFBQUEsU0FBVXZCLFFBQVEsY0FBbEJ1QixpQ0FBQUEsS0FBQUEsSUFBQUEsb0JBQW9CakIsR0FBRjtvQkFDekI7b0JBQ0FvQixNQUFNO3dCQUFFQyxLQUFLUDt3QkFBT1EsUUFBUSxJQUFJYixPQUFPQyxJQUFJLENBQUNhLEtBQUssQ0FBQyxHQUFHO29CQUFJOzs7Ozs7OzBCQUc3RDs7Ozs7O2tDQUdGLDZJQUNEO0FBQ0g7R0F6RE12Qzs7UUFDaUJGLGtFQUFjQTs7O0tBRC9CRTtBQTJETixrRkFBZUosaURBQVUsQ0FBQ0ksYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhc2hib2FyZE1hcC5qcz8yZWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdvb2dsZU1hcCwgdXNlSnNBcGlMb2FkZXIsIE1hcmtlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XG5cbmNvbnN0IERhc2hCb2FyZE1hcCA9ICh7IHByb3BlcnRpZXMgfSkgPT4ge1xuICBjb25zdCB7IGlzTG9hZGVkIH0gPSB1c2VKc0FwaUxvYWRlcih7XG4gICAgaWQ6IFwiZ29vZ2xlLW1hcC1zY3JpcHRcIixcbiAgICBnb29nbGVNYXBzQXBpS2V5OiBwcm9jZXNzLmVudi5nb29nbGVQbGFjZXNBUEksXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHByb3BlcnRpZXNbMF0ubG9jYXRpb24/LmxhdCk7XG5cbiAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICB9O1xuXG4gIGNvbnN0IGNlbnRlciA9IHtcbiAgICBsYXQ6IHByb3BlcnRpZXNbMF0ubG9jYXRpb24/LmxhdCxcbiAgICBsbmc6IHByb3BlcnRpZXNbMF0ubG9jYXRpb24/LmxuZyxcbiAgfTtcblxuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25Mb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XG4gICAgLy8gVGhpcyBpcyBqdXN0IGFuIGV4YW1wbGUgb2YgZ2V0dGluZyBhbmQgdXNpbmcgdGhlIG1hcCBpbnN0YW5jZSEhISBkb24ndCBqdXN0IGJsaW5kbHkgY29weSFcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgIG1hcC5maXRCb3VuZHMoYm91bmRzKTtcblxuICAgIHNldE1hcChtYXApO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Vbm1vdW50ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XG4gICAgc2V0TWFwKG51bGwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaW1hZ2UgPVxuICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvZnVsbC9pbWFnZXMvYmVhY2hmbGFnLnBuZ1wiO1xuXG4gIHJldHVybiBpc0xvYWRlZCA/IChcbiAgICA8R29vZ2xlTWFwXG4gICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XG4gICAgICBjZW50ZXI9e2NlbnRlcn1cbiAgICAgIHpvb209ezEwfVxuICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICBvblVubW91bnQ9e29uVW5tb3VudH1cbiAgICA+XG4gICAgICB7cHJvcGVydGllcy5tYXAoKHByb3BlcnR5LCBpbmRleCkgPT4gKFxuICAgICAgICA8TWFya2VyXG4gICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgIGxhdDogcHJvcGVydHk/LmxvY2F0aW9uPy5sYXQsXG4gICAgICAgICAgICBsbmc6IHByb3BlcnR5Py5sb2NhdGlvbj8ubG5nLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaWNvbj17eyB1cmw6IGltYWdlLCBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCg1LCA1OCkgfX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPD48Lz5cbiAgICA8L0dvb2dsZU1hcD5cbiAgKSA6IChcbiAgICA8PjwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhEYXNoQm9hcmRNYXApO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR29vZ2xlTWFwIiwidXNlSnNBcGlMb2FkZXIiLCJNYXJrZXIiLCJEYXNoQm9hcmRNYXAiLCJwcm9wZXJ0aWVzIiwiaXNMb2FkZWQiLCJpZCIsImdvb2dsZU1hcHNBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiZ29vZ2xlUGxhY2VzQVBJIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwibGF0IiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNlbnRlciIsImxuZyIsIm1hcCIsInNldE1hcCIsInVzZVN0YXRlIiwib25Mb2FkIiwidXNlQ2FsbGJhY2siLCJjYWxsYmFjayIsImJvdW5kcyIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJMYXRMbmdCb3VuZHMiLCJmaXRCb3VuZHMiLCJvblVubW91bnQiLCJpbWFnZSIsIm1hcENvbnRhaW5lclN0eWxlIiwiem9vbSIsInByb3BlcnR5IiwiaW5kZXgiLCJwb3NpdGlvbiIsImljb24iLCJ1cmwiLCJhbmNob3IiLCJQb2ludCIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DashboardMap.js\n"));

/***/ })

});