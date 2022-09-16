import templating from "./modules/templating.js";

const value = document.querySelector("#value");

value.addEventListener("click", (e) => {
  e.preventDefault;
  let randNum = Math.floor(Math.random() * 731);
  const func = new templating(
    `https://superheroapi.com/api/5403619933063113/${randNum}`
  );
  let api = func.render();
});
