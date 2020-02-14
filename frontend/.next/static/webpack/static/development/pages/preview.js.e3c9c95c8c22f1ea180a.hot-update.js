webpackHotUpdate("static/development/pages/preview.js",{

/***/ "./components/MatchedScripts.js":
/*!**************************************!*\
  !*** ./components/MatchedScripts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_legislators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/legislators */ "./lib/legislators.js");
/* harmony import */ var _lib_people__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/people */ "./lib/people.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/MatchedScripts.js";

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
  var data = _taggedTemplateLiteral(["\n  query SINGLE_SCRIPT_QUERY($id: String!) {\n    campaignScripts(where: { campaignID: $id }) {\n      id\n      title\n      scriptContent\n      targetCondition2\n      targetCondition3\n      targetCondition4\n      data\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var SINGLE_SCRIPT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var MatchedScripts =
/*#__PURE__*/
function (_Component) {
  _inherits(MatchedScripts, _Component);

  function MatchedScripts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MatchedScripts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MatchedScripts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      targetCandidates: _this.props.candidates
    });

    return _this;
  }

  _createClass(MatchedScripts, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_SCRIPT_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "Loading...");
        if (data.item) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "No Item Found for ID...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "Error: ", error.message);
        var houseMemberArray = [];
        var senateMemberArray = [];
        var legislatorHouseArray = [];
        var legislatorSenateArray = [];
        var candidateName = "";
        _lib_people__WEBPACK_IMPORTED_MODULE_4__["houseMembers"].map(function (hm) {
          var dis = hm.district;
          var st = hm.state;
          houseMemberArray.push(hm.label + ", " + st + "-" + dis);
        });
        _lib_people__WEBPACK_IMPORTED_MODULE_4__["senateMembers"].map(function (se) {
          var st = se.state;
          senateMemberArray.push(se.label + ", " + st);
        });
        _lib_legislators__WEBPACK_IMPORTED_MODULE_3__["legislators"].map(function (leg) {
          var arr = leg.terms;
          var recentterm = arr[arr.length - 1];

          if (recentterm.district == undefined) {
            legislatorSenateArray.push(leg.name.first + " " + leg.name.last + ", " + recentterm.state);
          } else {
            legislatorHouseArray.push(leg.name.first + " " + leg.name.last + ", " + recentterm.state + "-" + recentterm.district);
          }
        });
        var statedis = _this2.props.candState + "-" + _this2.props.candDistrict;
        houseMemberArray.map(function (hma) {
          var name = hma.split(", ");

          if (name[1] == statedis) {
            legislatorHouseArray.map(function (lha) {
              var legname = lha.split(", ");

              if (legname[1] == name[1]) {
                candidateName = name[0];
              }
            });
          }
        }); // Loops through all possible scripts

        return data.campaignScripts.map(function (cScript, i) {
          cScript.tally = +0;

          if (cScript.data[0]) {
            var arraycontainskeyword = cScript.data.indexOf(candidateName) > -1;

            if (arraycontainskeyword == true) {
              cScript.tally = +10;
            }
          }

          if (cScript.targetCondition3) {
            if (_this2.props.candParty === "Democratic Party") {
              if (cScript.targetCondition3 == "Democrat") {
                cScript.tally = +1;
              }
            } else {
              if (cScript.targetCondition3 == "Republican") {
                cScript.tally = +1;
              }
            }
          }

          if (cScript.targetCondition4) {
            if (_this2.props.candState) {
              if (_this2.props.candState == cScript.targetCondition4) {
                cScript.tally = +5;
              }
            }
          }

          if (cScript.targetCondition2) {
            _this2.state.targetCandidates.map(function (cand, i) {
              var scriptID = cand.id; // Loops through all legislators. Adds 10 to ranked score.

              _lib_legislators__WEBPACK_IMPORTED_MODULE_3__["legislators"].map(function (q) {
                if (q.id.bioguide === scriptID && cand.answer === cScript.targetCondition2) {} // cScript.tally = +3
                // if(q.id.bioguide === scriptID && cand.answer === data.campaignScripts.targetCondition2) {
                //   var fullname = q.name.first+" "+q.name.last;
                //   if(cScript.data) {
                //     cScript.data.map(n => {
                //       if(n == fullname) {
                //       }
                //     });
                //   }
                // }

              });
            });
          }

          console.log(cScript.tally);
          Math.max.apply(Math, data.campaignScripts.map(function (o) {
            return o.tally;
          }));

          if (cScript.tally == 10) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "repNameScript",
              key: i,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            }, cScript.title), cScript.data, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              },
              __self: this
            }), cScript.targetCondition2, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: this
            }), cScript.targetCondition3, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: this
            }), cScript.targetCondition4, cScript.tally, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "scriptContainer",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: cScript.scriptContent
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              },
              __self: this
            })));
          }
        });
      }));
    }
  }]);

  return MatchedScripts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MatchedScripts);

/***/ })

})
//# sourceMappingURL=preview.js.e3c9c95c8c22f1ea180a.hot-update.js.map