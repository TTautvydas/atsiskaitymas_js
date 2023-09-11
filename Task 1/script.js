/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const outputDiv = document.querySelector('#output');
const input = document.querySelector('#search');
const form = document.querySelector('form');

form.addEventListener('submit', formHandler);

function formHandler(e) {
   e.preventDefault();
   const weight = input.value;
   weightConverter(weight);
}

function weightConverter(weight) {
    const weightLb = Number(weight) * 2.2046;
    const weightG = Number(weight) / 0.0010000;
    const weightOz = Number(weight) * 35.274;
    
    const p = document.createElement('p');
    p.textContent = `Your weight in lb: ${weightLb}; Your weight in g: ${weightG}; Your weight in oz: ${weightOz}`;
    p.classList.add('outputStyle');

    outputDiv.append(p);
}

