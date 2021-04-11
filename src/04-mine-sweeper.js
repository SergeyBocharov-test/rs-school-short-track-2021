/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixNew = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixNew.push(new Array(matrix[i].length).fill(0));
  }
  if (matrixNew.length > 0) {
    const rows = matrix.length - 1;
    const columns = matrix[0].length - 1;
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= columns; c++) {
        if (matrix[r][c]) {
          if (r > 0) {
            if (c > 0) matrixNew[r - 1][c - 1]++;
            matrixNew[r - 1][c]++;
            if (c < columns) matrixNew[r - 1][c + 1]++;
          }
          if (c > 0) matrixNew[r][c - 1]++;
          if (c < columns) matrixNew[r][c + 1]++;
          if (r < rows) {
            if (c > 0) matrixNew[r + 1][c - 1]++;
            matrixNew[r + 1][c]++;
            if (c < columns) matrixNew[r + 1][c + 1]++;
          }
        }
      }
    }
  }
  return matrixNew;
}

module.exports = minesweeper;
