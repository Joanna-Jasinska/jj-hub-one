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
  createItem(itemInput) {
    const itemBag = document.querySelector('.itemBag');
    log(
      `_ng_items: createItem: fetchItem(itemInput.id): ${this.fetchItem(
        itemInput.id
      )}`
    );
    const i = this.fetchItem(itemInput.id);
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

    item.setAttribute('code', `${i.id}`);

    item.onclick = e => {
      e.preventDefault();
      onItems.clickItem(e.currentTarget);
    };
  },
  generateItems(itemsInput) {
    const o = this;
    log(`generateItems(${itemsInput})`);
    const itemBag = document.querySelector('.itemBag');

    for (const ii of itemsInput) {
      this.createItem(ii);
    }
  },
};
