import BaseNoteCreation from "../components/baseNoteCreate/baseNoteCreate.js";
import { BaseNoteEdit } from "../components/baseNoteEdit/baseNoteEdit.js";
import { existStyles } from "./main.js";

const lightDark = document.querySelector(".dark-light-mode");

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

lightDark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", "false");
  } else {
    localStorage.setItem("darkMode", "true");
  }
});

const createNote = new BaseNoteCreation();

const main = document.querySelector("main");

if (localStorage.getItem("baseNotes")) {
  const baseNotes = JSON.parse(localStorage.getItem("baseNotes"));

  baseNotes.forEach((note) => {
    createNote.createNote(
      note.ID,
      note.noteName,
      note.subTitle,
      note.date,
      note.textArea
    );
  });
}

if (main.children.length !== 0) {
  main.childNodes[0].remove();
  main.style.cssText = existStyles;
}

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
