let today = new Date ();
let date = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;


function Today(){
let today = new Date();
//let dayOfWeek = new Date().getDay(); 
let date = today.getMonth()+1 + '/' + today.getDate() +'/'+ today.getDay();
//document.getElementById('output1').innerHTML = date;
if ((today.getDay() == 6) || (today.getDay() == 7)){
    document.getElementById('output').innerHTML = "Sleep in";
   }else if ((today.getMonth()+1 == 12)&&(today.getDate()==25)){    
             document.getElementById('output').innerHTML = "Merry Chrismas, Sleep in"; 
   }else if ((today.getMonth()+1==1)&&(today.getDate()==1)){    
             document.getElementById('output').innerHTML = "Happy New year, Sleep in";  
   }else if ((today.getMonth()+1 == 7)&&(today.getDate()==4)){    
             document.getElementById('output').innerHTML = "U.S. Independence Day, Sleep in";    
   }else if ((today.getMonth()+1 == 7)&&(today.getDate()==4)){    
            document.getElementById('output').innerHTML = "U.S. Independence Day, Sleep in";    
   }else{document.getElementById('output').innerHTML = 'Get up';}
   }
