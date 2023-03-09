import { galleryItems } from './gallery-items';
import { dices } from './dices';
import { f } from './functions';
import { newGame } from './dice-newgame';

console.log(dices);
console.log(newGame);
console.log(f.getRandom());

const diceBag = document.querySelector('.diceBag');
// console.log(diceBag);

function refreshDice(o) {
  if (o.classList.contains('inactive')) {
    o.classList.remove('inactive');
  }
}
function rollDice(o) {
  const diceFace = o.querySelector('.dice__rolled');
  const diceMax = o.querySelector('.dice__max');
  const dmax = parseInt(diceMax.innerText);
  let dface = f.getRandom(dmax);
  diceFace.innerText = `${dface}`;
  o.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
  diceMax.innerText = `${dmax}`;
}

for (const gi of newGame) {
  diceBag.append(document.createElement('div'));
  const dice =
    document.querySelectorAll('.diceBag > div')[
      document.querySelectorAll('.diceBag > div').length - 1
    ];
  dice.classList.add('dice');
  dice.append(document.createElement('div'));
  const diceFace = dice.querySelector('div');
  diceFace.classList.add('dice__rolled');
  let dmax = f.getRandomDiceMax();
  let dface = f.getRandom(dmax);
  diceFace.innerText = `${dface}`;
  dice.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
  dice.prepend(document.createElement('div'));
  const diceMax = dice.querySelector('div');
  diceMax.classList.add('dice__max');
  diceMax.innerText = `${dmax}`;
  dice.onclick = e => {
    if (!dice.classList.contains('inactive')) {
      e.preventDefault();
      dice.classList.add('inactive');
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
diceBag.prepend(document.createElement('div'));
const endTurn = diceBag.querySelector('div');
endTurn.classList.add('button-end-turn');
endTurn.innerText = 'End\nTurn';
endTurn.onclick = e => {
  e.preventDefault();
  const haveDices = document.querySelectorAll('.dice');
  for (let i = 0; i < haveDices.length; i++) {
    refreshDice(haveDices[i]);
    rollDice(haveDices[i]);
  }
};
