import { calcularIVA } from "./motor";

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
