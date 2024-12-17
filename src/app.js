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

function generarNumeroAl(lista) {
  let numeroAleatorio = Math.floor(Math.random() * lista.length);

  return lista[numeroAleatorio];
}

function generarCartaAleatorio() {
  const pintaArriba = document.querySelector("#pintaArriba");
  const pintaAbajo = document.querySelector("#pintaAbajo");
  const numero = document.querySelector("#numero");

  let randomPintas = generarNumeroAl(pintas);
  let randomNumero = generarNumeroAl(valores);

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

  let div = `
      <div class="card d-flex justify-content-center col-2 m-3">
        <div class="card-body">
          <div>
            <span id="pintaArriba"></span>
          </div>
          <div class="card-text text-center">
            <p class="mb-0" id="numero"></p>
          </div>
          <div class="d-flex justify-content-end">
            <span id="pintaAbajo"></span>
          </div>
        </div>
      </div>
  `;
}

function imprimirCartasAleatorio() {
  let rPintas = generarNumeroAl(pintas);
  let rNumero = generarNumeroAl(valores);

  let divCard = document.createElement("div");
  divCard.classList = "card d-flex justify-content-center col-2 m-3";

  let divCardBody = document.createElement("div");
  divCardBody.classList = "card-body";

  let divPintaArriba = document.createElement("div");
  let spanPintaArriba = document.createElement("span");
  spanPintaArriba.innerHTML = rPintas;

  divPintaArriba.appendChild(spanPintaArriba);

  let divTexto = document.createElement("div");
  divTexto.classList = "card-text text-center";
  let numeroTexto = document.createElement("p");
  numeroTexto.innerText = rNumero;

  divTexto.appendChild(numeroTexto);

  let divPintaAbajo = document.createElement("div");
  divPintaAbajo.classList = "d-flex justify-content-end";

  let spanPintaAbajo = document.createElement("span");
  spanPintaAbajo.innerHTML = rPintas;
  spanPintaAbajo.style.transform = "rotate(180deg)";

  divPintaAbajo.appendChild(spanPintaAbajo);

  if (rPintas == "♦" || rPintas == "♥") {
    numeroTexto.style.color = "red";
    spanPintaArriba.style.color = "red";
    spanPintaAbajo.style.color = "red";
  }
  if (rPintas == "♠" || rPintas == "♣") {
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
}

window.onload = function() {
  //write your code here
  generarCartas.addEventListener("click", function() {
    //generarCartaAleatorio();
    imprimirCartasAleatorio();
  });
};
