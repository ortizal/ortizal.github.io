<?php
$id = $_POST['txt_id'];
$nombre = $_POST['txt_nombre'];
$apellido = $_POST['txt_apellido'];
$fechaNc = $_POST['txt_fechaNc'];
$email = $_POST['txt_email'];
$telefono = $_POST['txt_telf'];
$usuario = $_POST['txt_usr'];
$contraseña = $_POST['txt_contraseña'];
$cedula = $_POST['txt_cedula'];
//include("conection.php");
//mysql_query ("insert into usuario(usr_id, usr_nombre, usr_apellido, usr_fechaNc, usr_email, usr_telefono, usr_usuario, usr_contraseña, usr_cedula) values ('$id','$nombre','$apellido','$fechaNc','$email','$telefono','$usuario','$contraseña','$cedula')"); 
echo "<h2> la informacion se paso con exito la informacion </h2>";
echo "el id es: " .$id."</br>";
echo "el nombre es: " .$nombre."</br>";
echo "el apellido es: " .$apellido."</br>";
echo "la fecha es: " .$fechaNc."</br>";
echo "el e-mail es: " .$email."</br>";
echo "el telefono es: " .$telefono."</br>";
echo "el usuario es: " .$usuario."</br>";
echo "la contraseña es: " .$contraseña."</br>";
echo "la cedula es: " .$cedula."</br>";
?>
