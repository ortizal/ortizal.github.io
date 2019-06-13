let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function gessNumber(){
      var answer = 38;
      let number = parseInt(document.getElementById("xnumber").value);
    do {
      
        if (number < answer) {
        document.getElementById('output').innerHTML = number +  " is too low. Please enter another integer.";
        }
        else if (number > answer) {
        document.getElementById('output').innerHTML = number + " is too high. Please enter another integer.";
        }
    } while (number != answer);
   document.getElementById('output').innerHTML = number +" is correct!";
   }
