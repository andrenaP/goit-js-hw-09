!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null,c=function(){n.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))};t.addEventListener("click",(function(){a=setInterval(c,1e3)})),e.addEventListener("click",(function(){a&&clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.daa54bbb.js.map