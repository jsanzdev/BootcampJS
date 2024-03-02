# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Ejercicio 02 - Tipos de datos y Operadores
## Enunciado

### Cena de cumpleaños entre amigos
Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.

- Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.
- Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen las bebidas por un valor de 18 €.
- Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.
- Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola.

## Solución

Creamos tres variables: cena, bebidas y cenaSinBebidas.
Lo que me tocaria pagar a mi es la sexta parte de la Cena Sin Bebidas mas el Precio sin las bebidas.
Lo que le corresponde a cada amigo es una sexta parte de la cena sin bebidas.
