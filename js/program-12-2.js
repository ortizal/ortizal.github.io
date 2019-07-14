let today = new Date();
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;
function getMiddle() {
  let list = [85, 45, 2, 47];
   
  if (list.length % 2 == 1) {
  let mid = list[list.length >>> 1];
  document.getElementById("output").innerHTML = mid;}
  else {
  let upper = list[list.length >>> 1];
  let lower = list[(list.length >>> 1)-1]; ;
  let mid = (upper + lower)/2;
  document.getElementById("output").innerHTML = mid; 
  }
  }