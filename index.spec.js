const config = require('./index');

describe('browserslist-config', () => {
  it('should be an array', () => {
    expect(Array.isArray(config)).toBe(true);
  })
});
