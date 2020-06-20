import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import CalculatorUI, {NumberKeys} from "../src/UI/CalculatorUI";

const Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });

const test = require('ava');
const {shallow} = require("enzyme");

test('display defaults to zero', t => {
	const display = shallow(<CalculatorUI />).find('[data-testid="display"]');
	t.is(display.text(), '0');
});

test('displays a keypad', t => {
	const keypad = shallow(<CalculatorUI />).find('[data-testid="keypad"]');
  t.is(keypad.length,1);
});

test('displays numbers', t => {
  const numberKeys = shallow(<NumberKeys />).find('[data-testid="numberKey"]');
  t.is(numberKeys.length,10);
});

