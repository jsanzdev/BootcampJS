import { LineaTicket, ResultadoLineaTicket } from "./model";

/* 
 Main function to calculate the ticket.
*/

export const calculaTicket = (lineasTicket: LineaTicket[]) => {
  const ticket: ResultadoLineaTicket[] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    const linea = lineasTicket[i];
    const precioSinIva = linea.producto.precio * linea.cantidad;
    const precioConIva =
      precioSinIva + calcularIVA(precioSinIva, linea.producto.tipoIva);
    console.log(
      `Producto: ${linea.producto.nombre}, cantidad: ${linea.cantidad}, precio sin IVA: ${precioSinIva}, precio con IVA: ${precioConIva}`
    );
    ticket.push({
      nombre: linea.producto.nombre,
      cantidad: linea.cantidad,
      precionSinIva: precioSinIva,
      tipoIva: linea.producto.tipoIva,
      precioConIva: precioConIva,
    });
  }
  return ticket;
};

export const calcularIVA = (precioSinIva: number, tipoIva: string) => {
  switch (tipoIva) {
    case "general":
      return precioSinIva * 0.21;
    case "reducido":
      return precioSinIva * 0.1;
    case "superreducido":
      return precioSinIva * 0.04;
    default:
      return 0;
  }
};
