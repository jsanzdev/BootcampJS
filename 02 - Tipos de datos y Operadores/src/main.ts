import "./style.css";

console.log("Hello Typescript!");

let cena = 120;
let bebidas = 18;
let cenaSinBebidas = cena - bebidas;

let totalYo = (cenaSinBebidas/6) + bebidas;
let totalAmigo = cenaSinBebidas/6;

console.log(`Total a pagar por mi: ${totalYo}`);
console.log(`Total a pagar por cada amigo: ${totalAmigo}`);
