import React from 'react';
import Calculator from "../Core/Calculator";

const calculator = new Calculator();
let input = '';
let result;

const CalculatorUI = () => {
	return (
		<>
			<div data-testid='logo'>
				<a href="https://www.equalexperts.com" id="5000">
					<img alt="logo" src="/equal-experts-logo.png" />
				</a>
			</div>
			<div data-testid='display'>{result || equals()}</div>
			<div>
				<div data-testid='ac'>AC</div>
				<div data-testid='negate'>+/-</div>
				<div data-testid='percent'>%</div>
				<div data-testid='divide'>➗</div>
			</div>
			<div>
				<NumberKeys data-testid="keypad"/>
				<div data-testid='decimal'>,</div>
			</div>
			<div>
				<div data-testid='multiply'>x</div>
				<div data-testid='subtract'>-</div>
				<div data-testid='add'>+</div>
				<div data-testid='equal' onClick={equals()}>=</div>
			</div>
		</>
	);
}

export const inputNumber = (number) => {
	input = `${input}${number}`;
}

export const plus = () => {
	input = `${input}+`;
}

export const equals = () => {
	calculator.evaluate(input);
	result = calculator.getResult()
	return result;
}

export const NumberKeys = () => {
	return (
		<>
			{
				[0,1,2,3,4,5,6,7,8,9].map(number => {
					return <div
						key={number}
						data-testid='numberKey'
						onClick={() => inputNumber(number)}>{number}
					</div>
				})
			}
	</>
)
}

export default CalculatorUI;