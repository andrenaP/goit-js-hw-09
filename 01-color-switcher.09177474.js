!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null,c=function(){n.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))};t.addEventListener("click",(function(){a=setInterval(c,1e3),t.disabled=!0})),e.addEventListener("click",(function(){a&&clearInterval(a),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.09177474.js.map