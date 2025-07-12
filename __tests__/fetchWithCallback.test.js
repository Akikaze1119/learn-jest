const { fetchWithCallback } = require('../src/fetchWithCallback');

test('returns peanut butter using callback', (done) => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done(); // ← Test waits until the function is done
  }

  fetchWithCallback(callback);
});
