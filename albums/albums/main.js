import GenericFunctions from "./modules/GenericFunctions.js";
import Templating from "./modules/Templating.js";

const BASE_URL = (letter, num) => `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${letter}&page=${num}&limit=50&api_key=c623d3d530a2be8700e5fde8192a8967&format=json`

const section = document.querySelector('section');
const btn = document.getElementById('random-btn');
const select = document.getElementById('select');

const func = new GenericFunctions();
const initTemplate = (url, html) => new Templating(url, html)

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOMContentLoaded');

    btn.addEventListener('click', () => {
        section.innerHTML = "";
        let value = select.value;
        let letter = func.getRandLetter();
        let num = func.getRandomInt(1, 10);
        let template = initTemplate(BASE_URL(letter, num), section)
        
        if(value !== 10 && value !== "default") {
            template.render(value)
        } else {
            template.render()
        }
    })
})
