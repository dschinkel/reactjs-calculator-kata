import React from 'react';
import Calculator from "../Core/Calculator";

const CalculatorUI = () => {

	return (
		<>
			<div data-testid='display'>0</div>
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
				<div data-testid='equal'>=</div>
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