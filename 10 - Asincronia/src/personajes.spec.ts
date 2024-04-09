import { getPersonajes } from "./personajes";

// create test for this function
describe("getPersonajes Test", () => {
  it("should return an array of personajes", async () => {
    // arrange
    const ApiURL = "http://localhost:3000/";

    //act
    const personajes = await getPersonajes(ApiURL);

    // assert
    expect(personajes).toBeDefined();
    expect(personajes).toBeInstanceOf(Array);
  });

  it("If data is not fetchable, it should return an empty array", async () => {
    // arrange
    const ApiURL = "http://localhost:3001/";

    // act
    const personajes = await getPersonajes(ApiURL);

    // assert
    expect(personajes).toEqual([]);
  });
});
