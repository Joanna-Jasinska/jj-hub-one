// import { dices } from './data/dices';
// import { f } from './js/functions';
// import { newGame } from './data/newgame';

function generateDices(dices) {
  log(`generateDices(${dices})`);
  const diceBag = document.querySelector('.diceBag');
  // console.log(diceBag);

  for (const d of dices) {
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
