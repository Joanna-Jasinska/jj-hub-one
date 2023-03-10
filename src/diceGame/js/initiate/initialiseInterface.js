//
import { newGameFunctions } from './newGameFunctions';
import { onDices } from '../interface/onDices';
import { onItems } from '../interface/onItems';
import { log } from './../functions';

export const initialiseInterface = {
  generateMenuButtons() {
    // const diceBag = document.querySelector('.diceBag');
    const header = document.querySelector('.header');
    log('generateMenuButtons()');
    // new game
    // diceBag.prepend(document.createElement('div'));
    header.append(document.createElement('div'));
    const newGameBtn =
      header.querySelectorAll('div')[header.querySelectorAll('div').length - 1];
    newGameBtn.classList.add('button-new-game', 'button');
    newGameBtn.innerText = 'New\nGame';
    newGameBtn.onclick = e => {
      e.preventDefault();
      newGameFunctions.initiateNewGame(newGame);
    };
    // end turn
    // diceBag.prepend(document.createElement('div'));
    header.append(document.createElement('div'));
    const endTurnBtn =
      header.querySelectorAll('div')[header.querySelectorAll('div').length - 1];
    // const endTurnBtn = diceBag.querySelector('div');
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
