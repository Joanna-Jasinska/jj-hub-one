function refreshDice(e){e.classList.contains("inactive")&&e.classList.remove("inactive")}function rollDice(e){var c=e.querySelector(".dice__rolled"),t=e.querySelector(".dice__max"),n=parseInt(t.innerText),i=f.getRandom(n);c.innerText="".concat(i),e.setAttribute("bgcolor","".concat(f.getDiceBackgroundColorName(i,n))),t.innerText="".concat(n)}
//# sourceMappingURL=01-gallery.b921447d.js.map
