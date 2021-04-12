/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // v2 - 16ms
  let head = 0;
  let tail = array.length - 1;
  let middle;
  let index = -1;
  let found = false;
  while (found === false && head <= tail) {
    middle = Math.floor((head + tail) / 2);
    if (array[middle] === value) {
      found = true;
      index = middle;
    }
    if (array[middle] > value) {
      tail = middle - 1;
    } else head = middle + 1;
  }
  return index;
}

module.exports = findIndex;

/*
 *  v1 - 632ms
 *  function binarySearchForIndex(arr, headIndex) {
 *    const middle = Math.floor(arr.length / 2);
 *    if (arr[middle] === value) {
 *      return middle + headIndex;
 *    }
 *    if (arr[middle] < value && arr.length > 1) {
 *      return binarySearchForIndex(arr.splice(middle, arr.length - middle), middle + headIndex);
 *    }
 *    if (arr[middle] > value && arr.length > 1) {
 *      return binarySearchForIndex(arr.splice(0, middle), headIndex);
 *    }
 *    return -1;
 *  }
 *  return binarySearchForIndex(array, 0);
 */
