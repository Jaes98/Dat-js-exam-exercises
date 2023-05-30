"use strict";

window.addEventListener("load", initApp);

let students = [];

function initApp(params) {
    document.querySelector("#create-student-form").addEventListener("submit", addStudent);
}  

function addStudent(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value   ;
    const email = form.email.value;
    const age = Number(form.age.value);
    const newStudent = ({name, email, age})

    students.push(newStudent)
    console.log("student", students);
    newStudents(students)
}

function newStudents(params) {
    document.querySelector("tbody").innerHTML = "";
    students.sort((a,b) => a.name.localeCompare(b.name));
   for (const student of students) {
    if (student.age >= 18) {
    showStudents(student);
    }
   }
}

function showStudents(student) {
    const myHTML = 
    `
    <tr>
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.age}</td>
    </tr>
    `
    document.querySelector("tbody").insertAdjacentHTML("beforeend", myHTML);
}