// "use strict";

// // # Øvelse 23

// // Environment: `environment-08`

// // 1. Opret en liste af sang-objekter, hvor hver sang indeholder
// // `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)

// window.addEventListener("load", initApp);

// let songList = [
//   {
//     artist: "Bob Dylan",
//     title: "Knockin on heaven door",
//     duration: "3:12",
//     likes: 0,
//   },
//   { artist: "Miley Cyrus", title: "Flowers", duration: "2:50", likes: 0 },
//   {
//     artist: "Harry Styles",
//     title: "sign of the times",
//     duration: "4:10",
//     likes: 0,
//   },
// ];

// function initApp() {
//   console.log("Hello");

//   showSongs();
// }

// // 2. Lav en funktion til at udskrive listen af sange på websiden
// // - tilføj en `upvote`-knap til hver sang.

// function showSongs() {
//   document.querySelector("#songlist").innerHTML = "";

//   for (const song of songList) {
//     showAllSongs(song);
//   }
// }

// function showAllSongs(song) {
//   const html = /*html */ `
//     <li> ARTIST: ${song.artist} TITLE: ${song.title} (DURATION) ${song.duration} Upvotes: (${song.likes}) <button class="like">Upvote</button> </li>
//     `;

//   document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

//   document
//     .querySelector("#songlist li:last-child .like")
//     .addEventListener("click", () => moveUpvotedSong(song));
// }

// // 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen
// // - udskriv derefter listen igen.

// function moveUpvotedSong(song) {
//   song.likes++;
//   console.log(song.likes);
//   songList = songList.sort((songA, songB) => songB.likes - songA.likes);

//   showSongs();
// }

"use strict";

// # Øvelse 22

// Environment: `environment-08`

// 1. Lav en funktion der indlæser JSON-filen `playlist.json` og gemmer listen i en variabel.

let thePlaylist = [];

window.addEventListener("load", initApp);

async function initApp() {
  console.log("Hello");

  thePlaylist = await getPlaylist();
  showPlaylist(thePlaylist);
}

async function getPlaylist() {
  const response = await fetch("playlist.json");
  const data = await response.json();

  console.log(data);
  return data;
}

// 2. Lav en funktion til at udskrive listen af sange på websiden-
// tilføj en `remove`-knap til hver sang.

function showPlaylist(thePlaylist) {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of thePlaylist) {
    showSongs(song);
  }
}

function showSongs(song) {
  const html = /* html */ `
    <br>
    <li>ARTIST: ${song.artist}, TITLE: ${song.title}, (DURATION) ${song.duration} <button class="removeSong">Delete</button></li>
    
    `;

  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("#songlist li:last-child .removeSong")
    .addEventListener("click", () => removeChosenSong(song));
}

// 3. Få remove-knappen til at fjerne den pågældende sang fra listen, og udskriv listen igen.

function removeChosenSong(song) {
  console.log(song.title);
  const songToRemove = song;

  thePlaylist = thePlaylist.filter((song) => song !== songToRemove);
  showPlaylist(thePlaylist);
}
