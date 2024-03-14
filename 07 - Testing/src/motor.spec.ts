import {
  generateRandomNumber,
  generateCardNumber,
  getCardPoints,
} from "./motor";

describe("Carta aleatoria", () => {
  it("Genera un número aleatorio entre 1 y 10", () => {
    // Arrange
    const min = 1;
    //const max = 10;

    // Act
    const randomNumber = generateRandomNumber();

    // Assert

    expect(randomNumber).toBeGreaterThanOrEqual(min);
  });

  it("Genera un número aleatorio entre 1 y 10", () => {
    // Arrange
    //const min = 1;
    const max = 10;

    // Act
    const randomNumber = generateRandomNumber();

    // Assert
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it("Genera una carta aleatoria", () => {
    // Arrange
    const randomNumber = 8;

    // Act
    const card = generateCardNumber(randomNumber);

    // Assert
    expect(card).toEqual(10);
  });

  it("Comprobamos el valor de la carta", () => {
    // Arrange
    const randomNumber = 8;

    // Act
    const points = getCardPoints(randomNumber);

    // Assert
    expect(points).toEqual(0.5);
  });
});
