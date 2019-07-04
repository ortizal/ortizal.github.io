let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;
function addImpar(){
  let impadd = parseFloat(document.getElementById("impNumber").value);
  let sum=0;
  for (var number = 1; number <= impadd ;number = number +2){
  sum = sum + number;
   document.getElementById('output').innerHTML = sum;
  }
}
