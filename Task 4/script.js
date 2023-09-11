/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */


import Cars from "./cars.json" assert {type: 'json'};

const outputDiv = document.querySelector('#output');

console.log(Cars);

function renderCars(cars) {
    cars.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('output-card-style')

        const h3 = document.createElement('h3');
        h3.textContent = element.brand;

        const ul = document.createElement('ul');
        element.models.forEach(elem => {
            const li = document.createElement('li');
            li.textContent = elem;
            ul.append(li);
        });

        div.append(h3, ul);
        outputDiv.append(div);
    });
}

renderCars(Cars);
