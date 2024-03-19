import { cartas } from "./model";

describe("Comprobamos que la coleccion de cartas es correcta", () => {
  it("Comrprobamos que la coleccion de cartas tiene 12 cartas", () => {
    // Arrange
    const expected = 12;
    // Act
    const result = cartas.length;
    // Assert
    expect(result).toEqual(expected);
  });
  it("Comrprobamos que la coleccion de cartas tiene 6 parejas", () => {
    // Arrange
    const expected = 6;
    // Act
    const result =
      cartas.filter(
        (carta) => cartas.filter((c) => c.idFoto === carta.idFoto).length === 2
      ).length / 2;
    // Assert
    expect(result).toEqual(expected);
  });
});
