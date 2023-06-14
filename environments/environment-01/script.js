// "use strict";

// window.addEventListener("load", initApp);
// let users = [];

// async function initApp() {
//     users = await getJson();
//     console.log(users);
//     users.sort(sortByID);
//     for (const persons of users) {
//         showUsers(persons)
//     }

// }

// async function getJson() {
//     const response = await fetch("users.json");
//     const data = await response.json();
//     return data;
// }

// function showUsers(data) {
//     if (data.role === "admin") {
//         const myHtml = /*html*/ `
//     <li>ID:${data.id}</li>
//     <li>My name is ${data.name}. My role is ${data.role}. Active? ${data.active}</li>`;

//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", myHtml);
//     }
    
// }

// function sortByID(user1, user2) {
//   return user1.id - user2.id;
// }

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
// 2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
// 3. Filtrér listen så den kun viser admin-brugere.


"use strict";

window.addEventListener("load", initApp);

let usersList = [];

async function initApp(params) {
    // usersList = await getList();
    usersList = await getList();
    // let filteredList = filterList(usersList);
    // console.log(usersList);
    showUsers(usersList);
    counter();
}

async function getList(params) {
    const response = await fetch("users.json");
    const data = await response.json();

    console.log(data);

    return data;

}

function showUsers(array) {

    document.querySelector("#userlist").innerHTML = "";

    for (const user of array) {
        if (user.active) {
            showUser(user);
        }
    }
}

function showUser(user) {

    const myHTML = `
    <li>Navn:${user.name} Active: ${user.active} Role: ${user.role}</li>`

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", myHTML);
}

// function filterList(array) {
//     const filteredList = array.filter((user) => user.role === "admin")
//     console.log(filteredList);
//     return filteredList
// }

// Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.

function counter(params) {
    let adminCount = 0;
    let userCount = 0;
    let guestCount = 0;

    for (let i = 0; i < usersList.length; i++) {
        const role = usersList[i].role;

        if (role === "admin") {
            adminCount++;
        } else if (role === "user") {
            userCount++;
        } else if (role === "guest") {
            guestCount++;
        }
        
    }
    document.querySelector("#admin-count").textContent = `${adminCount}`
    document.querySelector("#user-count").textContent = `${userCount}`
    document.querySelector("#guest-count").textContent = `${guestCount}`
}
