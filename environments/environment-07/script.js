"use strict";

// # Øvelse 21

// Environment: `environment-07`

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`,
// fra formularen på websiden og tilføjer det til en liste.

window.addEventListener("load", initApp);

let studentList = [];

function initApp() {
  console.log("Hello");

  document
    .querySelector("#create-student-form")
    .addEventListener("submit", createStudent);
    
}

function createStudent(event) {
  event.preventDefault();

  const form = event.target;

  const newStudent = {
    name: form.name.value,
    email: form.email.value,
    age: Number(form.age.value),
  };

  studentList.push(newStudent);
  console.log(studentList);
  sortByAge();
  showAdultStudents();
}

// 2. Lav en anden funktion til at vise listen på websiden,
// men undlad eventuelle students der er under 18 år.

function showAdultStudents() {
  document.querySelector("#students-table-body").innerHTML = "";

  for (const student of studentList) {
    if (student.age >= 18) {
      showStudents(student);
    }
  }
}

function showStudents(student) {
  const html = /* html */ `
     <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
    `;

  document
    .querySelector("#students-table-body")
    .insertAdjacentHTML("beforeend", html);
}

// 3. Sortér listen alfabetisk efter `name`.

function sortByAge() {
  studentList = studentList.sort((studentA, studentB) =>
    studentA.name.localeCompare(studentB.name)
  );
}
