let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function randomNumbers(max, min) {
	min = Math.ceil(0);
	max = Math.floor(101);
    let firstNumber = Math.floor(Math.random() * (max - min)) + min;
	let secondNumber = Math.floor(Math.random() * (max - min)) + min;
	document.getElementById("firstNumber").value = firstNumber;
	document.getElementById("secondNumber").value = secondNumber;
	document.getElementById("output").innerHTML = output;
	let output ="Fill the box, add the numbers "
	let answer = ""
	document.getElementById("answer").value = answer;
}
	function addNumbers() {
	let answer =	parseInt(document.getElementById("answer").value);
	let n1 = parseInt(document.getElementById("firstNumber").value);
	let n2 = parseInt(document.getElementById("secondNumber").value);
	if (n1 + n2 == answer) {		
		let output = "Correct! Good job."
		document.getElementById("output").innerHTML = output;
		} 
	else {
		let output = "Sorry. That is incorrect."
		document.getElementById("output").innerHTML = output;
    	}}