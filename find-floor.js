function findFloor(arr, num) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === num) return arr[mid];

		if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
			return arr[mid - 1];
		}

		if (num < arr[mid]) {
			right = mid - 1;
		} else if (num > arr[mid] && num <= arr[right]) {
			left = mid + 1;
		} else if (num > arr[mid] && num > arr[right]) {
			return arr[right];
		}
	}
	return -1;
}
module.exports = findFloor;
