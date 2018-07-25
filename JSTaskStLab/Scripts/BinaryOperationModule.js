const SELECTCONVERTTOBIN = "convertToBin";
const SELECTCONVERTTODESC = "convertToDesc";

class BinaryOperations {
  constructor(num, selectValue, errorElem, resulElem) {
    this.num = num;
    this.selectValue = selectValue;
    this.errorElem = errorElem;
    this.resulElem = resulElem;
  }

  convertToBin(num) {
    try {
      if (num == "undefined") throw TypeError("Incorrect date");
      let out = [],
        bit = 1;
      while (num >= bit) {
        if (num > 0) out.push(num & bit ? 1 : 0);
        else out.push(~(num & bit ? 1 : 0));
        bit <<= 1;
      }
      return out;
    } catch (e) {
      alert(e.message);
    }
  }

  convertToDec(num) {
    try {
      if (num == "undefined") throw TypeError("Incorrect date");
      let out = 0,
        bit = 1;
      for (let value of num) {
        out += value == "1" ? bit : 0;
        bit <<= 1;
      }
      let masValue = [];
      masValue[0] = out;
      return masValue;
    } catch (e) {
      alert(e.message);
    }
  }

  selectOperation() {
    if (!ControlValue.checkValue(this.num, this.errorElem, false)) {
      return false;
    }
    if (this.selectValue == SELECTCONVERTTOBIN) {
      this.outputMas(this.convertToBin(this.num.value));
    }
    if (this.selectValue == SELECTCONVERTTODESC) {
      this.outputMas(this.convertToDec(this.num.value));
    }
  }

  outputMas(arr) {
    this.resulElem.value = "";
    for (let value of arr) this.resulElem.value += value;
  }
}

export default BinaryOperations;

import ControlValue from "./ControleValueModule.js";
