import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import CalculatorUI, {equals, inputNumber, NumberKeys, plus} from "../src/UI/CalculatorUI";

const Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });

const test = require('ava');
const {shallow} = require("enzyme");

test('displays a keypad', t => {
	const keypad = shallow(<CalculatorUI />).find('[data-testid="keypad"]');
  t.is(keypad.length, 1);
});

test('displays numbers', t => {
  const numberKeys = shallow(<NumberKeys />).find('[data-testid="numberKey"]');
  t.is(numberKeys.length, 10);
});

test('display non-numeric keys', t => {
	const decimalKey = shallow(<CalculatorUI />).find('[data-testid="decimal"]');
	const acKey = shallow(<CalculatorUI />).find('[data-testid="ac"]');
	const negateKey = shallow(<CalculatorUI />).find('[data-testid="negate"]');
	const percentKey = shallow(<CalculatorUI />).find('[data-testid="percent"]');
	const divideKey = shallow(<CalculatorUI />).find('[data-testid="divide"]');
	const multiplyKey = shallow(<CalculatorUI />).find('[data-testid="multiply"]');
	const subtractKey = shallow(<CalculatorUI />).find('[data-testid="subtract"]');
	const addKey = shallow(<CalculatorUI />).find('[data-testid="add"]');
	const equalKey = shallow(<CalculatorUI />).find('[data-testid="equal"]');

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

test('evaluate returns default value', t => {
	const display = shallow(<CalculatorUI />).find('[data-testid="display"]');
	t.is(display.text(), '0');
});

test('handles an addition operation', t => {
  inputNumber('1');
	plus();
	inputNumber('2');
	equals();
	const display = shallow(<CalculatorUI />).find('[data-testid="display"]');

	t.is(display.text(), '3');
});
