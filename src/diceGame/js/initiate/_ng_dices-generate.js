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
    log(`generateDices(${dicesInput})`);
    const diceBag = document.querySelector('.diceBag');
    // console.log(diceBag);

    for (const di of dicesInput) {
      log(`fetching dice, dice: ${di}`);
      log(di);
      log(di.id);
      log(`fetchDice(di): ${o.fetchDice(di.id)}`);
      const d = o.fetchDice(di.id);
      diceBag.append(document.createElement('div'));
      const dice =
        document.querySelectorAll('.diceBag > div')[
          document.querySelectorAll('.diceBag > div').length - 1
        ];
      dice.classList.add(d.type ? d.type : 'dice', 'button');
      dice.append(document.createElement('div'));
      const diceFace = dice.querySelector('div');
      diceFace.classList.add('dice__rolled');
      let dmax = parseInt(d.max)
        ? parseInt(d.max)
        : functions.getRandomDiceMax();
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
        onDices.selectDice(e.currentTarget);
      };
      // link.append(document.createElement('img'));
      // link.classList.add('gallery__item');
      // link.href = gi.original;
      // const img = dice.querySelector('img');
      // img.classList.add('gallery__image');
      // img.src = gi.preview;
      // img.alt = gi.description;
      // img.dataset.source = gi.original;

      // link.onclick = e => {
      //   e.preventDefault();
      // };
    }
  },
};
