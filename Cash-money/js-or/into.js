let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date; 
function singin(){
let usname=document.getElementById("usname").value;
let usname1= "ortiz";
let pasword=document.getElementById("pasword").value;  
let pasword1="tulcan";
if (usname==usname1 && pasword==pasword1){
   window.open(document.getElementById('menu'));
}
else{
  window.alert('Error, Has ingresado mal el usuario o la contraseña. Intenta nuevamente.')
}

}
