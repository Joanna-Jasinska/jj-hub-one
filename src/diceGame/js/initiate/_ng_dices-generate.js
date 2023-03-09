// import { dices } from './data/dices';
// import { f } from './js/functions';
// import { newGame } from './data/newgame';

function fetchDice(diceId = 'dicerandom') {
  let dice = {};
  for (d of dices) {
    if (d.id == diceId) {
      return d;
    }
  }
}

function generateDices(dicesInput) {
  log(`generateDices(${dicesInput})`);
  const diceBag = document.querySelector('.diceBag');
  // console.log(diceBag);

  for (const di of dicesInput) {
    log(`fetching dice, dice: ${di}`);
    log(di);
    log(`fetchDice(di): ${fetchDice(di.id)}`);
    const d = fetchDice(di.id);
    diceBag.append(document.createElement('div'));
    const dice =
      document.querySelectorAll('.diceBag > div')[
        document.querySelectorAll('.diceBag > div').length - 1
      ];
    dice.classList.add(d.type ? d.type : 'dice', 'button');
    dice.append(document.createElement('div'));
    const diceFace = dice.querySelector('div');
    diceFace.classList.add('dice__rolled');
    let dmax = parseInt(d.max) ? parseInt(d.max) : f.getRandomDiceMax();
    let dface = f.getRandom(dmax);
    diceFace.innerText = `${dface}`;
    // dice.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
    // console.log(dice);
    dice.setAttribute(
      'bgcolor',
      `${f.getDiceBackgroundColorName(dface, dmax)}`
    );
    // diceBefore.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
    dice.prepend(document.createElement('div'));
    const diceMax = dice.querySelector('div');
    diceMax.classList.add('dice__max');
    diceMax.innerText = `${dmax}`;
    dice.onclick = e => {
      let t = e.currentTarget;
      if (t.classList.contains('dice') && !t.classList.contains('inactive')) {
        e.preventDefault();
        t.classList.add('inactive');
      }
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
}
