import Calculator from "./CalculatorBaseTemplateModule";

const OPERATIONPLUS = "plus";
const OPERATIONMINUS = "minus";
const OPERATIONCOMPOSITION = "composition";
const OPERATIONDIVISION = "division";
const OPERATIONEXPONATION = "exponentiation";

const NAMEFANCTIONADD = "add";
const NAMEFACTIONMINUS = "minus";
const NAMEFANCTIONCOMPOSITION = "composition";
const NAMEFANCTIONDIVISION = "division";
const NAMEFANCTIONEXPONATION = "exponentiation";

class CalculatorModule {
  constructor(cacheValue, cacheFunction) {
    this.cacheValue = cacheFunction;
    this.cacheValue = cacheValue;
  }

  selectOperation(
    firstNum,
    secondNum,
    selectValue,
    result,
    errorFirstNum,
    errorSecondNum
  ) {
    if (
      !ControlValue.checkValue(
        firstNum,
        errorFirstNum,
        secondNum,
        errorSecondNum
      )
    ) {
      return false;
    }
    let obj = {};
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
      CalculatorModule.outputResult(
        CalculatorModule.exponentiation(obj),
        result
      );
    }
  }

  static checkType(obj) {
    if (typeof obj[1] == "number" && typeof obj[2] == "number") {
      return true;
    }
    return false;
  }

  static add(obj) {
    try {
      if (!CalculatorModule.checkType(obj))
        throw new Error("Argument should be number");
      return obj[1] + obj[2];
    } catch (e) {
      alert(e.message);
    }
  }

  static minus(obj) {
    try {
      if (!CalculatorModule.checkType(obj))
        throw new Error("Argument mast be number");
      return obj[1] - obj[2];
    } catch (e) {
      alert(e.message);
    }
  }

  static composition(obj) {
    try {
      if (!CalculatorModule.checkType(obj))
        throw new Error("Argument should be number");
      return obj[1] * obj[2];
    } catch (e) {
      alert(e.message);
    }
  }

  static division(obj) {
    try {
      if (!CalculatorModule.checkType(obj))
        throw new Error("Argument should be number");
      return obj[1] / obj[2];
    } catch (e) {
      alert(e.message);
    }
  }

  static exponentiation(obj) {
    try {
      if (!CalculatorModule.checkType(obj))
        throw new Error("Argument mast be number");
      return Math.pow(obj[1], obj[2]);
    } catch (e) {
      alert(e.message);
    }
  }

  static outputResult(result, resultElem) {
    resultElem.value = "";
    resultElem.value = Math.round(result * 10000) / 10000;
  }

  makeCachingValue(f, cache) {
    let cacheValue = cache;

    return function(obj) {
      if (
        !(
          obj[0] + obj[1] + obj[2] in cacheValue ||
          (obj[0] + obj[2] + obj[1] in cacheValue &&
            obj[0] == NAMEFANCTIONEXPONATION)
        )
      ) {
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

  definitionFunctionCache(f, cacheFunctions) {
    this.cacheFunctions = cacheFunctions;

    return function(obj, flag, objSelectElem) {
      if (!(obj[0] in this.cacheFunctions)) {
        this.cacheFunctions[obj[0]] = f.call(this, obj, flag, objSelectElem);
      }
      return this.cacheFunctions[obj[0]];
    };
  }

  definitionFunction(obj, flag, objSelectElem) {
    try {
      if (flag == true) {
        if (objSelectElem != "undefined") {
          CalculatorModule.addNewOption(obj[0], objSelectElem);
        } else throw new TypeError("Incorrect value");
      }
      let mas = [obj[1], obj[2], obj[3]];
      return mas.join(" ");
    } catch (e) {
      alert(e.message);
    }
  }

  static addNewOption(str, objSelectElem) {
    objSelectElem.options[objSelectElem.options.length] = new Option(str, str);
  }

  callFunction(
    str,
    firstNum,
    secondNum,
    result,
    errorFirstNum,
    errorSecondNum
  ) {
    if (
      !ControlValue.checkValue(
        firstNum,
        errorFirstNum,
        secondNum,
        errorSecondNum
      )
    ) {
      return false;
    }
    let mas1 = Singleton.getInstance()
      .definitionFunction(str, false)
      .split(" ");
    let newFunc = new Function(mas1[0], mas1[1] + " " + mas1[2]);
    newFunc = this.makeCachingValue(newFunc, this.cacheValue);
    let obj = {};
    obj[0] = str[0];
    obj[1] = +firstNum.value;
    obj[2] = +secondNum.value;
    CalculatorModule.outputResult(newFunc(obj), result);
  }
}

let Singleton = (function() {
  let instance;

  function createInstance() {
    let cacheFunction = {};
    let cacheValue = {};
    let calculator = new CalculatorModule(cacheValue, cacheFunction);
    calculator.definitionFunction = calculator.definitionFunctionCache(
      calculator.definitionFunction,
      cacheFunction
    );
    CalculatorModule.add = calculator.makeCachingValue(
      CalculatorModule.add,
      cacheValue
    );
    CalculatorModule.minus = calculator.makeCachingValue(
      CalculatorModule.minus,
      cacheValue
    );
    CalculatorModule.composition = calculator.makeCachingValue(
      CalculatorModule.composition,
      cacheValue
    );
    CalculatorModule.division = calculator.makeCachingValue(
      CalculatorModule.division,
      cacheValue
    );
    return calculator;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

export default Singleton;

import ControlValue from "./ControleValueBaseTemplate.js";
