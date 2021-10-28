var abierta = false;
var puntosNPC = 0;
var puntosJugador = 0;

function mano_swap(elemento, mano_abierta) {
  elemento.src = mano_abierta;
}

function getPuntosJugador() {
  return this.puntosJugador;
}

function getPuntosNPC() {
  return this.puntosNPC;
}

function cambiaMano(elemento) {
  //let mano_abierta = new Image();
  //mano_abierta.src = "mano_abierta.jpg";
  //console.log(elemento.id);
  if (setImgRandom() % 2 == 0) {
    mano_swap(elemento, "mano_abierta.jpg");
    puntosJugador++;
    document.getElementById("contador_jugador").innerHTML = getPuntosJugador();
  } else {
    mano_swap(elemento, "fallido.png");
    puntosNPC++;
    document.getElementById("contador_npc").innerHTML = getPuntosNPC();
  }
  refreshPhoto(elemento);
}

function refreshPhoto(elemento) {
  setTimeout(() => {
    elemento.src = "mano_cerrada.jpg";
  }, 1000);
}

function setImgRandom() {
  //console.log(Math.floor(Math.random() * 2)); //mult x2 para que te salga 0--1 exacto
  return Math.floor(Math.random() * 2);
}
