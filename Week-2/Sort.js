// Sort the Array

let arr = [8, 20, -2, 4, -6, 9, 12];

//=================================  Selection Sort  ==================================

function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log("selection sort : ", SelectionSort(arr));

// ============================  Bubble Sort  =========================================

function BubbleSort(arr) {
  let swapped;
  do {
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log("BubbleSort : ", BubbleSort(arr));

// =======================================  Inseration sorty  ====================================

function InserationSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let inseration = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[i] < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = inseration;
  }
  return arr;
}

console.log("iseration sort : ", InserationSort(arr));

//=======================================  Quick Sort  ===========================================

function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let left = [];
  let rigth = [];
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      rigth.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(rigth)];
}

console.log("Quicksort : ", QuickSort(arr));

// =================================  Marge Sort ============================

function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return Sort(MergeSort(left), MergeSort(right));
}

function Sort(left, right) {
  sortedArray = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArray.push(right.shift());
    } else {
      sortedArray.push(left.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log("Margesort : ", MergeSort(arr));
