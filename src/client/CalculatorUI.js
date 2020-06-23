import React, {Component} from 'react';
import Calculator from '../domain/Calculator';
import Logo from './equal-experts-logo.png'


class CalculatorUI extends Component {
	constructor(props){
		super(props);

		function initializeCalculator() {
			const calc = new Calculator();
			calc.evaluate();
			const defaultDisplay = calc.getResult();
			return {calc, defaultResult: defaultDisplay};
		}

		const {calc, defaultResult} = initializeCalculator();

		this.calculator = calc
		this.state = {
			combinedInput: '',
			displayResult: defaultResult
		}
	}

	clear = () => {
		this.calculator.clear();
		this.calculator.evaluate()
		this.setState({
			combinedInput: '',
			displayResult: this.calculator.getResult()
		});
	}

	inputNumber = (number) => {
		const currentInput = `${this.state.combinedInput}${number}`;
		const updatedDisplay = this.updateDisplayAfterInput(currentInput, number);

		this.setState({
			combinedInput: currentInput,
			displayResult: updatedDisplay
		});
	}

	plus = () => {
		const notStartOfANewOperation = this.state.combinedInput === '';
		if(notStartOfANewOperation) return;

		this.setState({
			combinedInput: `${this.state.combinedInput}+`
		})
	}

	equate = () => {
		this.calculator.evaluate(this.state.combinedInput);
		const result = this.calculator.getResult();

		this.setState({
			combinedInput: '',
			displayResult: result
		})
	}

	updateDisplayAfterInput(currentInput, number) {
		const updatedDisplay = () => {
			const appendingNumberToAdd = currentInput.indexOf('+') >= 0;
			if (appendingNumberToAdd) {
				return number;
			}
			const displayConsecutiveInputOnly = currentInput.replace('+', '');
			return displayConsecutiveInputOnly
		}
		return updatedDisplay();
	}

	render() {
		return <>
			<div className="Calculator-container">
				<Display data-testid='display' displayResult={this.state.displayResult} />
				<Keys
					data-testid="keypad"
					inputNumber={this.inputNumber}
					plus={this.plus}
					equate={this.equate}
					clear={this.clear}
				 />
			</div>
		</>
	}
}

export function Display(props){
	return <div className="Calculator-row">
		<div data-testid='logo'>
			<a href="https://www.equalexperts.com" id="5000">
				<img src={Logo} alt="equal experts logo" />
			</a>
		</div>
		<div className="display">{props.displayResult}</div>
	</div>
}

export function Keys(props) {
	return (
		<>
			<div className="Calculator-row">
				{Key('AC', 'key-row1', 'ac', props.clear)}
				{Key('+/-', 'key-row1', 'negate')}
				{Key('%', 'key-row1', 'percent')}
				{Key('÷', 'key-column', 'divide')}
			</div>
			<div className="Calculator-row">
				{
					[7, 8, 9].map(number => {
						return NumberKey(number, props)
					})
				}
				{Key('x', 'key-column', 'multiply')}
			</div>
			<div className="Calculator-row">
				{
					[4, 5, 6].map(number => {
						return NumberKey(number, props)
					})
				}
				{Key('-', 'key-column', 'subtract')}
			</div>
			<div className="Calculator-row">
				{
					[1, 2, 3].map(number => {
						return NumberKey(number, props)
					})
				}
				{Key('+', 'key-column', 'add', props.plus)}
			</div>

			<div className="Calculator-row">
				{NumberKey(0, props)}
				{Key('.', 'key', 'decimal')}
				{Key('=', 'key-column', 'equal', props.equate)}
			</div>
		</>
	)
}

function Key(displayValue, style, testId, handler) {
	return handler ? <div className={style} data-testid={testId} onClick={handler}>{displayValue}</div>
		: <div className={style} data-testid={testId}>{displayValue}</div>;
}

function NumberKey(number, props) {
	return <div
		className={number === 0 ? "zero-key" : "key"}
		key={number}
		data-testid='numberKey'
		onClick={() => props.inputNumber(number)}>{number}
	</div>;
}

export default CalculatorUI;