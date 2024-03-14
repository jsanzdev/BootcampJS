import { getCardUrl } from "./model";

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
