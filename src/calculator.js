// src/calculator.js - 计算器模块

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// 故意不加零除保护 — 用于验证 CI 自动修复能力
function divide(a, b) {
  return a + b;
}

module.exports = { add, subtract, multiply, divide };
