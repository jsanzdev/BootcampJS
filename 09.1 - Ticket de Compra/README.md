# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Ticket de compra

## Introduccion

En este laboratorio vamos a hacer un programa que nos calcule el precio de un ticket de compra.

El ticket de compra tendrá una serie de líneas de ticket, cada una de ellas con un producto y una cantidad.

Cada producto tendrá un nombre, un precio y un tipo de IVA.

- Mostrar cada producto con Nombre, Cantidad, precio sin IVA y Precio con IVA
- Mostrar los totales: Total con IVA, total Sin IVA y total IVA
- Mostrar el desglose de IVA.

## Solucion

Este ejercicio tiene las siguientes funciones:

### calcularTicket
Funcion que dado un listado de ```productos: LineaTicket[]``` retorna cada linea del ticket con su producto, cantidad, precio con IVA y precio sin IVA.

### calcularPrecioConIVA

Esta funcion se usa junto con ```calcularIVA``` dado el precio del producto y el tipo de IVA retorna el precio con IVA.

### calcularPortTipoIVA

usando el resultado de ```calcularTicket``` agrupamos y calculamos cada tipo de iva con la suma de la cuantia del iva de sus productos.

### calcularTotalTicket

usando el resultado de ```calcularTicket``` calculamos el total sin Iva, total con IVA y el total IVA del ticket.

### calcularTicketFinal

usando el resultado de ```calcularTicket``` esta funcion genera el ticket final haciendo uso de las funciones ```calcularTotalTicket``` y ```calcularPorTipoIVA```.

