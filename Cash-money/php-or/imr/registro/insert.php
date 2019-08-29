<?php
include ("conection.php");
$id = $_POST['txt_id'];
$nombre = $_POST['txt_nombre'];
$apellido = $_POST['txt_apellido'];
$fechaNc = $_POST['txt_fechaNc'];
$email = $_POST['txt_email'];
$telefono = $_POST['txt_telf'];
$usuario = $_POST['txt_usr'];
$contraseña = $_POST['txt_contraseña'];
$cedula = $_POST['txt_cedula'];
$res="INSERT INTO usuarios(usr_id, usr_nombres, usr_apellidos, usr_fechaNacimiento, usr_email, usr_telefono, usr_usuario, usr_contraseña, usr_cedula)
 VALUES ('$id','$nombre','$apellido','$fechaNc','$email','$telefono','$usuario','$contraseña','$cedula')"; 
$resultado=mysqli_query($con,$res);
if ($resultado){
    echo "exitoso";
}else{
    echo "error";
}

?>
