<?php
$id = $_POST['txt_id'];
$nombre = $_POST['txt_nombre'];
$apellido = $_POST['txt_apellido'];
$fechaNc = $_POST['text_fechaNc'];
$email = $_POST['text_email'];
$telefono = $_POST['text_telefono'];
$usuario = $_POST['text_usuario'];
$contraseña = $_POST['text_contraseña'];
$cedula = $_POST['text_cedula'];
//include("conection.php");
// $sql= "INSERT INTO usuario(usr_id,usr_nombre,usr_apellido,usr_fechaNc,usr_email,usr_telefono,usr_usuario,usr_contraseña,usr_cedula) VALUES ('$usr_id','$usr_nombre','$usr_apellido','$usr_fechaNc','$usr_email','$usr_telefono','$usr_usuario','$usr_contraseña','$usr_cedula')"; 
 //myqli_query($conection,$sql);
echo "<h2> la se paso con exito la informacion </h2>"
?>
