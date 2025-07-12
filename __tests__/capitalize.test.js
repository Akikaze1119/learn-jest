const { capitalize } = require('../capitalize');

test('capitalizes a lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes an uppercase word', () => {
  expect(capitalize('WORLD')).toBe('World');
});

// edge case
test('empty string for empty input', () => {
  expect(capitalize('')).toBe('');
});
