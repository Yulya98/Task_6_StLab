export default  window.onload = function () {
    if(document.getElementById("buttonBinary")) {
        document.getElementById("buttonBinary").onclick = function () {
            new BinaryOperations(document.getElementById('numToConvert'), document.getElementById('s7').value, document.getElementById('errorNumToConvert'), document.getElementById('resultConvert')).selectOperation();
        }
        document.getElementById("sortButton").onclick = function () {
            new SortMas(document.getElementById('initialMasForSort'), document.getElementById('s2').value, document.getElementById('errorInitialMas'), document.getElementById('resultMasSort')).selectFunctionSort();
        }
        document.getElementById("selectOperations").onclick = function () {
            Calculator.selectOperation(document.getElementById('firstNum'), document.getElementById('secondNum'), document.getElementById('s5').value, document.getElementById('result'), document.getElementById('errorFirstNum'), document.getElementById('errorSecondNum'));
        }
        document.getElementById("TextFormatter").onclick = function () {
            new TextFormatter(document.getElementById('maxRows'), document.getElementById('maxColumns'), document.getElementById('text'), document.getElementById('s6').value, document.getElementById('errorRowsCount'), document.getElementById('errorColumnsCount'), document.getElementById('textResult')).changeTextFormatter();
        }
        document.getElementById("buttonDateFormatter").onclick = function () {
            new DateFormatter(document.getElementById('date'), document.getElementById('s1').value).selectParseTemplate();
        }
        document.getElementById("buttonSearchElemMas").onclick = function () {
            new SearchElemMas(document.getElementById('initialMasForSearch'), document.getElementById('s3').value, document.getElementById('errorInputMasForSearch'), document.getElementById('resultSearchMas')).selectFunctionSearch();
        }
    }
    else {
        document.getElementById("definitionButton").onclick = function () {
            Singleton.getInstance().definitionFunction(document.getElementById('newFunction').value.split(' '), true, document.getElementById('s7'));
        }
        document.getElementById("buttonResultCustomFunction").onclick = function () {
            Singleton.getInstance().callFunction(new Array(document.getElementById('s7').value), document.getElementById('firstNum'), document.getElementById('secondNum'), document.getElementById('result'), document.getElementById('errorFirstNum'), document.getElementById('errorSecondNum'));
        }
        document.getElementById("buttonResultInitialFunc").onclick = function () {
            Singleton.getInstance().selectOperation(document.getElementById('firstNum'), document.getElementById('secondNum'), document.getElementById('s5').value, document.getElementById('result'), document.getElementById('errorFirstNum'), document.getElementById('errorSecondNum'));
        }
    }
}

import BinaryOperations from './BinaryOperationModule';

import SortMas from './SortMasModule';

import SearchElemMas from './SearchElemMasModule';

import Calculator from './CalculatorBaseTemplateModule';

import TextFormatter from './TextFormatterModule';

import DateFormatter from './DataFormatterModule';

import  Singleton from './CalculatorModule';

