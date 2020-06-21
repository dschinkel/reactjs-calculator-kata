import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import CalculatorUI, {NumberKeys} from "../src/client/CalculatorUI";

const Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });

const test = require('ava');
const {shallow} = require("enzyme");
let calculator;

test.beforeEach(t => {
	calculator = shallow(<CalculatorUI />);
});

test('shows equal experts logo', t => {
	const logo = calculator.find('[data-testid="logo"]');
	t.is(logo.length, 1);
});

test('displays a keypad', t => {
	const keypad = calculator.find('[data-testid="keypad"]');
  t.is(keypad.length, 1);
});

test('displays numbers', t => {
  const numberKeys = shallow(<NumberKeys />).find('[data-testid="numberKey"]');
  t.is(numberKeys.length, 10);
});

test('equals returns default value', t => {
	const display = calculator.find('[data-testid="display"]');
	t.is(display.text(), '0');
});

test('handles an addition operation', t => {
	const calculator = shallow(<CalculatorUI />);
	const { equate, inputNumber, plus } = calculator.instance();

	inputNumber('1');
	plus();
	inputNumber('2');
	equate();
	const display = calculator.find('[data-testid="display"]');

	t.is(display.text(), '3');
});

test('handles multiple operations', t => {
	const calculator = shallow(<CalculatorUI />);
	const { equate, inputNumber, plus } = calculator.instance();

	inputNumber('1');
	plus();
	inputNumber('2');
	equate();
	plus();
	inputNumber('1');
	plus();
	inputNumber('2');
	plus();
	inputNumber('3');
	equate();
	const display = calculator.find('[data-testid="display"]');

	t.is(display.text(), '9');
});

test('display non-numeric keys', t => {
	const decimalKey = calculator.find('[data-testid="decimal"]');
	const acKey = calculator.find('[data-testid="ac"]');
	const negateKey = calculator.find('[data-testid="negate"]');
	const percentKey = calculator.find('[data-testid="percent"]');
	const divideKey = calculator.find('[data-testid="divide"]');
	const multiplyKey = calculator.find('[data-testid="multiply"]');
	const subtractKey = calculator.find('[data-testid="subtract"]');
	const addKey = calculator.find('[data-testid="add"]');
	const equalKey = calculator.find('[data-testid="equal"]');

	t.is(decimalKey.length,1);
	t.is(acKey.length,1);
	t.is(negateKey.length,1);
	t.is(percentKey.length,1);
	t.is(divideKey.length,1);
	t.is(multiplyKey.length,1);
	t.is(subtractKey.length,1);
	t.is(addKey.length,1);
	t.is(equalKey.length,1);
});
