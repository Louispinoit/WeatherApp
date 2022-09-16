import request from "./request.js";
const div = document.querySelector("#hero");

export default class templating extends request {
  async render() {
    const data = await super.getData();

    const hero = document.createElement("div");
    hero.classList.add("hero");

    hero.innerHTML = `
                <h2>Tu es ${data.name}</h2>
                <img src="${data.image.url}"/>
            `;

    div.innerHTML = "";
    div.appendChild(hero);
  }
}
