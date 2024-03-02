import "./style.css";

console.log("Hello Typescript!");

let cena:number = 120;
let bebidas:number = 18;
let cenaSinBebidas:number = cena - bebidas;

let totalYo:number = (cenaSinBebidas/6) + bebidas;
let totalAmigo:number = cenaSinBebidas/6;

console.log(`Total a pagar por mi: ${totalYo}`);
console.log(`Total a pagar por cada amigo: ${totalAmigo}`);
