const { fetchWithPromise } = require('../src/fetchWithPromise');

test('returns peanut butter using async/await', async () => {
  const data = await fetchWithPromise();
  expect(data).toBe('peanut butter');
});
