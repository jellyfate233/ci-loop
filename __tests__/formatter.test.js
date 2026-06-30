// __tests__/formatter.test.js
const { formatDate, formatCurrency, truncate } = require('../src/formatter');

describe('Formatter', () => {
  test('formatDate 格式化日期', () => {
    expect(formatDate('2026-06-30')).toBe('2026-06-30');
  });

  test('formatDate 处理 Date 对象', () => {
    const date = new Date(2026, 5, 30); // 2026-06-30
    expect(formatDate(date)).toBe('2026-06-30');
  });

  test('formatCurrency 格式化人民币', () => {
    expect(formatCurrency(99.5)).toBe('CNY 99.50');
  });

  test('formatCurrency 格式化其他货币', () => {
    expect(formatCurrency(100, 'USD')).toBe('USD 100.00');
  });

  test('truncate 短文本不变', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('truncate 超长文本截断', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });
});
