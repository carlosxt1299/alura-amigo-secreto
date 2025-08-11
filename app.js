// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables principales en español
let participantes = [];
let resultadoSorteo = {};

// Función para agregar participante
function agregarParticipante(nombre) {
	if (nombre && !participantes.includes(nombre)) {
		participantes.push(nombre);
	}
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigosSecretos() {
	if (participantes.length < 2) {
		alert('Se necesitan al menos dos participantes.');
		return;
	}
	let amigos = [...participantes];
	for (let participante of participantes) {
		let posibles = amigos.filter(a => a !== participante);
		if (posibles.length === 0) {
			// Reiniciar sorteo si no hay opción válida
			return sortearAmigosSecretos();
		}
		let indice = Math.floor(Math.random() * posibles.length);
		resultadoSorteo[participante] = posibles[indice];
		amigos = amigos.filter(a => a !== posibles[indice]);
	}
}

// Función para mostrar el resultado en consola (puedes adaptar para mostrar en HTML)
function mostrarResultado() {
	for (let participante in resultadoSorteo) {
		console.log(`${participante} -> ${resultadoSorteo[participante]}`);
	}
}

// Ejemplo de uso:
agregarParticipante('Ana');
agregarParticipante('Luis');
agregarParticipante('María');
sortearAmigosSecretos();
mostrarResultado();
