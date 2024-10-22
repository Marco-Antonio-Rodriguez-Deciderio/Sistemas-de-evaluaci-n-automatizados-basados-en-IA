const Area_Juego = document.querySelector(".AreaJuego");
const Puntu_acion = document.querySelector(".Puntuacion");
const Mejor_Puntaje=document.querySelector(".HS");

let perdio = false;
let comidaX, comidaY;
let serpienteX = 5,
  serpienteY = 10;
let Cuerposerpiente = [];
let velocidadX = 0,
  velocidadY = 0;
let ponerIntervalo;
let puntaje=0;

//obtener la puntuacion mas alta de nuestra memoria
let mejorpuntaje=localStorage.getItem("high-score") || 0;
Mejor_Puntaje.innerText=`Mejor Puntación: ${mejorpuntaje}`;

const Aviso = () => {
  //limpia el tiempo y actualiza la página
  clearInterval(ponerIntervalo);
  alert("Perdiste, vuelve a jugar");
  location.reload();
};

const cambiarDireccion = (e) => {
  console.log(e);
  if (e.key === "ArrowUp" && velocidadY != 1) {
    velocidadX = 0;
    velocidadY = -1;
  } else if (e.key === "ArrowDown" && velocidadY != -1) {
    velocidadX = 0;
    velocidadY = 1;
  } else if (e.key === "ArrowLeft" && velocidadX != 1) {
    velocidadX = -1;
    velocidadY = 0;
  } else if (e.key === "ArrowRight" && velocidadX != -1) {
    velocidadX = 1;
    velocidadY = 0;
  }
  iniciarJuego();
};

const cambiarLugarComida = () => {
  comidaX = Math.floor(Math.random() * 30) + 1;
  comidaY = Math.floor(Math.random() * 30) + 1;
};

const iniciarJuego = () => {
  //revisar si perdió
  if (perdio) return Aviso();

  let htmlMarkup = `<div class="comida" style="grid-area: ${comidaY} / ${comidaX}"></div>`;
  //saber si la serpiente comio la comida
  if (serpienteX === comidaX && serpienteY === comidaY) {
    cambiarLugarComida();
    Cuerposerpiente.push([comidaX, comidaY]);
    //console.log(Cuerposerpiente);
    puntaje++;
    mejorpuntaje=puntaje>=mejorpuntaje ? puntaje : mejorpuntaje;
    localStorage.setItem("high-score", mejorpuntaje);
    Puntu_acion.innerText=`Puntuación: ${puntaje}`;
    Mejor_Puntaje.innerText=`Mejor Puntuación: ${mejorpuntaje}`;
  }

  for (let i = Cuerposerpiente.length - 1; i > 0; i--) {
    Cuerposerpiente[i] = Cuerposerpiente[i - 1];
  }

  Cuerposerpiente[0] = [serpienteX, serpienteY];

  //actualiza la posicion de la cabeza segun la velocidad
  serpienteX += velocidadX;
  serpienteY += velocidadY;

  //saber si la serpiente tocó el límite
  if (
    serpienteX <= 0 ||
    serpienteX > 30 ||
    serpienteY <= 0 ||
    serpienteY > 30
  ) {
    perdio = true;
  }

  for (let i = 0; i < Cuerposerpiente.length; i++) {
    htmlMarkup += `<div class="cabeza" style="grid-area: ${Cuerposerpiente[i][1]} / ${Cuerposerpiente[i][0]}"></div>`;

    //Para saber si la cabeza se golpeó con su cuerpo
    if (
      i !== 0 &&
      Cuerposerpiente[0][1] === Cuerposerpiente[i][1] &&
      Cuerposerpiente[0][0] === Cuerposerpiente[i][0]
    ) {
      perdio = true;
    }
  }
  Area_Juego.innerHTML = htmlMarkup;
};

cambiarLugarComida();
ponerIntervalo = setInterval(iniciarJuego, 125);
document.addEventListener("keydown", cambiarDireccion);
