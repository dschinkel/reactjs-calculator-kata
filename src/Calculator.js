

function _Calculator(){
	let runningTotal = 0;

	function evaluate(input){
		if(!input || invalidInput(input)) {
			return evaluate
		}
		runningTotal = eval(`${runningTotal}+${input ? input : 0}`);
	}

	function total(){
		return runningTotal;
	}

	function invalidInput(input){
		if(foundNegativeNumber(input)) {
			runningTotal = "Negative numbers are not allowed";
			return true;
		}

		let foundInvalidNumber = foundInvalidNumbers(input);

		if(foundInvalidNumber){
			runningTotal = "Input must be a number";
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
		total,
		clear
	}
}

function Calculator(){
	return _Calculator();
}

export default Calculator