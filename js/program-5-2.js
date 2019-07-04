// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function paymenttax(){
let h = parseFloat(document.getElementById("hour").value);
let pt = parseFloat(document.getElementById("paymenttx").value);
if ( h > 0 && pt > 0){
 let paytx = ((h * pt) * .85);
 document.getElementById('output').innerHTML= '$' + paytx;}
else {alert ("WRONG, CHECK THAT THE VALUES ARE POSITIVE");}
}