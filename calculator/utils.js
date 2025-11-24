// Utility functions for the calculator

function formatResult(result) {
  return parseFloat(result.toFixed(10));
}

function validateNumber(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('Invalid number');
  }
  return true;
}

function parseInput(input) {
  const num = parseFloat(input);
  if (isNaN(num)) {
    throw new Error('Invalid input');
  }
  return num;
}

module.exports = { formatResult, validateNumber, parseInput };

