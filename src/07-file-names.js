/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(fileNamesList) {
  const fileNamesListValidated = fileNamesList;
  for (let i = 0; i < fileNamesList.length; i++) {
    const comparisonFileName = fileNamesList[i];
    let counter = 0; // suffix k
    for (let f = 0; f < fileNamesList.length; f++) {
      const comparedFileName = fileNamesList[f];
      if (f !== i) {
        if (comparedFileName === comparisonFileName) {
          counter++;
          fileNamesListValidated[f] += `(${counter})`; // apply suffix
        }
      }
    }
  }
  return fileNamesListValidated;
}

module.exports = renameFiles;
