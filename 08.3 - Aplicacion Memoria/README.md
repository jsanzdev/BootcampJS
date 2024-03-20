# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# El Juego de la memoria!

## Introducción

Queremos implementar el clásico juego de las parejas ¿En que consiste esto?

- Mostramos al usuario 12 cartas boca abajo.
- El usuario pincha en una carta y se ve el contenido de la misma (por ejemplo un gatito).
- El usuario pincha en otra carta y se ve el contenido de la misma
    - Si por ejemplo es un perrito, ambas cartas se ocultan y vuelta a empezar.
    - Si es un gatito (y la carta origen era el mismo gatito), se quedan las dos cartas bocarriba y el usuario vuelve a jugar.
- Esto así hasta que el usuario encuentre todas las parejas.

## Solucion

Este ejercicio ha sido bastante desafiante. He empezado con las funciones que se sugieren en el ejercicio, construyendo a partir de ahi.

Una de las funciones mas importantes es la funcion ```barajarCartas``` esta funcion ha llevado varias busquedas de google ademas de mucha conversacion con Github Copilot. Al final llegue a una funcion en la que las series de array eran muy diferentes entre si.

Creamos el index.html, con la estructura del juego, haciendo un div ```card-grid``` con 12 divs dentro donde colocaremos las cartas.

En el archivo ```ui.ts``` creamos una variable ```gridCard``` que la usaremos para almacenar el array de divs para nuestras cartas.

Una vez tenemos nuestro array de divs de cartas, creamos una funcion ```drawCards```, esta es la funcion que maneja la logica de las parejas y del juego. Primero he programado la funcion completa, paso por paso, sin ninguna abstraccion.

El resultado ha sido una funcion bastante complicada y he intentado abstraer lo maximo posible de ella mediante pequenyas funciones como ```CompletarPartida``` o ```updateGameMessage```.

*Nota, si abstraia cualquier otra cosa de la logica, la funcion se rompia y ya no habia limitacion al girar las cartas.*

Una vez la logica del juego estaba bien, he añadido otros elementos como el estilo para la animacion de las cartas, numero de intentos o el boton de reiniciar partida.
