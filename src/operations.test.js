const operation = require('./operations');

test('add 1 + 2 to be equal 3', () => {
  expect(operation.addition(1, 2)).toBe(3);
});

test('add 2 - 1 to be equal 1', () => {
  expect(operation.subtraction(2, 1)).toBe(1);
});

test('add 1 * 2 to be equal 2', () => {
  expect(operation.multiplication(1, 2)).toBe(2);
});

test('add 8 / 2 to be equal 4', () => {
  expect(operation.division(8, 2)).toBe(4);
});
