// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function VolumeCylinder(){
  let r= parseFloat(document.getElementById("radio").value);
  let h= parseFloat(document.getElementById("height").value);
  let pi = 3.1415926535;
  if (r > 0 && h > 0 ){ let volume = pi * r * r * h;  
  document.getElementById('output').innerHTML = volume ;  }
   else {alert ("WRONG, CHECK THAT THE VALUES ARE POSITIVE");}
  }