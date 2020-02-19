webpackHotUpdate("static/development/pages/updatescript.js",{

/***/ "./components/UpdateScript.js":
/*!************************************!*\
  !*** ./components/UpdateScript.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _DynamicSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DynamicSelect */ "./components/DynamicSelect.js");
/* harmony import */ var _lib_people__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/people */ "./lib/people.js");

var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/UpdateScript.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_SCRIPT_MUTATION(\n    $id: ID!\n    $title: String\n    $scriptContent: String\n    $campaignID: String\n    $data: Json\n    $targetCondition2: String\n    $targetCondition3: String\n    $targetCondition4: String\n  ) {\n    updateCampaignScript(\n      id: $id\n      title: $title\n      scriptContent: $scriptContent\n      campaignID: $campaignID\n      data: $data\n      targetCondition2: $targetCondition2\n      targetCondition3: $targetCondition3\n      targetCondition4: $targetCondition4\n    ) {\n      id\n      title\n      scriptContent\n      campaignID\n      data\n      targetCondition2\n      targetCondition3\n      targetCondition4\n\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_SCRIPT_QUERY($id: ID!) {\n    campaignScript(where: { id: $id }) {\n      id\n      title\n      scriptContent\n      campaignID\n      data\n      targetCondition2\n      targetCondition3\n      targetCondition4\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SINGLE_SCRIPT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var UPDATE_SCRIPT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

var UpdateScript =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateScript, _Component);

  function UpdateScript() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateScript);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateScript)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropdownChange", function (currentNode, selectedNodes) {
      var targetCondish = [];
      targetCondish.push(currentNode.label);

      if (selectedNodes) {
        selectedNodes.map(function (selectedItems) {
          targetCondish.push(selectedItems.label); // console.log(targetCondish);
        });
        targetCondish.shift();
      }

      _this.setState({
        data: targetCondish
      });

      console.log(_this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectChange", function (e) {
      var _e$target2 = e.target,
          name = _e$target2.name,
          value = _e$target2.value;

      _this.setState(_defineProperty({}, name, value));

      console.log(_defineProperty({}, name, value));
    });

    return _this;
  }

  _createClass(UpdateScript, [{
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
        query: SINGLE_SCRIPT_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "Loading...");
        if (data.item) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "No Item Found for ID...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "Error: ", error.message);
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
          mutation: UPDATE_SCRIPT_MUTATION,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, function (updateCampaignScript, _ref2) {
          var error = _ref2.error,
              loading = _ref2.loading;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "createCampaignScriptItem",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/update?id=" + data.campaignScript.campaignID,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, "Back to Campaign Page")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          }, "Update Script"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                var res;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return updateCampaignScript({
                          variables: _objectSpread({
                            id: _this2.props.id
                          }, _this2.state)
                        });

                      case 3:
                        res = _context.sent;
                        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
                          pathname: '/update',
                          query: {
                            id: data.campaignScript.campaignID
                          }
                        });

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, "Update Script Version"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "newVersionName",
            name: "title",
            required: true,
            placeholder: "Version Name",
            defaultValue: data.campaignScript.title,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "setTargetingCondition",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, "Set Targeting Condition"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DynamicSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
            defaultValue: data.campaignScript.data,
            data: _lib_people__WEBPACK_IMPORTED_MODULE_8__["houseMembers"],
            onChange: _this2.onDropdownChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "addNewCondition",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, "OR"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "newConditionRow",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            name: "targetCondition2",
            onChange: _this2.handleSelectChange,
            defaultValue: data.campaignScript.targetCondition2,
            value: _this2.state.targetCondition2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, "Support/Oppose"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "support",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, "Support"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "oppose",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, "Oppose"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "neither",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, "Neither")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "addNewCondition",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, "AND")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "newConditionRow",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            name: "targetCondition3",
            onChange: _this2.handleSelectChange,
            defaultValue: data.campaignScript.targetCondition3,
            value: _this2.state.targetCondition3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }, "Party"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "Republican",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }, "Republican"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "Democrat",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            },
            __self: this
          }, "Democrat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "Independent",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }, "Independent")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "addNewCondition",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, "AND")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "newConditionRow",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            name: "targetCondition4",
            onChange: _this2.handleSelectChange,
            defaultValue: data.campaignScript.targetCondition4,
            value: _this2.state.targetCondition4,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }, "State"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "AL",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          }, "Alabama - AL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "AK",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 214
            },
            __self: this
          }, "Alaska - AK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "AZ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          }, "Arizona - AZ"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "AR",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }, "Arkansas - AR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "CA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, "California - CA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "CO",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }, "Colorado - CO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "CT",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }, "Connecticut - CT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "DE",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }, "Delaware - DE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "FL",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, "Florida - FL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "GA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }, "Georgia - GA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "HI",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, "Hawaii - HI"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "ID",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, "Idaho - ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "IL",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, "Illinois - IL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "IN",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, "Indiana - IN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "IA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, "Iowa - IA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "KS",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            },
            __self: this
          }, "Kansas - KS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "KY",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, "Kentucky - KY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "LA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 230
            },
            __self: this
          }, "Louisiana - LA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "ME",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }, "Maine - ME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "MD",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, "Maryland - MD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "MA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, "Massachusetts - MA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "MI",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          }, "Michigan - MI"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "MN",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            },
            __self: this
          }, "Minnesota - MN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "MS",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          }, "Mississippi - MS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "MO",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            },
            __self: this
          }, "Missouri - MO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "MT",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 238
            },
            __self: this
          }, "Montana - MT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "NE",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          }, "Nebraska - NE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "NV",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 240
            },
            __self: this
          }, "Nevada - NV"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "NH",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241
            },
            __self: this
          }, "New Hampshire - NH"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "NJ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 242
            },
            __self: this
          }, "New Jersey - NJ"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "NM",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            },
            __self: this
          }, "New Mexico - NM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "NY",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 244
            },
            __self: this
          }, "New York - NY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "NC",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }, "North Carolina - NC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "OH",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 246
            },
            __self: this
          }, "Ohio - OH"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "OK",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247
            },
            __self: this
          }, "Oklahoma - OK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "OR",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 248
            },
            __self: this
          }, "Oregon - OR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "PA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            },
            __self: this
          }, "Pennsylvania - PA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "RI",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            },
            __self: this
          }, "Rhode Island - RI"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "SC",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            },
            __self: this
          }, "South Carolina - SC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "SD",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 252
            },
            __self: this
          }, "South Dakota - SD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "TN",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            },
            __self: this
          }, "Tennessee - TN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "TX",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 254
            },
            __self: this
          }, "Texas - TX"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "UT",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            },
            __self: this
          }, "Utah - UT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "VT",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            },
            __self: this
          }, "Vermont - VT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "VA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          }, "Virginia - VA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "WA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          }, "Washington - WA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "WV",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
            },
            __self: this
          }, "West Virginia - WV"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "WI",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          }, "Wisconsin - WI"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "WY",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 261
            },
            __self: this
          }, "Wyoming - WY"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }, "Script Content"), _this2.CKEditor && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_this2.CKEditor, {
            name: "scriptContent",
            data: data.campaignScript.scriptContent,
            editor: _this2.ClassicEditor,
            onInit: function onInit(editor) {
              console.log(editor);
            },
            onChange: function onChange(event, editor) {
              var data = editor.getData();

              _this2.setState({
                scriptContent: data
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          }, "Save")));
        });
      });
    }
  }]);

  return UpdateScript;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateScript);

/***/ })

})
//# sourceMappingURL=updatescript.js.0f58fb201e8670472131.hot-update.js.map