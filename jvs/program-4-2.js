function organize(){
let c = document.getElementById('city').value;
let s = document.getElementById('state').value;
let z = document.getElementById('zip').value;

document.getElementById('output').innerHTML = c+', '+ s +'  '+ z;

}

let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;