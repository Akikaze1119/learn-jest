const sum = require('../src/math');

test('adds 1 + 2 to be 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to be 3 with sum function', () => {
  expect(sum(1, 2)).toBe(3);
});
