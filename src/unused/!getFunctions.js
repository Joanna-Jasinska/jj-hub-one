import { functions } from '../diceGame/js/functions';
import { onDices } from '../diceGame/js/interface/onDices';
import { clearGame } from '../diceGame/js/interface/clear-game';
import { _ng_dicesGenerate } from '../diceGame/js/initiate/_ng_dices-generate';
import { newGameFunctions } from '../diceGame/js/initiate/newgame';

export const f = {
  ...functions,
  ...onDices,
  ...clearGame,
  ..._ng_dicesGenerate,
  ...newGameFunctions,
};
log(f);
