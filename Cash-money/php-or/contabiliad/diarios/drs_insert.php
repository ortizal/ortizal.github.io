<?php
include ("drs_conexion.php");
//$drs_id = $_POST['txt_numDiario'];
$fecha = $_POST['txt_fecha'];
$concepto = $_POST['txt_concepto'];
$modulo = $_POST['txt_modulo'];
$cuenta = $_POST['txt_cuenta'];
$referencia = $_POST['txt_referencia'];
$debe = $_POST['txt_debe'];
$haber = $_POST['txt_haber'];
$res="INSERT INTO diarios(drs_fecha, drs_concepto, drs_modulo, drs_cuenta, drs_referencia, drs_debe, drs_haber)
 VALUES ('$fecha','$concepto','$modulo','$cuenta','$referencia','$debe','$haber')"; 
$resultado=mysqli_query($con,$res);
header("Location:../../../contabilidad/diarios.php");
?>