let listaDeAmigos = [];

function mostrarAmigos() {
	let lista = document.getElementById('listaAmigos');
	lista.innerHTML = '';

	for(let i = 0; i< listaDeAmigos.length; i++){
		let li = document.createElement('li');
		li.textContent = listaDeAmigos[i];
		lista.appendChild(li);
	}
}

function limpiarCaja() {
    document.getElementById('amigo').value = ''; //Limpia la caja de texto
		document.getElementById('amigo').focus();   //
}


function normalizarNombre(nombre) {
  return nombre
    .toLowerCase() //Convierte el nombre en letras minúsculas
    .normalize("NFD") // Descompone caracteres con acento
    .replace(/[\u0300-\u036f]/g, ""); // Elimina los signos diacríticos
}


function agregarAmigo(){
	let nombre = document.getElementById('amigo').value;

	if(nombre === ''){
		alert('Por favor inserte un nombre');
		return;
	}

	const nombreNormalizado = normalizarNombre(nombre);
  const listaNormalizada = listaDeAmigos.map(n => normalizarNombre(n));

	if (listaNormalizada.includes(nombreNormalizado)) {
			alert('Ya existe el nombre. Ingrese otro diferente');
			limpiarCaja();
			return;
		} else {
			listaDeAmigos.push(nombre); // Guarda el nombre tal como fue escrito
			limpiarCaja();
			mostrarAmigos();
		}
	
	
}

function sortearAmigo() {
	if(listaDeAmigos.length === 0){
		alert('No hay amigos para sortear');
		return;
	}

	let resultado = document.getElementById('resultado');
	resultado.innerHTML = '';
	let numeroAleatorio = Math.floor(Math.random()* listaDeAmigos.length);
	let amigoSeleccionado = listaDeAmigos[numeroAleatorio];
	resultado.innerHTML = 'El amigo secreto es: ' + amigoSeleccionado;
}

