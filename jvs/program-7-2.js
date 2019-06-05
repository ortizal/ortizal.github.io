let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function subtotal(){
  let dayOfWeek = new Date().getDay(); 
  //document.getElementById('output').innerHTML = dayOfWeek;
  let subt = document.getElementById("subt").value;
   if (dayOfWeek == 7 || dayOfWeek == 4){
    if (subt >= 50){
        let total1 = (subt * 10)/100;
        let total = subt - total1;
        document.getElementById('output').innerHTML = total;
    } else { document.getElementById('output').innerHTML = "es menor a 50";}
   
  }
  else {
    document.getElementById('output').innerHTML = 'wrong';
  }
}