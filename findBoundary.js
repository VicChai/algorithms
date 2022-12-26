function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundary_idx = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid]) {
      boundary_idx = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundary_idx;
}
