"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 5:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3823);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);




const NavbarStyleFive = ()=>{
    const [menu, setMenu] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const toggleNavbar = ()=>{
        setMenu(!menu);
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    });
    const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        id: "header",
        className: "headroom navbar-style-three",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "startp-nav",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: "navbar navbar-expand-md navbar-light",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: toggleNavbar,
                                className: "navbar-brand",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/khasyma.png",
                                    alt: "logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classOne,
                            id: "navbarSupportedContent",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "navbar-nav",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            href: "/",
                                            activeClassName: "active",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: toggleNavbar,
                                                className: "nav-link",
                                                children: "Accueil"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            href: "/about-1",
                                            activeClassName: "active",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: toggleNavbar,
                                                className: "nav-link",
                                                children: "\xc0 propos"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            href: "/services-5",
                                            activeClassName: "active",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                onClick: toggleNavbar,
                                                className: "nav-link",
                                                children: [
                                                    "services",
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            href: "/contact",
                                            activeClassName: "active",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: toggleNavbar,
                                                className: "nav-link",
                                                children: "Contact"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarStyleFive);


/***/ })

};
;