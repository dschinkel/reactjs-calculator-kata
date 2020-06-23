import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import CalculatorUI, {Display, Keys} from "./src/client/CalculatorUI";

const Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });

const test = require('ava');
const {shallow} = require("enzyme");
let calculator;

test.beforeEach(t => {
	calculator = shallow(<CalculatorUI />);
});

test('shows equal experts logo', t => {
	const display = shallow(<Display />);
	const logo = display.find('[data-testid="logo"]');
	t.is(logo.length, 1);
});

test('displays a keypad', t => {
	const keypad = calculator.find('[data-testid="keypad"]');
  t.is(keypad.length, 1);
});

test('displays numbers', t => {
  const numberKeys = shallow(<Keys />).find('[data-testid="numberKey"]');
  t.is(numberKeys.length, 10);
});

test('displays non-numeric keys', t => {
	const keys = shallow(<Keys />);
	const decimalKey = keys.find('[data-testid="decimal"]');
	const acKey = keys.find('[data-testid="ac"]');
	const negateKey = keys.find('[data-testid="negate"]');
	const percentKey = keys.find('[data-testid="percent"]');
	const divideKey = keys.find('[data-testid="divide"]');
	const multiplyKey = keys.find('[data-testid="multiply"]');
	const subtractKey = keys.find('[data-testid="subtract"]');
	const addKey = keys.find('[data-testid="add"]');
	const equalKey = keys.find('[data-testid="equal"]');

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

test('equals returns default value', t => {
	const display = calculator.find('[data-testid="display"]');
	t.is(display.props().displayResult, 0);
});

test('handles an addition operation', t => {
	const calculator = shallow(<CalculatorUI />);
	const { equate, inputNumber, plus } = calculator.instance();

	inputNumber('1');
	plus();
	inputNumber('2');
	equate();
	const display = calculator.find('[data-testid="display"]');

	t.is(display.props().displayResult, 3);
});

test('handles multiple operations', t => {
	const calculator = shallow(<CalculatorUI />);
	const { equate, inputNumber, plus } = calculator.instance();
	let display;

	inputNumber('1');
	plus();
	inputNumber('2');
	display = calculator.find('[data-testid="display"]');
	t.is(display.props().displayResult, '2');
	equate();
	plus();
	inputNumber('1');
	plus();
	inputNumber('2');
	plus();
	inputNumber('33');
	equate();
	display = calculator.find('[data-testid="display"]');

	t.is(display.props().displayResult, 9);
});

test('clear calculator', t => {
	const calculator = shallow(<CalculatorUI />);
	const { clear, inputNumber } = calculator.instance();
	let display;

	inputNumber('3');
	display = calculator.find('[data-testid="display"]');
	t.is(display.props().displayResult, '3');

	clear();
	display = calculator.find('[data-testid="display"]');
  t.is(display.props().displayResult,0);
});
