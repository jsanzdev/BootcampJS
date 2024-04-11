# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:


# Introduccion

Imaginemos que tenemos una web de reservas de hotel. Cuando un cliente realiza sus reservas indica los siguientes datos:

Qué habitaciones quiere (hay de varios tipos).
Para cada habitación, cuántas personas la van a ocupar.
Además, debemos saber que el tipo de IVA que aplica a las habitaciones de hotel es del 21%.

# Solucion

1. Creamos una clase Hotel base. Que hara las operaciones comunes. En mi caso hago el descuento opcional asi poder aplicarlo en el "HotelCutre"
2. Creamos una funcion/algoritmo para calcular el precio dado un array de reservas.
3. Como plus, he creado una interfaz donde el usuario puede reservar una habitacion y le mostrara los precios de los dos hoteles.