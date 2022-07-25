"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 5770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(3538);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
;// CONCATENATED MODULE: ./components/Contact/ContactInfo.js



const ContactInfo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "contact-info-area ptb-80",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row justify-content-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-info-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Mail, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "E-Mail "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:admin@startp.com",
                                        children: "info@khasyma.com"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-info-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.MapPin, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Address "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Montreal"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-info-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Phone, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Appelez ici"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:+16134156925",
                                            children: "+1 613 415 6925"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:+16134156925",
                                            children: "+ 873-688-2318"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Contact_ContactInfo = (ContactInfo);

// EXTERNAL MODULE: ./components/_App/NavbarStyleFive.js
var NavbarStyleFive = __webpack_require__(5);
;// CONCATENATED MODULE: ./components/Contact/GoogleMap.js


const GoogleMap = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.183613366869!2d-73.99830468463497!3d40.71397427933168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a263f3910db%3A0xd6e6cdf32a6b11b1!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1614260467637!5m2!1sen!2sbd",
            width: "100%",
            height: "450",
            allowFullScreen: "",
            loading: "lazy"
        })
    });
};
/* harmony default export */ const Contact_GoogleMap = ((/* unused pure expression or super */ null && (GoogleMap)));

;// CONCATENATED MODULE: external "react-hook-form"
const external_react_hook_form_namespaceObject = require("react-hook-form");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: external "sweetalert2-react-content"
const external_sweetalert2_react_content_namespaceObject = require("sweetalert2-react-content");
var external_sweetalert2_react_content_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_react_content_namespaceObject);
;// CONCATENATED MODULE: ./utils/baseUrl.js
const baseUrl =  true ? "https://startp-react.envytheme.com" : 0;
/* harmony default export */ const utils_baseUrl = (baseUrl);

;// CONCATENATED MODULE: ./components/Contact/ContactForm.js







const MySwal = external_sweetalert2_react_content_default()((external_sweetalert2_default()));

const alertContent = ()=>{
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });
};
// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};
const ContactForm = ()=>{
    const { 0: contact , 1: setContact  } = (0,external_react_.useState)(INITIAL_STATE);
    const { register , handleSubmit , errors  } = (0,external_react_hook_form_namespaceObject.useForm)();
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setContact((prevState)=>({
                ...prevState,
                [name]: value
            }));
        console.log(contact);
    };
    const onSubmit = async (e)=>{
        // e.preventDefault();
        try {
            const url = `${utils_baseUrl}/api/contact`;
            const { name , email , number , subject , text  } = contact;
            const payload = {
                name,
                email,
                number,
                subject,
                text
            };
            await external_axios_default().post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "contact-area ptb-80",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Prenez contact avec nous"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bar"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Nous serons heureux de vous aider !"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                                alt: "image"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                className: "contact-form",
                                onSubmit: handleSubmit(onSubmit),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-12 col-md-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        name: "Name",
                                                        placeholder: "Votre Nom",
                                                        className: "form-control",
                                                        value: contact.name,
                                                        onChange: handleChange,
                                                        ref: register({
                                                            required: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: errors.name && "Nom est Obligatoire."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-12 col-md-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        name: "email",
                                                        placeholder: "Votre email ",
                                                        className: "form-control",
                                                        value: contact.email,
                                                        onChange: handleChange,
                                                        ref: register({
                                                            required: true,
                                                            pattern: /^\S+@\S+$/i
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: errors.email && "Email is required."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        name: "number",
                                                        placeholder: "Votre Numero",
                                                        className: "form-control",
                                                        value: contact.number,
                                                        onChange: handleChange,
                                                        ref: register({
                                                            required: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: errors.number && "Number is required."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        name: "subject",
                                                        placeholder: "Sujet ",
                                                        className: "form-control",
                                                        value: contact.subject,
                                                        onChange: handleChange,
                                                        ref: register({
                                                            required: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: errors.subject && "Sujet est Obligatoire."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-12 col-md-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                        name: "text",
                                                        cols: "30",
                                                        rows: "5",
                                                        placeholder: "Message...",
                                                        className: "form-control",
                                                        value: contact.text,
                                                        onChange: handleChange,
                                                        ref: register({
                                                            required: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: errors.text && "Message est Obligatoire."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-12 col-sm-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "btn btn-primary",
                                                children: "Envoyer"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Contact_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./pages/contact.js








const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavbarStyleFive/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(PageBanner/* default */.Z, {
                pageTitle: "Contact"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact_ContactInfo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact_ContactForm, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const contact = (Contact);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,802,538,5], () => (__webpack_exec__(5770)));
module.exports = __webpack_exports__;

})();