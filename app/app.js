import BaseNoteContent from "/components/baseNoteContent/baseNoteContent.js";
import BaseNoteCreation from "../components/baseNoteCreate/baseNoteCreate.js";
let myNote = new BaseNoteContent(
  "first helloaaa9",
  "today works",
  "15/4/2023",
  "Hi every one this is my first note"
);

// document.body.innerHTML += temp;
let addNewNotes = document.querySelector(".add-notes");
addNewNotes.addEventListener("click", () => {
  addNewNotes.children[0].classList.toggle("active");
});

// let main = document.querySelector("main");
// main.innerHTML = "";
// main.append(myNote.createBaseNote());

// let getNote = document.querySelector(".base-note");

// getNote.addEventListener("click", function () {
//   document.body.append(myNote.createBaseNoteContent());

//   let getContentNote = document.querySelector(".base-note-content");
//   setTimeout(() => {
//     getContentNote.style.opacity = "1";
//     getContentNote.style.transform = "translateX(-50%)";
//   }, 1);
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     let getContentNote = document.querySelector(".base-note-content");
//     getContentNote.remove();
//   }
// });
