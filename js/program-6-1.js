function wchose(){
var show;
let weat = document.getElementById('weather').value;
switch(weat){
    case (""):
    show ="error";
    break;
    case "hot":
    show = "sandals";
    break;
    case "rain": 
    show = "galoshes";
    break;
    case "snow":
    show = "boots";
    break;
    case "cool":
    show = "shoes";
}
if (show == "error") {
    let output = "Best shoe for today: ";
    document.getElementById('output').innerHTML = output;
  } else {
    let output = "You should wear " + show + ".";
    document.getElementById('output').innerHTML = output;
  }
}

let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;