export const log = (l = '------------------------------------------------') => {
  console.log(l);
};

export const functions = {
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  },
  getRandom(max = 1, min = 1) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  },
  getRandomDiceMax(max = 20, min = 4) {
    let rangeMin = 4;
    let rangeMax = 20;
    const dices = [4, 6, 8, 10, 12, 20];
    rangeMax = dices.indexOf(max) + 1;
    rangeMin = dices.indexOf(min) + 1;
    let rNum = Math.floor(
      Math.random() * (rangeMax + 1 - rangeMin) + rangeMin - 1
    );

    return dices[rNum];
  },

  getDiceBackgroundColor(rolled, max = 6, min = 1) {
    let bad = '#ffcc99'; //'#ffaa77'; //'#ff9966'; //red
    let med = '#ffffbb'; //'#ffff99'; //yell
    let uncommon = '#cfff9f'; //'#ccff99'; //l green
    let epic = '#ff66ff'; // pink
    let mythic = '#00ffff'; //'#66ffff'; // l blue
    let perfect = '#00ff00'; // neon green
    if (rolled == 20) return mythic;
    if (rolled == min) return bad;
    if (rolled == max) return perfect;
    if (rolled <= Math.floor((max - min) / 5) + min) {
      return bad;
    }
    if (rolled > 14) return epic;
    if (rolled > 9) return uncommon;
    return med;
  },
  getDiceBackgroundColorName(rolled, max = 6, min = 1) {
    let varNamePart = `--dice-bg-color-`;
    if (rolled == 20) return varNamePart + `mythic`;
    if (rolled == min) return varNamePart + `bad`;
    if (rolled == max) return varNamePart + `perfect`;
    if (rolled <= Math.floor((max - min) / 5) + min) {
      return varNamePart + `bad`;
    }
    if (rolled > 14) return varNamePart + `epic`;
    if (rolled > 9) return varNamePart + `uncommon`;
    return varNamePart + `medium`;
  },
};
