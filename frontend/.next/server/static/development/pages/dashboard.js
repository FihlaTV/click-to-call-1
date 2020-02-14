module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Dashboard.js":
/*!*********************************!*\
  !*** ./components/Dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardItem */ "./components/DashboardItem.js");
/* harmony import */ var _DashboardItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardItems */ "./components/DashboardItems.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
/* harmony import */ var _styles_MainStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/MainStyles */ "./components/styles/MainStyles.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/Dashboard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Dashboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_MainStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "dashboardh1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "CLICK TO CALL LISTING"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "createnew",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Create New")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Admin Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Created By"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./components/DashboardItem.js":
/*!*************************************!*\
  !*** ./components/DashboardItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/DashboardItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DashboardItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashboardItem, _React$Component);

  function DashboardItem() {
    _classCallCheck(this, DashboardItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardItem).apply(this, arguments));
  }

  _createClass(DashboardItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item; // let itemurl;
      // if(item.customURL == null || item.customURL == '') {
      //     itemurl = item.id
      // } else {
      //     itemurl = item.customURL
      // }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/preview',
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, item.title))), item.expiration == 'true' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "onexp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "On") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "offexp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Off"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "admin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/update',
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "editbtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Edit "))));
    }
  }]);

  return DashboardItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardItem);

/***/ }),

/***/ "./components/DashboardItems.js":
/*!**************************************!*\
  !*** ./components/DashboardItems.js ***!
  \**************************************/
/*! exports provided: default, ALL_DASHBOARD_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_DASHBOARD_ITEMS_QUERY", function() { return ALL_DASHBOARD_ITEMS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DashboardItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardItem */ "./components/DashboardItem.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/DashboardItems.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_DASHBOARD_ITEMS_QUERY {\n    campaignItems {\n      id\n      title\n      expiration\n      customURL\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ALL_DASHBOARD_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var DashboardItems =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardItems, _Component);

  function DashboardItems() {
    _classCallCheck(this, DashboardItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardItems).apply(this, arguments));
  }

  _createClass(DashboardItems, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_DASHBOARD_ITEMS_QUERY,
        fetchPolicy: "network-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, data.campaignItems.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: item,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          });
        }));
      });
    }
  }]);

  return DashboardItems;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardItems);


/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-1mqvvxz-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), console.log(error), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/ScriptItem.js":
/*!**********************************!*\
  !*** ./components/ScriptItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/ScriptItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ScriptItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ScriptItem, _Component);

  function ScriptItem() {
    _classCallCheck(this, ScriptItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScriptItem).apply(this, arguments));
  }

  _createClass(ScriptItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "campaignScriptItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editCampaignScript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/updatescript',
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Edit"))));
    }
  }]);

  return ScriptItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ScriptItem);

/***/ }),

/***/ "./components/ScriptListing.js":
/*!*************************************!*\
  !*** ./components/ScriptListing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ScriptItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScriptItem */ "./components/ScriptItem.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/ScriptListing.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query CAMPAIGN_SCRIPT_ITEM_QUERY {\n    campaignScripts {\n      # campaignScripts(filter: $filter) {\n        id\n        campaignID\n        title\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var CAMPAIGN_SCRIPT_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var ScriptListing =
/*#__PURE__*/
function (_Component) {
  _inherits(ScriptListing, _Component);

  function ScriptListing() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScriptListing);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScriptListing)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      urlID: _this.props.props
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(ScriptListing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // How do we get the values for filter and origin?
      console.log(this.state.urlID);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.props.items;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
        query: CAMPAIGN_SCRIPT_ITEM_QUERY // variables={{campaignID: this.props.id}}
        ,
        fetchPolicy: "network-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "Loading...");
        if (data.item) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "No Item Found for ID...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "campaignScripts",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "Scripts"), data.campaignScripts.map(function (item) {
          if (item.campaignID == _this2.state.urlID) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScriptItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: item,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          });
        }));
      });
    }
  }]);

  return ScriptListing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ScriptListing);

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");

