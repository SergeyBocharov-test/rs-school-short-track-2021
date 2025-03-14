/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// n - number
function getSumOfDigits(number) {
  let numberNew = 0;
  for (let i = 0; i < number.toString().length; i++) {
    numberNew += +number.toString()[i];
  }
  if (numberNew.toString().length > 1) numberNew = getSumOfDigits(numberNew);
  return numberNew;
}

module.exports = getSumOfDigits;
