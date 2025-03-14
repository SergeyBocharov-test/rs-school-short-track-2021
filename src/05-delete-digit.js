/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maximalNumber = 0;
  for (let i = 0; i < n.toString().length; i++) {
    const nSplit = n.toString().split('');
    nSplit.splice(i, 1);
    if (+nSplit.join('') > maximalNumber) maximalNumber = +nSplit.join('');
  }
  return maximalNumber;
}

module.exports = deleteDigit;
