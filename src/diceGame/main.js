// module.exports = require('./lodash');
import { dices } from './data/dices';
// import { f } from './js/initiate/!getFunctions';
import { log } from './js/functions';
// import { f } from './js/functions';
import { newGame } from './data/newgame';
import { newGameFunctions } from './js/initiate/newgame';

// console.log(dices);
// console.log(newGame);
// console.log(`f= ${f}`);
// console.log('random: ' + f.getRandom());

log();
log('-----------page loaded----------');
log();
// f.initiateNewGame(newGame);
newGameFunctions.initiateNewGame(newGame);
