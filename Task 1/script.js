/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const form = document.querySelector("form");
const input = document.querySelector("#search");
const result = document.querySelector("#output");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const kg = input.value;
    result.innerHTML = `<div id="weight">Svarai (lb): <div id="value">${(kg * 2.2046).toFixed(2)}</div></div>`;
    result.innerHTML += `<div id="weight">Gramai (g): <div id="value">${(kg * 1000).toFixed(2)}</div></div>`;
    result.innerHTML += `<div id="weight">Uncijos (oz): <div id="value">${(kg * 35.274).toFixed(2)}</div></div>`;
})
