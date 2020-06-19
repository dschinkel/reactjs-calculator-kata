
function _Calculator(){
	let runningTotal = 0;

	function evaluate(input){
		runningTotal = eval(`${runningTotal}+${input ? input : 0}`);
		return evaluate;
	}

	function total(){
		return runningTotal;
	}

	return {
		evaluate,
		total
	}
}

function Calculator(){
	return _Calculator();
}

export default Calculator