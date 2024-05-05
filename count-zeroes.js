function countZeroes(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

		if (arr[middleIdx] === 0) {
			if (middleIdx === 0 || arr[middleIdx - 1] === 1) {
				return (arr.length - middleIdx);
			} else {
				rightIdx = middleIdx - 1;
			}
		} else {
			leftIdx = middleIdx + 1;
		}
	}
	return 0;
}
module.exports = countZeroes