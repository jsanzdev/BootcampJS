# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Modulo 10 - Asincronia

## Introduccion

Usando una API con personajes de Mortadelo y Filemon, crea una web que lea de esa API en asincronia y pueda filtrar los resultados por nombre.


## Solucion.

1. Creamos una interfaz para los datos de Personaje.
2. Creamos personajes.ts que sera el encargado de conectar con la API y recoger los datos
3. ui.ts sera el archivo encargado de finalizar la carga de datos y pintar la interfaz.
Para ello tenemos dos funciones ```fetchData()``` y ```loadData```. La primera e sla encargada de terminar la carga de datos y la segunda de pintar la interfaz.
4. Despues creamos un init() para poder llamar a todas las funciones de carga y listener en main.ts.
