const SELECTSUMELEM = "sumOfElemMasIsMax_O(n)";
const SELECTSUMELEM_2 = "sumOfElemMasIsMax_O(n^2)";
const SELECTSERCELEM = "searchMaxMinMediumElemMas";
const SELECTSEQUANCEMAS = "ascendingSequenceMas";


class SearchElemMasModule {
    constructor(arr, selectValue, errorElem, resultElem) {
        this.arrElem = arr;
        this.selectValue = selectValue;
        this.errorElem = errorElem;
        this.resultElem = resultElem;
    }

    static getMaxSubSumOn(arr) {
        try {
            if (!Array.isArray(arr)) throw TypeError("Incorrect type");
            let outArr = [];
            let sum = 0,
                maxSum = 0;
            for (let value of arr) {
                sum += +value;
                if (sum > maxSum) maxSum = sum;
                if (sum < 0) sum = 0;
            }
            outArr[0] = maxSum;
            return outArr;
        } catch (e) {
            alert(e.message);
        }
    }

    static getMaxSubSumSquareOn_2(arr) {
        try {
            if (!Array.isArray(arr)) throw TypeError("Incorrect type");
            let outArr = [];
            let maxSum = 0;
            for (let i = 0; i < arr.length; i++) {
                let sum = 0;
                for (let j = i; j < arr.length; j++) {
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

    static searchMaxMinMediumElemMas(arr) {
        try {
            if (!Array.isArray(arr)) throw TypeError("Incorrect type");
            let masMinMaxMediumElemMas = [],
                minEl,
                maxEl,
                mediumEl;
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

    static searchAscendingSequenceMas(arr) {
        try {
            if (!Array.isArray(arr)) throw TypeError("Incorrect type");
            let outputMas = [];
            let count;
            let countArr = [];
            for (let i = 0; i < arr.length; i++) {
                count = 0;
                for (let j = i + 1; j < arr.length; j++) {
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
            const maxValue = Math.max.apply(null, countArr);
            const index = countArr.indexOf(maxValue);
            for (let i = index, j = 0; i <= index + maxValue; i++, j++) {
                outputMas[j] = arr[i];
            }
            return outputMas;
        } catch (e) {
            alert(e.message);
        }
    }

    selectFunctionSearch() {
        if (!ControlValue.checkValue(this.arrElem, this.errorElem, false)) {
            return false;
        }
        let masFromArr = this.arrElem.value.split(" ").map(x => +x);
        let outputMas = [];
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

    outputMas(arr, str) {
        try {
            if (!Array.isArray(arr)) throw TypeError("Incorrect type");
            this.resultElem.value = str + ": ";
            for (let value of arr) {
                this.resultElem.value += value + " ";
            }
        } catch (e) {
            alert(e.message);
        }
    }
}

module.exports = SearchElemMasModule;

import ControlValue from './ControleValueModule.js';