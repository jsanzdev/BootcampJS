import { LineaTicket } from "./model";
import {
  calcularIVA,
  calcularPorTipoIVA,
  calcularTotalTicket,
  calculaTicket,
} from "./motor";

describe("Calcula el precio del IVA", () => {
  it("Calcula el precio del IVA de un producto con IVA general", () => {
    // Arrange
    const precioSinIva = 100;
    const tipoIva = "general";
    const expected = 21;

    // Act
    const result = calcularIVA(precioSinIva, tipoIva);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("Calcula el precio total del ticket", () => {
  const ticket: LineaTicket[] = [
    {
      producto: {
        nombre: "Legumbres",
        precio: 2,
        tipoIva: "general",
      },
      cantidad: 2,
    },
    {
      producto: {
        nombre: "Perfume",
        precio: 20,
        tipoIva: "general",
      },
      cantidad: 3,
    },
    {
      producto: {
        nombre: "Leche",
        precio: 1,
        tipoIva: "superreducidoC",
      },
      cantidad: 1,
    },
  ];
  it("Calcula el precio total del ticket", () => {
    // Arrange
    const totalTicket = calculaTicket(ticket);
    const expected = {
      totalSinIva: 65,
      totalConIva: 78.44,
      totalIva: 13.44,
    };

    // Act
    const result = calcularTotalTicket(totalTicket);

    // Assert
    expect(result).toStrictEqual(expected);
  });

  it("Calcula los tipos de IVA del ticket", () => {
    // Arrange
    const totalTicket = calculaTicket(ticket);
    const expected = [
      { tipoIva: "general", cuantia: 13.44 },
      { tipoIva: "superreducidoC", cuantia: 0 },
    ];

    // Act
    const result = calcularPorTipoIVA(totalTicket);

    // Assert
    expect(result).toStrictEqual(expected);
  });
});
