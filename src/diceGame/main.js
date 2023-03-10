// module.exports = require('./lodash');
import { dices } from './data/dices';
// import { f } from './js/initiate/!getFunctions';
import { log } from './js/functions';
// import { f } from './js/functions';
import { newGame } from './data/newgame';
import { newGameFunctions } from './js/initiate/newGameFunctions';
import { initialiseInterface } from './js/initiate/initialiseInterface';

// console.log(dices);
// console.log(newGame);
// console.log(`f= ${f}`);
// console.log('random: ' + f.getRandom());

log();
log('-----------page loaded----------');
log();
// f.initiateNewGame(newGame);
initialiseInterface.generateMenuButtons();
newGameFunctions.initiateNewGame(newGame);
log();
log('-----------loading finished----------');
log();
