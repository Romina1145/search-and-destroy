'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let foundStatus = false;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			foundStatus = true;
		}
	}
	return foundStatus;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch