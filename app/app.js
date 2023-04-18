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
