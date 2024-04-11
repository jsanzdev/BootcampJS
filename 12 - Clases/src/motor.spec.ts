import { Reserva } from "./model";
import { priceHotelCutre, priceHotelPijo } from "./motor";

const reservaMock: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

describe("Hotel Prices", () => {
  it("should calculate the prices for a reservation on HotelPijo", () => {
    //Arrange

    const reserva = reservaMock;

    //act

    const hotelPijo = priceHotelPijo(reserva);

    const resultHotelPijo = {
      hotelName: "HotelPijo",
      reservas: reservaMock,
      subtotal: 920,
      total: 1113.2,
    };

    //Assert
    expect(hotelPijo).toEqual(resultHotelPijo);
  });
  it("should calculate the prices for a reservation on HotelCutre", () => {
    //Arrange

    const reserva = reservaMock;

    //act

    const hotelCutre = priceHotelCutre(reserva);
    const resultHotelCutre = {
      hotelName: "HotelCutre",
      reservas: reservaMock,
      subtotal: 870,
      total: 1052.7,
      totalConDescuento: (894.8).toFixed(2),
    };
    console.log(hotelCutre);

    //Assert
    expect(hotelCutre).toEqual(resultHotelCutre);
  });
});
