import React from 'react';
import Calculator from "../Core/Calculator";

const CalculatorUI = () => {
	const calculator = new Calculator();
	calculator.evaluate();
	return (
		<>
			<div data-testid='display'>{calculator.getResult()}</div>
			<div>
				<NumberKeys data-testid="keypad"/>
			</div>
		</>

	);

}

export const NumberKeys = () => {
	return (
		<>
			{
				[0,1,2,3,4,5,6,7,8,9].map(number => {
					return <div data-testid='numberKey'>{number}</div>
				})
			}
	</>
)
}

export default CalculatorUI;