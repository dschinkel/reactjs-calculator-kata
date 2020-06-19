
function _Calculator(){
	let runningTotal = 0;

	function evaluate(input){
		if(invalidInput(input)) {
			return evaluate
		}
		runningTotal = eval(`${runningTotal}+${input ? input : 0}`);
		return evaluate;
	}

	function total(){
		return runningTotal;
	}

	function invalidInput(input){
		if(input && input.indexOf('-') >= 0) {
			runningTotal = "Negative numbers are not allowed";
			return true;
		}
		return false;
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