import { setScore } from "./ui";
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
