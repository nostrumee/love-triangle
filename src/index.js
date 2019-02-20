/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let loveTrianglesCount = 0;
  let stateArr = new Array(preferences.length);

  for (let i = 0; i < preferences.length; i++) {
    if (stateArr[i] == true) {
      continue;
    }

    let first = preferences[i];
    let second = preferences[first - 1];
    let third = preferences[second - 1];

    if (i === third - 1 && i !== first -1 && first - 1 !== second - 1) {
      loveTrianglesCount++;
      stateArr[i] = stateArr[first - 1] = stateArr[second - 1] = true;
    }
  }

  return loveTrianglesCount;
};
