# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Ejercicio - 05 Condicionales
## Enunciado
### Juego de las siete media

Crea el juego de cartas las siete media.

## Solucion.

1. Primero he creado la variable para la puntuacion ademas de un type cards para almacenar los numeros.
2. He creado la funcion ```showCard(card: cartas)``` que usando  un switch devuelve la URL con la carta y cambia el img source.
3. Despues he creado la logica del juego en la siguiente funcion:
```ts
function playCard(): void {
  let card = generateNumber();
  if (card > 7) {
    card += 2;
  }
  console.log(card);
  showCard(card as Cartas);
  updateScore(card);
}
```
Esta funcion esta ligada al boton "Pedir Carta". Usando la funcion ```generateNumber()``` generamos un numero del 1 al 10 si el numero es mayor que 7, se le suman dos. Despues pasamos el numero como parametro en la funcion ```showCard()``` y ```updateScore```
4. En updateScore esta la logica para que el jugador pierda o gane.
5. Una vez la logica funcionaba, añadi los botones de Plantarse y Reiniciar. Creando funciones para parar el juego y reiniciar el juego.
6. En la funcion de plantarse es donde he colocado la logica para comprar la puntuacion.
7. La funcion Reiniciar, simplemente pone el juego como al principio, le da la vuelta a la carta y pone la puntuacio a 0.
8, Por ultimo, añadi que cuando la partida acabase, el boton de pedir carta se deshabilita.
