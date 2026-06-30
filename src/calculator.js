// src/calculator.js - 计算器模块

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  
  if (b === 0) {
    throw new Error('除数不能为 0');
  }
  return a / b;

}

module.exports = { add, subtract, multiply, divide };
