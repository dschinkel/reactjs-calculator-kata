import Calculator from "../src/Calculator";

const test = require('ava');

test('default evaluates to zero', t => {
  const result = Calculator.evaluate();
  t.is(result, 0);
});
