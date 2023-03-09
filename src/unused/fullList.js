// from: https://www.w3schools.com/howto/howto_html_include.asp
console.log('fullList script');
(() => {
  var z, i, elmnt, file, xhttp;

  let toInclude = `
  <script src="./data/newgame.js" type="script"></script>
  <script src="./js/functions.js" type="script"></script>
  <script src="./js/interface/onDices.js" type="script"></script>
  <script src="./js/interface/clear-game.js" type="script"></script>
  <script src="./js/initiate/_ng_dices-generate.js" type="script"></script>
  <script src="./js/initiate/newgame.js" type="script"></script>
  <script src="./main.js" type="module"></script>`;

  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute('w3-include-html');
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            // elmnt.innerHTML = this.responseText;
            elmnt.innerHTML += toInclude;
          }
          if (this.status == 404) {
            elmnt.innerHTML = 'Page not found.';
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute('w3-include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
})();
