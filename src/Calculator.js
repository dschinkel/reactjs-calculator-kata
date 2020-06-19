
function _Calculator(){
	function evaluate(input){
		return eval(input ? input : 0);
	}

	return {
		evaluate
	}
}

function Calculator(){
	return _Calculator();
}

export default Calculator