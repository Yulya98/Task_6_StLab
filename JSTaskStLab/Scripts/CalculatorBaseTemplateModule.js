const OPERATIONPLUS = "plus";
const OPERATIONMINUS = "minus";
const OPERATIONCOMPOSITION = "composition";
const OPERATIONDIVISION = "division";
const OPERATIONEXPONATION = "exponentiation";

class Calculator {
    static selectOperation(
        a,
        b,
        selectValue,
        resultElem,
        errorFirstNum,
        errorSecondNum
    ) {
        if (!ControlValue.checkValue(a, errorFirstNum, true, b, errorSecondNum)) {
            return false;
        }
        a = +a.value;
        b = +b.value;
        if (selectValue == OPERATIONPLUS)
            Calculator.outputResult(Calculator.add(a, b), resultElem);
        if (selectValue == OPERATIONMINUS)
            Calculator.outputResult(Calculator.minus(a, b), resultElem);
        if (selectValue == OPERATIONCOMPOSITION)
            Calculator.outputResult(Calculator.composition(a, b), resultElem);
        if (selectValue == OPERATIONDIVISION)
            Calculator.outputResult(Calculator.division(a, b), resultElem);
        if (selectValue == OPERATIONEXPONATION)
            Calculator.outputResult(Calculator.exponentiation(a, b), resultElem);
    }

    static checkType(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            return true;
        }
        return false;
    }

    static add(a, b) {
        try {
            if (!Calculator.checkType(a, b)) {
                throw new TypeError("Argument should be number");
            }
            return a + b;
        } catch (e) {
            alert(e.message);
        }
    }

    static minus(a, b) {
        try {
            if (!Calculator.checkType(a, b)) {
                throw new TypeError("Argument should be number");
            }
            return a - b;
        } catch (e) {
            alert(e.message);
        }
    }

    static composition(a, b) {
        try {
            if (!Calculator.checkType(a, b)) {
                throw new TypeError("Argument should be number");
            }
            return a * b;
        } catch (e) {
            alert(e.message);
        }
    }

    static division(a, b) {
        try {
            if (!Calculator.checkType(a, b)) {
                throw new TypeError("Argument should be number");
            }
            return a / b;
        } catch (e) {
            alert(e.message);
        }
    }

    static exponentiation(a, b) {
        try {
            if (!Calculator.checkType(a, b))
                throw new TypeError("Argument should be number");
            return Math.pow(a, b);
        } catch (e) {
            alert(e.message);
        }
    }

    static outputResult(result, resultElem) {
        resultElem.value = "";
        resultElem.value = Math.round(result * 10000) / 10000;
    }
}

module.exports = Calculator;

import ControlValue from './ControleValueModule.js';