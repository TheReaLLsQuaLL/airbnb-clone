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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DashBoardMap = (param)=>{\n    let { properties  } = param;\n    var _properties__location, _properties__location1;\n    _s();\n    const { isLoaded  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({\n        id: \"google-map-script\",\n        googleMapsApiKey: process.env.googlePlacesAPI\n    });\n    const containerStyle = {\n        width: \"100%\",\n        height: \"400px\"\n    };\n    const center = {\n        lat: (_properties__location = properties[0].location) === null || _properties__location === void 0 ? void 0 : _properties__location.lat,\n        lng: (_properties__location1 = properties[0].location) === null || _properties__location1 === void 0 ? void 0 : _properties__location1.lng\n    };\n    const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const onLoad = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        // This is just an example of getting and using the map instance!!! don't just blindly copy!\n        const bounds = new window.google.maps.LatLngBounds();\n        map.fitBounds(bounds);\n        setMap(map);\n    }, []);\n    const onUnmount = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        setMap(null);\n    }, []);\n    const image = \"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png\";\n    return isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n        mapContainerStyle: containerStyle,\n        center: center,\n        zoom: 10,\n        onLoad: onLoad,\n        onUnmount: onUnmount,\n        children: [\n            properties.map((Property, index)=>{\n                var _property_location, _property_location1;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                    position: {\n                        lat: property === null || property === void 0 ? void 0 : (_property_location = property.location) === null || _property_location === void 0 ? void 0 : _property_location.lat,\n                        lng: property === null || property === void 0 ? void 0 : (_property_location1 = property.location) === null || _property_location1 === void 0 ? void 0 : _property_location1.lng\n                    },\n                    icon: {\n                        url: image,\n                        anchor: new google.maps.Point(5, 58)\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/squall/Desktop/airbnb/client/components/DashboardMap.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/squall/Desktop/airbnb/client/components/DashboardMap.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(DashBoardMap, \"sc/DS85Udqb0HC94DVNruSImuio=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader\n    ];\n});\n_c = DashBoardMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = react__WEBPACK_IMPORTED_MODULE_1___default().memo(DashBoardMap));\nvar _c, _c1;\n$RefreshReg$(_c, \"DashBoardMap\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZE1hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2lEO0FBRTNFLE1BQU1JLGVBQWUsU0FBb0I7UUFBbkIsRUFBRUMsV0FBVSxFQUFFO1FBWTNCQSx1QkFDQUE7O0lBWlAsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR0osc0VBQWNBLENBQUM7UUFDbENLLElBQUk7UUFDSkMsa0JBQWtCQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLGVBQWU7SUFDL0M7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckJDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBRUEsTUFBTUMsU0FBUztRQUNiQyxLQUFLWCxDQUFBQSx3QkFBQUEsVUFBVSxDQUFDLEVBQUUsQ0FBQ1ksUUFBUSxjQUF0QlosbUNBQUFBLEtBQUFBLElBQUFBLHNCQUF3QlcsR0FBRztRQUNoQ0UsS0FBS2IsQ0FBQUEseUJBQUFBLFVBQVUsQ0FBQyxFQUFFLENBQUNZLFFBQVEsY0FBdEJaLG9DQUFBQSxLQUFBQSxJQUFBQSx1QkFBd0JhLEdBQUc7SUFDbEM7SUFFQSxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR3BCLHFEQUFjLENBQUMsSUFBSTtJQUV6QyxNQUFNc0IsU0FBU3RCLHdEQUFpQixDQUFDLFNBQVN3QixTQUFTTCxHQUFHLEVBQUU7UUFDdEQsNEZBQTRGO1FBQzVGLE1BQU1NLFNBQVMsSUFBSUMsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFlBQVk7UUFDbERWLElBQUlXLFNBQVMsQ0FBQ0w7UUFFZEwsT0FBT0Q7SUFDVCxHQUFHLEVBQUU7SUFFTCxNQUFNWSxZQUFZL0Isd0RBQWlCLENBQUMsU0FBU3dCLFNBQVNMLEdBQUcsRUFBRTtRQUN6REMsT0FBTyxJQUFJO0lBQ2IsR0FBRyxFQUFFO0lBRUwsTUFBTVksUUFDSjtJQUVGLE9BQU8xQix5QkFDTCw4REFBQ0wsNkRBQVNBO1FBQ1JnQyxtQkFBbUJyQjtRQUNuQkcsUUFBUUE7UUFDUm1CLE1BQU07UUFDTlosUUFBUUE7UUFDUlMsV0FBV0E7O1lBRVYxQixXQUFXYyxHQUFHLENBQUMsQ0FBQ2dCLFVBQVVDO29CQUdoQkMsb0JBQ0FBOzhCQUhULHFFQUFDbEMsMERBQU1BO29CQUNMbUMsVUFBVTt3QkFDUnRCLEtBQUtxQixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLHFCQUFBQSxTQUFVcEIsUUFBUSxjQUFsQm9CLGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBb0JyQixHQUFGO3dCQUN2QkUsS0FBS21CLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsc0JBQUFBLFNBQVVwQixRQUFRLGNBQWxCb0IsaUNBQUFBLEtBQUFBLElBQUFBLG9CQUFvQm5CLEdBQUY7b0JBQ3pCO29CQUNBcUIsTUFBTTt3QkFBRUMsS0FBS1I7d0JBQU9TLFFBQVEsSUFBSWQsT0FBT0MsSUFBSSxDQUFDYyxLQUFLLENBQUMsR0FBRztvQkFBSTs7Ozs7OzswQkFHN0Q7Ozs7OztrQ0FHRiw2SUFDRDtBQUNIO0dBdkRNdEM7O1FBQ2lCRixrRUFBY0E7OztLQUQvQkU7QUF5RE4sa0ZBQWVKLGlEQUFVLENBQUNJLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmRNYXAuanM/MmVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVNYXAsIHVzZUpzQXBpTG9hZGVyLCBNYXJrZXIgfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xuXG5jb25zdCBEYXNoQm9hcmRNYXAgPSAoeyBwcm9wZXJ0aWVzIH0pID0+IHtcbiAgY29uc3QgeyBpc0xvYWRlZCB9ID0gdXNlSnNBcGlMb2FkZXIoe1xuICAgIGlkOiBcImdvb2dsZS1tYXAtc2NyaXB0XCIsXG4gICAgZ29vZ2xlTWFwc0FwaUtleTogcHJvY2Vzcy5lbnYuZ29vZ2xlUGxhY2VzQVBJLFxuICB9KTtcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjQwMHB4XCIsXG4gIH07XG5cbiAgY29uc3QgY2VudGVyID0ge1xuICAgIGxhdDogcHJvcGVydGllc1swXS5sb2NhdGlvbj8ubGF0LFxuICAgIGxuZzogcHJvcGVydGllc1swXS5sb2NhdGlvbj8ubG5nLFxuICB9O1xuXG4gIGNvbnN0IFttYXAsIHNldE1hcF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvbkxvYWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiBjYWxsYmFjayhtYXApIHtcbiAgICAvLyBUaGlzIGlzIGp1c3QgYW4gZXhhbXBsZSBvZiBnZXR0aW5nIGFuZCB1c2luZyB0aGUgbWFwIGluc3RhbmNlISEhIGRvbid0IGp1c3QgYmxpbmRseSBjb3B5IVxuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXG4gICAgc2V0TWFwKG1hcCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblVubW91bnQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiBjYWxsYmFjayhtYXApIHtcbiAgICBzZXRNYXAobnVsbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBpbWFnZSA9XG4gICAgXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9mdWxsL2ltYWdlcy9iZWFjaGZsYWcucG5nXCI7XG5cbiAgcmV0dXJuIGlzTG9hZGVkID8gKFxuICAgIDxHb29nbGVNYXBcbiAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgIGNlbnRlcj17Y2VudGVyfVxuICAgICAgem9vbT17MTB9XG4gICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgIG9uVW5tb3VudD17b25Vbm1vdW50fVxuICAgID5cbiAgICAgIHtwcm9wZXJ0aWVzLm1hcCgoUHJvcGVydHksIGluZGV4KSA9PiAoXG4gICAgICAgIDxNYXJrZXJcbiAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgbGF0OiBwcm9wZXJ0eT8ubG9jYXRpb24/LmxhdCxcbiAgICAgICAgICAgIGxuZzogcHJvcGVydHk/LmxvY2F0aW9uPy5sbmcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpY29uPXt7IHVybDogaW1hZ2UsIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDUsIDU4KSB9fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8PjwvPlxuICAgIDwvR29vZ2xlTWFwPlxuICApIDogKFxuICAgIDw+PC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKERhc2hCb2FyZE1hcCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJHb29nbGVNYXAiLCJ1c2VKc0FwaUxvYWRlciIsIk1hcmtlciIsIkRhc2hCb2FyZE1hcCIsInByb3BlcnRpZXMiLCJpc0xvYWRlZCIsImlkIiwiZ29vZ2xlTWFwc0FwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJnb29nbGVQbGFjZXNBUEkiLCJjb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2VudGVyIiwibGF0IiwibG9jYXRpb24iLCJsbmciLCJtYXAiLCJzZXRNYXAiLCJ1c2VTdGF0ZSIsIm9uTG9hZCIsInVzZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJib3VuZHMiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiTGF0TG5nQm91bmRzIiwiZml0Qm91bmRzIiwib25Vbm1vdW50IiwiaW1hZ2UiLCJtYXBDb250YWluZXJTdHlsZSIsInpvb20iLCJQcm9wZXJ0eSIsImluZGV4IiwicHJvcGVydHkiLCJwb3NpdGlvbiIsImljb24iLCJ1cmwiLCJhbmNob3IiLCJQb2ludCIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DashboardMap.js\n"));

/***/ })

});