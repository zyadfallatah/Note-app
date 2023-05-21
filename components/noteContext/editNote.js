import { BaseNoteEdit } from "../baseNoteEdit/baseNoteEdit.js";

const main = document.querySelector("main");

const edit = function (note) {
  const editButton = document.querySelector(".edit");

  editButton.onclick = function () {
    let savedNotes = JSON.parse(localStorage.getItem("baseNotes"));
    savedNotes.forEach((savedNote) => {
      if (savedNote.ID === note.id) {
        const editNote = new BaseNoteEdit(
          savedNote.ID,
          savedNote.noteName,
          savedNote.subTitle,
          savedNote.date,
          savedNote.textArea
        );
        main.append(editNote.createBaseNoteEdit());
        editNote.cancelEdit(note);
      }
    });
  };
};

export default edit;
