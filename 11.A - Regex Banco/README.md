# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Introduccion
Validador de IBAN
Debemos mostrar:

- El banco al que pertenece, para ello:
  - La oficina.
  - El digito de control.
- La cuenta.
- Si el IBAN es valido.

# Solucion

1. Creamos una expresion regex para diseccionar cualquier IBAN (todo junto, con espacios o guiones.)
2. Utilizando una interface creamos el modelo del IBAN.
3. Creamos un mapa con el listado de bancos.
4. Una funcion para obtener el banco dado el numero
5. Una funcion para validar el IBAN.
6. El IBAN solo se disecciona si es valido.
7. En la UI creamos una interfaz sencilla con un DIV donde colocamos los datos
8. Usando la funcion ```showIBANRSULT()``` modificamos el DOM para mostrar los datos.
9. Usando un event listener sobre el input, no requerimos de ningun boton para comprobar, las validaciones se hacen automaticamente.
10. Usamos una funcion INIT para setear todo en el main.ts
