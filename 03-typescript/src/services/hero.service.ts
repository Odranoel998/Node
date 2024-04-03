import { heroes, Hero } from "../data/heroes";

export const findHeroById = (id: number) => {
  const hero = heroes.find((heroe) => heroe.id === id);
  return hero;
};
