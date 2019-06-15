let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function gessNumber(){
 let cont =0;
  let message =
        "I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100.";
    let answer = 38;
    let guess;
    
    do {
        guess = parseInt(prompt(message));
        if (guess<=100){
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another integer.";
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
        }
      }
      else{document.getElementById('output').innerHTML = "The number is too high, only to 100";
      document.getElementById('output2').innerHTML = cont + 'TRY AGAIN ';}
        cont ++;
    } while (guess != answer);
    message = guess + " is correct!";
    document.getElementById('output').innerHTML = guess +"It's Correct!.";
    document.getElementById('output2').innerHTML = cont + 'Attempts';
  
   }
