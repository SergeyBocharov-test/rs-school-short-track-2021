/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const collector = [];
  const s2Copy = s2.split('');
  for (let i = 0; i < s1.length; i++) {
    if (s2Copy.indexOf(s1[i]) >= 0) {
      collector.push(s1[i]);
      s2Copy.splice(s2Copy.indexOf(s1[i]), 1);
    }
  }
  return collector.length;
}

module.exports = getCommonCharacterCount;
