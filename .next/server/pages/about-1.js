"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 1692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/_App/NavbarStyleFive.js
var NavbarStyleFive = __webpack_require__(5);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(3538);
// EXTERNAL MODULE: external "react-owl-carousel3"
var external_react_owl_carousel3_ = __webpack_require__(4208);
var external_react_owl_carousel3_default = /*#__PURE__*/__webpack_require__.n(external_react_owl_carousel3_);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
;// CONCATENATED MODULE: ./components/Common/FeedbackStyleFour.js




const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
    animateOut: "fadeOut"
};
const FeedbackStyleFour = ()=>{
    const [display, setDisplay] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setDisplay(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "ml-feedback-area ptb-80",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "T\xe9moignage"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Nos clients parlent de nous Mieux que nous"
                            })
                        ]
                    }),
                    display ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_owl_carousel3_default()), {
                        className: "ml-feedback-slides owl-carousel owl-theme",
                        ...options,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "client-info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CQ3IrjZcisW-FO12jxRtSA9shZYuykqA2w&usqp=CAU",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Sarah Taylor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "CEO at Samidax"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Excellente agence, comp\xe9tente et professionnelle. Tr\xe8s bon contact avec Nicolas, toujours disponible, r\xe9actif et \xe0 l'\xe9coute de nos besoins."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "client-info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://cdn.pixabay.com/photo/2017/12/18/03/01/black-avatar-3025348_1280.png",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: " Diop"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "CEO at Ized "
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Nous sommes satisfait de la r\xe9alisation de notre site. La r\xe9activit\xe9 de l'\xe9quipe a \xe9t\xe9 au RDV."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rating",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Star, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Star, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Star, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Star, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Star, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "client-info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Josie Dion"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Compar\xe9 aux autres entreprises que nous avons utilis\xe9es dans le pass\xe9, Thrive a \xe9t\xe9 de loin le meilleur dans tous les domaines. Lors de la construction de notre nouveau site Web, le service client a \xe9t\xe9 rapide et simple et les services r\xe9els sont bien document\xe9s et logiques par rapport \xe0 nos besoins."
                                    })
                                ]
                            })
                        ]
                    }) : ""
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape1.png",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape2 rotateme",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape2.svg",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape3.svg",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape4.svg",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape7",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape4.svg",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape8 rotateme",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape2.svg",
                    alt: "shape"
                })
            })
        ]
    });
};
/* harmony default export */ const Common_FeedbackStyleFour = (FeedbackStyleFour);

;// CONCATENATED MODULE: ./pages/about-1.js






const About1 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavbarStyleFive/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(PageBanner/* default */.Z, {
                pageTitle: "\xc0 propos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "about-area ptb-80",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "about-image",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
                                            alt: "image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "about-content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-title",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "\xc0 propos"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Nous sommes une agence num\xe9rique prim\xe9e, passionn\xe9e, d\xe9vou\xe9e et engag\xe9e \xe0 fournir d'excellents r\xe9sultats. Nous sommes fiers de nos comp\xe9tences exceptionnelles en communication et nous nous effor\xe7ons de d\xe9passer les attentes de nos clients."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Passionn\xe9 du web et du digital, nous avons b\xe2ti une excellente r\xe9putation sur chaque territoire o\xf9 nous op\xe9rons. Notre agence de d\xe9veloppement web propose une approche 360\xb0, orient\xe9e autour des besoins d'exp\xe9rience, de performance et de s\xe9curit\xe9 de notre client\xe8le."
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "about-inner-area",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "about-text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "Des experts digitaux d\xe9di\xe9s"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Nos petites \xe9quipes, interdisciplinaires et passionn\xe9es (consultants, designers, d\xe9veloppeurs, chefs de projet web), travaillent en \xe9troite collaboration avec nos Clients, pour trouver de nouvelles opportunit\xe9s de visibilit\xe9 et de croissance."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "about-text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: " Une communication fluide"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Notre approche collaborative favorise des relations de travail agr\xe9ables, une communication transparente, une utilisation efficace des ressources projets. Nos valeurs sont fond\xe9es sur l'\xe9coute, l'humilit\xe9, le partage."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "about-text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "Agence digitale de proximit\xe9"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Nous prenons le temps de comprendre votre entreprise afin de g\xe9n\xe9rer une r\xe9elle valeur ajout\xe9e. Nous sommes un partenaire de confiance, participant \xe0 des initiatives de marque, de marketing et de technologie pour vous aider \xe0 r\xe9ussir."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Common_FeedbackStyleFour, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const about_1 = (About1);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

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

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 4208:
/***/ ((module) => {

module.exports = require("react-owl-carousel3");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,802,538,5], () => (__webpack_exec__(1692)));
module.exports = __webpack_exports__;

})();