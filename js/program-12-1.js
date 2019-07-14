let today = new Date();
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;
function addEnds() {
    let list = [56, 25, 14, 52];
    document.getElementById("showArray").innerHTML = list;
    let sum = list[0] + list[list.length -1];
    document.getElementById("output").innerHTML =
      "The add of the first and the last number is " + sum;
  }