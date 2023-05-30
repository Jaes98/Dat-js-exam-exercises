"use strict";

window.addEventListener("load", initApp);
let users = [];

async function initApp() {
    users = await getJson();
    console.log(users);
    users.sort(sortByID);
    for (const persons of users) {
        showUsers(persons)
    }

}

async function getJson() {
    const response = await fetch("users.json");
    const data = await response.json();
    return data;
}

function showUsers(data) {
    if (data.role === "admin") {
        const myHtml = /*html*/ `
    <li>ID:${data.id}</li>
    <li>My name is ${data.name}. My role is ${data.role}. Active? ${data.active}</li>`;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", myHtml);
    }
    
}

function sortByID(user1, user2) {
  return user1.id - user2.id;
}
