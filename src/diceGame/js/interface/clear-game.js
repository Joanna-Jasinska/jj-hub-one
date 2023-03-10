import { log } from '../functions';

import { newGame } from '../../data/newgame';
import { newGameFunctions } from '../initiate/newGameFunctions';
import { onDices } from './onDices';
import { onItems } from './onItems';
// import { _ng_dicesGenerate } from '../initiate/_ng_dices-generate';
export const clearGame = {
  clearDiceBag() {
    const diceBag = document.querySelector('.diceBag');
    log('clearDiceBag()');
    diceBag.innerText = '';
    // _ng_dicesGenerate.generateButtons();
    // this.generateMenuButtonsButtons();
  },
  clearItemBag() {
    const itemBag = document.querySelector('.itemBag');
    log('clearItemBag()');
    itemBag.innerText = '';
    // _ng_dicesGenerate.generateButtons();
    // this.generateButtons();
  },
  clearSelections() {
    const selected = document.querySelectorAll('.selected');
    for (s of selected) {
      s.classList.remove('selected');
    }
  },
};
