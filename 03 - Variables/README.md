# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Ejercicio 03 - Variables
## Enunciado

### Grupos musicales
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

- Nombre del grupo / cantante / compositor (string).
- Año de fundación: cuando se formó el grupo (numero).
- Si está en activo (booleano).
- Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

- The Beatles / 1960 / Activo: true / 🎵 Pop Rock
- Queen / 1970 / Activo: false / 🎸 Rock
- AC DC / 1973 / Activo: true / 🤘 Hard Rock
- Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
- The Rolling Stones / 1962 / Activo: true / 🎸 Rock
  
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.

## Solución

1. Creamos una interface para Band.
2. Creamos una variable para caga género musical
3. Añadimos cada grupo como tipo Band
4. Creamos un array con todas las bandas
5. Usando un foreach loop mostramos los datos en la consola.