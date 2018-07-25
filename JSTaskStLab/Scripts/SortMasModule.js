const SELECTQUICKSORT = "quickSort";
const SELECTINSERTSORT = "insertSort";
const SELECTSELECTIONSORT = "selectionSort";
const BUBBLESORT = "bubbleSort";

class SortMas {
  constructor(arr, selectValue, errorElem, resultElem) {
    this.selectValue = selectValue;
    this.arr = arr;
    this.errorElem = errorElem;
    this.resultElem = resultElem;
  }

  insertionSort(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
      for (let i = 0; i < arr.length; i++) {
        let v = arr[i],
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

  selectionSort(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
      let temp;
      for (let i = 0; i < arr.length; i++) {
        let iMin = i;

        for (let j = i + 1; j < arr.length; j++) {
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

  bubbleSort(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let temp = arr[i];
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

  quickSort(arr) {
    try {
      if (!Array.isArray(arr)) throw new TypeError("Argument should be array");
      if (arr.length <= 1) {
        return arr;
      }

      let pivot = arr[0],
        left = [],
        right = [];

      for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
      }
      return this.quickSort(left).concat(pivot, this.quickSort(right));
    } catch (e) {
      alert(e.message);
    }
  }

  selectFunctionSort() {
    if (!ControlValue.checkValue(this.arr, this.errorElem, false)) {
      return false;
    }

    let initialMas = this.arr.value.split(" ").map(x => +x),
      sortMas;
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

  outputSortMas(arr) {
    this.resultElem.value = "";
    for (let value of arr) {
      this.resultElem.value += value + " ";
    }
  }
}

export default SortMas;

import ControlValue from "./ControleValueModule.js";
