//los selectores nos permiten acceder al doom

//retornando un objeto
// atraves del document podemos comunicarnos con los elementos html, es como un puente entre js y html



//los botones permiten enviar acciones al sistema y javascript gestiona eventos
//funcion encapsulamiento de una accion que queremos que haga

let numeroSecreto = 0; 
let intentos =1;
let numerosSorteados = [];
const numeroMaximo = 10;
//numerosSorteados.push(5);; agrega un elemento al final
//console.log(numerosSorteados.length)


function asignarTextoElemento(elemento, texto){
	let elementoHTML = document.querySelector(elemento); //retorna el elemento h1 que tenemos en el index html
	elementoHTML.innerHTML = texto;
	return; // buena practica

}

function verificarIntento(){
	console.log(numeroSecreto);
	let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //conseguir elemento por id
	let botonHabilitar = document.getElementById('reiniciar');
	if (numeroUsuario == numeroSecreto){
			asignarTextoElemento('p',`Acertaste el numero en, ${intentos} ${intentos ===1 ?'intento': 'intentos'}`);
			document.getElementById('reiniciar').disabled = false; //remueve el atributo
			document.getElementById('Intentar').disabled = true; //remueve el atributo	
	
	}else{
		if (intentos ==3){
			document.getElementById('Intentar').setAttribute('disabled','button');
			document.getElementById('reiniciar').disabled = false;
			asignarTextoElemento('h1', "Llegaste al numero Maximo de Intentos!");

		}else{
			//el usuario no acerto
			console.log(intentos);
			if (numeroUsuario < numeroSecreto){
				asignarTextoElemento('p',`El numero secreto es mayor`);
			}else {
				asignarTextoElemento('p',`El numero secreto es menor`);
			}
			intentos++;
			limpiarCaja();

		}
		
		

	}
	return;
}

function limpiarCaja(){
		document.querySelector('#valorUsuario').value = '';
		
}


function generarNumeroSecreto(){
	let numeroGenerado = Math.floor( Math.random() * numeroMaximo) +1 //retornar el numero secreto
	//verificar si está en la lista
	console.log(numeroGenerado)
	console.log(numerosSorteados)
	//si ya sorteamos todos los numeros
	if(numerosSorteados.length == numeroMaximo){
		asignarTextoElemento('p', "Ya se sortearon todos los numeros posibles")

	}else{
		if(numerosSorteados.includes(numeroGenerado)){
			return generarNumeroSecreto(); 
		}else{
			numerosSorteados.push(numeroGenerado)
			return numeroGenerado;
		}
	}

	

}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número Secreto");
    asignarTextoElemento('p', `Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}



function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja();
    document.getElementById('reiniciar').disabled = true;
    document.getElementById('Intentar').disabled = false;
}


condicionesIniciales();
