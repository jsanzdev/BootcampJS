import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TicketFinal,
  TotalPorTipoIva,
} from "./model";

/* 
 Main function to calculate the ticket.
*/

export const calculaTicket = (lineasTicket: LineaTicket[]) => {
  const ticket: ResultadoLineaTicket[] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    const linea = lineasTicket[i];
    const precioSinIva = linea.producto.precio * linea.cantidad;
    const precioConIva = calcularPrecioConIVA(
      precioSinIva,
      linea.producto.tipoIva
    );
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
    case "superreducidoA":
      return precioSinIva * 0.05;
    case "superreducidoB":
      return precioSinIva * 0.04;
    case "superreducidoC":
      return 0;
    case "sinIva":
      return 0;
    default:
      return 0;
  }
};

export const calcularPrecioConIVA = (precioSinIva: number, tipoIva: string) => {
  return precioSinIva + calcularIVA(precioSinIva, tipoIva);
};

export const calcularPorTipoIVA = (
  ticket: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  const tiposIva = ticket.map((linea) => linea.tipoIva);
  const tiposIvaUnicos = [...new Set(tiposIva)];
  const totalPorTipoIva = tiposIvaUnicos.map((tipoIva) => {
    const cuantia = parseFloat(
      ticket
        .filter((linea) => linea.tipoIva === tipoIva)
        .reduce(
          (acc, linea) => acc + linea.precioConIva - linea.precionSinIva,
          0
        )
        .toFixed(2)
    );
    return {
      tipoIva,
      cuantia,
    };
  });
  return totalPorTipoIva;
};

export const calcularTotalTicket = (
  ticket: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  const totalSinIva = parseFloat(
    ticket.reduce((acc, linea) => acc + linea.precionSinIva, 0).toFixed(2)
  );
  const totalConIva = parseFloat(
    ticket.reduce((acc, linea) => acc + linea.precioConIva, 0).toFixed(2)
  );
  const totalIva = parseFloat((totalConIva - totalSinIva).toFixed(2));

  return {
    totalSinIva,
    totalConIva,
    totalIva,
  };
};

export const calcularTicketFinal = (
  ticket: ResultadoLineaTicket[]
): TicketFinal => {
  return {
    lineas: ticket,
    total: calcularTotalTicket(ticket),
    desgloseIva: calcularPorTipoIVA(ticket),
  };
};
