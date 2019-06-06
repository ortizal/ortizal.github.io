let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function subtotal(){
  let dayOfWeek = new Date().getDay(); 
  //document.getElementById('output').innerHTML = dayOfWeek;
  let subt = document.getElementById("subt").value;
   if (dayOfWeek == 3 || dayOfWeek == 4){
    if (subt >= 50){
        let total1 = (subt * 10)/100;
       let total = subt - total1;
        document.getElementById('output').innerHTML = "Today is day of discount"+total;
    } else if (subt <50 ){ 
       let total1 = (subt * 6)/100;
       let total = subt - total1;
      document.getElementById('output').innerHTML = "Your purchase is less than $50, your discount is 6%. Total is: " + total;}
   
  }
  else {
    document.getElementById('output').innerHTML = 'Today is not discount day. Total is:' + subt;
  }
}