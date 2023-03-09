function initiateNewGame(newGame = newGame) {
  log(`initiateNewGame(newGame = ${newGame})`);
  clearDiceBag();
  generateDices(newGame.dices);
  log();
}
