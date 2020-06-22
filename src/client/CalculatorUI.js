import React, {Component} from 'react';
import Calculator from '../domain/Calculator';
import Logo from './equal-experts-logo.png'

class CalculatorUI extends Component {
	constructor(){
		super();

		function initializeCalculator() {
			const calc = new Calculator();
			calc.evaluate();
			const defaultResult = calc.getResult();
			return {calc, defaultResult};
		}

		const {calc, defaultResult} = initializeCalculator();

		this.calculator = calc
		this.state = {
			input: '',
			result: defaultResult
		}
	}

	clear = () => {
		console.log("test")
		this.calculator.clear();
		this.calculator.evaluate()
		this.setState({
			result: this.calculator.getResult()
		});
	}

	inputNumber = (number) => {
		const existingTotal = parseInt(this.state.result > 0);
		if(existingTotal){
			this.appendAdd(number);
			return;
		}

		this.setState({
			input: `${this.state.input}${number}`,
			result: number
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
			<div className="Calculator-container">
				<Display data-testid='display' result={this.state.result} />
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
				<img src='./equal-experts-logo.png' alt="equal experts logo" />
			</a>
		</div>
		<div className="result">{props.result}</div>
	</div>
}


export function Keys(props) {
	return (
		<>
			<div className="Calculator-row">
				<div className="key-row1" data-testid='ac' onClick={props.clear}>AC</div>
				<div className="key-row1" data-testid='negate'>+/-</div>
				<div className="key-row1" data-testid='percent'>%</div>
				<div className="key-column" data-testid='divide'>&#247;</div>
			</div>
			<div className="Calculator-row">
				{
					[7,8,9].map(number => {
						return NumberKey(number, props)
					})
				}
				<div className="key-column" data-testid='multiply'>x</div>
			</div>
			<div className="Calculator-row">
				{
					[4,5,6].map(number => {
						return NumberKey(number, props)
					})
				}
				<div className="key-column" data-testid='subtract'>-</div>
			</div>
			<div className="Calculator-row">
				{
					[1,2,3].map(number => {
						return NumberKey(number, props)
					})
				}
				<div className="key-column" data-testid='add' onClick={props.plus}>+</div>
			</div>

			<div className="Calculator-row">
				{NumberKey(0, props)}
				<div className="key" data-testid='decimal'>.</div>
				<div className="key-column" data-testid='equal' onClick={props.equate}>=</div>
			</div>
		</>
	)
}

function NumberKey(number, props) {
	return <div
		className="zero-key"
		key={number}
		data-testid='numberKey'
		onClick={() => props.inputNumber(number)}>{number}
	</div>;
}

export default CalculatorUI;