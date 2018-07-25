class ControlValue {
  static checkValue(
    firstNum,
    errorFirstNumElem,
    secondNum,
    errorSecondNumElem
  ) {
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
}

export default ControlValue;
