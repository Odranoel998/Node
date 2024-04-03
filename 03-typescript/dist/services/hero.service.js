"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroById = void 0;
const heroes_1 = require("../data/heroes");
const findHeroById = (id) => {
    const hero = heroes_1.heroes.find((heroe) => heroe.id === id);
    return hero;
};
exports.findHeroById = findHeroById;
