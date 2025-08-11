const MAX_AMIGOS = 5;

const CONFIG = {
  MAX_AMIGOS: MAX_AMIGOS,
  MENSAJES: {
    LIMITE_ALCANZADO: `¡Solo se permiten ${MAX_AMIGOS} amigos!`,
    CAMPO_VACIO: 'Por favor, inserte un nombre.',
    NOMBRE_DUPLICADO: 'Ese nombre ya está en la lista.',
    LISTA_VACIA: 'No hay amigos para sortear.'
  }
};

let amigos = [];
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const listaSorteo = document.getElementById('resultado');
const contadorAmigos = document.getElementById('contadorAmigos');

function mostrarMensaje(mensaje) {
  listaSorteo.innerHTML = `<li>${mensaje}</li>`;
}

function actualizarContador() {
  if (contadorAmigos) {
    contadorAmigos.textContent = `Amigos: ${amigos.length}/${CONFIG.MAX_AMIGOS}`;
  }
}

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  
  if (!nombre) {
    alert(CONFIG.MENSAJES.CAMPO_VACIO);
    return;
  }
  
  if (amigos.includes(nombre)) {
    mostrarMensaje(CONFIG.MENSAJES.NOMBRE_DUPLICADO);
    return;
  }
  
  if (amigos.length >= CONFIG.MAX_AMIGOS) {
    mostrarMensaje(CONFIG.MENSAJES.LIMITE_ALCANZADO);
    return;
  }
  
  amigos.push(nombre);
  inputAmigo.value = '';
  actualizarListaAmigos();
  actualizarContador();
  limpiarResultado();
}

function actualizarListaAmigos() {
  listaAmigos.innerHTML = '';
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarMensaje(CONFIG.MENSAJES.LISTA_VACIA);
    return;
  }
  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  
  mostrarMensaje(`Amigo sorteado: ${amigoSorteado}`);
  
  amigos.splice(indiceAleatorio, 1);
  
  actualizarListaAmigos();
  actualizarContador();
  
  if (amigos.length === 0) {
    setTimeout(() => {
      alert("¡Todos los amigos han sido sorteados!");
      mostrarMensaje("¡Todos los amigos han sido sorteados!");
      limpiarTodo();
    }, 1500);
  }
}

function limpiarTodo() {
  amigos = [];
  listaAmigos.innerHTML = '';
  listaSorteo.innerHTML = '';
  actualizarContador();
  inputAmigo.focus();
}

function limpiarResultado() {
  listaSorteo.innerHTML = '';
}

inputAmigo.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});

actualizarContador();