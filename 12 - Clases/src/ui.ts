import { priceHotelCutre, priceHotelPijo } from "./motor";
import { Reserva, Request } from "./model";

//Get the form data.
const form = document.getElementById("reserva-form") as HTMLFormElement;

const getFormData = () => {
  const formData = new FormData(form);

  const data = {
    name: (formData.get("name") as string) ?? "",
    surname: (formData.get("surname") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    phone: (formData.get("tel") as string) ?? "",
    days: Number(formData.get("days") as string) || 0,
    rooms: Number(formData.get("rooms") as string) || 0,
    people: Number(formData.get("pax") as string) || 0,
    type: (formData.get("type") as "standard" | "suite") ?? "standard",
    breakfast: formData.get("breakfast") === "on",
  };

  return data;
};

//We need to transform the Data into Reserva objects.
const processReserva = (data: Request): Reserva[] => {
  const reservas: Reserva[] = [];
  for (let i = 0; i < data.rooms; i++) {
    reservas.push({
      tipoHabitacion: data.type as "standard" | "suite",
      pax: data.people,
      noches: data.days,
      desayuno: data.breakfast,
    });
  }

  console.log(reservas);
  return reservas;
};

//We now show the prices
const showPrices = (request: Request) => {
  const reserva = processReserva(request);
  const hotelPijo = priceHotelPijo(reserva);
  const hotelCutre = priceHotelCutre(reserva);

  const reservaInfo = document.getElementById("reserva-info");
  if (reservaInfo && reservaInfo instanceof HTMLDivElement) {
    reservaInfo.innerHTML = `
            <h2>Hola ${request.name} ${request.surname}!</h2>
            <p>Estos son los precios de tu reserva:</p>
          <h2>${hotelPijo.hotelName}</h2>
          <p>Subtotal: ${hotelPijo.subtotal}</p>
          <p>Total: ${hotelPijo.total}</p>
          <h2>${hotelCutre.hotelName}</h2>
          <p>Subtotal: ${hotelCutre.subtotal}</p>
          <p>Total: ${hotelCutre.total}</p>
          <p>Total con descuento: ${hotelCutre.totalConDescuento}</p>
          `;
  }
};

export const init = () => {
  const form = document.getElementById("reserva-form");
  if (form && form instanceof HTMLFormElement) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (data) {
        console.log(data);
        showPrices(data);
      }
    });
  }
};
