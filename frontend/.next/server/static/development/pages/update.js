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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/MainLogo.js":
/*!********************************!*\
  !*** ./components/MainLogo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/MainLogo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MainLogo =
/*#__PURE__*/
function (_Component) {
  _inherits(MainLogo, _Component);

  function MainLogo() {
    _classCallCheck(this, MainLogo);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainLogo).apply(this, arguments));
  }

  _createClass(MainLogo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        id: "mainLogo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/mainlogo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      })));
    }
  }]);

  return MainLogo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainLogo);

/***/ }),

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/Question.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Question =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Question).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterList", function (event) {
      event.preventDefault();
      var items = _this.state.initNames;
      items = items.filter(function (item) {
        var fname = item.name.official_full;
        var dis = item.terms[0].state;
        var party = item.terms[0].party;

        if (fname.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
          return item;
        } else if (dis.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
          return item;
        } else if (party.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
          return item;
        }
      });

      _this.setState({
        names: items
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectChange", function (event) {
      var value = event.target.value;

      _this.setState({
        executeStatus: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "executeTasks", function (event) {
      var questionChoices = _this.props.questionChoices;
      var names = _this.state.names;
      var stateanswers = _this.state.answers;
      var option = _this.state.executeStatus;
      var newstateanswers = [];
      var qcs = [];
      var answers = []; // Loops through search results

      names.map(function (name) {
        // Assigns action to candidates
        name.answer = option;
        var id = name.id.bioguide;
        var answer = {
          id: id,
          answer: name.answer
        };
        answers.push(answer);
      });

      if (stateanswers) {
        // Update existing candidates with new answers
        stateanswers.map(function (sans) {
          var sansID = sans.id;
          answers.map(function (ans) {
            if (sansID === ans.id) {
              sans.answer = ans.answer; // answers.shift();
            }
          });
          newstateanswers.push(sans);
        });

        _this.setState({
          answers: newstateanswers
        }, function () {
          return console.log(_this.state.answers);
        });
      } else {
        _this.setState({
          answers: answers
        }, function () {
          return console.log(_this.state.answers);
        });
      } // var c = newstateanswers.concat(answers);
      // console.log(stateanswers);
      // console.log(answers);
      // console.log(c);
      // var c = newstateanswers.concat(answers);
      // console.log(c);
      // this.setState({answers: []}, () => console.log(this.state.answers));

    });

    var targetType = [];

    _this.props.questionChoices.map(function (tt) {
      if (tt.terms[0].type == "rep" && props.targetType == "US House") {
        targetType.push(tt);
      } else if (tt.terms[0].type == "sen" && props.targetType == "US Senate") {
        targetType.push(tt);
      }
    });

    _this.state = {
      answers: props.data,
      initNames: targetType,
      names: targetType,
      targetTypes: props.targetType
    };
    console.log(_this.state);
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.buildRadioButtons = _this.buildRadioButtons.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Question, [{
    key: "onInput",
    // Update answer state to include new candidates
    // resetList = (event) => {
    //   event.preventDefault();
    //   this.setState({names: this.props.questionChoices});
    //   console.log(this.state.names);
    // }
    value: function onInput(e, props) {
      var _this2 = this;

      e.preventDefault();
      var id = e.target.name;
      var answer = {
        id: id,
        answer: e.target.value
      };
      var answers;

      if (this.state.answers) {
        if (this.state.answers.some(function (answer) {
          return answer.id === id;
        })) {
          answers = _toConsumableArray(this.state.answers.filter(function (answer) {
            return answer.id !== id;
          })).concat([answer]);
        } else {
          answers = _toConsumableArray(this.state.answers).concat([answer]);
        }
      } else {
        answers = [answer];
      }

      this.setState({
        answers: answers
      }, function () {
        return console.log(_this2.state.answers);
      });
    }
  }, {
    key: "buildRadioButtons",
    value: function buildRadioButtons(arr, type, id, checked) {
      var _this3 = this;

      return arr.map(function (choice, i) {
        // console.log(choice);
        // console.log(checked);
        if (choice == checked) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: checked + " trueee",
            onChange: _this3.onInput,
            onClick: _this3.onInput,
            type: "radio",
            id: choice + "-" + id,
            name: id,
            checked: true,
            value: choice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: choice + "-" + id,
            className: choice + "Label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, choice));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: checked + " falseee",
            onChange: _this3.onInput,
            onClick: _this3.onInput,
            type: "radio",
            id: choice + "-" + id,
            name: id,
            checked: false,
            value: choice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: choice + "-" + id,
            className: choice + "Label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }, choice));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var iterator = this.state.names.map(function (question, i) {
        var choices = ["support", "oppose", "other", "none"];
        var questionType = "radio";
        var questionText;

        if (question.terms[0].type === "sen") {
          questionText = question.name.official_full + " - " + question.terms[0].party + " - " + question.terms[0].state;
        } else {
          questionText = question.name.official_full + " - " + question.terms[0].party + " - " + question.terms[0].state + "-" + question.terms[0].district;
        }

        var questionID = question.id.bioguide;

        if (_this4.state.answers && _this4.state.names) {
          _this4.state.answers.map(function (item) {
            if (item.id == questionID && choices.includes(item.answer)) {
              question.answer = item.answer;
            }
          });
        } else {
          question.answer = '';
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "candidatePerson",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, questionText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "switch-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, _this4.buildRadioButtons(choices, questionType, questionID, question.answer)));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "candidateSearch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Filter: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "candidateSearch",
        type: "text",
        placeholder: "Search",
        onChange: this.filterList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "executeTasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Execute: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.handleSelectChange,
        value: this.state.candidateStance,
        name: "candidateStance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Choose an Option"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "oppose",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Oppose"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "other",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Other"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "None")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.executeTasks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Execute"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "targetPeopleContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, iterator));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Question);

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

/***/ "./components/SearchCandidates.js":
/*!****************************************!*\
  !*** ./components/SearchCandidates.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

  function SearchCandidates() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchCandidates);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchCandidates)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillMount", function () {
      _this.setState({
        initialItems: _this.props.content,
        items: _this.props.content,
        data: _this.props.data
      });
    });

    return _this;
  }

  _createClass(SearchCandidates, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Search",
        onChange: this.filterList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.resetList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "RESET"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item.id.bioguide,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
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

/***/ "./components/UpdateCampaignItem.js":
/*!******************************************!*\
  !*** ./components/UpdateCampaignItem.js ***!
  \******************************************/
/*! exports provided: default, UPDATE_CAMPAIGN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CAMPAIGN_MUTATION", function() { return UPDATE_CAMPAIGN_MUTATION; });
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
/* harmony import */ var _SearchCandidates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchCandidates */ "./components/SearchCandidates.js");
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Question */ "./components/Question.js");
/* harmony import */ var _styles_MainStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/MainStyles */ "./components/styles/MainStyles.js");
/* harmony import */ var _ScriptItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ScriptItem */ "./components/ScriptItem.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Tabs */ "./components/Tabs.js");
/* harmony import */ var _MainLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MainLogo */ "./components/MainLogo.js");
/* harmony import */ var _lib_questions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/questions */ "./lib/questions.js");
/* harmony import */ var _lib_legislators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/legislators */ "./lib/legislators.js");

