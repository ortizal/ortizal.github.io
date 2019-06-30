let today = new Date();
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

function doInputOutput() {
  let temp = parseInt(document.getElementById("temperature").value);
  let speed = parseInt(document.getElementById("speed").value);
  let output = windChill(temp, speed);
  document.getElementById("output").innerHTML = output + " F °";
}
function windChill(tempF, speed) {
  if (tempF > 50 || speed < 3) {
    let output = "N/A";
    return output;
  } else {
    let chill =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * (tempF * Math.pow(speed, 0.16));
    return Math.round(chill);
  }
}
