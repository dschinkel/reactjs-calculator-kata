import Validator from "./Validator";

function _Calculator(){
	let runningTotal = 0;
	let error;

	function evaluate(input){
		const validator = new Validator();
		error = validator.validateInput(input);

		if(error || !input) {
			return evaluate
		}
		runningTotal = eval(`${runningTotal}+${input ? input : 0}`);
	}

	function getResult(){
		return error || runningTotal;
	}

	function clear(){
		runningTotal = 0;
		return runningTotal;
	}

	return {
		evaluate,
		getResult,
		clear
	}
}

function Calculator(){
	return _Calculator();
}

export default Calculator