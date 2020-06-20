import React from 'react';
import Calculator from "../Core/Calculator";

const calculator = new Calculator();

const CalculatorUI = () => {
	return (
		<>
			<div data-testid='display'>{equals()}</div>
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

let input = '';

export const inputNumber = (number) => {
	input = `${input}${number}`;
}

export const plus = () => {
	input = `${input}+`;
}

export const equals = () => {
	calculator.evaluate(input);
	const result = calculator.getResult()
	calculator.clear();
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
						onClick={() =>
							inputNumber(number)}>{number}
					</div>
				})
			}
	</>
)
}

export default CalculatorUI;