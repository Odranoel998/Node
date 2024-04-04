import { getPokemonById } from "../../src/js-foundation/06-promises";
describe("js-foundation/06-promises.ts", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId).then(
      (pokemonName) => pokemonName
    );

    expect(pokemonName).toBe("bulbasaur");
  });
});
