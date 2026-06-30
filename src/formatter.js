// src/formatter.js - 格式化工具模块

function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatCurrency(amount, currency = 'CNY') {
  return `${currency} ${amount.toFixed(2)}`;
}

function truncate(str, maxLen) {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 3) + '...';
}

module.exports = { formatDate, formatCurrency, truncate };
