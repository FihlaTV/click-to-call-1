webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signin */ "./components/Signin.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dashboard */ "./components/Dashboard.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
/* harmony import */ var _Permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Permissions */ "./components/Permissions.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/PleaseSignIn.js";









var PleaseSignIn = function PleaseSignIn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "pleaseLogIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "CLICK TO CALL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PleaseSignIn);

/***/ })

})
//# sourceMappingURL=index.js.61510a5c46271b2cf66d.hot-update.js.map