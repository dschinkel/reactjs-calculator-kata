

function _Calculator(){
	let runningTotal = 0;
	let error;

	function evaluate(input){
		if(!input || invalidInput(input)) {
			return evaluate
		}
		runningTotal = eval(`${runningTotal}+${input ? input : 0}`);
	}

	function getResult(){
		return error || runningTotal;
	}

	function invalidInput(input){
		if(foundNegativeNumber(input)) {
			error = "Negative numbers are not allowed";
			return true;
		}

		let foundInvalidNumber = foundInvalidNumbers(input);

		if(foundInvalidNumber){
			error = "Input must be a number";
			return true;
		}

		return false;
	}

	function foundNegativeNumber(input) {
		return input.indexOf('-') >= 0;
	}

	function foundInvalidNumbers(input) {
		let foundInvalidNumber = false;
		input.split('').forEach(i => {
			if (i !== '+' && isNaN(i)) {
				foundInvalidNumber = true;
			}
		});
		return foundInvalidNumber;
	}

	function clear(){
		runningTotal = 0;
		return runningTotal;
	}

	return {
		evaluate,
		total: getResult,
		clear
	}
}

function Calculator(){
	return _Calculator();
}

export default Calculator