var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/components/UpdateCampaignItem.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_CAMPAIGN_MUTATION(\n    $id: ID!\n    $title: String\n    $connectKey: String\n    $targetType: String\n    $dynamicScripts: String\n    $generateURLAlias: String\n    $customURL: String\n    $expiration: String\n    $callBody: String\n    $defaultScript: String\n    $targetCandidates: Json\n    $thankYouTitle: String\n    $thankYouMessage: String\n    $emailTitle: String\n    $emailBody: String\n    $facebookTitle: String\n    $facebookURL: String\n    $facebookBody: String\n    $facebookImage: String\n    $twitterTitle: String\n    $twitterURL: String\n    $twitterBody: String\n    $twitterImage: String\n  ) {\n    updateCampaignItem(\n      id: $id\n      title: $title\n      connectKey: $connectKey\n      targetType: $targetType\n      dynamicScripts: $dynamicScripts\n      generateURLAlias: $generateURLAlias\n      customURL: $customURL\n      expiration: $expiration\n      callBody: $callBody\n      defaultScript: $defaultScript\n      targetCandidates: $targetCandidates\n      thankYouTitle: $thankYouTitle\n      thankYouMessage: $thankYouMessage\n      emailTitle: $emailTitle\n      emailBody: $emailBody\n      facebookTitle: $facebookTitle\n      facebookURL: $facebookURL\n      facebookBody: $facebookBody\n      facebookImage: $facebookImage\n      twitterTitle: $twitterTitle\n      twitterURL: $twitterURL\n      twitterBody: $twitterBody\n      twitterImage: $twitterImage\n    ) {\n      id\n      title\n      connectKey\n      targetType\n      dynamicScripts\n      generateURLAlias\n      customURL\n      expiration\n      callBody\n      defaultScript\n      targetCandidates\n      thankYouTitle\n      thankYouMessage\n      emailTitle\n      emailBody\n      facebookTitle\n      facebookURL\n      facebookBody\n      facebookImage\n      twitterTitle\n      twitterURL\n      twitterBody\n      twitterImage\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_CAMPAIGN_ITEM_QUERY($id: ID!) {\n    campaignItem(where: { id: $id }) {\n      id\n      title\n      connectKey\n      customURL\n      targetType\n      dynamicScripts\n      generateURLAlias\n      expiration\n      callBody\n      defaultScript\n      targetCandidates\n      thankYouTitle\n      thankYouMessage\n      emailTitle\n      emailBody\n      facebookTitle\n      facebookURL\n      facebookBody\n      facebookImage\n      twitterTitle\n      twitterURL\n      twitterBody\n      twitterImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


















var CallYourRepContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "UpdateCampaignItem__CallYourRepContainer",
  componentId: "d3rw6-0"
})(["margin:100px 0;h2{border-bottom:3px solid gray;}.ck-content{height:200px;}"]);
var SINGLE_CAMPAIGN_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var UPDATE_CAMPAIGN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

var UpdateCampaignItem =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateCampaignItem, _Component);

  function UpdateCampaignItem(props) {
    var _this;

    _classCallCheck(this, UpdateCampaignItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdateCampaignItem).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      candidatePerspective: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckboxChange", function (e) {
      _this.setState({
        generateURLAlias: e.target.checked
      });

      console.log(_this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleExpChange", function (e) {
      _this.setState({
        expiration: e.target.checked
      });

      console.log(_this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleButtonClick", function (e) {
      console.log("button was pressed!", e);

      _this.toggleIsChecked();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFacebookFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data, res, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("uploading file...");
                files = e.target.files;
                data = new FormData();
                data.append("file", files[0]);
                data.append("upload_preset", "sickfits");
                _context.next = 7;
                return fetch("https://api.cloudinary.com/v1_1/du1f0pd1d/image/upload", {
                  method: "POST",
                  body: data
                });

              case 7:
                res = _context.sent;
                _context.next = 10;
                return res.json();

              case 10:
                file = _context.sent;

                _this.setState({
                  facebookImage: file.eager[0].secure_url
                });

              case 12:
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));

      console.log(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadTwitterFile",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var files, data, res, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("uploading file...");
                files = e.target.files;
                data = new FormData();
                data.append("file", files[0]);
                data.append("upload_preset", "sickfits");
                _context2.next = 7;
                return fetch("https://api.cloudinary.com/v1_1/du1f0pd1d/image/upload", {
                  method: "POST",
                  body: data
                });

              case 7:
                res = _context2.sent;
                _context2.next = 10;
                return res.json();

              case 10:
                file = _context2.sent;

                _this.setState({
                  twitterImage: file.eager[0].secure_url
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCampaignItem",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e, updateCampaignItemMutation) {
        var Question1, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e.preventDefault();
                Question1 = _this.Question1.current;
                _context3.next = 4;
                return updateCampaignItemMutation({
                  variables: _objectSpread({
                    id: _this.props.id,
                    targetCandidates: Question1.state.answers
                  }, _this.state)
                });

              case 4:
                res = _context3.sent;
                console.log(res);
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
                  pathname: "/dashboard"
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target2 = e.target,
          name = _e$target2.name,
          type = _e$target2.type,
          value = _e$target2.value;
      var val = type === "number" ? parseFloat(value) : value;
      console.log(val);

      _this.setState(_defineProperty({}, name, val));
    });

    _this.Question1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    return _this;
  }

  _createClass(UpdateCampaignItem, [{
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
        query: SINGLE_CAMPAIGN_ITEM_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, function (_ref4) {
        var data = _ref4.data,
            loading = _ref4.loading,
            error = _ref4.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, "Loading...");
        if (data.item) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, "No Item Found for ID...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
          mutation: UPDATE_CAMPAIGN_MUTATION,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, function (updateCampaignItem, _ref5) {
          var error = _ref5.error,
              loading = _ref5.loading;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_MainStyles__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/dashboard",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            className: "breadcrumb",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: this
          }, "Back to Dashboard")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            id: "createCampaignItem",
            onSubmit: function onSubmit(e) {
              return _this2.updateCampaignItem(e, updateCampaignItem);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            },
            __self: this
          }, data.campaignItem.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "onoffswitchcontainer",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 282
            },
            __self: this
          }, "LIVE", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "onoffswitch",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            onChange: _this2.handleExpChange,
            defaultChecked: data.campaignItem.expiration == "true" ? true : false,
            type: "checkbox",
            name: "expiration",
            className: "onoffswitch-checkbox",
            id: "myonoffswitch",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            className: "onoffswitch-label",
            htmlFor: "myonoffswitch",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: "onoffswitch-inner",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: "onoffswitch-switch",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "radiobtn-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304
            },
            __self: this
          }, "Target Type: ", data.campaignItem.targetType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, "Dynamic Scripts:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            name: "dynamicScripts",
            onChange: _this2.handleSelectChange,
            defaultValue: data.campaignItem.dynamicScripts,
            value: _this2.state.dynamicScripts,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "Yes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 313
            },
            __self: this
          }, "Yes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "No",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 314
            },
            __self: this
          }, "No")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallYourRepContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            },
            __self: this
          }, "CALL YOUR REPRESENTATIVE"), _this2.CKEditor && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_this2.CKEditor, {
            name: "callbody",
            data: data.campaignItem.callBody,
            editor: _this2.ClassicEditor,
            onInit: function onInit(editor) {// console.log(editor)
            },
            onChange: function onChange(event, editor) {
              var data = editor.getData();

              _this2.setState({
                callBody: data
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 322
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "thankYouMessage",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 337
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          }, "THANK YOU MESSAGE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "thankYouTitle",
            name: "thankYouTitle",
            placeholder: "Edit Title",
            required: true,
            value: data.campaignItem.thankYouTitle,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 339
            },
            __self: this
          }), _this2.CKEditor && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_this2.CKEditor, {
            name: "thankYouMessage",
            data: data.campaignItem.thankYouMessage,
            editor: _this2.ClassicEditor,
            onInit: function onInit(editor) {
              console.log(editor);
            },
            onChange: function onChange(event, editor) {
              var data = editor.getData();

              _this2.setState({
                thankYouMessage: data
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 349
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallYourRepContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            },
            __self: this
          }, "Default Script Version"), _this2.CKEditor && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_this2.CKEditor, {
            name: "defaultScript",
            data: data.campaignItem.defaultScript,
            editor: _this2.ClassicEditor,
            onInit: function onInit(editor) {// console.log(editor)
            },
            onChange: function onChange(event, editor) {
              var data = editor.getData();

              _this2.setState({
                defaultScript: data
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScriptListing__WEBPACK_IMPORTED_MODULE_9__["default"], {
            props: _this2.props.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 382
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: {
              pathname: "/script",
              query: {
                id: data.campaignItem.id
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 384
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            className: "addNewScript",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 390
            },
            __self: this
          }, "Add New Script")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Question__WEBPACK_IMPORTED_MODULE_11__["default"], {
            data: data.campaignItem.targetCandidates // questionChoices={questionChoices}
            ,
            questionChoices: _lib_legislators__WEBPACK_IMPORTED_MODULE_17__["legislators"],
            ref: _this2.Question1,
            targetType: data.campaignItem.targetType,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 394
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 404
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 405
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "URLPathSettings",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 408
            },
            __self: this
          }, "URL Path Settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 409
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "checkbox",
            id: "generateURLAlias",
            name: "generateURLAlias",
            defaultChecked: data.campaignItem.generateURLAlias == "true" ? true : false,
            onChange: _this2.handleCheckboxChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 410
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 421
            },
            __self: this
          }, "Generate automatic URL alias ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 422
            },
            __self: this
          }), " Uncheck this to create a custom alias below")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 426
            },
            __self: this
          }, "URL alias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            onChange: _this2.handleChange,
            type: "text",
            id: "customURL",
            placeholder: "Custom URL",
            defaultValue: data.campaignItem.customURL,
            name: "customURL",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 428
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 438
            },
            __self: this
          }, "Optionally specify an alternative URL by which this content can be accessed. For example, type \"about\" when writing an about page. Use a relative path and don't add a trailing slash or the URL alias won't work.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 447
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            label: "Email Share",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 448
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "sharebody",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 449
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "emailTitle",
            name: "emailTitle",
            placeholder: "Email Subject Line",
            defaultValue: data.campaignItem.emailTitle,
            value: _this2.state.emailTitle,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 450
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "emailBody",
            name: "emailBody",
            placeholder: "Email Body Goes Here",
            defaultValue: data.campaignItem.emailBody,
            value: _this2.state.emailBody,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 459
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            label: "Facebook Share",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 470
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "sharebody",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 471
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "facebookTitle",
            name: "facebookTitle",
            placeholder: "Facebook Title",
            value: _this2.state.facebookTitle,
            defaultValue: data.campaignItem.facebookTitle,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "facebookURL",
            name: "facebookURL",
            placeholder: "Facebook URL",
            value: _this2.state.facebookURL,
            defaultValue: data.campaignItem.facebookURL,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 481
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "facebookBody",
            name: "facebookBody",
            placeholder: "Facebook Description",
            value: _this2.state.facebookBody,
            defaultValue: data.campaignItem.facebookBody,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 490
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 499
            },
            __self: this
          }, "Upload Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 501
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            id: "facebookImage",
            name: "facebookImage",
            onChange: _this2.uploadFacebookFile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 502
            },
            __self: this
          })), _this2.state.facebookImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            width: "200",
            src: _this2.state.facebookImage,
            alt: "Upload Preview",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 511
            },
            __self: this
          }), data.campaignItem.facebookImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            width: "200",
            src: data.campaignItem.facebookImage,
            alt: "Upload Preview",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 518
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            label: "Twitter Share",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 526
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "sharebody",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 527
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "twitterTitle",
            name: "twitterTitle",
            placeholder: "Twitter Title",
            value: _this2.state.twitterTitle,
            defaultValue: data.campaignItem.twitterTitle,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 528
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "twitterURL",
            name: "twitterURL",
            placeholder: "Twitter URL",
            value: _this2.state.twitterURL,
            defaultValue: data.campaignItem.twitterURL,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 537
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "twitterBody",
            name: "twitterBody",
            placeholder: "Twitter Description",
            value: _this2.state.twitterBody,
            defaultValue: data.campaignItem.twitterBody,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 546
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 555
            },
            __self: this
          }, "Upload Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 557
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            id: "twitterImage",
            name: "twitterImage",
            onChange: _this2.uploadTwitterFile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 558
            },
            __self: this
          })), _this2.state.twitterImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            width: "200",
            src: _this2.state.twitterImage,
            alt: "Upload Preview",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 566
            },
            __self: this
          }), data.campaignItem.twitterImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            width: "200",
            src: data.campaignItem.twitterImage,
            alt: "Upload Preview",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 573
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "upload-files",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 583
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 584
            },
            __self: this
          }, "Save")))));
        });
      });
    }
  }]);

  return UpdateCampaignItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateCampaignItem);


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

