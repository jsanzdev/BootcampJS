export interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
  desayuno: boolean;
}

interface RoomPrices {
  standard: number;
  suite: number;
}

export interface Request {
  name: string;
  surname: string;
  email: string;
  phone: string;
  days: number;
  rooms: number;
  people: number;
  type: "standard" | "suite";
  breakfast: boolean;
}

export interface HotelPrices {
  hotelName: "HotelPijo" | "HotelCutre";
  reservas: Reserva[];
  subtotal: number;
  total: number;
  totalcondescuento?: number;
}

export const reservasMock: Reserva[] = [
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

class Hotel {
  private roomPrices: RoomPrices;
  private discount: number;
  private breakfastPrice: number = 15;

  constructor(
    private reservas: Reserva[],
    roomPrices: RoomPrices,
    discount?: number
  ) {
    this.roomPrices = roomPrices;
    this.discount = discount || 0;
  }

  getReservas() {
    return this.reservas;
  }

  getSubtotal() {
    return this.reservas.reduce((total, reserva) => {
      const basePrice = this.roomPrices[reserva.tipoHabitacion];
      const additionalPersonCost = reserva.pax > 1 ? (reserva.pax - 1) * 40 : 0;
      const roomPrice = (basePrice + additionalPersonCost) * reserva.noches;
      const breakfastCost = reserva.desayuno
        ? this.breakfastPrice * reserva.pax * reserva.noches
        : 0;
      return total + roomPrice + breakfastCost;
    }, 0);
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    const tax = subtotal * 0.21;
    return subtotal + tax;
  }

  getDiscountedTotal() {
    const total = this.getTotal();
    return (total - total * this.discount).toFixed(2);
  }
}

export class HotelPijo extends Hotel {
  constructor(reservas: Reserva[]) {
    super(reservas, { standard: 100, suite: 150 });
  }
}

export class HotelCutre extends Hotel {
  constructor(reservas: Reserva[]) {
    super(reservas, { standard: 100, suite: 100 }, 0.15);
  }
}
