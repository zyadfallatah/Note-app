import BaseNoteCreation from "../components/baseNoteCreate/baseNoteCreate.js";

let createNote = new BaseNoteCreation();

let addNewNotes = document.querySelector(".add-notes");

addNewNotes.addEventListener("click", () => {
  addNewNotes.children[0].classList.toggle("active");

  document.body.append(createNote.createBaseNoteCreationPage());
  setTimeout(() => {
    createNote.show();
    createNote.createNoteValidtion();
    createNote.cancelCreation();
  }, 1);
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
