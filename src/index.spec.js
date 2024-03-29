const config = require('.');
const browserslist = require('browserslist');

// Compile config
const browsers = browserslist(config);
const browsersCoverage = browserslist.coverage(browsers);

// Get first match from regex
const firstMatch = (match, p1) => p1;

// Reduce the entries to the bare browser names
const clearedConfig = config
  .map(c => c.replace(/^(\w+) [<=>]+ \d+$/gi, firstMatch))
  .map(c => c.replace(/^last \d+ (\w+) major versions$/gi, firstMatch));

describe('browserslist-config', () => {
  it('should be an array', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(clearedConfig).toHaveLength(config.length);
  });

  it('should cover minimum 80% of the browsers', () => {
    // https://github.com/browserslist/browserslist#coverage
    expect(browsersCoverage).toBeGreaterThanOrEqual(80);
  });

  it('should contain Chrome', () => {
    expect(clearedConfig.indexOf('Chrome')).toBe(0);
    expect(clearedConfig.indexOf('ChromeAndroid')).toBe(1);
  });

  it('should contain Firefox', () => {
    expect(clearedConfig.indexOf('Firefox ESR')).toBe(2);
    expect(clearedConfig.indexOf('Firefox')).toBe(3);
    expect(clearedConfig.indexOf('FirefoxAndroid')).toBe(4);
  });

  it('should contain Edge', () => {
    expect(clearedConfig.indexOf('Edge')).toBe(5);
  });

  it('should contain Safari/iOS', () => {
    expect(clearedConfig.indexOf('Safari')).toBe(6);
    expect(clearedConfig.indexOf('iOS')).toBe(7);
  });

  it('should contain special browsers', () => {
    expect(clearedConfig.indexOf('Electron')).toBe(8);
    expect(clearedConfig.indexOf('Samsung')).toBe(9);
  });

  it('should NOT contain unnecessary browsers', () => {
    expect(clearedConfig.indexOf('BlackBerry')).toBe(-1);
    expect(clearedConfig.indexOf('OperaMini')).toBe(-1);
    expect(clearedConfig.indexOf('ExplorerMobile')).toBe(-1);
    expect(clearedConfig.indexOf('Explorer')).toBe(-1);
    expect(clearedConfig.indexOf('kaios')).toBe(-1);
    expect(clearedConfig.indexOf('OperaMobile')).toBe(-1);
    expect(clearedConfig.indexOf('Baidu')).toBe(-1);
    expect(clearedConfig.indexOf('QQAndroid')).toBe(-1);
    expect(clearedConfig.indexOf('UCAndroid')).toBe(-1);
    expect(clearedConfig.indexOf('Opera')).toBe(-1);
    expect(clearedConfig.indexOf('Android')).toBe(-1);
  });
});
