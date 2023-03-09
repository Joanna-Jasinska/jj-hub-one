import { galleryItems } from './gallery-items';
import { dices } from './dices';
import { f } from './functions';
import { newGame } from './dice-newgame';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(dices);
console.log(newGame);
console.log(f.getRandom());

const galleryDiv = document.querySelector('.gallery');

for (const gi of newGame) {
  galleryDiv.append(document.createElement('div'));
  const div =
    document.querySelectorAll('.gallery>div')[
      document.querySelectorAll('.gallery>div').length - 1
    ];
  div.classList.add('gallery__item', 'gallery__image');
  div.append(document.createElement('div'));
  const diceFace = div.querySelector('div');
  diceFace.classList.add('dice__rolled');
  let dmax = f.getRandomDiceMax();
  let dface = f.getRandom(dmax);
  diceFace.innerText = `${dface}`;
  div.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
  div.prepend(document.createElement('div'));
  const diceMax = div.querySelector('div');
  diceMax.classList.add('dice__max');
  diceMax.innerText = `${dmax}`;
  div.onclick = e => {
    e.preventDefault();
    let dface = f.getRandom(dmax);
    diceFace.innerText = `${dface}`;
    div.style.backgroundColor = `${f.getDiceBackgroundColor(dface, dmax)}`;
    diceMax.innerText = `${dmax}`;
  };
  // link.append(document.createElement('img'));
  // link.classList.add('gallery__item');
  // link.href = gi.original;
  // const img = div.querySelector('img');
  // img.classList.add('gallery__image');
  // img.src = gi.preview;
  // img.alt = gi.description;
  // img.dataset.source = gi.original;

  // link.onclick = e => {
  //   e.preventDefault();
  // };
}
// const options = {
//   captions: true,
//   captionsData: 'alt',
//   captionSelector: 'img',
//   captionType: 'attr',
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// };
// let gallery = new SimpleLightbox('.gallery a', options);
// gallery.on('show.simplelightbox', function () {
//   //on show nothing :P
// });
