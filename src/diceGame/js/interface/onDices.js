import { functions } from '../functions';
import { gameState } from '../../data/gameState';
import { onItems } from './onItems';
// import { initialiseInterface } from '../initiate/initialiseInterface';
import { clearGame } from './clear-game';
import { log } from '../functions';
export const onDices = {
  clickDice(o) {
    if (!o) return;
    if (!o.classList.contains('selected')) {
      this.selectDice(o);
      let selectedItems = document.querySelectorAll('.itemBag>.item.selected');
      log();
      log(`onDices: clickDice(o), selectedItems:`);
      log(selectedItems);
      log();
      if (
        selectedItems.length > 0 &&
        onItems.checkActivation(selectedItems[0])
      ) {
        onItems.activateItem(selectedItems[0]);
        clearGame.clearSelections();
      } else {
        // onDices.deselectDice(o);
        // onItems.deselectItem(selectedItems[0]);
        // onDices.deleteDice(o);
        // onItems.deactivateItem(selectedItems[0]);
      }
    } else {
      this.deselectDice(o);
    }
  },
  refreshDice(o) {
    if (!o) return;
    if (o.classList.contains('inactive')) {
      o.classList.remove('inactive');
    }
    this.deselectDice(o);
  },
  rollDice(o, getDiffNum = false) {
    if (!o) return;
    const diceFace = o.querySelector('.dice__rolled');
    const diceMax = o.querySelector('.dice__max');
    const dmax = parseInt(diceMax.innerText);
    const oldNum = Number(diceFace.innerText);
    let dface = functions.getRandom(dmax);
    while (getDiffNum && dface == oldNum) {
      dface = functions.getRandom(dmax);
    }
    diceFace.innerText = `${dface}`;
    o.setAttribute(
      'bgcolor',
      `${functions.getDiceBackgroundColorName(dface, dmax)}`
    );
    // o.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
    diceMax.innerText = `${dmax}`;
  },
  selectDice(o) {
    if (!o) return;
    if (o.classList.contains('dice') && !o.classList.contains('selected')) {
      o.classList.add('selected');
    } else {
      this.deselectDice(o);
    }
  },
  deactivateDice(o) {
    if (!o) return;
    if (o.classList.contains('dice') && !o.classList.contains('inactive')) {
      o.classList.add('inactive');
    }
  },
  deselectDice(o) {
    if (!o) return;
    if (o.classList.contains('selected')) {
      o.classList.remove('selected');
    }
  },
  getDiceID(o) {
    return 0;
    //  !!!aaa!!!
  },
  deleteDice(o) {
    if (o) {
      gameState.deleteDice(this.getDiceID(o));
      o.remove();
    }
  },
};
