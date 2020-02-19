webpackHotUpdate("static/development/pages/update.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
      });
    }
  }, {
    key: "buildRadioButtons",
    value: function buildRadioButtons(arr, type, id, checked) {
      var _this2 = this;

      return arr.map(function (choice, i) {
        if (choice == checked) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: checked + " trueee",
            onChange: _this2.onInput,
            onClick: _this2.onInput,
            type: "radio",
            id: choice + "-" + id,
            name: id,
            checked: true,
            value: choice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: choice + "-" + id,
            className: choice + "Label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, choice));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: checked + " falseee",
            onChange: _this2.onInput,
            onClick: _this2.onInput,
            type: "radio",
            id: choice + "-" + id,
            name: id,
            checked: false,
            value: choice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: choice + "-" + id,
            className: choice + "Label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }, choice));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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

        if (_this3.state.answers && _this3.state.names) {
          _this3.state.answers.map(function (item) {
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
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, questionText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "switch-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, _this3.buildRadioButtons(choices, questionType, questionID, question.answer)));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "candidateSearch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Filter: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "candidateSearch",
        type: "text",
        placeholder: "Search",
        onChange: this.filterList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "executeTasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Execute: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.handleSelectChange,
        value: this.state.candidateStance,
        name: "candidateStance",
        className: "select-css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Choose an Option"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "oppose",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Oppose"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "other",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Other"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "None")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.executeTasks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Execute"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "targetPeopleContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, iterator));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=update.js.c3c067f6a3ffffbafef7.hot-update.js.map