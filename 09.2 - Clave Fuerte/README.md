# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Introduccion

## Modulo 09.2 - Clave Segura
En el proceso que de creación de una cuenta queremos evitar que el usuario puede crear una clave débil, para ellos nos piden que:

- La clave debe de tener mayúsculas y minúsculas.
- La clave debe de tener números.
- La clave debe de tener caracteres especiales (@,#,+, _, ...)
- La clave debe de tener una longitud mínima de 8 caracteres.
- La clave no debe tener el nombre del usuario.
- La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).

## Solucion

En el model ponemos la interfaz requerida y el array con las common passwords.

Creamos una funcion para cada requerimiento y luego una funcion que valida todas las opciones.

He creado una interfaz sencilla que muestra el error al usuario cuando esta introduciendo el usuario y contraseña.