/***/ "./lib/legislators.js":
/*!****************************!*\
  !*** ./lib/legislators.js ***!
  \****************************/
/*! exports provided: legislators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legislators", function() { return legislators; });

/***/ }),

/***/ "./lib/questions.js":
/*!**************************!*\
  !*** ./lib/questions.js ***!
  \**************************/
/*! exports provided: questionChoices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionChoices", function() { return questionChoices; });
var questionChoices = [{
  "questionID": 1,
  "questionType": "radio",
  "state": "VA",
  "district": "2",
  "party": "Democrat",
  "questionText": "Elaine Luria",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}, {
  "questionID": 2,
  "questionType": "radio",
  "state": "VA",
  "party": "Democrat",
  "questionText": "Elizabeth Warren - Candidate",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}, {
  "questionID": 3,
  "questionType": "radio",
  "state": "VA",
  "party": "Democrat",
  "questionText": "Joe Biden - Candidate",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}, {
  "questionID": 4,
  "questionType": "radio",
  "state": "VA",
  "party": "Democrat",
  "questionText": "Tulsi Gabbard - Candidate",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}, {
  "questionID": 5,
  "questionType": "radio",
  "state": "VA",
  "party": "Democrat",
  "questionText": "Bernie Sanders - Senator",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}, {
  "questionID": 6,
  "questionType": "radio",
  "state": "VA",
  "party": "Democrat",
  "questionText": "Elizabeth Warren - Candidate",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}, {
  "questionID": 7,
  "questionType": "radio",
  "state": "VA",
  "party": "Democrat",
  "questionText": "Joe Biden - Candidate",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}, {
  "questionID": 8,
  "questionType": "radio",
  "state": "VA",
  "party": "Democrat",
  "questionText": "Tulsi Gabbard - Candidate",
  "choices": ["support", "oppose", "other", "none"],
  "answer": ""
}];


/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UpdateCampaignItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UpdateCampaignItem */ "./components/UpdateCampaignItem.js");
var _jsxFileName = "/Users/samkahle/Documents/GitHub/click-to-call/frontend/pages/update.js";



var UpdatePage = function UpdatePage(_ref) {
  var query = _ref.query;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UpdateCampaignItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UpdatePage);

/***/ }),

/***/ 7:
/*!*******************************!*\
  !*** multi ./pages/update.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/update.js */"./pages/update.js");


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

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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
//# sourceMappingURL=update.js.map