var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/Search.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SEARCH_ITEMS_QUERY($searchTerm: String!) {\n    campaignItems(where: { title_contains: $searchTerm }) {\n      id\n      title\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SEARCH_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

function routeToItem(item) {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
    pathname: '/item',
    query: {
      id: item.id
    }
  });
}

var AutoComplete =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AutoComplete, _React$Component);

  function AutoComplete() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AutoComplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      items: [],
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, client) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // turn loading on
                _this.setState({
                  loading: true
                }); // manually trigger apollo client


                _context.next = 3;
                return client.query({
                  query: SEARCH_ITEMS_QUERY,
                  variables: {
                    searchTerm: e.target.value
                  }
                });

              case 3:
                res = _context.sent;
                console.log(res);

                _this.setState({
                  items: res.data.campaignItems,
                  loading: false
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 350));

    return _this;
  }

  _createClass(AutoComplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            highlightedIndex = _ref2.highlightedIndex;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, function (client) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps({
            type: "search",
            placeholder: "Search",
            id: "search",
            className: _this2.state.loading ? 'loading' : '',
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }));
        }), isOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, _this2.state.items.map(function (item, index) {
          return console.log(item) // <DropDownItem
          //   {...getItemProps({item})}
          //   key={item.id}
          //   highlighted={index === highlightedIndex}
          // >
          //   {item.title}
          // </DropDownItem>
          ;
        })));
      }));
    }
  }]);

  return AutoComplete;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ }),

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/Signout.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation SIGN_OUT_MUTATION {\n        signout {\n            message\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var SignOutDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Signout__SignOutDiv",
  componentId: "sc-1rrfinh-0"
})(["display:block;margin:-50px auto 0;max-width:1000px;text-align:right;p{display:inline-block;}button{background:#2D4C6B;color:white;border:0;padding:5px 30px;font-size:16px;text-align:right;display:inline-block;margin:0 0 0 20px;}"]);

var Signout = function Signout() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__["CURRENT_USER_QUERY"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, function (signout) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignOutDiv, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, function (_ref) {
      var me = _ref.data.me;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, me.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: signout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Logout")));
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ }),

/***/ "./components/SingleItem.js":
/*!**********************************!*\
  !*** ./components/SingleItem.js ***!
  \**********************************/
/*! exports provided: default, CREATE_CAMPAIGN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CAMPAIGN_MUTATION", function() { return CREATE_CAMPAIGN_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ScriptListing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScriptListing */ "./components/ScriptListing.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tabs */ "./components/Tabs.js");
/* harmony import */ var _styles_MainStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/MainStyles */ "./components/styles/MainStyles.js");

