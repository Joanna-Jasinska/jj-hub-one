import { log } from './../functions';
import { items } from '../../data/items';
// import { functions } from '../functions';
import { onItems } from '../interface/onItems';
export const _ng_itemsGenerate = {
  fetchItem(itemId = 'use') {
    let item = {};
    for (const itm of items) {
      if (itm.id == itemId) {
        return itm;
      }
    }
  },

  generateItems(itemsInput) {
    const o = this;
    log(`generateItems(${itemsInput})`);
    const itemBag = document.querySelector('.itemBag');

    for (const ii of itemsInput) {
      log(`fetching item, item: ${ii}`);
      log(ii);
      log(ii.id);
      log(`fetchItem(ii): ${o.fetchItem(ii.id)}`);
      const i = o.fetchItem(ii.id);
      log(i);
      itemBag.append(document.createElement('div'));
      const item =
        document.querySelectorAll('.itemBag > div')[
          document.querySelectorAll('.itemBag > div').length - 1
        ];
      item.classList.add(i.type ? i.type : 'item', 'button');
      item.append(document.createElement('div'));
      const itemFace = item.querySelector('div');
      itemFace.classList.add('item__name');
      let iname = i.name ? i.name : 'no\nitem';
      itemFace.innerText = `${iname}`;
      item.prepend(document.createElement('div'));
      const itemUses = item.querySelector('div');
      itemUses.classList.add('item__uses');
      let iuses = parseInt(i.perTurnUses) ? parseInt(i.perTurnUses) : '0';
      itemUses.innerText = `${iuses}`;
      //   : functions.getRandomDiceMax();
      // let dface = functions.getRandom(dmax);

      // dice.setAttribute(
      //   'bgcolor',
      //   `${functions.getDiceBackgroundColorName(dface, dmax)}`
      // );
      //  dice.prepend(document.createElement('div'));
      // const diceMax = dice.querySelector('div');
      // diceMax.classList.add('dice__max');
      // diceMax.innerText = `${dmax}`;
      item.onclick = e => {
        e.preventDefault();
        onItems.clickItem(e.currentTarget);
      };
    }
  },
};
