# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

# Ejercicio - 04 Funciones
## Enunciado
### Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

A implementar:

- Básico:
    - En grande se muestra el turno.
    - El operario puede ir dándole a siguiente o anterior y el turno cambia.
    - Además de esto vamos a añadir un botón de reset que pone el turno a 0.
- Avanzado:
    - Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.
- Challenge:
    - Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga como puedes formatear un número para que siempre tenga dos dígitos.

> Pista: Puedes usar la función [padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart), la cual nos ayuda a añadir ceros o cualquier otro carácter que queramos al principio de una cadena de texto..

> Si lo implementas en TypeScript en modo estricto, mejor que mejor.

## Solución.

1. Primero he creado los botones necesarios para subir, bajar y reiniciar el contador de turnos.
2. He creado tres funciones tipadas para subir, bajar y reiniciar el contador.
3. Usando Event listeners con opcional, monitoreamos cuando se cliquean los botones, como el codigo de cada boton se repite, he creado una funcion ```updateInnerHTML``` para actualizar el numero en HTML.
4. En la funcion de bajar el contador, pongo un safe para que el valor nunca sea menor que 0. 
5. Creamos nuevos elementos input y un boton para habilitar el cambio de turno manual. Poniendo un safe para que no se puedan introducir numeros negativos.
