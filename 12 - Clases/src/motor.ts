import { HotelCutre, HotelPijo, Reserva } from "./model";

export const priceHotelPijo = (reservas: Reserva[]) => {
  const hotelPijo = new HotelPijo(reservas);
  return {
    hotelName: "HotelPijo",
    reservas: hotelPijo.getReservas(),
    subtotal: hotelPijo.getSubtotal(),
    total: hotelPijo.getTotal(),
  };
};

export const priceHotelCutre = (reservas: Reserva[]) => {
  const hotelCutre = new HotelCutre(reservas);
  return {
    hotelName: "HotelCutre",
    reservas: hotelCutre.getReservas(),
    subtotal: hotelCutre.getSubtotal(),
    total: hotelCutre.getTotal(),
    totalConDescuento: hotelCutre.getDiscountedTotal(),
  };
};