var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/SingleItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_CAMPAIGN_MUTATION(\n    $title: String!\n    $connectKey: String!\n    $targetType: String!\n    $dynamicScripts: String!\n    $generateURLAlias: String!\n    $customURL: String!\n    $callBody: String!\n    $defaultScript: String!\n    $expiration: String!\n  ) {\n    createCampaignItem(\n      title: $title\n      connectKey: $connectKey\n      targetType: $targetType\n      dynamicScripts: $dynamicScripts\n      generateURLAlias: $generateURLAlias\n      customURL: $customURL\n      expiration: $expiration\n      callBody: $callBody\n      defaultScript: $defaultScript\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var CallYourRepContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SingleItem__CallYourRepContainer",
  componentId: "b4yy28-0"
})(["margin-bottom:100px;h2{border-bottom:3px solid gray;}.ck-content{height:200px;}"]);
var CREATE_CAMPAIGN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var CampaignItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CampaignItem, _Component);

  function CampaignItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CampaignItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CampaignItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      title: "",
      connectKey: "",
      targetType: "",
      dynamicScripts: "",
      generateURLAlias: false,
      customURL: "",
      callBody: "",
      defaultScript: "",
      expiration: false,
      isServer: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckboxChange", function (e) {
      console.log("checkbox changed!", e);

      _this.setState({
        generateURLAlias: e.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleButtonClick", function (e) {
      console.log("button was pressed!", e);

      _this.toggleIsChecked();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(CampaignItem, [{
    key: "toggleIsChecked",
    value: function toggleIsChecked() {
      console.log("toggling isChecked value!");
      this.setState({
        generateURLAlias: !this.state.generateURLAlias
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // SSR doesn't fire ComponentDidMount, so we import CKEditor inside of it and store it as a component prop
      this.CKEditor = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react");
      this.ClassicEditor = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic");
      this.setState({
        isServer: false
      }); // We just do this to toggle a re-render
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
        mutation: CREATE_CAMPAIGN_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, function (createCampaignItem, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_MainStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          id: "createCampaignItem",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return createCampaignItem();

                    case 3:
                      res = _context.sent;
                      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
                        pathname: "/dashboard"
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, "SET TARGETING"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "onoffswitchcontainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, "LIVE", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "onoffswitch",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          checked: _this2.state.expiration,
          onChange: _this2.handleCheckboxChange,
          type: "checkbox",
          name: "expiration",
          className: "onoffswitch-checkbox",
          id: "myonoffswitch",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "onoffswitch-label",
          htmlFor: "myonoffswitch",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "onoffswitch-inner",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "onoffswitch-switch",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "settargettitle",
          name: "title",
          placeholder: "CLICK TO CALL CAMPAIGN TITLE",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, "Lorem ipsum sit amet, consectur adispdising eli. Prion ultrices ex at mollis. Donec sed row nf."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "connectkey",
          name: "connectKey",
          placeholder: "Connect Key",
          required: true,
          value: _this2.state.connectKey,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "radiobtn-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, "Target Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "targetType",
          value: "US House",
          checked: _this2.state.targetType === "US House",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }), "US House"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "targetType",
          value: "US Senate",
          checked: _this2.state.targetType === "US Senate",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }), "US Senate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "targetType",
          value: "Other",
          checked: _this2.state.targetType === "Other",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }), "Other")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "radiobtn-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, "Dynamic Scripts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "dynamicScripts",
          value: "Yes",
          checked: _this2.state.dynamicScripts === "Yes",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }), "Yes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "dynamicScripts",
          value: "No",
          checked: _this2.state.dynamicScripts === "No",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }), "No")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "URLPathSettings",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, "URL Path Settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "checkbox",
          id: "generateURLAlias",
          name: "generateURLAlias",
          checked: _this2.state.generateURLAlias,
          onChange: _this2.handleCheckboxChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, "Generate automatic URL alias ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }), " Uncheck this to create a custom alias below")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, "URL alias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          onChange: _this2.handleChange,
          type: "text",
          id: "customURL",
          placeholder: "Custom URL",
          value: _this2.state.customURL,
          name: "customURL",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, "Optionally specify an alternative URL by which this content can be accessed. For example, type \"about\" when writing an about page. Use a relative path and don't add a trailing slash or the URL alias won't work.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallYourRepContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, "CALL YOUR REPRESENTATIVE"), _this2.CKEditor && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_this2.CKEditor, {
          name: "callbody",
          data: _this2.state.callBody,
          editor: _this2.ClassicEditor,
          onInit: function onInit(editor) {
            console.log(editor);
          },
          onChange: function onChange(event, editor) {
            var data = editor.getData();

            _this2.setState({
              callBody: data
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallYourRepContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, "Create Default Script Version"), _this2.CKEditor && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_this2.CKEditor, {
          name: "defaultScript",
          data: _this2.state.defaultScript,
          editor: _this2.ClassicEditor,
          onInit: function onInit(editor) {
            console.log(editor);
          },
          onChange: function onChange(event, editor) {
            var data = editor.getData();

            _this2.setState({
              defaultScript: data
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "upload-files",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }, "Save")))));
      });
    }
  }]);

  return CampaignItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignItem);


/***/ }),

