# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

# Introduccion
Creamos un extractor de imagenes, dado un bloque HTML que introducimos en un Text Area.


# Solucion.

1. Creamos un regex que busque a ```<img ```y luego a ```src= ``` e identificamos la URL.
2. Creamos una funcion en motor.ts que se encargue de iterar sobre un texto y devuelva todas las URL imagenes que contiene.
3. Comprobamos con test que las imagenes se extraen correctamente.
4. En la UI seteamos un text area y un boton para extrar las imagenes asi como un div donde el listado de imagenes va a aparecer.
5. En ui.ts creamos una funcion ```showImageList``` que se encarga de modificar el DOM para mostrar las imagenes.
6. Otra funcion para coger el texto del text area y una ultimat funcion ```init()``` que se encarga de tener el listener en el boton.