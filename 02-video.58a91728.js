!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);function r(){var e=0;try{e=JSON.parse(localStorage.getItem("videoplayer-current-time"))}catch(t){e=0}return e}t.setCurrentTime(r()),t.on("timeupdate",(function(){t.getCurrentTime().then((function(e){var t=e||r();localStorage.setItem("videoplayer-current-time","".concat(t))}))}))}();
//# sourceMappingURL=02-video.58a91728.js.map
