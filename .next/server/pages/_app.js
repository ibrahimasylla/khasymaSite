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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ \"react-feather\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GoTop = ({ scrollStepInPx , delayInMs  })=>{\n    const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        document.addEventListener(\"scroll\", ()=>{\n            if (window.scrollY > 170) {\n                setThePosition(true);\n            } else {\n                setThePosition(false);\n            }\n        });\n    }, []);\n    const onScrollStep = ()=>{\n        if (window.pageYOffset === 0) {\n            clearInterval(timeoutRef.current);\n        }\n        window.scroll(0, window.pageYOffset - scrollStepInPx);\n    };\n    const scrollToTop = ()=>{\n        timeoutRef.current = setInterval(onScrollStep, delayInMs);\n    };\n    const renderGoTopIcon = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: `go-top ${thePosition ? \"active\" : \"\"}`,\n            onClick: scrollToTop,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ArrowUp, {}, void 0, false, {\n                fileName: \"/Users/khalil/Desktop/kasyma/components/_App/GoTop.js\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/khalil/Desktop/kasyma/components/_App/GoTop.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: renderGoTopIcon()\n    }, void 0, false, {\n        fileName: \"/Users/khalil/Desktop/kasyma/components/_App/GoTop.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ1k7QUFFdEMsTUFBTUUsS0FBSyxHQUFHLENBQUMsRUFBQ0MsY0FBYyxHQUFFQyxTQUFTLEdBQUMsR0FBSztJQUUzQyxNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdOLHFEQUFjLENBQUMsS0FBSyxDQUFDO0lBQzNELE1BQU1RLFVBQVUsR0FBR1IsbURBQVksQ0FBQyxJQUFJLENBQUM7SUFFckNBLHNEQUFlLENBQUMsSUFBTTtRQUNsQlcsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBTTtZQUN0QyxJQUFJQyxNQUFNLENBQUNDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ3RCUixjQUFjLENBQUMsSUFBSSxDQUFDO2FBQ3ZCLE1BQU07Z0JBQ0hBLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtTQUNKLENBQUMsQ0FBQztLQUNOLEVBQUUsRUFBRSxDQUFDO0lBRU4sTUFBTVMsWUFBWSxHQUFHLElBQU07UUFDdkIsSUFBSUYsTUFBTSxDQUFDRyxXQUFXLEtBQUssQ0FBQyxFQUFDO1lBQ3pCQyxhQUFhLENBQUNULFVBQVUsQ0FBQ1UsT0FBTyxDQUFDLENBQUM7U0FDckM7UUFDREwsTUFBTSxDQUFDTSxNQUFNLENBQUMsQ0FBQyxFQUFFTixNQUFNLENBQUNHLFdBQVcsR0FBR2IsY0FBYyxDQUFDLENBQUM7S0FDekQ7SUFFRCxNQUFNaUIsV0FBVyxHQUFHLElBQU07UUFDdEJaLFVBQVUsQ0FBQ1UsT0FBTyxHQUFHRyxXQUFXLENBQUNOLFlBQVksRUFBRVgsU0FBUyxDQUFDLENBQUM7S0FDN0Q7SUFFRCxNQUFNa0IsZUFBZSxHQUFHLElBQU07UUFDMUIscUJBQ0ksOERBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFbkIsV0FBVyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUFFb0IsT0FBTyxFQUFFTCxXQUFXO3NCQUN6RSw0RUFBQ25CLGtEQUFZOzs7O3lCQUFHOzs7OztxQkFDZCxDQUNUO0tBQ0o7SUFFRCxxQkFDSSw4REFBQ0QsdURBQWM7a0JBQ1ZzQixlQUFlLEVBQUU7Ozs7O2lCQUNMLENBQ3BCO0NBQ0o7QUFFRCxpRUFBZXBCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2toYXN5bWEvLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanM/N2UzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICdyZWFjdC1mZWF0aGVyJztcblxuY29uc3QgR29Ub3AgPSAoe3Njcm9sbFN0ZXBJblB4LCBkZWxheUluTXN9KSA9PiB7XG5cbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBzY3JvbGxTdGVwSW5QeCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgZGVsYXlJbk1zKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdvLXRvcCAke3RoZVBvc2l0aW9uID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XG4gICAgICAgICAgICAgICAgPEljb24uQXJyb3dVcCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uIiwiR29Ub3AiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJ1c2VTdGF0ZSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJyZW5kZXJHb1RvcEljb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiQXJyb3dVcCIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_App/GoTop.js\n");

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoTop */ \"./components/_App/GoTop.js\");\n\n\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/khalil/Desktop/kasyma/components/_App/Layout.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/khalil/Desktop/kasyma/components/_App/Layout.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Khasyma & Agence digitale\"\n                    }, void 0, false, {\n                        fileName: \"/Users/khalil/Desktop/kasyma/components/_App/Layout.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/khalil/Desktop/kasyma/components/_App/Layout.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                scrollStepInPx: \"100\",\n                delayInMs: \"10.50\"\n            }, void 0, false, {\n                fileName: \"/Users/khalil/Desktop/kasyma/components/_App/Layout.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDRztBQUNEO0FBRTNCLE1BQU1HLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzdCLHFCQUNJOzswQkFDSSw4REFBQ0gsa0RBQUk7O2tDQUNELDhEQUFDSSxNQUFJO3dCQUFDQyxPQUFPLEVBQUMsT0FBTzs7Ozs7aUNBQUc7a0NBQ3hCLDhEQUFDRCxNQUFJO3dCQUFDRSxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7aUNBQUc7a0NBQ3RFLDhEQUFDQyxPQUFLO2tDQUFDLDJCQUF5Qjs7Ozs7aUNBQVE7Ozs7Ozt5QkFDckM7WUFFTkwsUUFBUTswQkFFVCw4REFBQ0YsOENBQUs7Z0JBQUNRLGNBQWMsRUFBQyxLQUFLO2dCQUFDQyxTQUFTLEVBQUMsT0FBTzs7Ozs7eUJBQUc7O29CQUVqRCxDQUNOO0NBQ0o7QUFFRCxpRUFBZVIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2toYXN5bWEvLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzPzBmOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgR29Ub3AgZnJvbSAnLi9Hb1RvcCdcbiBcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPktoYXN5bWEgJiBBZ2VuY2UgZGlnaXRhbGU8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJHb1RvcCIsIkxheW91dCIsImNoaWxkcmVuIiwibWV0YSIsImNoYXJTZXQiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIiwic2Nyb2xsU3RlcEluUHgiLCJkZWxheUluTXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/_App/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/css/boxicons.min.css */ \"./public/css/boxicons.min.css\");\n/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/css/flaticon.css */ \"./public/css/flaticon.css\");\n/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_css_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/css/slick.css */ \"./public/css/slick.css\");\n/* harmony import */ var _public_css_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/public/css/responsive.css */ \"./public/css/responsive.css\");\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_rtl_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/public/css/rtl.css */ \"./public/css/rtl.css\");\n/* harmony import */ var _public_css_rtl_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_rtl_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/_App/Layout */ \"./components/_App/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toast-notifications */ \"react-toast-notifications\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n// Multicolor if you want this color comment out \n// import '@/public/css/colors/brink-pink-style.css'\n// import '@/public/css/colors/pink-style.css'\n// import '@/public/css/colors/purple-style.css'  \n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_12__.ToastProvider, {\n        placement: \"bottom-left\",\n        autoDismissTimeout: 6000,\n        autoDismiss: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/khalil/Desktop/kasyma/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/khalil/Desktop/kasyma/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/khalil/Desktop/kasyma/pages/_app.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDbkI7QUFDa0I7QUFDSjtBQUNIO0FBQzJCO0FBQzNCO0FBQ0s7QUFDUDtBQUU3QixpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELDhDQUE4QztBQUM5QyxrREFBa0Q7QUFFTDtBQUNQO0FBQ21CO0FBRzFDLFNBQVNHLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBRWxELHFCQUNJLDhEQUFDSCxxRUFBYTtRQUNWSSxTQUFTLEVBQUcsYUFBYTtRQUN6QkMsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QkMsV0FBVzs7MEJBR1AsOERBQUNSLCtEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDSSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7Ozs7WUFFcEIsQ0FDbkI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2toYXN5bWEvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgJ2FuaW1hdGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvYm94aWNvbnMubWluLmNzcydcbmltcG9ydCAnQC9wdWJsaWMvY3NzL2ZsYXRpY29uLmNzcydcbmltcG9ydCBcIkAvcHVibGljL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3Mvc3R5bGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3MnXG5pbXBvcnQgJ0AvcHVibGljL2Nzcy9ydGwuY3NzJ1xuXG4vLyBNdWx0aWNvbG9yIGlmIHlvdSB3YW50IHRoaXMgY29sb3IgY29tbWVudCBvdXQgXG4vLyBpbXBvcnQgJ0AvcHVibGljL2Nzcy9jb2xvcnMvYnJpbmstcGluay1zdHlsZS5jc3MnXG4vLyBpbXBvcnQgJ0AvcHVibGljL2Nzcy9jb2xvcnMvcGluay1zdHlsZS5jc3MnXG4vLyBpbXBvcnQgJ0AvcHVibGljL2Nzcy9jb2xvcnMvcHVycGxlLXN0eWxlLmNzcycgIFxuXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9fQXBwL0xheW91dCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VG9hc3RQcm92aWRlciBcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IFwiYm90dG9tLWxlZnRcIlxuICAgICAgICAgICAgYXV0b0Rpc21pc3NUaW1lb3V0PXs2MDAwfVxuICAgICAgICAgICAgYXV0b0Rpc21pc3NcbiAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgPExheW91dCAvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgICAgICA8L1RvYXN0UHJvdmlkZXI+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlByb3ZpZGVyIiwiVG9hc3RQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBsYWNlbWVudCIsImF1dG9EaXNtaXNzVGltZW91dCIsImF1dG9EaXNtaXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./public/css/boxicons.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/rtl.css":
/*!****************************!*\
  !*** ./public/css/rtl.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/slick.css":
/*!******************************!*\
  !*** ./public/css/slick.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-feather");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toast-notifications");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();