const diceBag = document.querySelector('.diceBag');
function clearDiceBag() {
  log('clearDiceBag()');
  diceBag.innerText = '';
  generateButtons();
}

function generateButtons() {
  log('generateButtons()');
  // new game
  diceBag.prepend(document.createElement('div'));
  const newGameBtn = diceBag.querySelector('div');
  newGameBtn.classList.add('button-new-game', 'button');
  newGameBtn.innerText = 'New\nGame';
  newGameBtn.onclick = e => {
    e.preventDefault();
    initiateNewGame(newGame);
  };
  // end turn
  diceBag.prepend(document.createElement('div'));
  const endTurnBtn = diceBag.querySelector('div');
  endTurnBtn.classList.add('button-end-turn', 'button');
  endTurnBtn.innerText = 'End\nTurn';
  endTurnBtn.onclick = e => {
    e.preventDefault();
    const haveDices = document.querySelectorAll('.dice');
    for (let i = 0; i < haveDices.length; i++) {
      refreshDice(haveDices[i]);
      rollDice(haveDices[i]);
    }
  };
}
