<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width-divice-width, initial-scale=1">
        <title>Diarios</title>
        <meta name= "description">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <link rel="stylesheet" href="../css-or/contabilidad/diarios.css">
        <link href="https://fonts.googleapis.com/css?family=Gugi|Quattrocento" rel="stylesheet">
    </head>
    <body>
        
        <header>
         <input type="checkbox" id="btn-menu">    
         <label for="btn-menu"><img src="imagenes/menu.png" width="30" height="30" alt=""></label>
        </header>
        <nav >
            <ul class="menu">
                <li><a href="">CONTABILIDAD</a>
                <ul>
                    <li><a href="../contabilidad/plan-de-cuentas.html">PLAN DE CUENTAS</a></li>
                    <li><a href="../contabilidad/diarios.php">DIARIOS</a></li>
                    <li><a href="../contabilidad/egresos.html">EGRESOS</a></li>
                    <li><a href="../contabilidad/notas-de-creditos.html">NOTAS DE CRÉDITOS</a></li>
                    <li><a href="../contabilidad/notas-debito.html">NOTAS DE DÉBITO</a></li>
                    <li><a href="../contabilidad/rol-de-pagos.html">ROL DE PAGOS</a></li>
                    <li><a href="../contabilidad/depreciaciones.html">DEPRECIACIONES</a></li>
                </ul></li>
                <li><a href="">COMPRAS</a>
                <ul>
                   <li><a href="../compras/compras.html">COMPRAS</a></li>
                   <li><a href="../compras/proveedores.html">PROVEEDORES</a></li>
                   <li><a href="../compras/cuentas-a-pagar.html">CUENTAS A PAGAR</a></li>
                   <li><a href="../compras/retenciones.html">RETENCIONES</a></li>
                   <li><a href="../compras/formas-de-pago.html">FORMAS DE PAGO</a></li>
                   <li><a href="../compras/facturacion-electronica.html">FACTURACION ELECTRONICA</a></li>
                </ul></li>
                <li><a href="">VENTAS</a>
                <ul>
                   <li><a href="../ventas/ventas.html">VENTAS</a></li>
                   <li><a href="../ventas/clientes.html">CLIENTES</a></li>
                   <li><a href="../ventas/cuentas-por-cobrar.html">CUENTAS POR COBRAR</a></li>
                   <li><a href="../ventas/retenciones.html">RETENCIONES</a></li>
                   <li><a href="../ventas/facturacion-electronica.html">FACTURACION ELECTRONICA</a></li>
               </ul></li>
                <li><a href="">INVENTARIOS</a>
                <ul>
                   <li><a href="../inventarios/productos.html">PRODUCTOS</a></li>
                   <li><a href="../inventarios/kardex.html">KARDEX</a></li>
               </ul></li>
                <li><a href="../reportes/reportes.html">REPORTES</a></li>
                <li><a href="">BANCOS</a>
                <ul>
                   <li><a href="../bancos/crear-banco.html">CREAR BANCO</a></li>
                   <li><a href="../bancos/conciliacion-bancaria.html">CONCILIACION BANCARIA</a></li>
                   <li><a href="../bancos/tarjetas-de-creditos.html">TARJETAS DE CRÉDITOS</a></li>
                   <li><a href="../bancos/libro.bancos.html">LIBRO BANCOS</a></li>
               </ul></li>
                <li><a href="../estados-financieros/estados-financieros.html">ESTADOS FINANCIEROS</a>
                <li><a href="../parametros/parametros.html">PARÁMETROS</a></li>
                <li><a href="../nomina/nomina.html">NÓMINA</a></li>
                <li><a href="../impuestos/impuestos.html">IMPUESTOS</a></li>
                <li><a href="../activos-fijos/activos-fijos.html">ACTIVOS FIJOS</a></li>
            </ul></li>
           </nav>      
        <form action="../php-or/contabiliad/diarios/drs_insert.php" method="POST">
        <fieldset id ="tablaingreso"> 
          <legend>Ingreso de Datos</legend>
          <table>
              <tr>
                <td>Numero diario:
                  <input type="text" name="txt_numDiario" disabled placeholder="AUTOMATICO">
                  Fecha:
                    <input type="date" name="txt_fecha" placeholder="AAAA-MM-DD">
                </td>
              </tr>
              <tr>
                  <td>Concepto :
                    <input type="text" name="txt_concepto" size="60px">
                    
                  </td>
              </tr>
              <tr>
                  <td>Modulo :
                    <input type="radio" name="txt_modulo" checked value ="debe"/>Debe <input type="text" name="txt_debe">
                    <input type="radio" name="txt_modulo"value ="haber"/>Haber <input type="text" name="txt_haber">
                   
                  </td>
               </tr>
                <tr>
                    <td>Referencia:
                      <input type="text" name="txt_referencia">
                    </td>
                </tr>
                <tr>
                    <td> Cuenta:
                      <input type="text" name="txt_cuenta">
                      <button type="submit">Agregar</button>
                    </td>
                </tr>
          </table>
        </fieldset>
        <fieldset id="tabladatos">
        <legend>Datos para visualizar</legend>
          <table id="datos">
            <tbody>
             <tr>
              <th>Modulo</th>
              <th>Cuenta</th>
              <th>Referencia</th>
              <th>Concepto</th>
              <th>Debe</th>
              <th>Haber</th>
             </tr>  
             <?php 
             include ("conexion.php");
             $query= "SELECT * FROM diarios";
             $resultado = $con->query($query);
             while($row=$resultado->fetch_assoc()){
              ?>
              <tr>
              <td><?php echo $row['drs_modulo']?></td>
              <td><?php echo $row['drs_cuenta']?></td>
              <td><?php echo $row['drs_referencia']?></td>
              <td><?php echo $row['drs_concepto']?></td>
              <td><?php echo $row['drs_debe']?></td>
              <td><?php echo $row['drs_haber']?></td>
              </tr>
              <?php   
            }
              ?>                                  

            </tbody>

          </table>
        </fieldset>
      </form>
       <footer id="footer">
            &copy;2019 &bull; Brothers Ortiz &bull; Name Cash &bull; Company &bull; <span id="currentdate"></span>
            </footer>
        <script src="../js-or/contabilidad/diarios.js"> </script>
        
    </body>
</html>