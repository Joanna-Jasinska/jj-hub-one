import { log } from '../functions';

import { newGame } from '../../data/newgame';
import { newGameFunctions } from '../initiate/newgame';
import { onDices } from './onDices';
import { onItems } from './onItems';
// import { _ng_dicesGenerate } from '../initiate/_ng_dices-generate';
export const clearGame = {
  clearDiceBag() {
    const diceBag = document.querySelector('.diceBag');
    log('clearDiceBag()');
    diceBag.innerText = '';
    // _ng_dicesGenerate.generateButtons();
    this.generateButtons();
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

  generateButtons() {
    const diceBag = document.querySelector('.diceBag');
    log('generateButtons()');
    // new game
    diceBag.prepend(document.createElement('div'));
    const newGameBtn = diceBag.querySelector('div');
    newGameBtn.classList.add('button-new-game', 'button');
    newGameBtn.innerText = 'New\nGame';
    newGameBtn.onclick = e => {
      e.preventDefault();
      newGameFunctions.initiateNewGame(newGame);
    };
    // end turn
    diceBag.prepend(document.createElement('div'));
    const endTurnBtn = diceBag.querySelector('div');
    endTurnBtn.classList.add('button-end-turn', 'button');
    endTurnBtn.innerText = 'End\nTurn';
    endTurnBtn.onclick = e => {
      e.preventDefault();
      const haveDices = document.querySelectorAll('.dice');
      for (let i = 0; i < haveDices.length; i++) {
        onDices.refreshDice(haveDices[i]);
        onDices.rollDice(haveDices[i]);
      }
      const haveItems = document.querySelectorAll('.item');
      for (let i = 0; i < haveItems.length; i++) {
        onItems.refreshItem(haveItems[i]);
      }
    };
  },
};
