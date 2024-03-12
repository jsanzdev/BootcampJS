# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Ejercicio - 07 Testing
## Enunciado
### Juego de las siete media - Testing

En laboratorios anteriores creamos el juego de la siete y media, luego refactorizamos el código y en este laboratorio vamos a realizar pruebas unitarias para comprobar que el juego funciona correctamente.

Para ambos ejercicios recomendamos usar el [sandbox de Typescript](https://github.com/Lemoncode/typescript-sandbox)

### Apartados obligatorios

Vamos a realizar pruebas unitarias para comprobar si un jugador ha ganado el juego o no.

Para ello,

1. Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no.
2. Crea una serie de tests utilizando la librería de testing _vitest_ para comprobar que el juego funciona correctamente.
3. Importa los módulos que fuesen necesarios para poder realizar las pruebas unitarias.

### Apartados opcionales

Para seguir practicando vamos a añadir dos casos más:

1. Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de que este número sea mayor que 7, sume 2 al resultado final. Para asegurarnos de que la función se comporta como se espera, se van a realizar sus pruebas unitarias correspondientes.
2. En el caso de que el jugador haya obtenido una carta, debemos de haber creado una función que devuelva el valor de esa carta. Al igual que en el caso anterior, se van a realizar pruebas unitarias para comprobar que la función se comporta como se espera en diferentes situaciones.

## Solucion

1. Usando vitest, creamos tests para comprobar que las funciones funcionan correctamente. La mayoria de funciones cambian el Score o devuelven un numero para la carta, esas fueron faciles de setear.
2. Para chequear funciones como gameOver, winGame he tenido que añadir un parametro al modelo game para definir el estado del juego. Usando el estado puedo testear si el jugador gana, pierde, se planta o reinicia el juego.