import { setScore, checkGame, playCard, plantarse, restartGame } from "./ui";
import { game } from "./model";

describe("Comprobamos que setScore actualiza la puntuación", () => {
  it("Comprobamos que setScore actualiza la puntuación", () => {
    // Arrange
    game.score = 0;
    const newPoints = 5;

    // Act
    setScore(newPoints);

    // Assert
    expect(game.score).toEqual(newPoints);
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
