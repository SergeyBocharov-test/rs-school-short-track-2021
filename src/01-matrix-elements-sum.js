/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum (matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (i > 0) {
      for (let v = 0; v < matrix[i].length; v++) {
        if ((matrix[i - 1])[v] > 0) sum += (matrix[i])[v];
      }
    } else sum += matrix[i].reduce((acc, val) => acc + val);
  }
  return sum;
}

module.exports = getMatrixElementsSum;
