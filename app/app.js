import BaseNoteCreation from "../components/baseNoteCreate/baseNoteCreate.js";
import { existStyles } from "./main.js";

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

// const mutation = new MutationObserver(() => {
//   if (main.children.length === 0) {
//     const nothingText = document.createTextNode("Nothing To Show Here");
//     main.append(nothingText);
//   } else {
//     const nothingText = document.createTextNode("");
//     main.append(nothingText);
//   }
// });

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
