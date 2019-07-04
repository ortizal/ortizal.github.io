function addnumbers(){
    //input
    //alert('Hello word! The function was called');
    let x = parseFloat(document.getElementById('number1').value);
    let y = parseFloat(document.getElementById('number2').value);
    //processing
    let sum = x + y;
    //output
    document.getElementById('output').innerHTML = " The sum of " + x + " and " + y + " = " + sum + " !!!";
  }

  let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;