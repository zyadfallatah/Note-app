import BaseNoteCreation from "../components/baseNoteCreate/baseNoteCreate.js";
const createNote = new BaseNoteCreation();

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
