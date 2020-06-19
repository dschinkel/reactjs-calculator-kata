import Calculator from "../src/Calculator";

const test = require('ava');

test('default evaluates to zero', t => {
  const result = Calculator.evaluate();
  t.is(result, 0);
});

test('adds two positive numbers', t => {
  const result = Calculator.evaluate('0+1');
  t.is(result, 1);
});
