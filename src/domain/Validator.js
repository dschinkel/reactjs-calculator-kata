
function _Validator(){
	function validateInput(input) {
		if(!input) return;
		let errorMessage;

		errorMessage = incompleteOperation(input) || negativeNumber(input) || notANumber(input);
		return errorMessage;
	}

	function incompleteOperation(input) {
		if(input.substr(-1) === '+') {
			return "Incomplete operation"
		}
	}

	function negativeNumber(input) {
		if (foundNegativeNumber(input)) {
			return "Negative numbers are not allowed";
		}
	}

	function notANumber(input){
		let foundInvalidNumber = foundInvalidNumbers(input);

		if(foundInvalidNumber){
			return "Input must be a number";
		}
	}

	function foundNegativeNumber(input) {
		return input.toString().indexOf('-') >= 0;
	}

	function foundInvalidNumbers(input) {
		let foundInvalidNumber = false;
		input.toString().split('').forEach(i => {
			if (i !== '+' && isNaN(i)) {
				foundInvalidNumber = true;
			}
		});
		return foundInvalidNumber;
	}

	return {
		validateInput
	}
}


function Validator(){
	return _Validator();
}

export default Validator;