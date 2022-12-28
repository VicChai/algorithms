// A mountain array is defined as an array that

// has at least 3 elements
// has an element with the largest value called "peak", with index k. The array elements strickly increase from the first element to A[k], and then strickly decreases from A[k + 1] to the last element of the array. Thus creating a "mountain" of numbers.
// That is, given A[0]<...<A[k-1]<A[k]>A[k+1]>...>A[n-1], we need to find the index k. Note that the peak element is neither the first nor the last element of the array.

// Find the index of the peak element. Assume there is only one peak element.

// Input: 0 1 2 3 2 1 0

// Output: 3

// Explanation: the largest element is 3 and its index is 3.

function peakOfMountainArray(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let right = arr.length - 1;
  let idx = -1;
  let alen = arr.length;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid === alen - 1 || arr[mid] > arr[mid + 1]) {
      idx = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return idx;
}
