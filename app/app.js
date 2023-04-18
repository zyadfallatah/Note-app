import BaseNoteCreation from "../components/baseNoteCreate/baseNoteCreate.js";
const createNote = new BaseNoteCreation();

for (let i = 0; i < 15; i++) {
  createNote.createNote(
    `Note Name ${i + 1}`,
    `Sub Title ${i + 1}`,
    `Text Content ${i + 1}`
  );
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
