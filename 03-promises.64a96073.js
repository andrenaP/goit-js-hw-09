function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");function l(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:r,amount:o}=t.currentTarget.elements;for(let t=0;t<o.value;t++){let o=t+1;const u=Number(n.value)+r.value*t;l(o,u).then((t=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${u}ms`)}),(t=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${u}ms`)}))}t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.64a96073.js.map
