import React from 'react';
import Calculator from "../Core/Calculator";

const CalculatorUI = () => {
	const calculator = new Calculator();
	calculator.evaluate();
	return <div data-testid='display'>{calculator.getResult()}</div>;
}

export default CalculatorUI;