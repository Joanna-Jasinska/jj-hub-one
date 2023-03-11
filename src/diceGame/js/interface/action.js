//
import { clearGame } from './clear-game';
import { log } from '../functions';
import { onDices } from './onDices';
import { onItems } from './onItems';

export const action = (actions = [[undefined], undefined]) => {
  let a = [...actions[0]];
  const o = actions[1];
  const next = (b = []) => {
    log(
      'action: finished action: "' +
        b.shift() +
        '" proceeding with: "' +
        b[0] +
        '"'
    );
    return b[0] != 'action';
  };
  log(`action: proceeding with actions: ${a}`);
  switch (a[0]) {
    case undefined:
      break;
    case 'deselectdices':
      next(a);
      if (!isNaN(a[0])) {
        for (let i = 0; i < parseInt(a[0]); i++) {
          let selectedDice = document.querySelector('.dice.selected');
          onDices.deselectDiceDice(selectedDice);
        }
      } else {
        let selectedDice = document.querySelector('.dice.selected');
        for (d in selectedDice) {
          onDices.deselectDiceDice(d);
        }
      }
      next(a);
    case 'disabledices':
      next(a);
      if (!isNaN(a[0])) {
        for (let i = 0; i < parseInt(a[0]); i++) {
          let selectedDice = document.querySelector('.dice.selected');
          onDices.deactivateDice(selectedDice);
        }
      } else {
        let selectedDice = document.querySelector('.dice.selected');
        for (d in selectedDice) {
          onDices.deactivateDice(d);
        }
      }
      next(a);
    case 'disableself':
      onItems.disableItem(o);
      next(a);
    case 'rerolldices':
      //   log('rerolling, amount of dices: ' + a[0] + ' which is ' + !isNaN(a[0]));
      if (!isNaN(a[0])) {
        for (let i = 0; i < parseInt(a[0]); i++) {
          let selectedDice = document.querySelector('.dice.selected');
          onDices.rollDice(selectedDice);
          //   onDices.deselectDice(selectedDice);
        }
      } else {
        log('will reroll all dices');
        let selectedDices = document.querySelectorAll('.dice.selected');
        for (d of selectedDices) {
          log(d);
          onDices.rollDice(d);
          //   onDices.deselectDice(d);
        }
      }
      next(a);
    default:
      break;
  }

  clearGame.clearSelections();
  return false;
};
