<?php
    include ('int_conection.php');
    $usuario = $_POST['txt_usuario'];
    $pasword = $_POST['txt_pasword'];
    $res= "SELECT * from usuarios where usr_usuario ='.$usuario.' and usr_pasword ='.$pasword.'";
    $resultado = mysqli_query($conect, $res);
    $array= mysqli_fetch_array($resultado) ;

            if($array['usr_usuario'] = $usuario ){
                if  ($array['usr_pasword'] = $pasword){                    
                    header("Location: ../../../menu.html");
                }elseif($array['usr_pasword'] != $pasword){
                    header("Location: ../../../into.html");          
                }
        
            } else {
                header("Location: ../../../into.html");        
            }
?>
