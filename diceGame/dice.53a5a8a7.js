function refreshDice(e){e.classList.contains("inactive")&&e.classList.remove("inactive")}function rollDice(e){var c=e.querySelector(".dice__rolled"),t=e.querySelector(".dice__max"),n=parseInt(t.innerText),i=f.getRandom(n);c.innerText="".concat(i),e.setAttribute("bgcolor","".concat(f.getDiceBackgroundColorName(i,n))),t.innerText="".concat(n)}
//# sourceMappingURL=dice.53a5a8a7.js.map
