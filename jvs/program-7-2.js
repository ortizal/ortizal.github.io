let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function subtotal(){
  let dayOfWeek = new Date().getDay(); 
  let subt = parseFloat(document.getElementById("subt").value);
   if (dayOfWeek == 2 || dayOfWeek == 7){
     if (subt >= 50){
        let subtotal = (subt*10)/100;
        let total1= (subt - subtotal);
        let total = (total1 *6)/100;
        let fin =total + total1;
        document.getElementById('output').innerHTML = "Today is discount day "+ fin;
      } else if (subt < 50 ){ 
       let subtotal = (subt * 6)/100;
       let fin =subt + subtotal;
       document.getElementById('output').innerHTML = "Your purchase is less than $50. Total is: " + fin;}
    }
  else if (dayOfWeek == 0 || dayOfWeek == 1 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6 || dayOfWeek == 7) {
    let subtotal = (subt * 6)/100;
    let fin =subt + subtotal;
    document.getElementById('output').innerHTML = "Total is: " + fin;}
}
