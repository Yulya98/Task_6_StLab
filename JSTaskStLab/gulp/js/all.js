(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ControleValueModule = require("./ControleValueModule.js");

var _ControleValueModule2 = _interopRequireDefault(_ControleValueModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECTCONVERTTOBIN = "convertToBin";
var SELECTCONVERTTODESC = "convertToDesc";

var BinaryOperations = function () {
  function BinaryOperations(num, selectValue, errorElem, resulElem) {
    _classCallCheck(this, BinaryOperations);

    this.num = num;
    this.selectValue = selectValue;
    this.errorElem = errorElem;
    this.resulElem = resulElem;
  }

  _createClass(BinaryOperations, [{
    key: "convertToBin",
    value: function convertToBin(num) {
      try {
        if (num == "undefined") throw TypeError("Incorrect date");
        var out = [],
            bit = 1;
        while (num >= bit) {
          if (num > 0) out.push(num & bit ? 1 : 0);else out.push(~(num & bit ? 1 : 0));
          bit <<= 1;
        }
        return out;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "convertToDec",
    value: function convertToDec(num) {
      try {
        if (num == "undefined") throw TypeError("Incorrect date");
        var out = 0,
            bit = 1;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = num[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            out += value == "1" ? bit : 0;
            bit <<= 1;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var masValue = [];
        masValue[0] = out;
        return masValue;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "selectOperation",
    value: function selectOperation() {
      if (!_ControleValueModule2.default.checkValue(this.num, this.errorElem, false)) {
        return false;
      }
      if (this.selectValue == SELECTCONVERTTOBIN) {
        this.outputMas(this.convertToBin(this.num.value));
      }
      if (this.selectValue == SELECTCONVERTTODESC) {
        this.outputMas(this.convertToDec(this.num.value));
      }
    }
  }, {
    key: "outputMas",
    value: function outputMas(arr) {
      this.resulElem.value = "";
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var value = _step2.value;
          this.resulElem.value += value;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return BinaryOperations;
}();

exports.default = BinaryOperations;

},{"./ControleValueModule.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ControleValueBaseTemplate = require("./ControleValueBaseTemplate.js");

var _ControleValueBaseTemplate2 = _interopRequireDefault(_ControleValueBaseTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OPERATIONPLUS = "plus";
var OPERATIONMINUS = "minus";
var OPERATIONCOMPOSITION = "composition";
var OPERATIONDIVISION = "division";
var OPERATIONEXPONATION = "exponentiation";

var Calculator = function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, null, [{
    key: "selectOperation",
    value: function selectOperation(a, b, selectValue, resultElem, errorFirstNum, errorSecondNum) {
      if (!_ControleValueBaseTemplate2.default.checkValue(a, errorFirstNum, true, b, errorSecondNum)) {
        return false;
      }
      a = +a.value;
      b = +b.value;
      if (selectValue == OPERATIONPLUS) Calculator.outputResult(Calculator.add(a, b), resultElem);
      if (selectValue == OPERATIONMINUS) Calculator.outputResult(Calculator.minus(a, b), resultElem);
      if (selectValue == OPERATIONCOMPOSITION) Calculator.outputResult(Calculator.composition(a, b), resultElem);
      if (selectValue == OPERATIONDIVISION) Calculator.outputResult(Calculator.division(a, b), resultElem);
      if (selectValue == OPERATIONEXPONATION) Calculator.outputResult(Calculator.exponentiation(a, b), resultElem);
    }
  }, {
    key: "checkType",
    value: function checkType(a, b) {
      if (typeof a == "number" && typeof b == "number") {
        return true;
      }
      return false;
    }
  }, {
    key: "add",
    value: function add(a, b) {
      try {
        if (!Calculator.checkType(a, b)) {
          throw new TypeError("Argument should be number");
        }
        return a + b;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "minus",
    value: function minus(a, b) {
      try {
        if (!Calculator.checkType(a, b)) {
          throw new TypeError("Argument should be number");
        }
        return a - b;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "composition",
    value: function composition(a, b) {
      try {
        if (!Calculator.checkType(a, b)) {
          throw new TypeError("Argument should be number");
        }
        return a * b;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "division",
    value: function division(a, b) {
      try {
        if (!Calculator.checkType(a, b)) {
          throw new TypeError("Argument should be number");
        }
        return a / b;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "exponentiation",
    value: function exponentiation(a, b) {
      try {
        if (!Calculator.checkType(a, b)) throw new TypeError("Argument should be number");
        return Math.pow(a, b);
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "outputResult",
    value: function outputResult(result, resultElem) {
      resultElem.value = "";
      resultElem.value = Math.round(result * 10000) / 10000;
    }
  }]);

  return Calculator;
}();

exports.default = Calculator;

},{"./ControleValueBaseTemplate.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ControleValueBaseTemplate = require("./ControleValueBaseTemplate.js");

var _ControleValueBaseTemplate2 = _interopRequireDefault(_ControleValueBaseTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OPERATIONPLUS = "plus";
var OPERATIONMINUS = "minus";
var OPERATIONCOMPOSITION = "composition";
var OPERATIONDIVISION = "division";
var OPERATIONEXPONATION = "exponentiation";

var NAMEFANCTIONADD = "add";
var NAMEFACTIONMINUS = "minus";
var NAMEFANCTIONCOMPOSITION = "composition";
var NAMEFANCTIONDIVISION = "division";
var NAMEFANCTIONEXPONATION = "exponentiation";

var CalculatorModule = function () {
  function CalculatorModule(cacheValue, cacheFunction) {
    _classCallCheck(this, CalculatorModule);

    this.cacheValue = cacheFunction;
    this.cacheValue = cacheValue;
  }

  _createClass(CalculatorModule, [{
    key: "selectOperation",
    value: function selectOperation(firstNum, secondNum, selectValue, result, errorFirstNum, errorSecondNum) {
      if (!_ControleValueBaseTemplate2.default.checkValue(firstNum, errorFirstNum, secondNum, errorSecondNum)) {
        return false;
      }
      var obj = {};
      obj[1] = +firstNum.value;
      obj[2] = +secondNum.value;
      if (selectValue == OPERATIONPLUS) {
        obj[0] = NAMEFANCTIONADD;
        CalculatorModule.outputResult(CalculatorModule.add(obj), result);
      }
      if (selectValue == OPERATIONMINUS) {
        obj[0] = NAMEFACTIONMINUS;
        CalculatorModule.outputResult(CalculatorModule.minus(obj), result);
      }
      if (selectValue == OPERATIONCOMPOSITION) {
        obj[0] = NAMEFANCTIONCOMPOSITION;
        CalculatorModule.outputResult(CalculatorModule.composition(obj), result);
      }
      if (selectValue == OPERATIONDIVISION) {
        obj[0] = NAMEFANCTIONDIVISION;
        CalculatorModule.outputResult(CalculatorModule.division(obj), result);
      }
      if (selectValue == OPERATIONEXPONATION) {
        obj[0] = NAMEFANCTIONEXPONATION;
        CalculatorModule.outputResult(CalculatorModule.exponentiation(obj), result);
      }
    }
  }, {
    key: "makeCachingValue",
    value: function makeCachingValue(f, cache) {
      var cacheValue = cache;

      return function (obj) {
        if (!(obj[0] + obj[1] + obj[2] in cacheValue || obj[0] + obj[2] + obj[1] in cacheValue && obj[0] == NAMEFANCTIONEXPONATION)) {
          cacheValue[obj[0] + obj[1] + obj[2]] = f.call(this, obj);
        }
        if (obj[0] == NAMEFANCTIONEXPONATION) {
          if (!(obj[0] + obj[1] + obj[2] in this.cacheValue)) {
            cacheValue[obj[0] + obj[1] + obj[2]] = f.call(this, obj);
          }
        }
        return cacheValue[obj[0] + obj[1] + obj[2]];
      };
    }
  }, {
    key: "definitionFunctionCache",
    value: function definitionFunctionCache(f, cacheFunctions) {
      this.cacheFunctions = cacheFunctions;

      return function (obj, flag, objSelectElem) {
        if (!(obj[0] in this.cacheFunctions)) {
          this.cacheFunctions[obj[0]] = f.call(this, obj, flag, objSelectElem);
        }
        return this.cacheFunctions[obj[0]];
      };
    }
  }, {
    key: "definitionFunction",
    value: function definitionFunction(obj, flag, objSelectElem) {
      try {
        if (flag == true) {
          if (objSelectElem != "undefined") {
            CalculatorModule.addNewOption(obj[0], objSelectElem);
          } else throw new TypeError("Incorrect value");
        }
        var mas = [obj[1], obj[2], obj[3]];
        return mas.join(" ");
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "callFunction",
    value: function callFunction(str, firstNum, secondNum, result, errorFirstNum, errorSecondNum) {
      if (!_ControleValueBaseTemplate2.default.checkValue(firstNum, errorFirstNum, secondNum, errorSecondNum)) {
        return false;
      }
      var mas1 = Singleton.getInstance().definitionFunction(str, false).split(" ");
      var newFunc = new Function(mas1[0], mas1[1] + " " + mas1[2]);
      newFunc = this.makeCachingValue(newFunc, this.cacheValue);
      var obj = {};
      obj[0] = str[0];
      obj[1] = +firstNum.value;
      obj[2] = +secondNum.value;
      CalculatorModule.outputResult(newFunc(obj), result);
    }
  }], [{
    key: "checkType",
    value: function checkType(obj) {
      if (typeof obj[1] == "number" && typeof obj[2] == "number") {
        return true;
      }
      return false;
    }
  }, {
    key: "add",
    value: function add(obj) {
      try {
        if (!CalculatorModule.checkType(obj)) throw new Error("Argument should be number");
        return obj[1] + obj[2];
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "minus",
    value: function minus(obj) {
      try {
        if (!CalculatorModule.checkType(obj)) throw new Error("Argument mast be number");
        return obj[1] - obj[2];
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "composition",
    value: function composition(obj) {
      try {
        if (!CalculatorModule.checkType(obj)) throw new Error("Argument should be number");
        return obj[1] * obj[2];
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "division",
    value: function division(obj) {
      try {
        if (!CalculatorModule.checkType(obj)) throw new Error("Argument should be number");
        return obj[1] / obj[2];
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "exponentiation",
    value: function exponentiation(obj) {
      try {
        if (!CalculatorModule.checkType(obj)) throw new Error("Argument mast be number");
        return Math.pow(obj[1], obj[2]);
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "outputResult",
    value: function outputResult(result, resultElem) {
      resultElem.value = "";
      resultElem.value = Math.round(result * 10000) / 10000;
    }
  }, {
    key: "addNewOption",
    value: function addNewOption(str, objSelectElem) {
      objSelectElem.options[objSelectElem.options.length] = new Option(str, str);
    }
  }]);

  return CalculatorModule;
}();

var Singleton = function () {
  var instance = void 0;

  function createInstance() {
    var cacheFunction = {};
    var cacheValue = {};
    var calculator = new CalculatorModule(cacheValue, cacheFunction);
    calculator.definitionFunction = calculator.definitionFunctionCache(calculator.definitionFunction, cacheFunction);
    CalculatorModule.add = calculator.makeCachingValue(CalculatorModule.add, cacheValue);
    CalculatorModule.minus = calculator.makeCachingValue(CalculatorModule.minus, cacheValue);
    CalculatorModule.composition = calculator.makeCachingValue(CalculatorModule.composition, cacheValue);
    CalculatorModule.division = calculator.makeCachingValue(CalculatorModule.division, cacheValue);
    return calculator;
  }

  return {
    getInstance: function getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
}();

exports.default = Singleton;

},{"./ControleValueBaseTemplate.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControlValue = function () {
  function ControlValue() {
    _classCallCheck(this, ControlValue);
  }

  _createClass(ControlValue, null, [{
    key: "checkValue",
    value: function checkValue(firstNum, errorFirstNumElem, secondNum, errorSecondNumElem) {
      if (!firstNum.value.match(/^\d+$/)) {
        errorFirstNumElem.innerHTML = "Incorrect data: ";
        errorFirstNumElem.setAttribute("style", "display:inline");
        if (!secondNum.value.match(/^\d+$/)) {
          errorSecondNumElem.innerHTML = "Incorrect data: ";
          errorSecondNumElem.setAttribute("style", "display:inline");
        }
        return false;
      } else {
        errorFirstNumElem.setAttribute("style", "display:none");
      }
      if (!secondNum.value.match(/^\d+$/)) {
        errorSecondNumElem.innerHTML = "Incorrect data";
        errorSecondNumElem.setAttribute("style", "display:none");
        return false;
      } else {
        errorSecondNumElem.setAttribute("style", "display:none");
      }
      return true;
    }
  }]);

  return ControlValue;
}();

exports.default = ControlValue;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControlValue = function () {
  function ControlValue() {
    _classCallCheck(this, ControlValue);
  }

  _createClass(ControlValue, null, [{
    key: "checkValue",
    value: function checkValue(firstNum, errorFirstNumElem, flagCountValue, secondNum, errorSecondNumElem) {
      if (flagCountValue == true) {
        if (!firstNum.value.match(/^\d+$/)) {
          errorFirstNumElem.innerHTML = "Incorrect data: ";
          errorFirstNumElem.setAttribute("style", "display:inline");
          if (!secondNum.value.match(/^\d+$/)) {
            errorSecondNumElem.innerHTML = "Incorrect data: ";
            errorSecondNumElem.setAttribute("style", "display:inline");
          }
          return false;
        } else {
          errorFirstNumElem.setAttribute("style", "display:none");
        }
        if (!secondNum.value.match(/^\d+$/)) {
          errorSecondNumElem.innerHTML = "Incorrect data";
          errorSecondNumElem.setAttribute("style", "display:none");
          return false;
        } else {
          errorSecondNumElem.setAttribute("style", "display:none");
        }
      } else {
        debugger;
        if (!firstNum.value.match(/[0-9\s]+/)) {
          errorFirstNumElem.innerHTML = "Incorrect data: ";
          errorFirstNumElem.setAttribute("style", "display:inline");
          return false;
        } else {
          errorFirstNumElem.setAttribute("style", "display:none");
        }
      }
      return true;
    }
  }]);

  return ControlValue;
}();

exports.default = ControlValue;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PARSETOSIMPLESTR = "simpleStr";
var PARSETOSTRMONTH = "simpleStrMonthToStr";
var PARSETODATEOBJECT = "simpleStrToDateObject";
var PARSETODATEOBJECTHYPHENATED = "simpleStrToDateObjectHyphenated";
var FROMNOW = "fromNow";
var MSTODATE = "MStoDate";
var DATETOMS = "DateToMS";

var DateFormatter = function () {
  function DateFormatter(initialDateElem, selectValue) {
    _classCallCheck(this, DateFormatter);

    this.initialDateElem = initialDateElem;
    this.selectValue = selectValue;
  }

  _createClass(DateFormatter, [{
    key: "selectParseTemplate",
    value: function selectParseTemplate() {
      if (this.selectValue == PARSETOSIMPLESTR) {
        this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_1, "YY-MM-DD"));
      }
      if (this.selectValue == PARSETOSTRMONTH) {
        this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_1, SELECTFORMAT_2));
      }
      if (this.selectValue == PARSETODATEOBJECT) {
        this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_2, SELECTFORMAT_2));
      }
      if (this.selectValue == PARSETODATEOBJECTHYPHENATED) {
        this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_2, SELECTFORMAT_2, SELECTFORMAT_4));
      }
      if (this.selectValue == FROMNOW) {
        this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_3, SELECTFORMAT_3));
      }
      if (this.selectValue == MSTODATE) {
        this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_6));
      }
      if (this.selectValue == DATETOMS) {
        this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_7));
      }
    }
  }, {
    key: "parseFunctionReturnStr",
    value: function parseFunctionReturnStr(inputStr, regExp, regExp_2) {
      var date = void 0,
          masValueForBuildDate = [];
      var locale = "en-us";
      if (inputStr == SELECTFORMAT_1 && regExp == "YY-MM-DD" && typeof regExp_2 == "undefined") {
        return this.initialDateElem.value.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/, "$1-$2-$3");
      }
      if (inputStr == SELECTFORMAT_1 && regExp == SELECTFORMAT_2 && typeof regExp_2 == "undefined") {
        masValueForBuildDate = this.initialDateElem.value.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/, "$1,$2,$3").split(",").map(function (x) {
          return +x;
        });
        date = new Date(masValueForBuildDate[2], masValueForBuildDate[1] - 1, masValueForBuildDate[0]);
        return date.getDate() + " " + date.toLocaleString(locale, { month: "long" }) + " " + date.getFullYear();
      }
      if (inputStr == SELECTFORMAT_2 && regExp == SELECTFORMAT_2 && typeof regExp_2 == "undefined") {
        masValueForBuildDate = this.initialDateElem.value.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, "$1,$2,$3").split(",").map(function (x) {
          return +x;
        });
        date = new Date(masValueForBuildDate[0], masValueForBuildDate[1] - 1, masValueForBuildDate[2]);
        return date.getDate() + " " + date.toLocaleString(locale, { month: "long" }) + " " + date.getFullYear();
      }
      if (inputStr == SELECTFORMAT_2 && regExp == SELECTFORMAT_2 && regExp_2 == SELECTFORMAT_5) {
        return this.initialDateElem.value.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, "$2-$3-$1");
      }
      if (inputStr == SELECTFORMAT_3 && regExp == SELECTFORMAT_3 && typeof regExp_2 == "undefined") {
        masValueForBuildDate = this.initialDateElem.value.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$1,$2,$3").split(",").map(function (x) {
          return +x;
        });
        var initialDate = new Date(masValueForBuildDate[0], masValueForBuildDate[1] - 1, masValueForBuildDate[2]).getTime();
        var diff = Math.floor(Date.now() - initialDate);
        return Math.floor(diff / (1000 * 60 * 60 * 24) / 31 / 12) + " years ago";
      }
      if (inputStr == SELECTFORMAT_6) {
        date = new Date(+this.initialDateElem.value);
        return date;
      }
      if (inputStr == SELECTFORMAT_7) {
        masValueForBuildDate = this.initialDateElem.value.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$1,$2,$3").split(",").map(function (x) {
          return +x;
        });
        date = new Date(masValueForBuildDate[0], masValueForBuildDate[1] - 1, masValueForBuildDate[2]).getTime();
        return date;
      }
    }
  }, {
    key: "outputDate",
    value: function outputDate(date) {
      this.initialDateElem.value = "";
      this.initialDateElem.value = date;
    }
  }]);

  return DateFormatter;
}();

exports.default = DateFormatter;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BinaryOperationModule = require("./BinaryOperationModule");

var _BinaryOperationModule2 = _interopRequireDefault(_BinaryOperationModule);

var _SortMasModule = require("./SortMasModule");

var _SortMasModule2 = _interopRequireDefault(_SortMasModule);

var _SearchElemMasModule = require("./SearchElemMasModule");

var _SearchElemMasModule2 = _interopRequireDefault(_SearchElemMasModule);

var _CalculatorBaseTemplateModule = require("./CalculatorBaseTemplateModule");

var _CalculatorBaseTemplateModule2 = _interopRequireDefault(_CalculatorBaseTemplateModule);

var _TextFormatterModule = require("./TextFormatterModule");

var _TextFormatterModule2 = _interopRequireDefault(_TextFormatterModule);

var _DataFormatterModule = require("./DataFormatterModule");

var _DataFormatterModule2 = _interopRequireDefault(_DataFormatterModule);

var _CalculatorModule = require("./CalculatorModule");

var _CalculatorModule2 = _interopRequireDefault(_CalculatorModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = window.onload = function () {
  if (document.getElementById("buttonBinary")) {
    document.getElementById("buttonBinary").onclick = function () {
      new _BinaryOperationModule2.default(document.getElementById("numToConvert"), document.getElementById("s7").value, document.getElementById("errorNumToConvert"), document.getElementById("resultConvert")).selectOperation();
    };
    document.getElementById("sortButton").onclick = function () {
      new _SortMasModule2.default(document.getElementById("initialMasForSort"), document.getElementById("s2").value, document.getElementById("errorInitialMas"), document.getElementById("resultMasSort")).selectFunctionSort();
    };
    document.getElementById("selectOperations").onclick = function () {
      _CalculatorBaseTemplateModule2.default.selectOperation(document.getElementById("firstNum"), document.getElementById("secondNum"), document.getElementById("s5").value, document.getElementById("result"), document.getElementById("errorFirstNum"), document.getElementById("errorSecondNum"));
    };
    document.getElementById("TextFormatter").onclick = function () {
      new _TextFormatterModule2.default(document.getElementById("maxRows"), document.getElementById("maxColumns"), document.getElementById("text"), document.getElementById("s6").value, document.getElementById("errorRowsCount"), document.getElementById("errorColumnsCount"), document.getElementById("textResult")).changeTextFormatter();
    };
    document.getElementById("buttonDateFormatter").onclick = function () {
      new _DataFormatterModule2.default(document.getElementById("date"), document.getElementById("s1").value).selectParseTemplate();
    };
    document.getElementById("buttonSearchElemMas").onclick = function () {
      new _SearchElemMasModule2.default(document.getElementById("initialMasForSearch"), document.getElementById("s3").value, document.getElementById("errorInputMasForSearch"), document.getElementById("resultSearchMas")).selectFunctionSearch();
    };
  } else {
    document.getElementById("definitionButton").onclick = function () {
      _CalculatorModule2.default.getInstance().definitionFunction(document.getElementById("newFunction").value.split(" "), true, document.getElementById("s7"));
    };
    document.getElementById("buttonResultCustomFunction").onclick = function () {
      _CalculatorModule2.default.getInstance().callFunction(new Array(document.getElementById("s7").value), document.getElementById("firstNum"), document.getElementById("secondNum"), document.getElementById("result"), document.getElementById("errorFirstNum"), document.getElementById("errorSecondNum"));
    };
    document.getElementById("buttonResultInitialFunc").onclick = function () {
      _CalculatorModule2.default.getInstance().selectOperation(document.getElementById("firstNum"), document.getElementById("secondNum"), document.getElementById("s5").value, document.getElementById("result"), document.getElementById("errorFirstNum"), document.getElementById("errorSecondNum"));
    };
  }
};

},{"./BinaryOperationModule":1,"./CalculatorBaseTemplateModule":2,"./CalculatorModule":3,"./DataFormatterModule":6,"./SearchElemMasModule":8,"./SortMasModule":9,"./TextFormatterModule":11}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ControleValueModule = require("./ControleValueModule.js");

var _ControleValueModule2 = _interopRequireDefault(_ControleValueModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECTSUMELEM = "sumOfElemMasIsMax_O(n)";
var SELECTSUMELEM_2 = "sumOfElemMasIsMax_O(n^2)";
var SELECTSERCELEM = "searchMaxMinMediumElemMas";
var SELECTSEQUANCEMAS = "ascendingSequenceMas";

var SearchElemMasModule = function () {
  function SearchElemMasModule(arr, selectValue, errorElem, resultElem) {
    _classCallCheck(this, SearchElemMasModule);

    this.arrElem = arr;
    this.selectValue = selectValue;
    this.errorElem = errorElem;
    this.resultElem = resultElem;
  }

  _createClass(SearchElemMasModule, [{
    key: "selectFunctionSearch",
    value: function selectFunctionSearch() {
      if (!_ControleValueModule2.default.checkValue(this.arrElem, this.errorElem, false)) {
        return false;
      }
      var masFromArr = this.arrElem.value.split(" ").map(function (x) {
        return +x;
      });
      var outputMas = [];
      if (this.selectValue == SELECTSUMELEM) {
        outputMas = SearchElemMasModule.getMaxSubSumOn(masFromArr, "Sum");
        this.outputMas(outputMas, "Sum");
      }
      if (this.selectValue == SELECTSUMELEM_2) {
        outputMas = SearchElemMasModule.getMaxSubSumSquareOn_2(masFromArr);
        this.outputMas(outputMas, "Sum");
      }
      if (this.selectValue == SELECTSERCELEM) {
        outputMas = SearchElemMasModule.searchMaxMinMediumElemMas(masFromArr);
        this.outputMas(outputMas, "Min, max, medium");
      }
      if (this.selectValue == SELECTSEQUANCEMAS) {
        outputMas = SearchElemMasModule.searchAscendingSequenceMas(masFromArr);
        this.outputMas(outputMas, "Ascending Sequence");
      }
    }
  }, {
    key: "outputMas",
    value: function outputMas(arr, str) {
      try {
        if (!Array.isArray(arr)) throw TypeError("Incorrect type");
        this.resultElem.value = str + ": ";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            this.resultElem.value += value + " ";
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } catch (e) {
        alert(e.message);
      }
    }
  }], [{
    key: "getMaxSubSumOn",
    value: function getMaxSubSumOn(arr) {
      try {
        if (!Array.isArray(arr)) throw TypeError("Incorrect type");
        var outArr = [];
        var sum = 0,
            maxSum = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            sum += +value;
            if (sum > maxSum) maxSum = sum;
            if (sum < 0) sum = 0;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        outArr[0] = maxSum;
        return outArr;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "getMaxSubSumSquareOn_2",
    value: function getMaxSubSumSquareOn_2(arr) {
      try {
        if (!Array.isArray(arr)) throw TypeError("Incorrect type");
        var outArr = [];
        var maxSum = 0;
        for (var i = 0; i < arr.length; i++) {
          var sum = 0;
          for (var j = i; j < arr.length; j++) {
            sum += +arr[j];
            if (sum > maxSum) maxSum = sum;
          }
        }
        outArr[0] = maxSum;
        return outArr;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "searchMaxMinMediumElemMas",
    value: function searchMaxMinMediumElemMas(arr) {
      try {
        if (!Array.isArray(arr)) throw TypeError("Incorrect type");
        var masMinMaxMediumElemMas = [],
            minEl = void 0,
            maxEl = void 0,
            mediumEl = void 0;
        arr = new SortMas().quickSort(arr);
        minEl = arr[0];
        maxEl = arr[arr.length - 1];
        if (arr.length % 2 == 0) {
          mediumEl = (arr[arr.length / 2] + arr[arr.length / 2 + 1]) / 2;
        } else {
          mediumEl = arr[(arr.length + 1) / 2];
        }
        masMinMaxMediumElemMas[0] = minEl;
        masMinMaxMediumElemMas[1] = maxEl;
        masMinMaxMediumElemMas[2] = mediumEl;
        return masMinMaxMediumElemMas;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "searchAscendingSequenceMas",
    value: function searchAscendingSequenceMas(arr) {
      try {
        if (!Array.isArray(arr)) throw TypeError("Incorrect type");
        var outputMas = [];
        var count = void 0;
        var countArr = [];
        for (var i = 0; i < arr.length; i++) {
          count = 0;
          for (var j = i + 1; j < arr.length; j++) {
            if (arr[j - 1] < arr[j]) {
              count++;
              if (arr[j] == arr.length - 1) {
                countArr.push(count);
                break;
              }
            } else {
              countArr.push(count);
              break;
            }
          }
        }
        var maxValue = Math.max.apply(null, countArr);
        var index = countArr.indexOf(maxValue);
        for (var _i = index, _j = 0; _i <= index + maxValue; _i++, _j++) {
          outputMas[_j] = arr[_i];
        }
        return outputMas;
      } catch (e) {
        alert(e.message);
      }
    }
  }]);

  return SearchElemMasModule;
}();

exports.default = SearchElemMasModule;

},{"./ControleValueModule.js":5}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ControleValueModule = require("./ControleValueModule.js");

var _ControleValueModule2 = _interopRequireDefault(_ControleValueModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECTQUICKSORT = "quickSort";
var SELECTINSERTSORT = "insertSort";
var SELECTSELECTIONSORT = "selectionSort";
var BUBBLESORT = "bubbleSort";

var SortMas = function () {
  function SortMas(arr, selectValue, errorElem, resultElem) {
    _classCallCheck(this, SortMas);

    this.selectValue = selectValue;
    this.arr = arr;
    this.errorElem = errorElem;
    this.resultElem = resultElem;
  }

  _createClass(SortMas, [{
    key: "insertionSort",
    value: function insertionSort(arr) {
      try {
        if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
        for (var i = 0; i < arr.length; i++) {
          var v = arr[i],
              j = i - 1;
          while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j--;
          }
          arr[j + 1] = v;
        }
        return arr;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "selectionSort",
    value: function selectionSort(arr) {
      try {
        if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
        var temp = void 0;
        for (var i = 0; i < arr.length; i++) {
          var iMin = i;

          for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[iMin]) iMin = j;
          }
          if (iMin != i) {
            temp = arr[iMin];
            arr[iMin] = arr[i];
            arr[i] = temp;
          }
        }
        return arr;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "bubbleSort",
    value: function bubbleSort(arr) {
      try {
        if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
        for (var i = 0; i < arr.length; i++) {
          for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              var temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
        return arr;
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "quickSort",
    value: function quickSort(arr) {
      try {
        if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
        if (arr.length <= 1) {
          return arr;
        }

        var pivot = arr[0],
            left = [],
            right = [];

        for (var i = 1; i < arr.length; i++) {
          arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        return this.quickSort(left).concat(pivot, this.quickSort(right));
      } catch (e) {
        alert(e.message);
      }
    }
  }, {
    key: "selectFunctionSort",
    value: function selectFunctionSort() {
      if (!_ControleValueModule2.default.checkValue(this.arr, this.errorElem, false)) {
        return false;
      }

      var initialMas = this.arr.value.split(" ").map(function (x) {
        return +x;
      }),
          sortMas = void 0;
      if (initialMas != undefined) {
        if (this.selectValue == SELECTQUICKSORT) {
          sortMas = this.quickSort(initialMas);
        }
        if (this.selectValue == SELECTINSERTSORT) {
          sortMas = this.insertionSort(initialMas);
        }
        if (this.selectValue == SELECTSELECTIONSORT) {
          sortMas = this.selectionSort(initialMas);
        }
        if (this.selectValue == BUBBLESORT) {
          sortMas = this.bubbleSort(initialMas);
        }
        this.outputSortMas(sortMas);
      }
    }
  }, {
    key: "outputSortMas",
    value: function outputSortMas(arr) {
      this.resultElem.value = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          this.resultElem.value += value + " ";
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return SortMas;
}();

exports.default = SortMas;

},{"./ControleValueModule.js":5}],10:[function(require,module,exports){
"use strict";

require("./RegistrEvent.js");

require("./SortMasModule.js");

require("./DataFormatterModule.js");

require("./SearchElemMasModule.js");

require("./TextFormatterModule.js");

require("./CalculatorBaseTemplateModule.js");

var _BinaryOperationModule = require("./BinaryOperationModule.js");

var _BinaryOperationModule2 = _interopRequireDefault(_BinaryOperationModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./BinaryOperationModule.js":1,"./CalculatorBaseTemplateModule.js":2,"./DataFormatterModule.js":6,"./RegistrEvent.js":7,"./SearchElemMasModule.js":8,"./SortMasModule.js":9,"./TextFormatterModule.js":11}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ControleValueModule = require("./ControleValueModule.js");

var _ControleValueModule2 = _interopRequireDefault(_ControleValueModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECTTEXTFORMATCHARWRAP = "charWrap";
var SELECTTEXTFORMATWORDWRAP = "wordWrap";
var SELECTTEXTFORMATSENTENCEWRAP = "sentenceWrap";
var WITHOUTWRAP = "withoutWrap";

var TextFormatter = function () {
  function TextFormatter(maxRows, maxColumns, text, selectValue, errorRowsCount, errorColumnsCount, textResult) {
    _classCallCheck(this, TextFormatter);

    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.text = text;
    this.selectValue = selectValue;
    this.errorRowsCount = errorRowsCount;
    this.errorColumnsCount = errorColumnsCount;
    this.textResult = textResult;
  }

  _createClass(TextFormatter, [{
    key: "changeTextFormatter",
    value: function changeTextFormatter() {
      var _this = this;

      if (!_ControleValueModule2.default.checkValue(this.maxRows, this.errorRowsCount, true, this.maxColumns, this.errorColumnsCount)) {
        return false;
      }
      if (this.selectValue == SELECTTEXTFORMATCHARWRAP) {
        this.text.value = this.outputText(this.text.value.match(/(\w{1})/g).join("\n"));
      }
      if (this.selectValue == SELECTTEXTFORMATWORDWRAP) {
        this.text.value = this.outputText(this.text.value.replace(/\s/g, "\n"));
      }
      if (this.selectValue == SELECTTEXTFORMATSENTENCEWRAP) {
        this.text.value = this.outputText(this.text.value.match(/(\w+.)/g).join("\n"));
      }
      if (this.selectValue == WITHOUTWRAP) {
        this.text.setAttribute("wrap", "off");
      }
      var str = void 0;
      if (this.maxRows.value != undefined && this.maxRows.value != "") {
        str = this.text.value.split("\n");
        var outputMas = [];
        if (str.length - +this.maxRows.value > 0) {
          for (var i = 0; i < +this.maxRows.value; i++) {
            outputMas[i] = str[i];
          }
          str = this.outputText(outputMas.join("\n"));
        } else {
          str = this.outputText(str.join("\n"));
        }
      }
      if (this.maxColumns.value != undefined && this.maxColumns.value != "") {
        this.outputText(str.split(/\n/gm).map(function (x) {
          return x.substr(0, +_this.maxColumns.value);
        }).join("\n"));
      }
    }
  }, {
    key: "outputText",
    value: function outputText(str) {
      try {
        if (typeof str != "string") throw TypeError("Incorrect type");
        this.textResult.value = "";
        this.textResult.value = str;
        return str;
      } catch (e) {
        alert(e.message);
      }
    }
  }]);

  return TextFormatter;
}();

exports.default = TextFormatter;

},{"./ControleValueModule.js":5}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJTY3JpcHRzL0JpbmFyeU9wZXJhdGlvbk1vZHVsZS5qcyIsIlNjcmlwdHMvQ2FsY3VsYXRvckJhc2VUZW1wbGF0ZU1vZHVsZS5qcyIsIlNjcmlwdHMvQ2FsY3VsYXRvck1vZHVsZS5qcyIsIlNjcmlwdHMvQ29udHJvbGVWYWx1ZUJhc2VUZW1wbGF0ZS5qcyIsIlNjcmlwdHMvQ29udHJvbGVWYWx1ZU1vZHVsZS5qcyIsIlNjcmlwdHMvRGF0YUZvcm1hdHRlck1vZHVsZS5qcyIsIlNjcmlwdHMvUmVnaXN0ckV2ZW50LmpzIiwiU2NyaXB0cy9TZWFyY2hFbGVtTWFzTW9kdWxlLmpzIiwiU2NyaXB0cy9Tb3J0TWFzTW9kdWxlLmpzIiwiU2NyaXB0cy9UYXNrc18xLTYoRVM2KS5qcyIsIlNjcmlwdHMvVGV4dEZvcm1hdHRlck1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDZ0VBOzs7Ozs7OztBQWhFQSxJQUFNLHFCQUFxQixjQUEzQjtBQUNBLElBQU0sc0JBQXNCLGVBQTVCOztJQUVNLGdCO0FBQ0osNEJBQVksR0FBWixFQUFpQixXQUFqQixFQUE4QixTQUE5QixFQUF5QyxTQUF6QyxFQUFvRDtBQUFBOztBQUNsRCxTQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0Q7Ozs7aUNBRVksRyxFQUFLO0FBQ2hCLFVBQUk7QUFDRixZQUFJLE9BQU8sV0FBWCxFQUF3QixNQUFNLFVBQVUsZ0JBQVYsQ0FBTjtBQUN4QixZQUFJLE1BQU0sRUFBVjtBQUFBLFlBQ0UsTUFBTSxDQURSO0FBRUEsZUFBTyxPQUFPLEdBQWQsRUFBbUI7QUFDakIsY0FBSSxNQUFNLENBQVYsRUFBYSxJQUFJLElBQUosQ0FBUyxNQUFNLEdBQU4sR0FB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QWhCLEdBQXdCLEVBQXhCO0FBQ0EsYUFBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXdCLEdBQXhCO0FBQ0EsZUFBTyxHQUFQO0FBQ0QsT0FMRCxDQUtFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsY0FBTSxFQUFFLE9BQVI7QUFDRDtBQUNGOzs7Ozs7a0JBR1ksYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IFNFTEVDVENPTlZFUlRUT0JJTiA9IFwiY29udmVydFRvQmluXCI7XHJcbmNvbnN0IFNFTEVDVENPTlZFUlRUT0RFU0MgPSBcImNvbnZlcnRUb0Rlc2NcIjtcclxuXHJcbmNsYXNzIEJpbmFyeU9wZXJhdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKG51bSwgc2VsZWN0VmFsdWUsIGVycm9yRWxlbSwgcmVzdWxFbGVtKSB7XHJcbiAgICB0aGlzLm51bSA9IG51bTtcclxuICAgIHRoaXMuc2VsZWN0VmFsdWUgPSBzZWxlY3RWYWx1ZTtcclxuICAgIHRoaXMuZXJyb3JFbGVtID0gZXJyb3JFbGVtO1xyXG4gICAgdGhpcy5yZXN1bEVsZW0gPSByZXN1bEVsZW07XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VG9CaW4obnVtKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAobnVtID09IFwidW5kZWZpbmVkXCIpIHRocm93IFR5cGVFcnJvcihcIkluY29ycmVjdCBkYXRlXCIpO1xyXG4gICAgICBsZXQgb3V0ID0gW10sXHJcbiAgICAgICAgYml0ID0gMTtcclxuICAgICAgd2hpbGUgKG51bSA+PSBiaXQpIHtcclxuICAgICAgICBpZiAobnVtID4gMCkgb3V0LnB1c2gobnVtICYgYml0ID8gMSA6IDApO1xyXG4gICAgICAgIGVsc2Ugb3V0LnB1c2gofihudW0gJiBiaXQgPyAxIDogMCkpO1xyXG4gICAgICAgIGJpdCA8PD0gMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3V0O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udmVydFRvRGVjKG51bSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKG51bSA9PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgZGF0ZVwiKTtcclxuICAgICAgbGV0IG91dCA9IDAsXHJcbiAgICAgICAgYml0ID0gMTtcclxuICAgICAgZm9yIChsZXQgdmFsdWUgb2YgbnVtKSB7XHJcbiAgICAgICAgb3V0ICs9IHZhbHVlID09IFwiMVwiID8gYml0IDogMDtcclxuICAgICAgICBiaXQgPDw9IDE7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG1hc1ZhbHVlID0gW107XHJcbiAgICAgIG1hc1ZhbHVlWzBdID0gb3V0O1xyXG4gICAgICByZXR1cm4gbWFzVmFsdWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RPcGVyYXRpb24oKSB7XHJcbiAgICBpZiAoIUNvbnRyb2xWYWx1ZS5jaGVja1ZhbHVlKHRoaXMubnVtLCB0aGlzLmVycm9yRWxlbSwgZmFsc2UpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlID09IFNFTEVDVENPTlZFUlRUT0JJTikge1xyXG4gICAgICB0aGlzLm91dHB1dE1hcyh0aGlzLmNvbnZlcnRUb0Jpbih0aGlzLm51bS52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gU0VMRUNUQ09OVkVSVFRPREVTQykge1xyXG4gICAgICB0aGlzLm91dHB1dE1hcyh0aGlzLmNvbnZlcnRUb0RlYyh0aGlzLm51bS52YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3V0cHV0TWFzKGFycikge1xyXG4gICAgdGhpcy5yZXN1bEVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgYXJyKSB0aGlzLnJlc3VsRWxlbS52YWx1ZSArPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmFyeU9wZXJhdGlvbnM7XHJcblxyXG5pbXBvcnQgQ29udHJvbFZhbHVlIGZyb20gXCIuL0NvbnRyb2xlVmFsdWVNb2R1bGUuanNcIjtcclxuIiwiY29uc3QgT1BFUkFUSU9OUExVUyA9IFwicGx1c1wiO1xyXG5jb25zdCBPUEVSQVRJT05NSU5VUyA9IFwibWludXNcIjtcclxuY29uc3QgT1BFUkFUSU9OQ09NUE9TSVRJT04gPSBcImNvbXBvc2l0aW9uXCI7XHJcbmNvbnN0IE9QRVJBVElPTkRJVklTSU9OID0gXCJkaXZpc2lvblwiO1xyXG5jb25zdCBPUEVSQVRJT05FWFBPTkFUSU9OID0gXCJleHBvbmVudGlhdGlvblwiO1xyXG5cclxuaW1wb3J0IENvbnRyb2xWYWx1ZSBmcm9tIFwiLi9Db250cm9sZVZhbHVlQmFzZVRlbXBsYXRlLmpzXCI7XHJcblxyXG5jbGFzcyBDYWxjdWxhdG9yIHtcclxuICBzdGF0aWMgc2VsZWN0T3BlcmF0aW9uKFxyXG4gICAgYSxcclxuICAgIGIsXHJcbiAgICBzZWxlY3RWYWx1ZSxcclxuICAgIHJlc3VsdEVsZW0sXHJcbiAgICBlcnJvckZpcnN0TnVtLFxyXG4gICAgZXJyb3JTZWNvbmROdW1cclxuICApIHtcclxuICAgIGlmICghQ29udHJvbFZhbHVlLmNoZWNrVmFsdWUoYSwgZXJyb3JGaXJzdE51bSwgdHJ1ZSwgYiwgZXJyb3JTZWNvbmROdW0pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGEgPSArYS52YWx1ZTtcclxuICAgIGIgPSArYi52YWx1ZTtcclxuICAgIGlmIChzZWxlY3RWYWx1ZSA9PSBPUEVSQVRJT05QTFVTKVxyXG4gICAgICBDYWxjdWxhdG9yLm91dHB1dFJlc3VsdChDYWxjdWxhdG9yLmFkZChhLCBiKSwgcmVzdWx0RWxlbSk7XHJcbiAgICBpZiAoc2VsZWN0VmFsdWUgPT0gT1BFUkFUSU9OTUlOVVMpXHJcbiAgICAgIENhbGN1bGF0b3Iub3V0cHV0UmVzdWx0KENhbGN1bGF0b3IubWludXMoYSwgYiksIHJlc3VsdEVsZW0pO1xyXG4gICAgaWYgKHNlbGVjdFZhbHVlID09IE9QRVJBVElPTkNPTVBPU0lUSU9OKVxyXG4gICAgICBDYWxjdWxhdG9yLm91dHB1dFJlc3VsdChDYWxjdWxhdG9yLmNvbXBvc2l0aW9uKGEsIGIpLCByZXN1bHRFbGVtKTtcclxuICAgIGlmIChzZWxlY3RWYWx1ZSA9PSBPUEVSQVRJT05ESVZJU0lPTilcclxuICAgICAgQ2FsY3VsYXRvci5vdXRwdXRSZXN1bHQoQ2FsY3VsYXRvci5kaXZpc2lvbihhLCBiKSwgcmVzdWx0RWxlbSk7XHJcbiAgICBpZiAoc2VsZWN0VmFsdWUgPT0gT1BFUkFUSU9ORVhQT05BVElPTilcclxuICAgICAgQ2FsY3VsYXRvci5vdXRwdXRSZXN1bHQoQ2FsY3VsYXRvci5leHBvbmVudGlhdGlvbihhLCBiKSwgcmVzdWx0RWxlbSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hlY2tUeXBlKGEsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkKGEsIGIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQ2FsY3VsYXRvci5jaGVja1R5cGUoYSwgYikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgc2hvdWxkIGJlIG51bWJlclwiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYSArIGI7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWludXMoYSwgYikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFDYWxjdWxhdG9yLmNoZWNrVHlwZShhLCBiKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudCBzaG91bGQgYmUgbnVtYmVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhIC0gYjtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb21wb3NpdGlvbihhLCBiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIUNhbGN1bGF0b3IuY2hlY2tUeXBlKGEsIGIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50IHNob3VsZCBiZSBudW1iZXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGEgKiBiO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpdmlzaW9uKGEsIGIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQ2FsY3VsYXRvci5jaGVja1R5cGUoYSwgYikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgc2hvdWxkIGJlIG51bWJlclwiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYSAvIGI7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZXhwb25lbnRpYXRpb24oYSwgYikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFDYWxjdWxhdG9yLmNoZWNrVHlwZShhLCBiKSlcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgc2hvdWxkIGJlIG51bWJlclwiKTtcclxuICAgICAgcmV0dXJuIE1hdGgucG93KGEsIGIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG91dHB1dFJlc3VsdChyZXN1bHQsIHJlc3VsdEVsZW0pIHtcclxuICAgIHJlc3VsdEVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgcmVzdWx0RWxlbS52YWx1ZSA9IE1hdGgucm91bmQocmVzdWx0ICogMTAwMDApIC8gMTAwMDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xyXG4iLCJpbXBvcnQgQ29udHJvbFZhbHVlIGZyb20gXCIuL0NvbnRyb2xlVmFsdWVCYXNlVGVtcGxhdGUuanNcIjtcclxuXHJcbmNvbnN0IE9QRVJBVElPTlBMVVMgPSBcInBsdXNcIjtcclxuY29uc3QgT1BFUkFUSU9OTUlOVVMgPSBcIm1pbnVzXCI7XHJcbmNvbnN0IE9QRVJBVElPTkNPTVBPU0lUSU9OID0gXCJjb21wb3NpdGlvblwiO1xyXG5jb25zdCBPUEVSQVRJT05ESVZJU0lPTiA9IFwiZGl2aXNpb25cIjtcclxuY29uc3QgT1BFUkFUSU9ORVhQT05BVElPTiA9IFwiZXhwb25lbnRpYXRpb25cIjtcclxuXHJcbmNvbnN0IE5BTUVGQU5DVElPTkFERCA9IFwiYWRkXCI7XHJcbmNvbnN0IE5BTUVGQUNUSU9OTUlOVVMgPSBcIm1pbnVzXCI7XHJcbmNvbnN0IE5BTUVGQU5DVElPTkNPTVBPU0lUSU9OID0gXCJjb21wb3NpdGlvblwiO1xyXG5jb25zdCBOQU1FRkFOQ1RJT05ESVZJU0lPTiA9IFwiZGl2aXNpb25cIjtcclxuY29uc3QgTkFNRUZBTkNUSU9ORVhQT05BVElPTiA9IFwiZXhwb25lbnRpYXRpb25cIjtcclxuXHJcbmNsYXNzIENhbGN1bGF0b3JNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKGNhY2hlVmFsdWUsIGNhY2hlRnVuY3Rpb24pIHtcclxuICAgIHRoaXMuY2FjaGVWYWx1ZSA9IGNhY2hlRnVuY3Rpb247XHJcbiAgICB0aGlzLmNhY2hlVmFsdWUgPSBjYWNoZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0T3BlcmF0aW9uKFxyXG4gICAgZmlyc3ROdW0sXHJcbiAgICBzZWNvbmROdW0sXHJcbiAgICBzZWxlY3RWYWx1ZSxcclxuICAgIHJlc3VsdCxcclxuICAgIGVycm9yRmlyc3ROdW0sXHJcbiAgICBlcnJvclNlY29uZE51bVxyXG4gICkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhQ29udHJvbFZhbHVlLmNoZWNrVmFsdWUoXHJcbiAgICAgICAgZmlyc3ROdW0sXHJcbiAgICAgICAgZXJyb3JGaXJzdE51bSxcclxuICAgICAgICBzZWNvbmROdW0sXHJcbiAgICAgICAgZXJyb3JTZWNvbmROdW1cclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIG9ialsxXSA9ICtmaXJzdE51bS52YWx1ZTtcclxuICAgIG9ialsyXSA9ICtzZWNvbmROdW0udmFsdWU7XHJcbiAgICBpZiAoc2VsZWN0VmFsdWUgPT0gT1BFUkFUSU9OUExVUykge1xyXG4gICAgICBvYmpbMF0gPSBOQU1FRkFOQ1RJT05BREQ7XHJcbiAgICAgIENhbGN1bGF0b3JNb2R1bGUub3V0cHV0UmVzdWx0KENhbGN1bGF0b3JNb2R1bGUuYWRkKG9iaiksIHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0VmFsdWUgPT0gT1BFUkFUSU9OTUlOVVMpIHtcclxuICAgICAgb2JqWzBdID0gTkFNRUZBQ1RJT05NSU5VUztcclxuICAgICAgQ2FsY3VsYXRvck1vZHVsZS5vdXRwdXRSZXN1bHQoQ2FsY3VsYXRvck1vZHVsZS5taW51cyhvYmopLCByZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdFZhbHVlID09IE9QRVJBVElPTkNPTVBPU0lUSU9OKSB7XHJcbiAgICAgIG9ialswXSA9IE5BTUVGQU5DVElPTkNPTVBPU0lUSU9OO1xyXG4gICAgICBDYWxjdWxhdG9yTW9kdWxlLm91dHB1dFJlc3VsdChDYWxjdWxhdG9yTW9kdWxlLmNvbXBvc2l0aW9uKG9iaiksIHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0VmFsdWUgPT0gT1BFUkFUSU9ORElWSVNJT04pIHtcclxuICAgICAgb2JqWzBdID0gTkFNRUZBTkNUSU9ORElWSVNJT047XHJcbiAgICAgIENhbGN1bGF0b3JNb2R1bGUub3V0cHV0UmVzdWx0KENhbGN1bGF0b3JNb2R1bGUuZGl2aXNpb24ob2JqKSwgcmVzdWx0KTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RWYWx1ZSA9PSBPUEVSQVRJT05FWFBPTkFUSU9OKSB7XHJcbiAgICAgIG9ialswXSA9IE5BTUVGQU5DVElPTkVYUE9OQVRJT047XHJcbiAgICAgIENhbGN1bGF0b3JNb2R1bGUub3V0cHV0UmVzdWx0KFxyXG4gICAgICAgIENhbGN1bGF0b3JNb2R1bGUuZXhwb25lbnRpYXRpb24ob2JqKSxcclxuICAgICAgICByZXN1bHRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaGVja1R5cGUob2JqKSB7XHJcbiAgICBpZiAodHlwZW9mIG9ialsxXSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBvYmpbMl0gPT0gXCJudW1iZXJcIikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGQob2JqKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIUNhbGN1bGF0b3JNb2R1bGUuY2hlY2tUeXBlKG9iaikpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgc2hvdWxkIGJlIG51bWJlclwiKTtcclxuICAgICAgcmV0dXJuIG9ialsxXSArIG9ialsyXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBtaW51cyhvYmopIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQ2FsY3VsYXRvck1vZHVsZS5jaGVja1R5cGUob2JqKSlcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBtYXN0IGJlIG51bWJlclwiKTtcclxuICAgICAgcmV0dXJuIG9ialsxXSAtIG9ialsyXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb21wb3NpdGlvbihvYmopIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQ2FsY3VsYXRvck1vZHVsZS5jaGVja1R5cGUob2JqKSlcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBzaG91bGQgYmUgbnVtYmVyXCIpO1xyXG4gICAgICByZXR1cm4gb2JqWzFdICogb2JqWzJdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpdmlzaW9uKG9iaikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFDYWxjdWxhdG9yTW9kdWxlLmNoZWNrVHlwZShvYmopKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IHNob3VsZCBiZSBudW1iZXJcIik7XHJcbiAgICAgIHJldHVybiBvYmpbMV0gLyBvYmpbMl07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZXhwb25lbnRpYXRpb24ob2JqKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIUNhbGN1bGF0b3JNb2R1bGUuY2hlY2tUeXBlKG9iaikpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgbWFzdCBiZSBudW1iZXJcIik7XHJcbiAgICAgIHJldHVybiBNYXRoLnBvdyhvYmpbMV0sIG9ialsyXSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb3V0cHV0UmVzdWx0KHJlc3VsdCwgcmVzdWx0RWxlbSkge1xyXG4gICAgcmVzdWx0RWxlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICByZXN1bHRFbGVtLnZhbHVlID0gTWF0aC5yb3VuZChyZXN1bHQgKiAxMDAwMCkgLyAxMDAwMDtcclxuICB9XHJcblxyXG4gIG1ha2VDYWNoaW5nVmFsdWUoZiwgY2FjaGUpIHtcclxuICAgIGxldCBjYWNoZVZhbHVlID0gY2FjaGU7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIShcclxuICAgICAgICAgIG9ialswXSArIG9ialsxXSArIG9ialsyXSBpbiBjYWNoZVZhbHVlIHx8XHJcbiAgICAgICAgICAob2JqWzBdICsgb2JqWzJdICsgb2JqWzFdIGluIGNhY2hlVmFsdWUgJiZcclxuICAgICAgICAgICAgb2JqWzBdID09IE5BTUVGQU5DVElPTkVYUE9OQVRJT04pXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICBjYWNoZVZhbHVlW29ialswXSArIG9ialsxXSArIG9ialsyXV0gPSBmLmNhbGwodGhpcywgb2JqKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAob2JqWzBdID09IE5BTUVGQU5DVElPTkVYUE9OQVRJT04pIHtcclxuICAgICAgICBpZiAoIShvYmpbMF0gKyBvYmpbMV0gKyBvYmpbMl0gaW4gdGhpcy5jYWNoZVZhbHVlKSkge1xyXG4gICAgICAgICAgY2FjaGVWYWx1ZVtvYmpbMF0gKyBvYmpbMV0gKyBvYmpbMl1dID0gZi5jYWxsKHRoaXMsIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYWNoZVZhbHVlW29ialswXSArIG9ialsxXSArIG9ialsyXV07XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGVmaW5pdGlvbkZ1bmN0aW9uQ2FjaGUoZiwgY2FjaGVGdW5jdGlvbnMpIHtcclxuICAgIHRoaXMuY2FjaGVGdW5jdGlvbnMgPSBjYWNoZUZ1bmN0aW9ucztcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBmbGFnLCBvYmpTZWxlY3RFbGVtKSB7XHJcbiAgICAgIGlmICghKG9ialswXSBpbiB0aGlzLmNhY2hlRnVuY3Rpb25zKSkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVGdW5jdGlvbnNbb2JqWzBdXSA9IGYuY2FsbCh0aGlzLCBvYmosIGZsYWcsIG9ialNlbGVjdEVsZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlRnVuY3Rpb25zW29ialswXV07XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGVmaW5pdGlvbkZ1bmN0aW9uKG9iaiwgZmxhZywgb2JqU2VsZWN0RWxlbSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChvYmpTZWxlY3RFbGVtICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIENhbGN1bGF0b3JNb2R1bGUuYWRkTmV3T3B0aW9uKG9ialswXSwgb2JqU2VsZWN0RWxlbSk7XHJcbiAgICAgICAgfSBlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgdmFsdWVcIik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG1hcyA9IFtvYmpbMV0sIG9ialsyXSwgb2JqWzNdXTtcclxuICAgICAgcmV0dXJuIG1hcy5qb2luKFwiIFwiKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGROZXdPcHRpb24oc3RyLCBvYmpTZWxlY3RFbGVtKSB7XHJcbiAgICBvYmpTZWxlY3RFbGVtLm9wdGlvbnNbb2JqU2VsZWN0RWxlbS5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKHN0ciwgc3RyKTtcclxuICB9XHJcblxyXG4gIGNhbGxGdW5jdGlvbihcclxuICAgIHN0cixcclxuICAgIGZpcnN0TnVtLFxyXG4gICAgc2Vjb25kTnVtLFxyXG4gICAgcmVzdWx0LFxyXG4gICAgZXJyb3JGaXJzdE51bSxcclxuICAgIGVycm9yU2Vjb25kTnVtXHJcbiAgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFDb250cm9sVmFsdWUuY2hlY2tWYWx1ZShcclxuICAgICAgICBmaXJzdE51bSxcclxuICAgICAgICBlcnJvckZpcnN0TnVtLFxyXG4gICAgICAgIHNlY29uZE51bSxcclxuICAgICAgICBlcnJvclNlY29uZE51bVxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG1hczEgPSBTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKVxyXG4gICAgICAuZGVmaW5pdGlvbkZ1bmN0aW9uKHN0ciwgZmFsc2UpXHJcbiAgICAgIC5zcGxpdChcIiBcIik7XHJcbiAgICBsZXQgbmV3RnVuYyA9IG5ldyBGdW5jdGlvbihtYXMxWzBdLCBtYXMxWzFdICsgXCIgXCIgKyBtYXMxWzJdKTtcclxuICAgIG5ld0Z1bmMgPSB0aGlzLm1ha2VDYWNoaW5nVmFsdWUobmV3RnVuYywgdGhpcy5jYWNoZVZhbHVlKTtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIG9ialswXSA9IHN0clswXTtcclxuICAgIG9ialsxXSA9ICtmaXJzdE51bS52YWx1ZTtcclxuICAgIG9ialsyXSA9ICtzZWNvbmROdW0udmFsdWU7XHJcbiAgICBDYWxjdWxhdG9yTW9kdWxlLm91dHB1dFJlc3VsdChuZXdGdW5jKG9iaiksIHJlc3VsdCk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgU2luZ2xldG9uID0gKGZ1bmN0aW9uKCkge1xyXG4gIGxldCBpbnN0YW5jZTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoKSB7XHJcbiAgICBsZXQgY2FjaGVGdW5jdGlvbiA9IHt9O1xyXG4gICAgbGV0IGNhY2hlVmFsdWUgPSB7fTtcclxuICAgIGxldCBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3JNb2R1bGUoY2FjaGVWYWx1ZSwgY2FjaGVGdW5jdGlvbik7XHJcbiAgICBjYWxjdWxhdG9yLmRlZmluaXRpb25GdW5jdGlvbiA9IGNhbGN1bGF0b3IuZGVmaW5pdGlvbkZ1bmN0aW9uQ2FjaGUoXHJcbiAgICAgIGNhbGN1bGF0b3IuZGVmaW5pdGlvbkZ1bmN0aW9uLFxyXG4gICAgICBjYWNoZUZ1bmN0aW9uXHJcbiAgICApO1xyXG4gICAgQ2FsY3VsYXRvck1vZHVsZS5hZGQgPSBjYWxjdWxhdG9yLm1ha2VDYWNoaW5nVmFsdWUoXHJcbiAgICAgIENhbGN1bGF0b3JNb2R1bGUuYWRkLFxyXG4gICAgICBjYWNoZVZhbHVlXHJcbiAgICApO1xyXG4gICAgQ2FsY3VsYXRvck1vZHVsZS5taW51cyA9IGNhbGN1bGF0b3IubWFrZUNhY2hpbmdWYWx1ZShcclxuICAgICAgQ2FsY3VsYXRvck1vZHVsZS5taW51cyxcclxuICAgICAgY2FjaGVWYWx1ZVxyXG4gICAgKTtcclxuICAgIENhbGN1bGF0b3JNb2R1bGUuY29tcG9zaXRpb24gPSBjYWxjdWxhdG9yLm1ha2VDYWNoaW5nVmFsdWUoXHJcbiAgICAgIENhbGN1bGF0b3JNb2R1bGUuY29tcG9zaXRpb24sXHJcbiAgICAgIGNhY2hlVmFsdWVcclxuICAgICk7XHJcbiAgICBDYWxjdWxhdG9yTW9kdWxlLmRpdmlzaW9uID0gY2FsY3VsYXRvci5tYWtlQ2FjaGluZ1ZhbHVlKFxyXG4gICAgICBDYWxjdWxhdG9yTW9kdWxlLmRpdmlzaW9uLFxyXG4gICAgICBjYWNoZVZhbHVlXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNhbGN1bGF0b3I7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SW5zdGFuY2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgaW5zdGFuY2UgPSBjcmVhdGVJbnN0YW5jZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xldG9uO1xyXG4iLCJjbGFzcyBDb250cm9sVmFsdWUge1xyXG4gIHN0YXRpYyBjaGVja1ZhbHVlKFxyXG4gICAgZmlyc3ROdW0sXHJcbiAgICBlcnJvckZpcnN0TnVtRWxlbSxcclxuICAgIHNlY29uZE51bSxcclxuICAgIGVycm9yU2Vjb25kTnVtRWxlbVxyXG4gICkge1xyXG4gICAgaWYgKCFmaXJzdE51bS52YWx1ZS5tYXRjaCgvXlxcZCskLykpIHtcclxuICAgICAgZXJyb3JGaXJzdE51bUVsZW0uaW5uZXJIVE1MID0gXCJJbmNvcnJlY3QgZGF0YTogXCI7XHJcbiAgICAgIGVycm9yRmlyc3ROdW1FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTppbmxpbmVcIik7XHJcbiAgICAgIGlmICghc2Vjb25kTnVtLnZhbHVlLm1hdGNoKC9eXFxkKyQvKSkge1xyXG4gICAgICAgIGVycm9yU2Vjb25kTnVtRWxlbS5pbm5lckhUTUwgPSBcIkluY29ycmVjdCBkYXRhOiBcIjtcclxuICAgICAgICBlcnJvclNlY29uZE51bUVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OmlubGluZVwiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvckZpcnN0TnVtRWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcclxuICAgIH1cclxuICAgIGlmICghc2Vjb25kTnVtLnZhbHVlLm1hdGNoKC9eXFxkKyQvKSkge1xyXG4gICAgICBlcnJvclNlY29uZE51bUVsZW0uaW5uZXJIVE1MID0gXCJJbmNvcnJlY3QgZGF0YVwiO1xyXG4gICAgICBlcnJvclNlY29uZE51bUVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVycm9yU2Vjb25kTnVtRWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFZhbHVlO1xyXG4iLCJjbGFzcyBDb250cm9sVmFsdWUge1xyXG4gIHN0YXRpYyBjaGVja1ZhbHVlKFxyXG4gICAgZmlyc3ROdW0sXHJcbiAgICBlcnJvckZpcnN0TnVtRWxlbSxcclxuICAgIGZsYWdDb3VudFZhbHVlLFxyXG4gICAgc2Vjb25kTnVtLFxyXG4gICAgZXJyb3JTZWNvbmROdW1FbGVtXHJcbiAgKSB7XHJcbiAgICBpZiAoZmxhZ0NvdW50VmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICBpZiAoIWZpcnN0TnVtLnZhbHVlLm1hdGNoKC9eXFxkKyQvKSkge1xyXG4gICAgICAgIGVycm9yRmlyc3ROdW1FbGVtLmlubmVySFRNTCA9IFwiSW5jb3JyZWN0IGRhdGE6IFwiO1xyXG4gICAgICAgIGVycm9yRmlyc3ROdW1FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTppbmxpbmVcIik7XHJcbiAgICAgICAgaWYgKCFzZWNvbmROdW0udmFsdWUubWF0Y2goL15cXGQrJC8pKSB7XHJcbiAgICAgICAgICBlcnJvclNlY29uZE51bUVsZW0uaW5uZXJIVE1MID0gXCJJbmNvcnJlY3QgZGF0YTogXCI7XHJcbiAgICAgICAgICBlcnJvclNlY29uZE51bUVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OmlubGluZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yRmlyc3ROdW1FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc2Vjb25kTnVtLnZhbHVlLm1hdGNoKC9eXFxkKyQvKSkge1xyXG4gICAgICAgIGVycm9yU2Vjb25kTnVtRWxlbS5pbm5lckhUTUwgPSBcIkluY29ycmVjdCBkYXRhXCI7XHJcbiAgICAgICAgZXJyb3JTZWNvbmROdW1FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvclNlY29uZE51bUVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICBpZiAoIWZpcnN0TnVtLnZhbHVlLm1hdGNoKC9bMC05XFxzXSsvKSkge1xyXG4gICAgICAgIGVycm9yRmlyc3ROdW1FbGVtLmlubmVySFRNTCA9IFwiSW5jb3JyZWN0IGRhdGE6IFwiO1xyXG4gICAgICAgIGVycm9yRmlyc3ROdW1FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTppbmxpbmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yRmlyc3ROdW1FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xWYWx1ZTtcclxuXHJcbiIsImNvbnN0IFBBUlNFVE9TSU1QTEVTVFIgPSBcInNpbXBsZVN0clwiO1xyXG5jb25zdCBQQVJTRVRPU1RSTU9OVEggPSBcInNpbXBsZVN0ck1vbnRoVG9TdHJcIjtcclxuY29uc3QgUEFSU0VUT0RBVEVPQkpFQ1QgPSBcInNpbXBsZVN0clRvRGF0ZU9iamVjdFwiO1xyXG5jb25zdCBQQVJTRVRPREFURU9CSkVDVEhZUEhFTkFURUQgPSBcInNpbXBsZVN0clRvRGF0ZU9iamVjdEh5cGhlbmF0ZWRcIjtcclxuY29uc3QgRlJPTU5PVyA9IFwiZnJvbU5vd1wiO1xyXG5jb25zdCBNU1RPREFURSA9IFwiTVN0b0RhdGVcIjtcclxuY29uc3QgREFURVRPTVMgPSBcIkRhdGVUb01TXCI7XHJcblxyXG5jbGFzcyBEYXRlRm9ybWF0dGVyIHtcclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsRGF0ZUVsZW0sIHNlbGVjdFZhbHVlKSB7XHJcbiAgICB0aGlzLmluaXRpYWxEYXRlRWxlbSA9IGluaXRpYWxEYXRlRWxlbTtcclxuICAgIHRoaXMuc2VsZWN0VmFsdWUgPSBzZWxlY3RWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBhcnNlVGVtcGxhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZSA9PSBQQVJTRVRPU0lNUExFU1RSKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0RGF0ZSh0aGlzLnBhcnNlRnVuY3Rpb25SZXR1cm5TdHIoU0VMRUNURk9STUFUXzEsIFwiWVktTU0tRERcIikpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gUEFSU0VUT1NUUk1PTlRIKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0RGF0ZShcclxuICAgICAgICB0aGlzLnBhcnNlRnVuY3Rpb25SZXR1cm5TdHIoU0VMRUNURk9STUFUXzEsIFNFTEVDVEZPUk1BVF8yKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gUEFSU0VUT0RBVEVPQkpFQ1QpIHtcclxuICAgICAgdGhpcy5vdXRwdXREYXRlKFxyXG4gICAgICAgIHRoaXMucGFyc2VGdW5jdGlvblJldHVyblN0cihTRUxFQ1RGT1JNQVRfMiwgU0VMRUNURk9STUFUXzIpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZSA9PSBQQVJTRVRPREFURU9CSkVDVEhZUEhFTkFURUQpIHtcclxuICAgICAgdGhpcy5vdXRwdXREYXRlKFxyXG4gICAgICAgIHRoaXMucGFyc2VGdW5jdGlvblJldHVyblN0cihcclxuICAgICAgICAgIFNFTEVDVEZPUk1BVF8yLFxyXG4gICAgICAgICAgU0VMRUNURk9STUFUXzIsXHJcbiAgICAgICAgICBTRUxFQ1RGT1JNQVRfNFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlID09IEZST01OT1cpIHtcclxuICAgICAgdGhpcy5vdXRwdXREYXRlKFxyXG4gICAgICAgIHRoaXMucGFyc2VGdW5jdGlvblJldHVyblN0cihTRUxFQ1RGT1JNQVRfMywgU0VMRUNURk9STUFUXzMpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZSA9PSBNU1RPREFURSkge1xyXG4gICAgICB0aGlzLm91dHB1dERhdGUodGhpcy5wYXJzZUZ1bmN0aW9uUmV0dXJuU3RyKFNFTEVDVEZPUk1BVF82KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZSA9PSBEQVRFVE9NUykge1xyXG4gICAgICB0aGlzLm91dHB1dERhdGUodGhpcy5wYXJzZUZ1bmN0aW9uUmV0dXJuU3RyKFNFTEVDVEZPUk1BVF83KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXJzZUZ1bmN0aW9uUmV0dXJuU3RyKGlucHV0U3RyLCByZWdFeHAsIHJlZ0V4cF8yKSB7XHJcbiAgICBsZXQgZGF0ZSxcclxuICAgICAgbWFzVmFsdWVGb3JCdWlsZERhdGUgPSBbXTtcclxuICAgIGNvbnN0IGxvY2FsZSA9IFwiZW4tdXNcIjtcclxuICAgIGlmIChcclxuICAgICAgaW5wdXRTdHIgPT0gU0VMRUNURk9STUFUXzEgJiZcclxuICAgICAgcmVnRXhwID09IFwiWVktTU0tRERcIiAmJlxyXG4gICAgICB0eXBlb2YgcmVnRXhwXzIgPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxEYXRlRWxlbS52YWx1ZS5yZXBsYWNlKFxyXG4gICAgICAgIC8oWzAtOV17Mn0pKFswLTldezJ9KShbMC05XXs0fSkvLFxyXG4gICAgICAgIFwiJDEtJDItJDNcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBpbnB1dFN0ciA9PSBTRUxFQ1RGT1JNQVRfMSAmJlxyXG4gICAgICByZWdFeHAgPT0gU0VMRUNURk9STUFUXzIgJiZcclxuICAgICAgdHlwZW9mIHJlZ0V4cF8yID09IFwidW5kZWZpbmVkXCJcclxuICAgICkge1xyXG4gICAgICBtYXNWYWx1ZUZvckJ1aWxkRGF0ZSA9IHRoaXMuaW5pdGlhbERhdGVFbGVtLnZhbHVlXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbMC05XXsyfSkoWzAtOV17Mn0pKFswLTldezR9KS8sIFwiJDEsJDIsJDNcIilcclxuICAgICAgICAuc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgLm1hcCh4ID0+ICt4KTtcclxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlWzJdLFxyXG4gICAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlWzFdIC0gMSxcclxuICAgICAgICBtYXNWYWx1ZUZvckJ1aWxkRGF0ZVswXVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgZGF0ZS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHsgbW9udGg6IFwibG9uZ1wiIH0pICtcclxuICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0U3RyID09IFNFTEVDVEZPUk1BVF8yICYmXHJcbiAgICAgIHJlZ0V4cCA9PSBTRUxFQ1RGT1JNQVRfMiAmJlxyXG4gICAgICB0eXBlb2YgcmVnRXhwXzIgPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgKSB7XHJcbiAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlID0gdGhpcy5pbml0aWFsRGF0ZUVsZW0udmFsdWVcclxuICAgICAgICAucmVwbGFjZSgvKFswLTldezR9KShbMC05XXsyfSkoWzAtOV17Mn0pLywgXCIkMSwkMiwkM1wiKVxyXG4gICAgICAgIC5zcGxpdChcIixcIilcclxuICAgICAgICAubWFwKHggPT4gK3gpO1xyXG4gICAgICBkYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgbWFzVmFsdWVGb3JCdWlsZERhdGVbMF0sXHJcbiAgICAgICAgbWFzVmFsdWVGb3JCdWlsZERhdGVbMV0gLSAxLFxyXG4gICAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlWzJdXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZGF0ZS5nZXREYXRlKCkgK1xyXG4gICAgICAgIFwiIFwiICtcclxuICAgICAgICBkYXRlLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgeyBtb250aDogXCJsb25nXCIgfSkgK1xyXG4gICAgICAgIFwiIFwiICtcclxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgaW5wdXRTdHIgPT0gU0VMRUNURk9STUFUXzIgJiZcclxuICAgICAgcmVnRXhwID09IFNFTEVDVEZPUk1BVF8yICYmXHJcbiAgICAgIHJlZ0V4cF8yID09IFNFTEVDVEZPUk1BVF81XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbERhdGVFbGVtLnZhbHVlLnJlcGxhY2UoXHJcbiAgICAgICAgLyhbMC05XXs0fSkoWzAtOV17Mn0pKFswLTldezJ9KS8sXHJcbiAgICAgICAgXCIkMi0kMy0kMVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0U3RyID09IFNFTEVDVEZPUk1BVF8zICYmXHJcbiAgICAgIHJlZ0V4cCA9PSBTRUxFQ1RGT1JNQVRfMyAmJlxyXG4gICAgICB0eXBlb2YgcmVnRXhwXzIgPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgKSB7XHJcbiAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlID0gdGhpcy5pbml0aWFsRGF0ZUVsZW0udmFsdWVcclxuICAgICAgICAucmVwbGFjZSgvKFswLTldezR9KS0oWzAtOV17Mn0pLShbMC05XXsyfSkvLCBcIiQxLCQyLCQzXCIpXHJcbiAgICAgICAgLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgIC5tYXAoeCA9PiAreCk7XHJcbiAgICAgIGxldCBpbml0aWFsRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlWzBdLFxyXG4gICAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlWzFdIC0gMSxcclxuICAgICAgICBtYXNWYWx1ZUZvckJ1aWxkRGF0ZVsyXVxyXG4gICAgICApLmdldFRpbWUoKTtcclxuICAgICAgbGV0IGRpZmYgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLSBpbml0aWFsRGF0ZSk7XHJcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkgLyAzMSAvIDEyKSArIFwiIHllYXJzIGFnb1wiO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0U3RyID09IFNFTEVDVEZPUk1BVF82KSB7XHJcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZSgrdGhpcy5pbml0aWFsRGF0ZUVsZW0udmFsdWUpO1xyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH1cclxuICAgIGlmIChpbnB1dFN0ciA9PSBTRUxFQ1RGT1JNQVRfNykge1xyXG4gICAgICBtYXNWYWx1ZUZvckJ1aWxkRGF0ZSA9IHRoaXMuaW5pdGlhbERhdGVFbGVtLnZhbHVlXHJcbiAgICAgICAgLnJlcGxhY2UoLyhbMC05XXs0fSktKFswLTldezJ9KS0oWzAtOV17Mn0pLywgXCIkMSwkMiwkM1wiKVxyXG4gICAgICAgIC5zcGxpdChcIixcIilcclxuICAgICAgICAubWFwKHggPT4gK3gpO1xyXG4gICAgICBkYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgbWFzVmFsdWVGb3JCdWlsZERhdGVbMF0sXHJcbiAgICAgICAgbWFzVmFsdWVGb3JCdWlsZERhdGVbMV0gLSAxLFxyXG4gICAgICAgIG1hc1ZhbHVlRm9yQnVpbGREYXRlWzJdXHJcbiAgICAgICkuZ2V0VGltZSgpO1xyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG91dHB1dERhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5pbml0aWFsRGF0ZUVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5pbml0aWFsRGF0ZUVsZW0udmFsdWUgPSBkYXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUZvcm1hdHRlcjtcclxuIiwiaW1wb3J0IEJpbmFyeU9wZXJhdGlvbnMgZnJvbSBcIi4vQmluYXJ5T3BlcmF0aW9uTW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgU29ydE1hcyBmcm9tIFwiLi9Tb3J0TWFzTW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgU2VhcmNoRWxlbU1hcyBmcm9tIFwiLi9TZWFyY2hFbGVtTWFzTW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yQmFzZVRlbXBsYXRlTW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgVGV4dEZvcm1hdHRlciBmcm9tIFwiLi9UZXh0Rm9ybWF0dGVyTW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgRGF0ZUZvcm1hdHRlciBmcm9tIFwiLi9EYXRhRm9ybWF0dGVyTW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuL0NhbGN1bGF0b3JNb2R1bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQmluYXJ5XCIpKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbkJpbmFyeVwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyBCaW5hcnlPcGVyYXRpb25zKFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtVG9Db252ZXJ0XCIpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiczdcIikudmFsdWUsXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvck51bVRvQ29udmVydFwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdENvbnZlcnRcIilcclxuICAgICAgKS5zZWxlY3RPcGVyYXRpb24oKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCdXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBuZXcgU29ydE1hcyhcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxNYXNGb3JTb3J0XCIpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiczJcIikudmFsdWUsXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvckluaXRpYWxNYXNcIiksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRNYXNTb3J0XCIpXHJcbiAgICAgICkuc2VsZWN0RnVuY3Rpb25Tb3J0KCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RPcGVyYXRpb25zXCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgQ2FsY3VsYXRvci5zZWxlY3RPcGVyYXRpb24oXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInM1XCIpLnZhbHVlLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JGaXJzdE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yU2Vjb25kTnVtXCIpXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUZXh0Rm9ybWF0dGVyXCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgbmV3IFRleHRGb3JtYXR0ZXIoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhSb3dzXCIpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4Q29sdW1uc1wiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIiksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzNlwiKS52YWx1ZSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yUm93c0NvdW50XCIpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JDb2x1bW5zQ291bnRcIiksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0UmVzdWx0XCIpXHJcbiAgICAgICkuY2hhbmdlVGV4dEZvcm1hdHRlcigpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uRGF0ZUZvcm1hdHRlclwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyBEYXRlRm9ybWF0dGVyKFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInMxXCIpLnZhbHVlXHJcbiAgICAgICkuc2VsZWN0UGFyc2VUZW1wbGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uU2VhcmNoRWxlbU1hc1wiKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyBTZWFyY2hFbGVtTWFzKFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhbE1hc0ZvclNlYXJjaFwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInMzXCIpLnZhbHVlLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JJbnB1dE1hc0ZvclNlYXJjaFwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFNlYXJjaE1hc1wiKVxyXG4gICAgICApLnNlbGVjdEZ1bmN0aW9uU2VhcmNoKCk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmluaXRpb25CdXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKS5kZWZpbml0aW9uRnVuY3Rpb24oXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdGdW5jdGlvblwiKS52YWx1ZS5zcGxpdChcIiBcIiksXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInM3XCIpXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25SZXN1bHRDdXN0b21GdW5jdGlvblwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIFNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpLmNhbGxGdW5jdGlvbihcclxuICAgICAgICBuZXcgQXJyYXkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzN1wiKS52YWx1ZSksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yRmlyc3ROdW1cIiksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclNlY29uZE51bVwiKVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uUmVzdWx0SW5pdGlhbEZ1bmNcIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKS5zZWxlY3RPcGVyYXRpb24oXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInM1XCIpLnZhbHVlLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JGaXJzdE51bVwiKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yU2Vjb25kTnVtXCIpXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH1cclxufSk7XHJcblxyXG4iLCJjb25zdCBTRUxFQ1RTVU1FTEVNID0gXCJzdW1PZkVsZW1NYXNJc01heF9PKG4pXCI7XHJcbmNvbnN0IFNFTEVDVFNVTUVMRU1fMiA9IFwic3VtT2ZFbGVtTWFzSXNNYXhfTyhuXjIpXCI7XHJcbmNvbnN0IFNFTEVDVFNFUkNFTEVNID0gXCJzZWFyY2hNYXhNaW5NZWRpdW1FbGVtTWFzXCI7XHJcbmNvbnN0IFNFTEVDVFNFUVVBTkNFTUFTID0gXCJhc2NlbmRpbmdTZXF1ZW5jZU1hc1wiO1xyXG5cclxuaW1wb3J0IENvbnRyb2xWYWx1ZSBmcm9tIFwiLi9Db250cm9sZVZhbHVlTW9kdWxlLmpzXCI7XHJcblxyXG5jbGFzcyBTZWFyY2hFbGVtTWFzTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihhcnIsIHNlbGVjdFZhbHVlLCBlcnJvckVsZW0sIHJlc3VsdEVsZW0pIHtcclxuICAgIHRoaXMuYXJyRWxlbSA9IGFycjtcclxuICAgIHRoaXMuc2VsZWN0VmFsdWUgPSBzZWxlY3RWYWx1ZTtcclxuICAgIHRoaXMuZXJyb3JFbGVtID0gZXJyb3JFbGVtO1xyXG4gICAgdGhpcy5yZXN1bHRFbGVtID0gcmVzdWx0RWxlbTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRNYXhTdWJTdW1PbihhcnIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB0aHJvdyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgdHlwZVwiKTtcclxuICAgICAgbGV0IG91dEFyciA9IFtdO1xyXG4gICAgICBsZXQgc3VtID0gMCxcclxuICAgICAgICBtYXhTdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCB2YWx1ZSBvZiBhcnIpIHtcclxuICAgICAgICBzdW0gKz0gK3ZhbHVlO1xyXG4gICAgICAgIGlmIChzdW0gPiBtYXhTdW0pIG1heFN1bSA9IHN1bTtcclxuICAgICAgICBpZiAoc3VtIDwgMCkgc3VtID0gMDtcclxuICAgICAgfVxyXG4gICAgICBvdXRBcnJbMF0gPSBtYXhTdW07XHJcbiAgICAgIHJldHVybiBvdXRBcnI7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0TWF4U3ViU3VtU3F1YXJlT25fMihhcnIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB0aHJvdyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgdHlwZVwiKTtcclxuICAgICAgbGV0IG91dEFyciA9IFtdO1xyXG4gICAgICBsZXQgbWF4U3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgc3VtICs9ICthcnJbal07XHJcbiAgICAgICAgICBpZiAoc3VtID4gbWF4U3VtKSBtYXhTdW0gPSBzdW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG91dEFyclswXSA9IG1heFN1bTtcclxuICAgICAgcmV0dXJuIG91dEFycjtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZWFyY2hNYXhNaW5NZWRpdW1FbGVtTWFzKGFycikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHRocm93IFR5cGVFcnJvcihcIkluY29ycmVjdCB0eXBlXCIpO1xyXG4gICAgICBsZXQgbWFzTWluTWF4TWVkaXVtRWxlbU1hcyA9IFtdLFxyXG4gICAgICAgIG1pbkVsLFxyXG4gICAgICAgIG1heEVsLFxyXG4gICAgICAgIG1lZGl1bUVsO1xyXG4gICAgICBhcnIgPSBuZXcgU29ydE1hcygpLnF1aWNrU29ydChhcnIpO1xyXG4gICAgICBtaW5FbCA9IGFyclswXTtcclxuICAgICAgbWF4RWwgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoYXJyLmxlbmd0aCAlIDIgPT0gMCkge1xyXG4gICAgICAgIG1lZGl1bUVsID0gKGFyclthcnIubGVuZ3RoIC8gMl0gKyBhcnJbYXJyLmxlbmd0aCAvIDIgKyAxXSkgLyAyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lZGl1bUVsID0gYXJyWyhhcnIubGVuZ3RoICsgMSkgLyAyXTtcclxuICAgICAgfVxyXG4gICAgICBtYXNNaW5NYXhNZWRpdW1FbGVtTWFzWzBdID0gbWluRWw7XHJcbiAgICAgIG1hc01pbk1heE1lZGl1bUVsZW1NYXNbMV0gPSBtYXhFbDtcclxuICAgICAgbWFzTWluTWF4TWVkaXVtRWxlbU1hc1syXSA9IG1lZGl1bUVsO1xyXG4gICAgICByZXR1cm4gbWFzTWluTWF4TWVkaXVtRWxlbU1hcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZWFyY2hBc2NlbmRpbmdTZXF1ZW5jZU1hcyhhcnIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB0aHJvdyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgdHlwZVwiKTtcclxuICAgICAgbGV0IG91dHB1dE1hcyA9IFtdO1xyXG4gICAgICBsZXQgY291bnQ7XHJcbiAgICAgIGxldCBjb3VudEFyciA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChhcnJbaiAtIDFdIDwgYXJyW2pdKSB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmIChhcnJbal0gPT0gYXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICBjb3VudEFyci5wdXNoKGNvdW50KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY291bnRBcnIucHVzaChjb3VudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGNvdW50QXJyKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudEFyci5pbmRleE9mKG1heFZhbHVlKTtcclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4LCBqID0gMDsgaSA8PSBpbmRleCArIG1heFZhbHVlOyBpKyssIGorKykge1xyXG4gICAgICAgIG91dHB1dE1hc1tqXSA9IGFycltpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3V0cHV0TWFzO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0RnVuY3Rpb25TZWFyY2goKSB7XHJcbiAgICBpZiAoIUNvbnRyb2xWYWx1ZS5jaGVja1ZhbHVlKHRoaXMuYXJyRWxlbSwgdGhpcy5lcnJvckVsZW0sIGZhbHNlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgbWFzRnJvbUFyciA9IHRoaXMuYXJyRWxlbS52YWx1ZS5zcGxpdChcIiBcIikubWFwKHggPT4gK3gpO1xyXG4gICAgbGV0IG91dHB1dE1hcyA9IFtdO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gU0VMRUNUU1VNRUxFTSkge1xyXG4gICAgICBvdXRwdXRNYXMgPSBTZWFyY2hFbGVtTWFzTW9kdWxlLmdldE1heFN1YlN1bU9uKG1hc0Zyb21BcnIsIFwiU3VtXCIpO1xyXG4gICAgICB0aGlzLm91dHB1dE1hcyhvdXRwdXRNYXMsIFwiU3VtXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gU0VMRUNUU1VNRUxFTV8yKSB7XHJcbiAgICAgIG91dHB1dE1hcyA9IFNlYXJjaEVsZW1NYXNNb2R1bGUuZ2V0TWF4U3ViU3VtU3F1YXJlT25fMihtYXNGcm9tQXJyKTtcclxuICAgICAgdGhpcy5vdXRwdXRNYXMob3V0cHV0TWFzLCBcIlN1bVwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlID09IFNFTEVDVFNFUkNFTEVNKSB7XHJcbiAgICAgIG91dHB1dE1hcyA9IFNlYXJjaEVsZW1NYXNNb2R1bGUuc2VhcmNoTWF4TWluTWVkaXVtRWxlbU1hcyhtYXNGcm9tQXJyKTtcclxuICAgICAgdGhpcy5vdXRwdXRNYXMob3V0cHV0TWFzLCBcIk1pbiwgbWF4LCBtZWRpdW1cIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZSA9PSBTRUxFQ1RTRVFVQU5DRU1BUykge1xyXG4gICAgICBvdXRwdXRNYXMgPSBTZWFyY2hFbGVtTWFzTW9kdWxlLnNlYXJjaEFzY2VuZGluZ1NlcXVlbmNlTWFzKG1hc0Zyb21BcnIpO1xyXG4gICAgICB0aGlzLm91dHB1dE1hcyhvdXRwdXRNYXMsIFwiQXNjZW5kaW5nIFNlcXVlbmNlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3V0cHV0TWFzKGFyciwgc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgdGhyb3cgVHlwZUVycm9yKFwiSW5jb3JyZWN0IHR5cGVcIik7XHJcbiAgICAgIHRoaXMucmVzdWx0RWxlbS52YWx1ZSA9IHN0ciArIFwiOiBcIjtcclxuICAgICAgZm9yIChsZXQgdmFsdWUgb2YgYXJyKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRFbGVtLnZhbHVlICs9IHZhbHVlICsgXCIgXCI7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEVsZW1NYXNNb2R1bGU7XHJcblxyXG4iLCJjb25zdCBTRUxFQ1RRVUlDS1NPUlQgPSBcInF1aWNrU29ydFwiO1xyXG5jb25zdCBTRUxFQ1RJTlNFUlRTT1JUID0gXCJpbnNlcnRTb3J0XCI7XHJcbmNvbnN0IFNFTEVDVFNFTEVDVElPTlNPUlQgPSBcInNlbGVjdGlvblNvcnRcIjtcclxuY29uc3QgQlVCQkxFU09SVCA9IFwiYnViYmxlU29ydFwiO1xyXG5cclxuaW1wb3J0IENvbnRyb2xWYWx1ZSBmcm9tIFwiLi9Db250cm9sZVZhbHVlTW9kdWxlLmpzXCI7XHJcblxyXG5jbGFzcyBTb3J0TWFzIHtcclxuICBjb25zdHJ1Y3RvcihhcnIsIHNlbGVjdFZhbHVlLCBlcnJvckVsZW0sIHJlc3VsdEVsZW0pIHtcclxuICAgIHRoaXMuc2VsZWN0VmFsdWUgPSBzZWxlY3RWYWx1ZTtcclxuICAgIHRoaXMuYXJyID0gYXJyO1xyXG4gICAgdGhpcy5lcnJvckVsZW0gPSBlcnJvckVsZW07XHJcbiAgICB0aGlzLnJlc3VsdEVsZW0gPSByZXN1bHRFbGVtO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0aW9uU29ydChhcnIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgc2hvdWxkIGJlIGFycmF5XCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB2ID0gYXJyW2ldLFxyXG4gICAgICAgICAgaiA9IGkgLSAxO1xyXG4gICAgICAgIHdoaWxlIChqID49IDAgJiYgYXJyW2pdID4gdikge1xyXG4gICAgICAgICAgYXJyW2ogKyAxXSA9IGFycltqXTtcclxuICAgICAgICAgIGotLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyW2ogKyAxXSA9IHY7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFycjtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdGlvblNvcnQoYXJyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50IHNob3VsZCBiZSBhcnJheVwiKTtcclxuICAgICAgbGV0IHRlbXA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlNaW4gPSBpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChhcnJbal0gPCBhcnJbaU1pbl0pIGlNaW4gPSBqO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaU1pbiAhPSBpKSB7XHJcbiAgICAgICAgICB0ZW1wID0gYXJyW2lNaW5dO1xyXG4gICAgICAgICAgYXJyW2lNaW5dID0gYXJyW2ldO1xyXG4gICAgICAgICAgYXJyW2ldID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFycjtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1YmJsZVNvcnQoYXJyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50IHNob3VsZCBiZSBhcnJheVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChhcnJbaV0gPiBhcnJbal0pIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGFycltpXSA9IGFycltqXTtcclxuICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFycjtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHF1aWNrU29ydChhcnIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgc2hvdWxkIGJlIGFycmF5XCIpO1xyXG4gICAgICBpZiAoYXJyLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHBpdm90ID0gYXJyWzBdLFxyXG4gICAgICAgIGxlZnQgPSBbXSxcclxuICAgICAgICByaWdodCA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhcnJbaV0gPCBwaXZvdCA/IGxlZnQucHVzaChhcnJbaV0pIDogcmlnaHQucHVzaChhcnJbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnF1aWNrU29ydChsZWZ0KS5jb25jYXQocGl2b3QsIHRoaXMucXVpY2tTb3J0KHJpZ2h0KSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGdW5jdGlvblNvcnQoKSB7XHJcbiAgICBpZiAoIUNvbnRyb2xWYWx1ZS5jaGVja1ZhbHVlKHRoaXMuYXJyLCB0aGlzLmVycm9yRWxlbSwgZmFsc2UpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5pdGlhbE1hcyA9IHRoaXMuYXJyLnZhbHVlLnNwbGl0KFwiIFwiKS5tYXAoeCA9PiAreCksXHJcbiAgICAgIHNvcnRNYXM7XHJcbiAgICBpZiAoaW5pdGlhbE1hcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gU0VMRUNUUVVJQ0tTT1JUKSB7XHJcbiAgICAgICAgc29ydE1hcyA9IHRoaXMucXVpY2tTb3J0KGluaXRpYWxNYXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlID09IFNFTEVDVElOU0VSVFNPUlQpIHtcclxuICAgICAgICBzb3J0TWFzID0gdGhpcy5pbnNlcnRpb25Tb3J0KGluaXRpYWxNYXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlID09IFNFTEVDVFNFTEVDVElPTlNPUlQpIHtcclxuICAgICAgICBzb3J0TWFzID0gdGhpcy5zZWxlY3Rpb25Tb3J0KGluaXRpYWxNYXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlID09IEJVQkJMRVNPUlQpIHtcclxuICAgICAgICBzb3J0TWFzID0gdGhpcy5idWJibGVTb3J0KGluaXRpYWxNYXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3V0cHV0U29ydE1hcyhzb3J0TWFzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG91dHB1dFNvcnRNYXMoYXJyKSB7XHJcbiAgICB0aGlzLnJlc3VsdEVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgYXJyKSB7XHJcbiAgICAgIHRoaXMucmVzdWx0RWxlbS52YWx1ZSArPSB2YWx1ZSArIFwiIFwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydE1hczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vUmVnaXN0ckV2ZW50LmpzXCI7XHJcblxyXG5pbXBvcnQgXCIuL1NvcnRNYXNNb2R1bGUuanNcIjtcclxuXHJcbmltcG9ydCBcIi4vRGF0YUZvcm1hdHRlck1vZHVsZS5qc1wiO1xyXG5cclxuaW1wb3J0IFwiLi9TZWFyY2hFbGVtTWFzTW9kdWxlLmpzXCI7XHJcblxyXG5pbXBvcnQgXCIuL1RleHRGb3JtYXR0ZXJNb2R1bGUuanNcIjtcclxuXHJcbmltcG9ydCBcIi4vQ2FsY3VsYXRvckJhc2VUZW1wbGF0ZU1vZHVsZS5qc1wiO1xyXG5cclxuaW1wb3J0IEJpbmFyeU9wZXJhdGlvbnMgZnJvbSBcIi4vQmluYXJ5T3BlcmF0aW9uTW9kdWxlLmpzXCI7XHJcblxyXG4iLCJjb25zdCBTRUxFQ1RURVhURk9STUFUQ0hBUldSQVAgPSBcImNoYXJXcmFwXCI7XHJcbmNvbnN0IFNFTEVDVFRFWFRGT1JNQVRXT1JEV1JBUCA9IFwid29yZFdyYXBcIjtcclxuY29uc3QgU0VMRUNUVEVYVEZPUk1BVFNFTlRFTkNFV1JBUCA9IFwic2VudGVuY2VXcmFwXCI7XHJcbmNvbnN0IFdJVEhPVVRXUkFQID0gXCJ3aXRob3V0V3JhcFwiO1xyXG5cclxuaW1wb3J0IENvbnRyb2xWYWx1ZSBmcm9tIFwiLi9Db250cm9sZVZhbHVlTW9kdWxlLmpzXCI7XHJcblxyXG5jbGFzcyBUZXh0Rm9ybWF0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG1heFJvd3MsXHJcbiAgICBtYXhDb2x1bW5zLFxyXG4gICAgdGV4dCxcclxuICAgIHNlbGVjdFZhbHVlLFxyXG4gICAgZXJyb3JSb3dzQ291bnQsXHJcbiAgICBlcnJvckNvbHVtbnNDb3VudCxcclxuICAgIHRleHRSZXN1bHRcclxuICApIHtcclxuICAgIHRoaXMubWF4Um93cyA9IG1heFJvd3M7XHJcbiAgICB0aGlzLm1heENvbHVtbnMgPSBtYXhDb2x1bW5zO1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuc2VsZWN0VmFsdWUgPSBzZWxlY3RWYWx1ZTtcclxuICAgIHRoaXMuZXJyb3JSb3dzQ291bnQgPSBlcnJvclJvd3NDb3VudDtcclxuICAgIHRoaXMuZXJyb3JDb2x1bW5zQ291bnQgPSBlcnJvckNvbHVtbnNDb3VudDtcclxuICAgIHRoaXMudGV4dFJlc3VsdCA9IHRleHRSZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUZXh0Rm9ybWF0dGVyKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhQ29udHJvbFZhbHVlLmNoZWNrVmFsdWUoXHJcbiAgICAgICAgdGhpcy5tYXhSb3dzLFxyXG4gICAgICAgIHRoaXMuZXJyb3JSb3dzQ291bnQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICB0aGlzLm1heENvbHVtbnMsXHJcbiAgICAgICAgdGhpcy5lcnJvckNvbHVtbnNDb3VudFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gU0VMRUNUVEVYVEZPUk1BVENIQVJXUkFQKSB7XHJcbiAgICAgIHRoaXMudGV4dC52YWx1ZSA9IHRoaXMub3V0cHV0VGV4dChcclxuICAgICAgICB0aGlzLnRleHQudmFsdWUubWF0Y2goLyhcXHd7MX0pL2cpLmpvaW4oXCJcXG5cIilcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlID09IFNFTEVDVFRFWFRGT1JNQVRXT1JEV1JBUCkge1xyXG4gICAgICB0aGlzLnRleHQudmFsdWUgPSB0aGlzLm91dHB1dFRleHQodGhpcy50ZXh0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlxcblwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZSA9PSBTRUxFQ1RURVhURk9STUFUU0VOVEVOQ0VXUkFQKSB7XHJcbiAgICAgIHRoaXMudGV4dC52YWx1ZSA9IHRoaXMub3V0cHV0VGV4dChcclxuICAgICAgICB0aGlzLnRleHQudmFsdWUubWF0Y2goLyhcXHcrLikvZykuam9pbihcIlxcblwiKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VmFsdWUgPT0gV0lUSE9VVFdSQVApIHtcclxuICAgICAgdGhpcy50ZXh0LnNldEF0dHJpYnV0ZShcIndyYXBcIiwgXCJvZmZcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgc3RyO1xyXG4gICAgaWYgKHRoaXMubWF4Um93cy52YWx1ZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5tYXhSb3dzLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgc3RyID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICBsZXQgb3V0cHV0TWFzID0gW107XHJcbiAgICAgIGlmIChzdHIubGVuZ3RoIC0gK3RoaXMubWF4Um93cy52YWx1ZSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICt0aGlzLm1heFJvd3MudmFsdWU7IGkrKykge1xyXG4gICAgICAgICAgb3V0cHV0TWFzW2ldID0gc3RyW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIgPSB0aGlzLm91dHB1dFRleHQob3V0cHV0TWFzLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ciA9IHRoaXMub3V0cHV0VGV4dChzdHIuam9pbihcIlxcblwiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heENvbHVtbnMudmFsdWUgIT0gdW5kZWZpbmVkICYmIHRoaXMubWF4Q29sdW1ucy52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0VGV4dChcclxuICAgICAgICBzdHJcclxuICAgICAgICAgIC5zcGxpdCgvXFxuL2dtKVxyXG4gICAgICAgICAgLm1hcCh4ID0+IHguc3Vic3RyKDAsICt0aGlzLm1heENvbHVtbnMudmFsdWUpKVxyXG4gICAgICAgICAgLmpvaW4oXCJcXG5cIilcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG91dHB1dFRleHQoc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIHN0ciAhPSBcInN0cmluZ1wiKSB0aHJvdyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgdHlwZVwiKTtcclxuICAgICAgdGhpcy50ZXh0UmVzdWx0LnZhbHVlID0gXCJcIjtcclxuICAgICAgdGhpcy50ZXh0UmVzdWx0LnZhbHVlID0gc3RyO1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZvcm1hdHRlcjtcclxuXHJcbiJdfQ==
