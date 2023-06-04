function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const button_start = document.querySelector('[data-start]');
const button_stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

const Color_body=()=>{ body.style.background= getRandomHexColor() }
button_start.addEventListener('click', () => {timerId = setInterval(Color_body, 1e3); button_start.disabled=true; })
button_stop.addEventListener('click', () => { if(timerId) clearInterval(timerId); button_start.disabled=false; })
