let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date; 
function singin(){
let usname=document.getElementById("usname").value;
let usname1= "ortiz";
let pasword=document.getElementById("pasword").value;  
let pasword1='tulcan';
if (usname == "" || pasword == "") {
  document.getElementById("output").innerHTML= "Into values";
}
  else if (usname == "usname1" ){
document.getElementById('output').innerHTML = usname; 
}
 else { alert ('Wrong'); }
}