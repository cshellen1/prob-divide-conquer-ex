function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[left] < arr[right]) return left;
    
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[mid] < arr[mid - 1]) {
      return mid;
    }

    if (arr[left] > arr[mid]) {
      right = mid - 1;
    }
    
    if (arr[left] < arr[mid]) {
      left = mid + 1;
    }
  }
}
module.exports = findRotationCount;
