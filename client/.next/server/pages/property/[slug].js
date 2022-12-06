"use strict";
(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 5999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./sanity.js
var sanity = __webpack_require__(6994);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(1438);
;// CONCATENATED MODULE: ./components/Image.js


const Image = ({ identifier , image  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: identifier === "main-image" ? "main-image" : "image",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: (0,sanity/* urlFor */.u)(image).auto("format")
        })
    });
};
/* harmony default export */ const components_Image = (Image);

;// CONCATENATED MODULE: ./components/Review.js


const Review = ({ review  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "review-box",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: review.rating
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: review.traveller.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: (0,sanity/* urlFor */.u)(review.traveller.image).width(80).height(80).crop("focalpoint").auto("format")
            })
        ]
    });
};
/* harmony default export */ const components_Review = (Review);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@react-google-maps/api"
var api_ = __webpack_require__(2433);
;// CONCATENATED MODULE: ./components/Map.js



const Map = ({ location  })=>{
    const { isLoaded  } = (0,api_.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: process.env.googlePlacesAPI
    });
    console.log("location.lat", location.lat);
    const containerStyle = {
        width: "100%",
        height: "400px"
    };
    const center = {
        lat: location.lat,
        lng: location.lng
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
            /*#__PURE__*/ jsx_runtime_.jsx(api_.Marker, {
                position: {
                    lat: location.lat,
                    lng: location.lng
                },
                icon: {
                    url: image,
                    anchor: new google.maps.Point(5, 58)
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
/* harmony default export */ const components_Map = (/*#__PURE__*/external_react_default().memo(Map));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/property/[slug].js







const Property = ({ title , location , propertyType , mainImage , images , pricePerNight , beds , bedrooms , description , host , reviews  })=>{
    const reviewAmount = reviews.length;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    reviewAmount,
                    " review",
                    (0,utils/* isMultiple */.E)(reviewAmount)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "images-section",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Image, {
                        identifier: "main-image",
                        image: mainImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sub-images-section",
                        children: images.map(({ _key , asset  }, image)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Image, {
                                identifier: "main-image",
                                image: asset
                            }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "information",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                    children: [
                                        propertyType,
                                        " hosted by ",
                                        host?.name
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    bedrooms,
                                    " bedroom",
                                    (0,utils/* isMultiple */.E)(bedrooms),
                                    " * ",
                                    beds,
                                    " bed",
                                    (0,utils/* isMultiple */.E)(beds)
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "Enchanced Clean"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "This host is commited to Airbnb's 5-step enhanced cleaning process."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "Amenities for everyday living"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "The host has equipped this place for long stays - kitchen, shampoo, conditioner, hairdryer included."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "House rules"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "This place isn't suitable for pets and the host does not allow parties or smoking."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "price-box",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                children: [
                                    pricePerNight,
                                    " ₺"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    reviewAmount,
                                    " review",
                                    (0,utils/* isMultiple */.E)(reviewAmount)
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button",
                                    children: "Change Dates"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    reviewAmount,
                    " review",
                    (0,utils/* isMultiple */.E)(reviewAmount)
                ]
            }),
            reviewAmount > 0 && reviews.map((review)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Review, {
                    review: review
                }, review._key)),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Location"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Map, {
                location: location
            })
        ]
    });
};
const getServerSideProps = async (pageContext)=>{
    const pageSlug = pageContext.query.slug;
    const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host->{
        _id,
        name,
        slug,
        image
    },
    reviews[]{
        ...,
        traveller->{
            _id,
            name,
            slug,
            image
        }
    }
  }`;
    const property = await sanity/* sanityClient.fetch */.i.fetch(query, {
        pageSlug
    });
    if (!property) {
        return {
            props: null,
            notFound: true
        };
    } else {
        return {
            props: {
                title: property.title,
                location: property.location,
                propertyType: property.propertyType,
                mainImage: property.mainImage,
                images: property.images,
                pricePerNight: property.pricePerNight,
                beds: property.beds,
                bedrooms: property.bedrooms,
                description: property.description,
                host: property.host,
                reviews: property.reviews
            }
        };
    }
};
/* harmony default export */ const _slug_ = (Property);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,856], () => (__webpack_exec__(5999)));
module.exports = __webpack_exports__;

})();