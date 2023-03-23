// import { functions } from '../functions';
import { clearGame } from './clear-game';
import { action } from './action';
import { log } from '../functions';
import { _ng_dicesGenerate } from '../initiate/_ng_dices-generate';
import { _ng_itemsGenerate } from '../initiate/_ng_items-generate';
export const onItems = {
  clickItem(o) {
    log(`onItems: clickItem`);

    if (this.selectItem(o) && this.checkActivation(o)) {
      log(`onItems: clickItem - activating activateItem(o), o: ${o}`);
      this.activateItem(o);
    }
  },
  getActions(o) {
    log('onItems: getActions');
    if (!o) return [[0], undefined];
    log('o.getAttribute(code): ' + o.getAttribute('code'));
    log(_ng_itemsGenerate.fetchItem(o.getAttribute('code')).actions);
    return [_ng_itemsGenerate.fetchItem(o.getAttribute('code')).actions, o];
    // return [['disabledices', 1, 'disableself', 'rerolldices'], o];
  },
  checkActivation(o) {
    const selected = document.querySelectorAll('.dice.selected').length;
    log(`onItems: checkActivation: selected dices: ${selected}`);
    log(o);
    log(o.actions);
    const itemActions = this.getActions(o);
    return selected ? itemActions : false;
    //!!!aaa!!!
    // return functions.getRandom(1, 0);
  },
  refreshItem(o) {
    if (o.classList.contains('inactive')) {
      o.classList.remove('inactive');
    }
    this.deselectItem(o);
  },
  activateItem(o) {
    log();
    log(`onItems: activateItem(o), o:`);
    log(o);
    log();
    if (o.classList.contains('item')) {
      // !!!aaa!!! doing activation
      action(this.checkActivation(o));
      clearGame.clearSelections();
      this.disableItem(o);
    }
  },
  selectItem(o) {
    if (
      o.classList.contains('item') &&
      !o.classList.contains('selected') &&
      !o.classList.contains('inactive')
    ) {
      o.classList.add('selected');
      return true;
    } else {
      return this.deselectItem(o);
    }
  },
  deselectItem(o) {
    if (o.classList.contains('selected')) {
      o.classList.remove('selected');
    }
    return false;
  },

  disableItem(o) {
    if (o.classList.contains('item') && !o.classList.contains('inactive')) {
      o.classList.add('inactive');
      this.deselectItem(o);
    }
  },
};
