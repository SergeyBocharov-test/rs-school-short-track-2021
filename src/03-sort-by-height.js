/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrValid = [];
  const arrValidIndex = [];
  const arrRearranged = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== (-1)) {
      arrValid.push(arr[i]);
      arrValidIndex.push(i);
    }
  }
  if (arrValid.length > 0) {
    arrValid.sort((a, b) => a - b);
    for (let i = 0; i < arrValid.length; i++) {
      arrRearranged[(arrValidIndex[i])] = arrValid[i];
    }
  }
  return arrRearranged;
}

module.exports = sortByHeight;
