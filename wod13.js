function grading(){
	var msg = "";
	
	for (var i = 1; i < arguments.length; i++) {
			if (arguments[i]>40) {
				if(Math.ceil(arguments[i]/5)*5-arguments[i] < 3){
					msg += Math.ceil(arguments[i]/5)*5 + " ";
				}
				else{
					msg += arguments[i] + " ";
				}
			}
			else{
				if (Math.ceil(arguments[i]/5)*5>=40) {
					msg += Math.ceil(arguments[i]/5)*5 + " ";
				}
				else{
					
				msg+= arguments[i] + " ";
				}
			}
		}
		return msg;	
}

console.log(grading(4,73,67,38,33));
console.log(grading(4,76,69,33,38));