import { log } from '../functions';
import { dices } from '../../data/dices';
import { functions } from '../functions';
import { onDices } from '../interface/onDices';
export const _ng_dicesGenerate = {
  fetchDice(diceId = 'dicerandom') {
    let dice = {};
    for (const d of dices) {
      if (d.id == diceId) {
        return d;
      }
    }
  },

  generateDices(dicesInput) {
    const o = this;
    log(`_ng-dices-generate generateDices(${dicesInput})`);
    for (const di of dicesInput) {
      this.createDice(di);
    }
  },

  findNearestDice(diceID = false) {
    const allDices = document.querySelectorAll('.diceBag .dice');
    if (!diceID) {
      return false;
    }
    for (d in allDices) {
      if (onDices.getDiceID(d) == diceID) return d;
    }
    return false;
  },

  createDice(inputDice) {
    log(`_ng_dices_generate`);
    log(`fetching dice, id: ${inputDice.id}, dice:`);
    // log(inputDice);
    const d = this.fetchDice(inputDice.id);

    const diceBag = document.querySelector('.diceBag');
    diceBag.append(document.createElement('div'));
    const dice =
      document.querySelectorAll('.diceBag > div')[
        document.querySelectorAll('.diceBag > div').length - 1
      ];
    dice.classList.add(d.type ? d.type : 'dice', 'button');
    dice.append(document.createElement('div'));
    const diceFace = dice.querySelector('div');
    diceFace.classList.add('dice__rolled');
    let dmax = parseInt(d.max) ? parseInt(d.max) : functions.getRandomDiceMax();
    let dface = functions.getRandom(dmax);
    diceFace.innerText = `${dface}`;
    // dice.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
    // console.log(dice);
    dice.setAttribute(
      'bgcolor',
      `${functions.getDiceBackgroundColorName(dface, dmax)}`
    );
    // diceBefore.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
    dice.prepend(document.createElement('div'));
    const diceMax = dice.querySelector('div');
    diceMax.classList.add('dice__max');
    diceMax.innerText = `${dmax}`;
    dice.onclick = e => {
      e.preventDefault();
      onDices.clickDice(e.currentTarget);
    };
  },
};
