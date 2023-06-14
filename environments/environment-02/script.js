// 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
// 2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
// 3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

"use strict";

window.addEventListener("load", initApp);

let animalList = [];

function initApp(params) {
    document.querySelector("#create-form").addEventListener("submit", createAnimal)
    // document.querySelector("#aniButton").addEventListener("click", createAnimal)
}

function createAnimal(event) {
    event.preventDefault();

    const form = event.target

    const newAnimal = {
        name: form.name.value,
        type: form.type.value,
        age: Number(form.age.value)
    }

    animalList.push(newAnimal);
    console.log(newAnimal);
    console.log(animalList);
    sortByName();
    showAnimals();
    
}

function sortByName(params) {
    animalList = animalList.sort((animalA, animalB) => animalA.name.localeCompare(animalB.name));
    console.log(animalList);
}
function showAnimals(params) {
    document.querySelector("tbody").innerHTML = "";

    for (const animal of animalList) {
        showAnimal(animal);
    }
}

function showAnimal(animal) {
    console.log("sorter NU", animalList);
    const myHTML = `
    <tr>
    <td> ${animal.name}</td>
    <td> ${animal.type}</td>
    <td> ${animal.age}</td>
    </tr>
    `;
    document.querySelector("tbody").insertAdjacentHTML("beforeend", myHTML)
}


let nyAnimalListe = [
    {
        name: "Tarzan",
        type: "Dog",
        age: 24
    },
    {
        name: "Dogman",
        type: "Yuman",
        age: 55
    }
]