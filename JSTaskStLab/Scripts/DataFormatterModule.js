const PARSETOSIMPLESTR = "simpleStr";
const PARSETOSTRMONTH = "simpleStrMonthToStr";
const PARSETODATEOBJECT = "simpleStrToDateObject";
const PARSETODATEOBJECTHYPHENATED = "simpleStrToDateObjectHyphenated";
const FROMNOW = "fromNow";
const MSTODATE = "MStoDate";
const DATETOMS = "DateToMS";

class DateFormatter {
  constructor(initialDateElem, selectValue) {
    this.initialDateElem = initialDateElem;
    this.selectValue = selectValue;
  }

  selectParseTemplate() {
    if (this.selectValue == PARSETOSIMPLESTR) {
      this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_1, "YY-MM-DD"));
    }
    if (this.selectValue == PARSETOSTRMONTH) {
      this.outputDate(
        this.parseFunctionReturnStr(SELECTFORMAT_1, SELECTFORMAT_2)
      );
    }
    if (this.selectValue == PARSETODATEOBJECT) {
      this.outputDate(
        this.parseFunctionReturnStr(SELECTFORMAT_2, SELECTFORMAT_2)
      );
    }
    if (this.selectValue == PARSETODATEOBJECTHYPHENATED) {
      this.outputDate(
        this.parseFunctionReturnStr(
          SELECTFORMAT_2,
          SELECTFORMAT_2,
          SELECTFORMAT_4
        )
      );
    }
    if (this.selectValue == FROMNOW) {
      this.outputDate(
        this.parseFunctionReturnStr(SELECTFORMAT_3, SELECTFORMAT_3)
      );
    }
    if (this.selectValue == MSTODATE) {
      this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_6));
    }
    if (this.selectValue == DATETOMS) {
      this.outputDate(this.parseFunctionReturnStr(SELECTFORMAT_7));
    }
  }

  parseFunctionReturnStr(inputStr, regExp, regExp_2) {
    let date,
      masValueForBuildDate = [];
    const locale = "en-us";
    if (
      inputStr == SELECTFORMAT_1 &&
      regExp == "YY-MM-DD" &&
      typeof regExp_2 == "undefined"
    ) {
      return this.initialDateElem.value.replace(
        /([0-9]{2})([0-9]{2})([0-9]{4})/,
        "$1-$2-$3"
      );
    }
    if (
      inputStr == SELECTFORMAT_1 &&
      regExp == SELECTFORMAT_2 &&
      typeof regExp_2 == "undefined"
    ) {
      masValueForBuildDate = this.initialDateElem.value
        .replace(/([0-9]{2})([0-9]{2})([0-9]{4})/, "$1,$2,$3")
        .split(",")
        .map(x => +x);
      date = new Date(
        masValueForBuildDate[2],
        masValueForBuildDate[1] - 1,
        masValueForBuildDate[0]
      );
      return (
        date.getDate() +
        " " +
        date.toLocaleString(locale, { month: "long" }) +
        " " +
        date.getFullYear()
      );
    }
    if (
      inputStr == SELECTFORMAT_2 &&
      regExp == SELECTFORMAT_2 &&
      typeof regExp_2 == "undefined"
    ) {
      masValueForBuildDate = this.initialDateElem.value
        .replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, "$1,$2,$3")
        .split(",")
        .map(x => +x);
      date = new Date(
        masValueForBuildDate[0],
        masValueForBuildDate[1] - 1,
        masValueForBuildDate[2]
      );
      return (
        date.getDate() +
        " " +
        date.toLocaleString(locale, { month: "long" }) +
        " " +
        date.getFullYear()
      );
    }
    if (
      inputStr == SELECTFORMAT_2 &&
      regExp == SELECTFORMAT_2 &&
      regExp_2 == SELECTFORMAT_5
    ) {
      return this.initialDateElem.value.replace(
        /([0-9]{4})([0-9]{2})([0-9]{2})/,
        "$2-$3-$1"
      );
    }
    if (
      inputStr == SELECTFORMAT_3 &&
      regExp == SELECTFORMAT_3 &&
      typeof regExp_2 == "undefined"
    ) {
      masValueForBuildDate = this.initialDateElem.value
        .replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$1,$2,$3")
        .split(",")
        .map(x => +x);
      let initialDate = new Date(
        masValueForBuildDate[0],
        masValueForBuildDate[1] - 1,
        masValueForBuildDate[2]
      ).getTime();
      let diff = Math.floor(Date.now() - initialDate);
      return Math.floor(diff / (1000 * 60 * 60 * 24) / 31 / 12) + " years ago";
    }
    if (inputStr == SELECTFORMAT_6) {
      date = new Date(+this.initialDateElem.value);
      return date;
    }
    if (inputStr == SELECTFORMAT_7) {
      masValueForBuildDate = this.initialDateElem.value
        .replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$1,$2,$3")
        .split(",")
        .map(x => +x);
      date = new Date(
        masValueForBuildDate[0],
        masValueForBuildDate[1] - 1,
        masValueForBuildDate[2]
      ).getTime();
      return date;
    }
  }

  outputDate(date) {
    this.initialDateElem.value = "";
    this.initialDateElem.value = date;
  }
}

export default DateFormatter;