/***/ "./components/Tab.js":
/*!***************************!*\
  !*** ./components/Tab.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/Tab.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Tab =
/*#__PURE__*/
function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      var _this$props = _this.props,
          label = _this$props.label,
          onClick = _this$props.onClick;
      onClick(label);
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var onClick = this.onClick,
          _this$props2 = this.props,
          activeTab = _this$props2.activeTab,
          label = _this$props2.label;
      var className = 'tab-list-item';

      if (activeTab === label) {
        className += ' tab-list-active';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: className,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, label);
    }
  }]);

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Tab, "propTypes", {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab */ "./components/Tab.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/Tabs.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickTabItem", function (tab) {
      _this.setState({
        activeTab: tab
      });
    });

    _this.state = {
      activeTab: _this.props.children[0].props.label
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var onClickTabItem = this.onClickTabItem,
          children = this.props.children,
          activeTab = this.state.activeTab;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        className: "tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, children.map(function (child) {
        var label = child.props.label;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
          activeTab: activeTab,
          key: label,
          label: label,
          onClick: onClickTabItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, children.map(function (child) {
        if (child.props.label !== activeTab) return undefined;
        return child.props.children;
      })));
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Tabs, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/User.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n      cart {\n        id\n        quantity\n        item {\n          id\n          title\n          price\n          image\n          description\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
}; // User.propTypes = {
//   children: propTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/*! exports provided: DropDown, DropDownItem, SearchStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStyles", function() { return SearchStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-1mj4thc-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-1mj4thc-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-1mj4thc-2"
})(["position:relative;input{width:100%;padding:10px;border-radius:20px;border:1px solid #111;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/MainStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/MainStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var MainStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "MainStyles",
  componentId: "oijvxs-0"
})(["@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap');h1,h2,h3,h4,h5,h6,p,a,li,label,button,input{font-family:'Montserrat',sans-serif;}a:hover,button:hover{cursor:pointer;}.hidden{display:none !important;}.expired{width:80%;margin:100px auto;font-size:50px;}#candidateSearch{width:100%;margin:0 0 -1px auto;border:1px solid #000;padding:10px;box-sizing:border-box;input{padding:5px 15px;font-size:16px;width:30%;border-radius:20px;}}#targetPeopleContainer{height:520px;overflow:scroll;border:0px solid black;}#createCampaignItem{max-width:1000px;margin:0 auto;display:block;h1{font-size:50px;margin:0;}}.resetList{float:right;}#createCampaignScriptItem{max-width:1000px;margin:0 auto;display:block;button[type=\"submit\"]{margin:100px 0 10px;font-size:20px;text-indent:10px;width:200px;border:0;color:white;background:#2D4C6B;padding:20px 0px;}}#settargettitle{width:65%;font-size:20px;padding:10px 0;text-indent:10px;}#connectkey{width:45%;font-size:20px;padding:10px 0;text-indent:10px;}#customURL{width:50%;font-size:20px;padding:10px 0;display:block;text-indent:10px;}.radiobtn-section{margin:50px 0;h3{margin:0;}label{margin-right:30px;}select{-webkit-appearance:none;width:100px;font-size:20px;margin-left:10px;background:white;border:none;font-weight:600;}}#generateURLAlias{-webkit-appearance:none;width:30px;height:30px;background:white;border:2px solid #ccc;display:inline-block;vertical-align:middle;margin-right:10px;}#generateURLAlias:checked{background:#333;}label p{display:inline-block;vertical-align:middle;}.URLPathSettings{label{display:block;}h2{margin:0;}}.upload-files{button{padding:10px 40px;background:#2D4C6B;display:block;width:300px;font-size:20px;text-align:center;color:white;margin-bottom:5px;margin-top:50px}}.onoffswitchcontainer{position:absolute;top:10px;right:10%;text-align:center;}.onoffswitch{position:relative;width:90px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}.onoffswitch-checkbox{display:none;}.onoffswitch-label{display:block;overflow:hidden;cursor:pointer;border:2px solid #999999;border-radius:20px;}.onoffswitch-inner{display:block;width:200%;margin-left:-100%;transition:margin 0.3s ease-in 0s;}.onoffswitch-inner:before,.onoffswitch-inner:after{display:block;float:left;width:50%;height:30px;padding:0;line-height:30px;font-size:14px;color:white;font-family:Trebuchet,Arial,sans-serif;font-weight:bold;box-sizing:border-box;}.onoffswitch-inner:before{content:\"ON\";padding-left:10px;background-color:#D56D6D;color:#FFFFFF;}.onoffswitch-inner:after{content:\"OFF\";padding-right:10px;background-color:#EEEEEE;color:#999999;text-align:right;}.onoffswitch-switch{display:block;width:22px;margin:6px;background:#FFFFFF;position:absolute;top:0;bottom:0;right:56px;border:2px solid #999999;border-radius:20px;transition:all 0.3s ease-in 0s;}.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner{margin-left:0;}.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch{right:0px;}.editbtn{background:#2D4C6B;color:white;padding:1px 0;width:90px;margin-right:10px;text-align:center;display:inline-block;}.dupbtn{background:#D56D6D;color:white;padding:1px 0;width:90px;text-align:center;display:inline-block;}td:last-child,th:last-child{border-right:none;border-left:none;width:auto !important;text-align:right;}td,th{border-right:0;border-bottom:2px solid #EDEDED;text-align:center;}a.createnew{color:#2D4C6B;font-size:1.2em;margin:20px auto;display:block;max-width:1000px;}.dashboardh1{margin:20px auto;display:block;max-width:1000px;}.onexp{color:green;}.offexp{color:red;}#searchTypeToggle{width:100%;box-sizing:border-box;background-color:white;box-shadow:0px 1px 2px 1px rgba(0,0,0,0.4);text-align:center;position:relative;border-radius:2px;label{float:left;width:calc(33.333% - 1px);position:relative;padding:20px 0px 40px;overflow:hidden;border-left:solid 1px rgba(0,0,0,0.2);transition:color 0.3s;cursor:pointer;-webkit-tap-highlight-color:rgba(255,255,255,0);input{position:absolute;top:-200%;}div{z-index:5;position:absolute;width:100%;}}label:first-child{border-left:none;}}#searchTypeToggle > div{color:white;padding-top:24px;display:block;position:absolute;top:-4px;left:-4px;bottom:-4px;width:calc(33.33% + 8px);background-color:rgba(50,150,100,1);border-radius:2px;box-shadow:0px 1px 2px 1px rgba(0,0,0,0.4);z-index:1;pointer-events:none;transition:transform 0.3s;}#searchTypeToggle::after{content:\"\";display:block;clear:both;}#searchTypeToggle label.selected{color:white;}#newVersionName{width:65%;font-size:20px;text-indent:10px;padding:10px 0px;}#thankYouTitle{width:100%;margin-bottom:10px;font-size:20px;text-indent:10px;padding:10px 0px;}.ck-content{height:200px;}.setTargetingCondition{textarea{width:100%;height:200px;}select{width:300px;background:white;padding:5px 0;text-indent:10px;font-size:14px;border:1px solid black;border-radius:0;-webkit-appearance:none;margin-bottom:10px;}.newConditionRow{select:last-child{}}}.tabs{border:solid #000;border-width:0px 1px 1px 1px;margin-top:50px;background:#eee;}#emailTitle,#facebookTitle,#twitterTitle{width:100%;font-size:20px;text-indent:10px;margin-bottom:10px;padding:10px 0px;}#emailBody{width:100%;font-size:20px;text-indent:10px;margin-bottom:10px;padding:10px 0px;}.tab-list{border-bottom:1px solid #fff;padding-left:0;margin:0;}.sharebody{padding:25px;}.tab-list-item{display:inline-block;list-style:none;margin-bottom:-1px;width:33.333%;background:#ccc;text-align:center;border:1px solid #111;padding:0.5rem 0.75rem;}.tab-list-active{background-color:#eee;border:solid #000;border-width:1px 0px 0 0px;}#facebookBody{margin-bottom:10px;font-size:20px;text-indent:10px;width:100%;display:inline-block;padding:10px 0px;}#facebookURL{margin-bottom:10px;font-size:20px;text-indent:10px;width:50%;margin-right:0%;display:inline-block;padding:10px 0px;}#facebookTitle{margin-bottom:10px;font-size:20px;text-indent:10px;width:47%;margin-right:3%;display:inline-block;padding:10px 0px;}#twitterTitle{margin-bottom:10px;font-size:20px;text-indent:10px;width:47%;margin-right:3%;display:inline-block;padding:10px 0px;}#twitterURL{margin-bottom:10px;font-size:20px;text-indent:10px;width:50%;margin-right:0%;display:inline-block;padding:10px 0px;}#twitterBody{margin-bottom:10px;font-size:20px;text-indent:10px;width:100%;margin-right:3%;display:inline-block;padding:10px 0px;}.frontEndPage{.frontEndHero{display:flex;.heroLeft{background:#2D4C6B;display:inline-block;vertical-align:middle;padding:50px;width:60%;h1,h2,h3,h4,h5,h6,p,a,li{color:white;}h2{font-size:36px;color:#fff;text-transform:uppercase;}}.heroRight{background:#6C9FC2;vertical-align:middle;display:inline-block;padding:20px 50px;width:40%;h3{color:white;text-align:center;line-height:125%;font-size:16px;}form{input[type=\"text\"]{margin-bottom:10px;font-size:20px;text-indent:10px;border:0;width:100%;margin-right:3%;display:inline-block;padding:10px 0px;}input[type=\"number\"]{margin-bottom:10px;font-size:20px;text-indent:10px;border:0;width:100%;margin-right:3%;display:inline-block;padding:10px 0px;}input[type=\"submit\"]{margin-bottom:10px;font-size:20px;text-indent:10px;width:100%;border:0;color:white;background:#2D4C6B;padding:20px 0px;}}h6{color:white;line-height:125%;}}}}.stepTwoSection{margin:100px 0;.inner{width:80%;margin:0 auto;display:block;.repNameScript{margin:50px 0;h1{margin:0;}.scriptContainer{background:#2D4C6B;color:white;padding:20px;}}h2{font-size:40px;margin-bottom:0;}}}.imDone{background:#D56D6D;text-align:center;padding:15px 0;margin:50px 0 0;position:fixed;bottom:0;width:100%;button{background:white;-webkit-appearance:none;border:none;color:#6C9FC2;border-radius:0;padding:10px 50px;font-size:18px;}a{color:white;margin-left:30px;text-decoration:underline;}}.stepThreeSection{background:#2D4C6B;color:white;padding:100px 0;.stepThreeContainer{margin:0 auto;width:80%;display:block;}h1{font-size:125px;text-align:center;margin:0;color:#6C9FC2;span{color:#D56D6D;}}h2{text-align:center;font-size:40px;}p{color:white;text-align:center;}button{background:#D56D6D;-webkit-appearance:none;border:none;color:#fff;border-radius:0;padding:20px 100px;font-size:18px;display:block;margin:50px auto 0;}}.campaignScripts{h2{border-bottom:3px solid #000;margin:0;}.campaignScriptItem{clear:both;border-bottom:2px solid #000;h3{display:inline-block;margin:0 0 0;vertical-align:text-top;}.editCampaignScript{float:right;margin:5px 0 0;text-align:center;a{background:#2D4C6B;color:white;padding:5px 50px;}h6{margin:0;font-weight:200;}}}}.addNewScript{font-size:20px;color:#6C9FC2;font-weight:600;margin:30px 0 30px;display:block;}.search-div{width:100%;margin:10rem auto 2rem auto;text-align:right;position:relative;.search-box{border:4px solid #08a1b6;border-radius:2px;font-size:2rem;width:100%;padding:1rem;transition:width 0.3s;}.search-btn{height:100%;width:4em;margin-top:-2em;position:absolute;top:50%;right:0.5rem;opacity:0.2;background-color:transparent;border:0;background-repeat:no-repeat;background-size:100%;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAACnElEQVR4AcXZsUsbYRjH8e+dh2s1SyAGJwMJuDj1BIcEhJQIOnTq5F+QOf0jIq79A7oFh7aYyVBEkaZDC3awECc1AUXRIqUQotfFocnjJe/dk+b9PKP65Md7z13ee3Uwk2SNHKmngs5TnbDLJQqjA+RYZ4OXuDzvkSYf+cAJ44fPAYFhHeAzVhlqBBGrRoax8KjSJYhRXap4KCVoECiqQQKFLC0CZbXIElOBOwJ9cUchzm2Y5QsveN4tdfY4o00HSDHHPKuUmOV5v/D5SSSJ0MXfIY+HBB55dkIvRIIIvJDR28dnFJ/9kHH0MFaVDehRxlSZnuxAFUMZunKQKBJFUQ4wXTIYqcmPZ5GoFmUEahjw5eJTJI6ivBD4jCS/csrEVZZfU4yQk5OPhrwjcoRygQ0GVdCQf73OUEfisaMkHk1HDJHkYeDX82jlBzo+kCSEyxruwDP/EK1DbsWnhHDFgNTpodWjLgY9NECKfnvoyS4p8wBngN5Z/ABtQK8dP0AH0OuYB5iMqfAAMque7HJtHmAOPdnlxjzAPHqyy5V5gFX0ZJfj8AAn9CvhoeVRol8zPMAuj/xrlhW0Vpg1D3ApflhGR3b4wTlDvI24i4u+w9y0uyVrM213U1qxuy2/Z8bui8m23VezgGW7L6cBLdIWXs9FBAsHFCLCJI9opFMKXEzkkEp/IbK0bEdI0LARQRzVWoigPKy+Z5tlWooIiuP6NhVmAEiPNwLkqHDEw5CGx2wyDQDRI8T7l80U19xwxTFNmpwzKM1nFsyeCw7jFymCAxYjrHDp8r9cUOCUYRZ4Bw6AxVV47QJYXIVXLliNsOSC1Qh/XLAa4ZuDmmIcH1l2AaytwhZfmaAkn/qOb7eYBofJekOJJX7znfccAvwFyB3OeNys7d4AAAAASUVORK5CYII=\");}.search-btn:hover{outline:none;opacity:0.4;cursor:pointer;}.search-btn:focus{outline:none;opacity:0.6;}}ul.options{display:block;list-style:none;width:30rem;transition:width 0.3s;margin:auto;position:relative;}ul.options li{display:block;background:white;margin:10px auto;padding:10px;font-size:1.2rem;width:100%;border-radius:2px;}ul.options li:hover{font-weight:bold;color:#00b4cc;cursor:pointer;transition:0.3s all;}ul.options li.option-active{background:whitesmoke;font-size:1.5rem;color:#00b4cc;}.no-options{color:white;}.breadcrumb{font-size:20px;color:#6C9FC2;display:block;margin:-45px auto 45px;width:200px;}.candidatePerson{margin-bottom:-2px;border:2px solid #000;padding:10px;p{margin:0 50px 0 0;width:350px;display:inline-block;vertical-align:middle;}}.switch-field{display:inline-flex;margin-bottom:7px;width:350px;overflow:hidden;input{position:absolute !important;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden;}label{background-color:#fff;color:rgba(0,0,0,0.6);font-size:14px;text-transform:capitalize;line-height:1;font-weight:600;text-align:center;padding:8px 16px;margin-right:-1px;border:1px solid rgba(0,0,0,0.2);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3),0 1px rgba(255,255,255,0.1);transition:all 0.1s ease-in-out;}label:hover{cursor:pointer;}input:checked + label{background-color:#EBE1D7;box-shadow:none;}input:checked + label.supportLabel{color:#427508;}input:checked + label.opposeLabel{color:#CA4747;}input:checked + label.otherLabel{color:#F9A345;}input:checked + label.noneLabel{color:#000;}label:first-of-type{border-radius:4px 0 0 4px;}label:last-of-type{border-radius:0 4px 4px 0;}}.tag{background-color:#f4f4f4;border:1px solid #e9e9e9;padding:2px 0 2px 2px;border-radius:2px;display:inline-block}.tag:focus-within{background-color:#e9e9e9;border-color:#a0a0a0}.tag-remove{color:#a0a0a0;font-size:75%;line-height:100%;cursor:pointer;background-color:transparent;border:none;outline:none}.tag-remove.disabled,.tag-remove.readOnly{cursor:not-allowed}.tag-remove:focus{color:#3c3c3c}.node>label{cursor:pointer;margin-left:2px}.tag-list{display:inline;padding:0;margin:0}.tag-item{display:inline-block;margin:4px}.tag-item .search{border:none;border-bottom:1px solid #ccc;outline:none}.tag-item:last-child{margin-right:4px}.node{list-style:none;white-space:nowrap;padding:4px}.node.leaf.collapsed{display:none}.node.disabled>*{color:gray;cursor:not-allowed}.node.match-in-children.hide .node-label{opacity:.5}.node.focused{background-color:#f4f4f4}.toggle{white-space:pre;margin-right:4px;cursor:pointer}.toggle:after{content:\" \"}.toggle.collapsed:after{content:\"+\"}.toggle.expanded:after{content:\"-\"}.searchModeOn .toggle{display:none}.checkbox-item,.radio-item{vertical-align:middle;margin:0 4px 0 0}.checkbox-item.simple-select,.radio-item.simple-select{display:none}.hide:not(.match-in-children){display:none}.react-dropdown-tree-select .dropdown{position:relative;display:table;width:100%;}.react-dropdown-tree-select .dropdown .dropdown-trigger{padding:4px;line-height:20px;min-height:200px;display:inline-block;overflow:auto;width:100%;border:1px solid #b9b9b9}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow{cursor:pointer}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.bottom:after{vertical-align:middle;color:#3c3c3c;margin-right:2px}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.top:after{vertical-align:middle;color:#3c3c3c;margin-right:2px}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.disabled{cursor:not-allowed}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.disabled.bottom:after{color:#b9b9b9}.react-dropdown-tree-select .dropdown .dropdown-content{position:absolute;padding:4px;z-index:1;background:#fff;border-top:1px solid rgba(0,0,0,.05);-webkit-box-shadow:0 5px 8px rgba(0,0,0,.15);box-shadow:0 5px 8px rgba(0,0,0,.15)}.react-dropdown-tree-select .dropdown .dropdown-content ul{margin:0;padding:0}"]);
/* harmony default export */ __webpack_exports__["default"] = (MainStyles);

/***/ }),

/***/ "./components/styles/Table.js":
/*!************************************!*\
  !*** ./components/styles/Table.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table.withConfig({
  displayName: "Table",
  componentId: "wbxe1g-0"
})(["max-width:1000px;margin:0 auto;border-spacing:0;width:100%;border:1px solid ", ";thead{font-size:10px;}td,th{border-bottom:1px solid ", ";border-right:1px solid ", ";padding:5px;position:relative;&:last-child{border-right:none;width:150px;button{width:100%;}}label{padding:10px 5px;display:block;text-align:center}}tr{&:hover{background:", ";}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 4;

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SingleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SingleItem */ "./components/SingleItem.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard */ "./components/Dashboard.js");
/* harmony import */ var _components_Signout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Signout */ "./components/Signout.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/pages/dashboard.js";





var DashboardPage = function DashboardPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Signout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardPage);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@ckeditor/ckeditor5-build-classic":
/*!****************************************************!*\
  !*** external "@ckeditor/ckeditor5-build-classic" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "@ckeditor/ckeditor5-react":
/*!********************************************!*\
  !*** external "@ckeditor/ckeditor5-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-react");

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map