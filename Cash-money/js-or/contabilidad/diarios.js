let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date; 

function add() {
  var numColumnas=8;
  var numFilas=1;
  var codigoHTML="<table border=\"1\"><tbody>";
  for (var i = 0; i < numFilas; i++) {
    codigoHTML+="<tr>";
    for (var j = 0; j < numColumnas; j++) {
      codigoHTML+="<td></td><!--celda-->";
    }
    codigoHTML+="</tr>";
  }
  codigoHTML+="</tbody></table>";
  document.getElementById("temp4leData").innerHTML = codigoHTML;
}