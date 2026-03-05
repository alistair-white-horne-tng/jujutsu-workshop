// Tests for calculator functions
const assert = require('assert');
const { add, subtract, multiply, divide, power, squareRoot } = require('./calculator');
const { formatResult, validateNumber, parseInput } = require('./utils');

// Test addition
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);
assert.strictEqual(add(0, 0), 0);

// Test subtraction
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(subtract(0, 5), -5);

// Test utilities
assert.strictEqual(formatResult(3.14159265359), 3.1415926536);
assert.strictEqual(validateNumber(5), true);
assert.strictEqual(parseInput('42'), 42);

console.log('All tests passed!');

