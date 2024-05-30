function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

const arr = [64, 25, 12, 22, 11];

console.log(`Unsorted array: [${arr}]`); // [64, 25, 12, 22, 11];

console.log(`Sorted array: [${selectionSort(arr)}]`); // [11,12,22,25,64];