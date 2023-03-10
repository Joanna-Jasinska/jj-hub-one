//
const categories=['dices','items'];
const types=['dice','item'];

export const gameState = {
  clearData(confirmation = true) {
    if (!confirmation || (confirmation && confirm())) {
      log('Clearing local storage');
      localStorage.clear();
    }
  },
  load(){},
  save(){},
  loadObjects(objectType = 'dices') {},
  getIndexFromID(objectType = 'dice', id = '') {
    let index = 0;
    return index;
  },
  getObject(objectType = 'dice', index = 0) {
  },
  deleteObject(objectType = 'dice', index = 0) {},
  addObject(objectType = 'dice', index = 0) {},
  replaceObject(objectType = 'dice',index=0,newObject={}),
  getDice(index=0) {},
  overwriteDice(oldId, newDice) {
    this.replaceObject('dice', getIndexFromID('dice',oldId), newDice);
   },
  deleteDice(id) {
    this.deleteObject('dice', getIndexFromID('dice',id));
  },
  loadDices() {
    this.loadObjects('dices');
  },
};
