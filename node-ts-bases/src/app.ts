import { getPokemonById } from "./js-foundation/06-promises";
import { getAge } from "./plugins";
import { buildLogger } from "./plugins/logger.plugin";

//const { getAge, getUUID } = require("./plugins");

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')
//const getPokemonById = require('./js-foundation/06-promises');
// const logger = buildLogger("app.js");

// logger.log("Hola log");
// logger.error("Hola error");
// getPokemonById(4)
//   .then( ( pokemon ) => console.log({ pokemon }) )
//   .catch( ( err ) => console.log( err ) )
//   .finally( () => console.log('Finalmente') );

// token de acceso
// Publicas

// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = makePerson( obj );

// console.log({ john });
//const cosa = getPokemonById(1);
//const name = getPokemonById(1).then((name) => console.log(name));
const Leo = getAge("July 20, 98 00:20:18");
console.log(typeof Leo);
