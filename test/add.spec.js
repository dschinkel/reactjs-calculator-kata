import Calculator from "../src/domain/Calculator";

const test = require('ava');

const calculator = new Calculator();
test('default evaluates to zero', t => {
  calculator.evaluate();
  t.is(calculator.getResult(), 0);
});

test('adds two positive numbers', t => {
  const calculator = Calculator();
  calculator.evaluate('0+1');
    t.is(calculator.getResult(), 1);
});

test('handles multiple operations', t => {
  const calculator = Calculator();

  calculator.evaluate('0+1');
  calculator.evaluate('0+4');
  calculator.evaluate('10');

  t.is(calculator.getResult(), 15);
});

test('clears total', t => {
  const calculator = Calculator();

  calculator.evaluate('0+1');
  calculator.evaluate('0+4');
  calculator.clear();

  t.is(calculator.getResult(),0);
});

test('disallows adding negative numbers', t => {
  const calculator = Calculator();

  calculator.evaluate('-1+1');
  calculator.evaluate('1+-1');

  t.is(calculator.getResult(), "Negative numbers are not allowed");
});

test('disallows non-numeric values', t => {
  const calculator = Calculator();

  calculator.evaluate('a+1');
  calculator.evaluate('b+1');

  t.is(calculator.getResult(), "Input must be a number");
});

test('disallows an incomplete add operation', t => {
	const calculator = Calculator();

	calculator.evaluate('1+');

	t.is(calculator.getResult(), "Incomplete operation");
});