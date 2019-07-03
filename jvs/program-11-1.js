let today = new Date();
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

function doFV() {
    let invested = parseInt(document.getElementById("amountInvested").value);
    let rate = parseFloat(document.getElementById("annualRate").value);
    let numYear = parseInt(document.getElementById("numberOfYear").value);
    let perYear = parseInt(document.getElementById("periodsPerYear").value);
    let cfv = computeFutureValue(invested,rate,numYear,perYear).toFixed(2);
    document.getElementById('output').innerHTML = "Future Value is: " + cfv ;
  }
  function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    let periodRate = annualRate / periodsPerYear;
    let totalPeriods = periodsPerYear * years;
    let fv = principal * Math.pow(1 + periodRate, totalPeriods);
    return fv;
   }
  