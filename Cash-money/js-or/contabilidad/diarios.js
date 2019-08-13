let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date; 

function add(){
  let columnas = parseInt(prompt ("Cuantas columnas deseas?"));
  let filas = parseInt(prompt ("Cuantas filas deseas?"));
  let tableHtml = "<table border =\"1\"><tbody>";
  for (var i =0; i <filas ; i++){
    tableHtml += "<tr>";
    for(var j=0; j< columnas;j++){
      tableHtml += "<td>"+i+","+j+"</td><!--celda-->";
    }
    tableHtml +="</tr>";
  }
  tableHtml += "</tbody></table>";
  document.getElementById("ouput").innerHTML = tableHtml;
}
