const { sumArray } = require('../src/sumArray');

test('sums a list of numbers', () => {
  expect(sumArray([1, 2, 3])).toBe(6);
});

test('sums an empty array', () => {
  expect(sumArray([])).toBe(0);
});

test('sums a negative array', () => {
  expect(sumArray([-1, -4, -2])).toBe(-7);
});
