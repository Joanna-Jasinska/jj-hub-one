import { functions } from '../functions';
export const onDices = {
  refreshDice(o) {
    if (o.classList.contains('inactive')) {
      o.classList.remove('inactive');
    }
    this.deselectDice(o);
  },
  rollDice(o) {
    const diceFace = o.querySelector('.dice__rolled');
    const diceMax = o.querySelector('.dice__max');
    const dmax = parseInt(diceMax.innerText);
    let dface = functions.getRandom(dmax);
    diceFace.innerText = `${dface}`;
    o.setAttribute(
      'bgcolor',
      `${functions.getDiceBackgroundColorName(dface, dmax)}`
    );
    // o.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
    diceMax.innerText = `${dmax}`;
  },
  selectDice(o) {
    if (o.classList.contains('dice') && !o.classList.contains('selected')) {
      o.classList.add('selected');
    } else {
      this.deselectDice(o);
    }
  },
  deactivateDice(o) {
    if (o.classList.contains('dice') && !o.classList.contains('inactive')) {
      o.classList.add('inactive');
    }
  },
  deselectDice(o) {
    if (o.classList.contains('selected')) {
      o.classList.remove('selected');
    }
  },
};
