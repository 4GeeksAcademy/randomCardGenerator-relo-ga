/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pintaArriba = document.querySelector("#pintaArriba");
  const pintaAbajo = document.querySelector("#pintaAbajo");
  const numero = document.querySelector("#numero");

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
};
