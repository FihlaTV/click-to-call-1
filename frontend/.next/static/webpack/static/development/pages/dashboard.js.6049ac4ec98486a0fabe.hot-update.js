webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/SingleItem.js":
/*!**********************************!*\
  !*** ./components/SingleItem.js ***!
  \**********************************/
/*! exports provided: default, CREATE_CAMPAIGN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CAMPAIGN_MUTATION", function() { return CREATE_CAMPAIGN_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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












var CallYourRepContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
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
      this.CKEditor = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
      this.ClassicEditor = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
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
        }), "No")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallYourRepContainer, {
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


/***/ })

})
//# sourceMappingURL=dashboard.js.6049ac4ec98486a0fabe.hot-update.js.map