<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description" content="Piedra, papel o tijera" />
    <meta name="keywords" content="web, css, javascript" />
    <title>Piedra, papel o tijera</title>
    <link rel="icon" href="favicon.ico" type="image/ico" />
    <link rel="stylesheet" href="style.css" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Etiqueta para indicar al dispositivo movil lo que tiene que hacer -->
</head>
<body>
<div id="contenedor">
	<p> Piedra, papel o tijera </p>
 	
	<div id="juego">
		<div id="piedra" onclick="usuario('0')"><img src="piedra.png" /></div>
		<div id="papel" onclick="usuario('1')"><img src="papel.png" /></div>
		<div id="tijera" onclick="usuario('2')"><img src="tijera.png" /></div>
	</div>

	<div id="efecto" style="display:none;" onclick="quitarEfecto();"></div>

</div>

<script src="myscript.js"></script>

</body>
</html>