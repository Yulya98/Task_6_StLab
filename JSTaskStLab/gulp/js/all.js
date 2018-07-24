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
            new _BinaryOperationModule2.default(document.getElementById('numToConvert'), document.getElementById('s7').value, document.getElementById('errorNumToConvert'), document.getElementById('resultConvert')).selectOperation();
        };
        document.getElementById("sortButton").onclick = function () {
            new _SortMasModule2.default(document.getElementById('initialMasForSort'), document.getElementById('s2').value, document.getElementById('errorInitialMas'), document.getElementById('resultMasSort')).selectFunctionSort();
        };
        document.getElementById("selectOperations").onclick = function () {
            _CalculatorBaseTemplateModule2.default.selectOperation(document.getElementById('firstNum'), document.getElementById('secondNum'), document.getElementById('s5').value, document.getElementById('result'), document.getElementById('errorFirstNum'), document.getElementById('errorSecondNum'));
        };
        document.getElementById("TextFormatter").onclick = function () {
            new _TextFormatterModule2.default(document.getElementById('maxRows'), document.getElementById('maxColumns'), document.getElementById('text'), document.getElementById('s6').value, document.getElementById('errorRowsCount'), document.getElementById('errorColumnsCount'), document.getElementById('textResult')).changeTextFormatter();
        };
        document.getElementById("buttonDateFormatter").onclick = function () {
            new _DataFormatterModule2.default(document.getElementById('date'), document.getElementById('s1').value).selectParseTemplate();
        };
        document.getElementById("buttonSearchElemMas").onclick = function () {
            new _SearchElemMasModule2.default(document.getElementById('initialMasForSearch'), document.getElementById('s3').value, document.getElementById('errorInputMasForSearch'), document.getElementById('resultSearchMas')).selectFunctionSearch();
        };
    } else {
        document.getElementById("definitionButton").onclick = function () {
            _CalculatorModule2.default.getInstance().definitionFunction(document.getElementById('newFunction').value.split(' '), true, document.getElementById('s7'));
        };
        document.getElementById("buttonResultCustomFunction").onclick = function () {
            _CalculatorModule2.default.getInstance().callFunction(new Array(document.getElementById('s7').value), document.getElementById('firstNum'), document.getElementById('secondNum'), document.getElementById('result'), document.getElementById('errorFirstNum'), document.getElementById('errorSecondNum'));
        };
        document.getElementById("buttonResultInitialFunc").onclick = function () {
            _CalculatorModule2.default.getInstance().selectOperation(document.getElementById('firstNum'), document.getElementById('secondNum'), document.getElementById('s5').value, document.getElementById('result'), document.getElementById('errorFirstNum'), document.getElementById('errorSecondNum'));
        };
    }
};
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