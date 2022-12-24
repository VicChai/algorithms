function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = i;
    while (current > 0 && arr[current] < arr[current - 1]) {
      const temp = arr[current];
      arr[current] = arr[current - 1];
      arr[current - 1] = temp;
      current--;
    }
  }
  return arr;
}
