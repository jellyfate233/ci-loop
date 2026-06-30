// src/validator.js - 输入验证模块

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isInRange(value, min, max) {
  return value >= min && value <= max;
}

module.exports = { isValidEmail, isNumeric, isInRange };
