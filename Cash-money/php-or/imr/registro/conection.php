<?php
$conexion = mysqli_connect("localhost","root","","contabilidaddb");
if ($conexion){
    echo "exitoso";
}else{
    echo "error";
}

?>
