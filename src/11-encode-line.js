/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// str - string
function encodeLine(string) {
  const stringEncoded = [];
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    // console.log('- - -');
    // console.log(`i : ${i} >> ${string[i]}`);
    if (string[i] === string[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        stringEncoded.push(`${counter}${string[i]}`);
      } else stringEncoded.push(`${string[i]}`);
      counter = 1;
    }
    // console.log(`counter : ${counter}`);
  }
  return stringEncoded.join('');
}

module.exports = encodeLine;
