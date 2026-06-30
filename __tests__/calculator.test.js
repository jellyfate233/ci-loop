// __tests__/calculator.test.js
const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
  test('add 正确相加两个正数', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('add 处理负数', () => {
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract 正确相减', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiply 正确相乘', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiply 乘以 0 等于 0', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('divide 正确相除', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide 除以 0 抛出错误', () => {
    expect(() => divide(5, 0)).toThrow('除数不能为 0');
  });
});
