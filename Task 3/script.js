/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const outputDiv = document.querySelector('#output');
const outputP = document.querySelector('#message');

document.querySelector('#btn').addEventListener('click', () => {
    getData();
})


async function getData() {
    outputP.textContent = '';
    try {
        const result = await fetch(ENDPOINT);
        if (result.ok) {
            const userData = await result.json();
            userData.forEach(element => {
                renderUserInfo(element.login, element.avatar_url);
            });;
        } else {
            console.log('Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }
}


function renderUserInfo(login, avatar_url) {
    const img = document.createElement('img');
    img.src = avatar_url;
    img.classList.add('img-style');

    const loginP = document.createElement('p');
    loginP.textContent = login;

    loginP.classList.add('outputInnerP-style')
    outputP.append(loginP,img);
    outputDiv.append(outputP);
}