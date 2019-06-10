var opciones = [0, 1, 2];
var eleccionMaquina;

function quitarEfecto(){
	var efec = document.getElementById('efecto').style.display ="none";

}
function aleatorio(minimo, maximo){ //escoge un numero al azar entre un rango dado
	var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
          return numero;
}

function usuario(eleccionUsuario){ //compara tu elección con la de la máquina y determina el resultado
	eleccionUsuario = parseInt(eleccionUsuario);
	eleccionMaquina = aleatorio(0,2);

if(eleccionUsuario==0){ //usuario ha elegido piedra
	if(opciones[eleccionMaquina] ==0){
		document.getElementById('efecto').innerHTML ='<h1> ¡Habeis empatado!</h1><br> <h3> La máquina también ha elegido piedra.</h3>';
	}else{
		if(opciones[eleccionMaquina] ==1){
		document.getElementById('efecto').innerHTML ='<h1> ¡Has perdido!</h1><br> <h3> La máquina ha elegido papel.</h3>';
	}else{
		if(opciones[eleccionMaquina] ==2){
			document.getElementById('efecto').innerHTML ='<h1> ¡Has ganado!</h1><br> <h3> La máquina ha elegido tijeras.</h3>';
		}
	}
} 
}

if(eleccionUsuario==1){ //usuario ha elegido papel
	if(opciones[eleccionMaquina] ==0){
		document.getElementById('efecto').innerHTML ='<h1> ¡Has ganado!</h1><br> <h3> La máquina ha elegido piedra.</h3>';
	}else{
		if(opciones[eleccionMaquina] ==1){
		document.getElementById('efecto').innerHTML ='<h1> ¡Habeis empatado!</h1><br> <h3> La máquina también ha elegido papel.</h3>';
	}else{
		if(opciones[eleccionMaquina] ==2){
			document.getElementById('efecto').innerHTML ='<h1> ¡Has perdido!</h1><br> <h3> La máquina ha elegido tijeras.</h3>';
		}
	}
} 
}

if(eleccionUsuario==2){ //usuario ha elegido tijeras
	if(opciones[eleccionMaquina] ==0){
		document.getElementById('efecto').innerHTML ='<h1> ¡Has perdido!</h1><br> <h3> La máquina ha elegido piedra.</h3>';
	}else{
		if(opciones[eleccionMaquina] ==1){
		document.getElementById('efecto').innerHTML ='<h1> ¡Has ganado!</h1><br> <h3> La máquina ha elegido papel.</h3>';
	}else{
		if(opciones[eleccionMaquina] ==2){
			document.getElementById('efecto').innerHTML ='<h1> ¡Habeis empatado!</h1><br> <h3> La máquina también ha elegido tijeras.</h3>';
		}
	}
} 
}


document.getElementById('efecto').style.display = "";
}