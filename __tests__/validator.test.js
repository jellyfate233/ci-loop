// __tests__/validator.test.js
const { isValidEmail, isNumeric, isInRange } = require('../src/validator');

describe('Validator', () => {
  test('isValidEmail 验证合法邮箱', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('isValidEmail 拒绝非法邮箱', () => {
    expect(isValidEmail('not-an-email')).toBe(false);
    expect(isValidEmail('missing@')).toBe(false);
    expect(isValidEmail('@nouser.com')).toBe(false);
  });

  test('isNumeric 识别数字字符串', () => {
    expect(isNumeric('123')).toBe(true);
    expect(isNumeric('12.5')).toBe(true);
  });

  test('isNumeric 拒绝非数字', () => {
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric('12a')).toBe(false);
  });

  test('isInRange 值在范围内', () => {
    expect(isInRange(5, 1, 10)).toBe(true);
    expect(isInRange(1, 1, 10)).toBe(true);
    expect(isInRange(10, 1, 10)).toBe(true);
  });

  test('isInRange 值超出范围', () => {
    expect(isInRange(0, 1, 10)).toBe(false);
    expect(isInRange(11, 1, 10)).toBe(false);
  });
});
