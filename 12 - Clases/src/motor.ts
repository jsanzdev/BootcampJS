import { HotelCutre, HotelPijo, Reserva } from "./model";

const priceHotelPijo = (reservas: Reserva[]) => {
  const hotelPijo = new HotelPijo(reservas);

  console.log("Hotel Pijo");
  console.log("Reservas:", hotelPijo.getReservas());
  console.log("Subtotal:", hotelPijo.getSubtotal());
  console.log("Total:", hotelPijo.getTotal());
  console.log("Total con descuento:", hotelPijo.getDiscountedTotal());
};

const priceHotelCutre = (reservas: Reserva[]) => {
  const hotelCutre = new HotelCutre(reservas);

  console.log("Hotel Cutre");
  console.log("Reservas:", hotelCutre.getReservas());
  console.log("Subtotal:", hotelCutre.getSubtotal());
  console.log("Total:", hotelCutre.getTotal());
  console.log("Total con descuento:", hotelCutre.getDiscountedTotal());
};
