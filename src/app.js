/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pintas = ["♦", "♥", "♠", "♣"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generarNumeroAleatorio(lista) {
  let numeroAleatorio = Math.floor(Math.random() * lista.length);

  return lista[numeroAleatorio];
}

function generarCartaAleatorio() {
  const pintaArriba = document.querySelector("#pintaArriba");
  const pintaAbajo = document.querySelector("#pintaAbajo");
  const numero = document.querySelector("#numero");

  let randomPintas = generarNumeroAleatorio(pintas);
  let randomNumero = generarNumeroAleatorio(valores);

  pintaArriba.innerHTML = randomPintas;
  pintaAbajo.innerHTML = randomPintas;
  numero.innerHTML = randomNumero;

  pintaAbajo.style.transform = "rotate(180deg)";

  if (randomPintas == "♦" || randomPintas == "♥") {
    pintaArriba.style.color = "red";
    pintaAbajo.style.color = "red";
    numero.style.color = "red";
  }
  if (randomPintas == "♠" || randomPintas == "♣") {
    pintaArriba.style.color = "black";
    pintaAbajo.style.color = "black";
    numero.style.color = "black";
  }
}

function imprimirCartasAleatorio() {
  let valoresPintas = generarNumeroAleatorio(pintas);
  let valoresNumero = generarNumeroAleatorio(valores);

  let divCard = document.createElement("div");
  divCard.classList = "card d-flex justify-content-center col-2 m-3";

  let divCardBody = document.createElement("div");
  divCardBody.classList = "card-body";

  let divPintaArriba = document.createElement("div");
  let spanPintaArriba = document.createElement("span");
  spanPintaArriba.innerHTML = valoresPintas;

  divPintaArriba.appendChild(spanPintaArriba);

  let divTexto = document.createElement("div");
  divTexto.classList = "card-text text-center";
  let numeroTexto = document.createElement("p");
  numeroTexto.innerText = valoresNumero;

  divTexto.appendChild(numeroTexto);

  let divPintaAbajo = document.createElement("div");
  divPintaAbajo.classList = "d-flex justify-content-end";

  let spanPintaAbajo = document.createElement("span");
  spanPintaAbajo.innerHTML = valoresPintas;
  spanPintaAbajo.style.transform = "rotate(180deg)";

  divPintaAbajo.appendChild(spanPintaAbajo);

  if (valoresPintas == "♦" || valoresPintas == "♥") {
    numeroTexto.style.color = "red";
    spanPintaArriba.style.color = "red";
    spanPintaAbajo.style.color = "red";
  }
  if (valoresPintas == "♠" || valoresPintas == "♣") {
    numeroTexto.style.color = "black";
    spanPintaArriba.style.color = "black";
    spanPintaAbajo.style.color = "black";
  }

  divCardBody.appendChild(divPintaArriba);
  divCardBody.appendChild(divTexto);
  divCardBody.appendChild(divPintaAbajo);

  divCard.appendChild(divCardBody);

  const imprimir = document.querySelector("#imprimirCards");
  imprimir.appendChild(divCard);

  //Width y heigth
  let inputAncho = document.querySelector("#inputWidth").value;
  let inputAlto = document.querySelector("#inputHeight").value;

  divCard.style.width = inputAncho + "px";
  divCard.style.height = inputAlto + "px";

  console.log(inputWidth + "-" + inputHeight);
}

window.onload = function() {
  // imprime cartas cada 10 segundos durante 30 segundos
  let timer = setInterval(imprimirCartasAleatorio, 10000);
  setTimeout(function() {
    clearInterval(timer);
  }, 30000);

  const generarCartas = document.querySelector("#generar-cartas");
  // Genera cartas al apretar el botón
  generarCartas.addEventListener("click", function() {
    //generarCartaAleatorio();
    imprimirCartasAleatorio();
  });
};
