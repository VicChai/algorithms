function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}
