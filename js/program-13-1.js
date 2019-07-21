let today = new Date();
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

function doIt(){
    let list = [5, 7, 45, 56, 32, 14, 12, 4, 123, 19];
        let factor = 2;
        document.getElementById("array").innerHTML = list.toString();
        document.getElementById("factor").innerHTML = factor;
        document.getElementById("output").innerHTML = multiply(list, factor);
        document.getElementById("count").innerHTML = countEvens(list);
    }
    
    function multiply(list, multiplier) {
        let products = "";
        for (i = 0; i < list.length; i++) {
            let answer = list[i] * multiplier;
            products += answer + ", ";
        }
        return products;
    }
       
    function countEvens(list) {
        let evens = 0;
        for (i = 0; i < list.length; i++) {
            if (list[i] % 2 == 0) {
                evens++;
            }
        }
        return evens;
    }
    