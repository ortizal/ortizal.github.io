

function generateQues(max, min) {
	min = Math.ceil(1);
	max = Math.floor(101);
 let firstNumber = Math.floor(Math.random() * (max - min)) + min;
	let secondNumber = Math.floor(Math.random() * (max - min)) + min;
//OUTPUT 
document.getElementById("firstNumber").value = firstNumber;
document.getElementById("secondNumber").value = secondNumber;
let output = "Good Luck!"
document.getElementById("output").innerHTML = output;
let answer = ""
document.getElementById("answer").value = answer;
	
}
//PROCESS
function checkSum() {
	let answer =	parseInt(document.getElementById("answer").value);
	let n1 = parseInt(document.getElementById("firstNumber").value);
	let n2 = parseInt(document.getElementById("secondNumber").value);
	if (n1 + n2 == answer) {		
		let output = "Correct! Good job."
		document.getElementById("output").innerHTML = output;
		} else {
		let output = "Sorry. That is incorrect."
	document.getElementById("output").innerHTML = output;
    }

}