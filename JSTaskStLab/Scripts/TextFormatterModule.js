const SELECTTEXTFORMATCHARWRAP = "charWrap";
const SELECTTEXTFORMATWORDWRAP = "wordWrap";
const SELECTTEXTFORMATSENTENCEWRAP = "sentenceWrap";
const WITHOUTWRAP = "withoutWrap";

import ControlValue from "./ControleValueModule.js";

class TextFormatter {
  constructor(
    maxRows,
    maxColumns,
    text,
    selectValue,
    errorRowsCount,
    errorColumnsCount,
    textResult
  ) {
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.text = text;
    this.selectValue = selectValue;
    this.errorRowsCount = errorRowsCount;
    this.errorColumnsCount = errorColumnsCount;
    this.textResult = textResult;
  }

  changeTextFormatter() {
    if (
      !ControlValue.checkValue(
        this.maxRows,
        this.errorRowsCount,
        true,
        this.maxColumns,
        this.errorColumnsCount
      )
    ) {
      return false;
    }
    if (this.selectValue == SELECTTEXTFORMATCHARWRAP) {
      this.text.value = this.outputText(
        this.text.value.match(/(\w{1})/g).join("\n")
      );
    }
    if (this.selectValue == SELECTTEXTFORMATWORDWRAP) {
      this.text.value = this.outputText(this.text.value.replace(/\s/g, "\n"));
    }
    if (this.selectValue == SELECTTEXTFORMATSENTENCEWRAP) {
      this.text.value = this.outputText(
        this.text.value.match(/(\w+.)/g).join("\n")
      );
    }
    if (this.selectValue == WITHOUTWRAP) {
      this.text.setAttribute("wrap", "off");
    }
    let str;
    if (this.maxRows.value != undefined && this.maxRows.value != "") {
      str = this.text.value.split("\n");
      let outputMas = [];
      if (str.length - +this.maxRows.value > 0) {
        for (let i = 0; i < +this.maxRows.value; i++) {
          outputMas[i] = str[i];
        }
        str = this.outputText(outputMas.join("\n"));
      } else {
        str = this.outputText(str.join("\n"));
      }
    }
    if (this.maxColumns.value != undefined && this.maxColumns.value != "") {
      this.outputText(
        str
          .split(/\n/gm)
          .map(x => x.substr(0, +this.maxColumns.value))
          .join("\n")
      );
    }
  }

  outputText(str) {
    try {
      if (typeof str != "string") throw TypeError("Incorrect type");
      this.textResult.value = "";
      this.textResult.value = str;
      return str;
    } catch (e) {
      alert(e.message);
    }
  }
}

export default TextFormatter;

