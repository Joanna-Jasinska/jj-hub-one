const e={getRandomHexColor:()=>`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,getRandom:(e=1,o=1)=>Math.floor(Math.random()*(e+1-o)+o),getRandomDiceMax(e=20,o=4){let t=4,n=20;const r=[4,6,8,10,12,20];return n=r.indexOf(e)+1,t=r.indexOf(o)+1,r[Math.floor(Math.random()*(n+1-t)+t-1)]},getDiceBackgroundColor(e,o=6,t=1){let n="#ffcc99";return 20==e?"#00ffff":e==t?n:e==o?"#00ff00":e<=Math.floor((o-t)/5)+t?n:e>14?"#ff66ff":e>9?"#cfff9f":"#ffffbb"}},o=[{},{},{},{},{},{},{},{},{}];console.log([{type:"dice",max:"4",min:"1",name:"k4",preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{type:"dice",max:"6",min:"1",name:"k6",preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"}]),console.log(o),console.log(e.getRandom());const t=document.querySelector(".gallery");for(const n of o){t.append(document.createElement("div"));const o=document.querySelectorAll(".gallery>div")[document.querySelectorAll(".gallery>div").length-1];o.classList.add("gallery__item","gallery__image"),o.append(document.createElement("div"));const n=o.querySelector("div");n.classList.add("dice__rolled");let r=e.getRandomDiceMax(),a=e.getRandom(r);n.innerText=`${a}`,o.style.backgroundColor=`${e.getDiceBackgroundColor(a,r)}`,o.prepend(document.createElement("div"));const c=o.querySelector("div");c.classList.add("dice__max"),c.innerText=`${r}`,o.onclick=t=>{t.preventDefault();let a=e.getRandom(r);n.innerText=`${a}`,o.style.backgroundColor=`${e.getDiceBackgroundColor(a,r)}`,c.innerText=`${r}`}}
//# sourceMappingURL=01-gallery.84b0c83f.js.map
