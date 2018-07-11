const config = require('./index');

describe('browser list config', () => {
  it('should be an array', () => {
    expect(Array.isArray(config)).toBe(true);
  })
});
