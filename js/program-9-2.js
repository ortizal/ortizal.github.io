let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function consultTemple() {
    let table = document.getElementById("templeData");
    let name = table.rows[1].cells[0].innerHTML;
    let year = parseInt(table.rows[1].cells[1].innerHTML);
    for (let cont = 1; cont < table.rows.length; cont++) {
      let oldTemple = parseInt(table.rows[cont].cells[1].innerHTML);
      if (oldTemple < year) {
        year = oldTemple;
        name = table.rows[cont].cells[0].innerHTML;
      }
      document.getElementById("output").innerHTML = name + " , " + year;
    }
  }
  