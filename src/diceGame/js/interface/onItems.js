import { functions } from '../functions';
import { clearGame } from './clear-game';
export const onItems = {
  checkActivation(o) {
    return false;
    // return functions.getRandom(1, 0);
  },
  refreshItem(o) {
    if (o.classList.contains('inactive')) {
      o.classList.remove('inactive');
    }
    this.deselectItem(o);
  },
  activateItem(o) {
    if (o.classList.contains('item') && !o.classList.contains('selected')) {
      o.classList.add('selected');
      if (this.checkActivation(o)) {
        clearGame.clearSelections();
      }
    } else {
      this.deselectItem(o);
    }
  },
  deselectItem(o) {
    if (o.classList.contains('selected')) {
      o.classList.remove('selected');
    }
  },

  deactivateItem(o) {
    if (o.classList.contains('item') && !o.classList.contains('inactive')) {
      o.classList.add('inactive');
    }
  },
};
