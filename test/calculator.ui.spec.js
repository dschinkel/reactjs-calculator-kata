import React from "react";
const Enzyme = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';
import CalculatorUI from "../src/UI/CalculatorUI";
Enzyme.configure({ adapter: new Adapter() });

const test = require('ava');
const {shallow} = require("enzyme");

test('display defaults to zero', t => {
	const display = shallow(<CalculatorUI />).find('[data-testid="display"]');
	t.is(display.text(), '0');
});

