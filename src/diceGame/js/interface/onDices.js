// import { f } from '../functions';

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
  o.setAttribute('bgcolor', `${f.getDiceBackgroundColorName(dface, dmax)}`);
  // o.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
  diceMax.innerText = `${dmax}`;
}
