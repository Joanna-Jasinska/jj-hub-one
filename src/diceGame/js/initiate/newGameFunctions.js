import { log } from '../functions';
import { clearGame } from '../interface/clear-game';
import { _ng_dicesGenerate } from './_ng_dices-generate';
import { _ng_itemsGenerate } from './_ng_items-generate';
export const newGameFunctions = {
  initiateNewGame(newGameState = newGame) {
    log(`initiateNewGame(newGameState = ${newGameState})`);
    clearGame.clearItemBag();
    clearGame.clearDiceBag();
    _ng_dicesGenerate.generateDices(newGameState.dices);
    _ng_itemsGenerate.generateItems(newGameState.items);
    log();
  },
};
