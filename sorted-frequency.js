function sortedFrequency(arr, num) {
	let start = findStart(arr, num);
  let stop = findStop(arr, num);
  if (start === -1 || stop === -1) return -1;
  else return (stop - start) + 1;
}

function findStart(arr, num) {
	let start = 0;
	let stop = arr.length - 1;

	while (stop >= start) {
		let middleIdx = Math.floor((start + stop) / 2);

		if (
			(middleIdx === 0 || arr[middleIdx - 1] !== num) &&
			arr[middleIdx] === num
		) {
			start = middleIdx;
			console.log(start);
			return start;
		} else if (arr[middleIdx] >= num) {
			stop = middleIdx - 1;
		} else if (arr[middleIdx] < num) {
			start = middleIdx + 1;
		}
  }
  return -1;
}

function findStop(arr, num) {
	let start = 0;
	let stop = arr.length - 1;

	while (stop >= start) {
		let middleIdx = Math.floor((start + stop) / 2);

		if (
			(middleIdx === arr.length - 1 || arr[middleIdx + 1] !== num) &&
			arr[middleIdx] === num
		) {
			stop = middleIdx;
			return stop;
		} else if (arr[middleIdx] <= num) {
			start = middleIdx + 1;
		} else if (arr[middleIdx] > num) {
			stop = middleIdx - 1;
		}
  }
  return -1;
}

module.exports = sortedFrequency;
