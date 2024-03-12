import {
  generateRandomNumber,
  generateCardNumber,
  getCardPoints,
  checkGame,
  plantarse,
  restartGame,
  playCard,
} from "./motor";
import { game, getCardUrl } from "./model";

describe("El jugador gana o pierde la partida", () => {
  it("El jugador gana la partida", () => {
    // Arrange
    game.score = 7.5;
    const winState = "win";

    // Act
    checkGame();

    // Assert
    expect(game.state).toEqual(winState);
  });
  it("El jugador gana la partida", () => {
    // Arrange
    game.score = 9;
    const loseState = "lose";

    // Act
    checkGame();

    // Assert
    expect(game.state).toEqual(loseState);
  });
});

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

describe("Comprobamos que getCardURL devuelve una URL", () => {
  it("Comprobamos que getCardURL devuelve una URL", () => {
    // Arrange
    const card = 1;

    // Act
    const url = getCardUrl(card);

    // Assert
    const urlRegex =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    expect(url).toMatch(urlRegex);
  });
});

describe("Comprobamos que las funciones de playCard(), restartGame() y plantarse() funcionan correctamente", () => {
  it("Comprobamos que la funcion de jugar una carta funciona correctamente", () => {
    // Arrange
    game.score = 0;
    game.state = "stop";
    const playingState = "playing";

    // Act
    playCard();

    // Assert
    expect(game.state).toEqual(playingState);
  });

  it("Comprobamos que la funcion de plantarse funciona correctamente", () => {
    // Arrange
    game.state = "playing";
    const stopState = "stop";

    // Act
    plantarse();

    // Assert
    expect(game.state).toEqual(stopState);
  });

  it("Comprobamos que la funcion de reiniciar funciona correctamente", () => {
    // Arrange
    game.score = 5;

    // Act
    restartGame();

    // Assert
    expect(game.score).toEqual(0);
  });
});
