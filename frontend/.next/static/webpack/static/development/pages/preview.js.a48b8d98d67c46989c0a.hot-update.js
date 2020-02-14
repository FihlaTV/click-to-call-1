webpackHotUpdate("static/development/pages/preview.js",{

/***/ "./components/PreviewCampaignItem.js":
/*!*******************************************!*\
  !*** ./components/PreviewCampaignItem.js ***!
  \*******************************************/
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_MainStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/MainStyles */ "./components/styles/MainStyles.js");
/* harmony import */ var _MatchedScripts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MatchedScripts */ "./components/MatchedScripts.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/index.js");

var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/PreviewCampaignItem.js";

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
  var data = _taggedTemplateLiteral(["\n  query SINGLE_CAMPAIGN_ITEM_QUERY($id: ID!) {\n    campaignItem(where: { id: $id }) {\n      id\n      title\n      connectKey\n      customURL\n      targetType\n      dynamicScripts\n      generateURLAlias\n      expiration\n      callBody\n      defaultScript\n      targetCandidates\n      thankYouTitle\n      thankYouMessage\n      emailTitle\n      emailBody\n      facebookTitle\n      facebookURL\n      facebookBody\n      facebookImage\n      twitterTitle\n      twitterURL\n      twitterBody\n      twitterImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var SINGLE_CAMPAIGN_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var PreviewCampaignItem =
/*#__PURE__*/
function (_Component) {
  _inherits(PreviewCampaignItem, _Component);

  function PreviewCampaignItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PreviewCampaignItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PreviewCampaignItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: null,
      isLoaded: false,
      streetAddress: '',
      postalCode: '',
      officeItems: [],
      officialItems: [],
      divisionItems: [],
      candidateParty: '',
      candidateState: '',
      candidateDistrict: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));

      console.log(_this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "connectSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var data, res, fetchdata, dstr, dres;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                data = new FormData(e.target);
                _context.next = 4;
                return fetch("https://secure.mcommons.com/profiles/join", {
                  method: "POST",
                  body: data
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBZJiENz59YA6HdE9fbqdrAYPmayg9i61I&address=15801").then(function (res) {
                  return res.json();
                });

              case 7:
                fetchdata = _context.sent;
                console.log(fetchdata);

                if (fetchdata.officials[0]) {
                  dstr = fetchdata.offices[3].divisionId;
                  dres = dstr.split("/cd:");

                  _this.setState({
                    isLoaded: true,
                    officeItems: fetchdata.offices,
                    officialItems: fetchdata.officials[4].name,
                    divisionItems: fetchdata.divisions,
                    candidateParty: fetchdata.officials[4].party,
                    candidateState: fetchdata.normalizedInput.state,
                    candidateDistrict: dres[1]
                  });
                } else {
                  (function (error) {
                    _this.setState({
                      isLoaded: true,
                      error: error
                    });
                  });
                }

                _this.setState({
                  shouldHide: true
                });

                _this.setState({
                  shouldHide2: true
                });

                _this.setState({
                  shouldHide3: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function (e) {
      console.log(_this.props.id); // Router.push('/custom-url', { shallow: true })
    });

    return _this;
  }

  _createClass(PreviewCampaignItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
        query: SINGLE_CAMPAIGN_ITEM_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading,
            error = _ref2.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "Loading...");
        console.log(data.campaignItem);

        if (data.campaignItem.expiration === 'false') {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_MainStyles__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            className: "expired",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, "This campaign has expired."));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "frontEndPage",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_MainStyles__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, data.campaignItem.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            property: "og:site_name",
            content: "Indivisible",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            property: "og:type",
            content: "website",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            property: "og:title",
            content: "Indivisible",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            property: "og:url",
            content: "https://www.facebook.com/indivisibleguide/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            property: "og:description",
            content: data.campaignItem.facebookBody,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            property: "og:image",
            content: data.campaignItem.facebookImage,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            name: "twitter:card",
            content: "summary_large_image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            name: "twitter:site",
            content: "https://twitter.com/indivisibleteam",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            name: "twitter:url",
            content: "https://indivisible.org",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            name: "twitter:title",
            content: "Indivisible -" + data.campaignItem.title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            name: "twitter:description",
            content: data.campaignItem.twitterBody,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            name: "twitter:image",
            content: data.campaignItem.twitterImage,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: _this2.state.shouldHide ? "hidden frontEndHero" : "frontEndHero",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "heroLeft",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }, data.campaignItem.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: data.campaignItem.callBody
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "heroRight",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }, "Fill out this form to get started. Providing your street address helps us target your call."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            onSubmit: _this2.connectSubmit,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "hidden",
            name: "opt_in_path[]",
            value: "OP524334C35D99531FDB698DA8A9BBC181",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "hidden",
            name: "mconnect" // value="VO62798AD34DD5F773E028AD71DC139A9F"
            ,
            tabIndex: "-1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 230
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            // name="person[street1]"
            type: "text",
            onChange: _this2.handleChange,
            value: _this2.state.streetAddress,
            name: "streetAddress",
            required: true,
            placeholder: "Street Name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            // name="person[postal_code]"
            onChange: _this2.handleChange,
            value: _this2.state.postalCode,
            name: "postalCode",
            required: true,
            type: "text",
            placeholder: "ZIP",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            name: "person[phone]",
            type: "number",
            required: true,
            placeholder: "Mobile Number",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 254
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "submit",
            value: "Call Me",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 264
            },
            __self: this
          }, "By providing your cell phone number, you agree to receive calls and texts about important updates, ways to take action, and information about events in your area from Indivisible, approximately 3 to 5 times a month. Message& data rates may apply. Reply with STOP to quit receiving texts at any time."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: _this2.state.shouldHide2 ? "stepTwoSection" : "hidden stepTwoSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "inner",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          }, "Your Phone Will Be Ringing Shortly..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 302
            },
            __self: this
          }, "Please make sure you have your phone nearby, and that the volume is turned up."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MatchedScripts__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: _this2.props.id,
            candidates: data.campaignItem.targetCandidates,
            matchedCand: _this2.state.officialItems,
            candParty: _this2.state.candidateParty,
            candState: _this2.state.candidateState,
            candDistrict: _this2.state.candidateDistrict,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "repNameScript",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 318
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            },
            __self: this
          }, "DEFAULT SCRIPT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "scriptContainer",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: data.campaignItem.defaultScript
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 321
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "imDone",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "imDoneContainer",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 331
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            onClick: function onClick(e) {
              e.preventDefault();

              _this2.setState({
                shouldHide: true
              });

              _this2.setState({
                shouldHide2: false
              });

              _this2.setState({
                shouldHide3: true
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 332
            },
            __self: this
          }, "I'm Done!")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: _this2.state.shouldHide3 ? "stepThreeSection" : "hidden stepThreeSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 351
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "stepThreeContainer",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360
            },
            __self: this
          }, "THANK ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 361
            },
            __self: this
          }, "YOU!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: data.campaignItem.thankYouTitle
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: data.campaignItem.thankYouMessage
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            onClick: function onClick(e) {
              e.preventDefault();

              _this2.setState({
                shouldHide: false
              });

              _this2.setState({
                shouldHide2: false
              });

              _this2.setState({
                shouldHide3: false
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 378
            },
            __self: this
          }, "Call Again"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            onSubmit: function onSubmit(e) {
              return _this2.updateCampaignItem(e, updateCampaignItem);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 391
            },
            __self: this
          })));
        }
      });
    }
  }]);

  return PreviewCampaignItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PreviewCampaignItem);

/***/ })

})
//# sourceMappingURL=preview.js.a48b8d98d67c46989c0a.hot-update.js.map