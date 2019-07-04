let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;


function timesTable() {
    let num = parseInt(document.getElementById("number").value);
    let numbertimes = "";
    for (let mul = 1; mul <= 12; mul++) {
      numbertimes += num + " X " + mul + " = " + num * mul + "<br>";
    }
    document.getElementById("output").innerHTML = numbertimes;
  }
  