function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

module.exports = { sumArray };
