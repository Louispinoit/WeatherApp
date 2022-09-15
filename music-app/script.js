import request from "./modules/request.js";

const value = document.querySelector("#value");
const div = document.querySelector("#hero");

value.addEventListener("click", (e) => {
  e.preventDefault;
  let randNum = Math.floor(Math.random() * 731);
  const func = new request(
    `https://superheroapi.com/api/5403619933063113/${randNum}`
  );
  console.log(func);
  let api = func.getData();
  console.log(api);

  // randomHero();
});

// async function randomHero() {
//   let randNum = Math.floor(Math.random() * 731);

//   const url = `https://superheroapi.com/api/5403619933063113/${randNum}`;
//   const resp = await fetch(url);
//   const respData = await resp.json();
//   console.log(respData);
//   addHeroToPage(respData);
// }

// function addHeroToPage(data) {
//   const hero = document.createElement("div");
//   hero.classList.add("hero");

//   hero.innerHTML = `
//         <h2>Tu es ${data.name}</h2>
//         <img src="${data.image.url}"/>
//     `;

//   div.innerHTML = "";
//   div.appendChild(hero);
// }
