"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./sanity.js
var sanity = __webpack_require__(6994);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(1438);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@react-google-maps/api"
var api_ = __webpack_require__(2433);
;// CONCATENATED MODULE: ./components/DashboardMap.js



const DashBoardMap = ({ properties  })=>{
    const { isLoaded  } = (0,api_.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: process.env.googlePlacesAPI
    });
    console.log(properties[0].location?.lat);
    const containerStyle = {
        width: "100%",
        height: "100vh"
    };
    const center = {
        lat: properties[0].location?.lat,
        lng: properties[0].location?.lng
    };
    const [map, setMap] = external_react_default().useState(null);
    const onLoad = external_react_default().useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);
    const onUnmount = external_react_default().useCallback(function callback(map) {
        setMap(null);
    }, []);
    const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    return isLoaded ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(api_.GoogleMap, {
        mapContainerStyle: containerStyle,
        center: center,
        zoom: 10,
        onLoad: onLoad,
        onUnmount: onUnmount,
        children: [
            properties.map((property, index)=>/*#__PURE__*/ jsx_runtime_.jsx(api_.Marker, {
                    position: {
                        lat: property?.location?.lat,
                        lng: property?.location?.lng
                    },
                    icon: {
                        url: image,
                        anchor: new google.maps.Point(5, 58)
                    }
                })),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
/* harmony default export */ const DashboardMap = (/*#__PURE__*/external_react_default().memo(DashBoardMap));

;// CONCATENATED MODULE: ./pages/index.js





function Home({ properties  }) {
    console.log(properties);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: properties && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "main",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "feed-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Place to stay near you"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "feed",
                            children: properties.map((property)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `property/${property.slug.current}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: (0,sanity/* urlFor */.u)(property.mainImage)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    property.reviews.length,
                                                    " review",
                                                    (0,utils/* isMultiple */.E)(property.reviews.length)
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: property.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                children: [
                                                    property.pricePerNight,
                                                    " ₺ / per Night"
                                                ]
                                            })
                                        ]
                                    }, property._id)
                                }))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "map",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(DashboardMap, {
                        properties: properties
                    })
                })
            ]
        })
    });
}
const getServerSideProps = async ()=>{
    const query = `*[ _type == "property"]`;
    const properties = await sanity/* sanityClient.fetch */.i.fetch(query);
    if (!properties.length) {
        return {
            props: {
                properties: []
            }
        };
    } else {
        return {
            props: {
                properties
            }
        };
    }
};


/***/ }),

/***/ 2433:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 5879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,856], () => (__webpack_exec__(1379)));
module.exports = __webpack_exports__;

})();