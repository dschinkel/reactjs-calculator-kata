import React, {Component} from 'react';
import Calculator from "../Core/Calculator";


class CalculatorUI extends Component {
	constructor(){
		super();
		this.initializeState();
	}

	initializeState() {
		const {calc, defaultResult} = this.initializeCalculator();
		this.calculator = calc
		this.state = {
			input: '',
			result: defaultResult
		}
	}

	initializeCalculator() {
		const calc = new Calculator();
		calc.evaluate()
		const defaultResult = calc.getResult();
		return {calc, defaultResult};
	}

	inputNumber = (number) => {
		const existingTotal = parseInt(this.state.result > 0);
		if(existingTotal){
			this.appendAdd(number);
			return;
		}

		this.setState({
			input: `${this.state.input}${number}`
		});
	}

	plus = () => {
		const notStartOfANewOperation = this.state.input === '';
		if(notStartOfANewOperation) return;

		this.setState({
			input: `${this.state.input}+`
		})
	}

	appendAdd = (number) => {
		this.setState({
			input: number
		})
		this.equate();
	}

	equate = () => {
		this.calculator.evaluate(this.state.input);
		const result = this.calculator.getResult();

		this.setState({
			result: result,
			input: ''
		})
	}

	render() {
		return <>
			<div data-testid='logo'>
				<a href="https://www.equalexperts.com" id="5000">
					<img alt="logo" src="/equal-experts-logo.png"/>
				</a>
			</div>
			<div data-testid='display'>{this.state.result}</div>
			<div>
				<div data-testid='ac'>AC</div>
				<div data-testid='negate'>+/-</div>
				<div data-testid='percent'>%</div>
				<div data-testid='divide'>➗</div>
			</div>
			<div>
				<NumberKeys inputNumber={this.inputNumber} data-testid="keypad"/>
				<div data-testid='decimal'>,</div>
			</div>
			<div>
				<div data-testid='multiply'>x</div>
				<div data-testid='subtract'>-</div>
				<div data-testid='add'>+</div>
				<div data-testid='equal' onClick={this.equate}>=</div>
			</div>
		</>
	}
}

export function NumberKeys(inputNumber) {
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