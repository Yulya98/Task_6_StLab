class ControlValue {
    static checkValue(
        firstNum,
        errorFirstNumElem,
        flagCountValue,
        secondNum,
        errorSecondNumElem
    ) {
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
}

export default  ControlValue;