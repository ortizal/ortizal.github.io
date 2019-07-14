let today = new Date();
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

function getMiddle() {
    let list1 = [56, 25, 14, 52];
    let num1 = list1.length % 2;
    let answer = 0;
    let answer1 = 0;
    if (list1.length % 2 == 0) {
      document.getElementById("output1").innerHTML = num1;
      answer1 = (list1[list1.length / 2 - 1] + list1[list1.length / 2]) / 2;
      document.getElementById("output3").innerHTML = answer1;
    } else {
      answer1 = list1[(list1.length - 1) / 2];
      document.getElementById("output3").innerHTML = answer1;
    }
  
    let list = [85, 45, 38, 47, 47];
    let num = list.length % 2;
    if (list.length % 2 == 1) {
      document.getElementById("output").innerHTML = num;
      answer = (list[list.length / 2 - 1] + list[list.length / 2]) / 2;
      document.getElementById("output2").innerHTML = answer;
    } else {
      answer = list[(list.length - 1) / 2];
      document.getElementById("output2").innerHTML = answer;
    }
  }
  