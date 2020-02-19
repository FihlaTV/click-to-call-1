webpackHotUpdate("static/development/pages/update.js",{

/***/ "./components/SearchCandidates.js":
/*!****************************************!*\
  !*** ./components/SearchCandidates.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/SearchCandidates.js";

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



var SearchCandidates =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchCandidates, _React$Component);

  function SearchCandidates(props) {
    var _this;

    _classCallCheck(this, SearchCandidates);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchCandidates).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      initialItems: [],
      items: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterList", function (event) {
      var items = _this.state.data;
      items = items.filter(function (item) {
        return item.name.official_full.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });

      _this.setState({
        data: items
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetList", function (event) {
      event.preventDefault();

      _this.setState({
        data: _this.props.data
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillMount", function () {});

    _this.setState({
      initialItems: _this.props.content,
      items: _this.props.content,
      data: _this.props.data
    });

    return _this;
  }

  _createClass(SearchCandidates, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Search",
        onChange: this.filterList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.resetList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "RESET"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.state.data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item.id.bioguide,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, item.name.official_full);
      })));
    }
  }]);

  return SearchCandidates;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (SearchCandidates);

/***/ })

})
//# sourceMappingURL=update.js.fd09b740b781554182fa.hot-update.js.map