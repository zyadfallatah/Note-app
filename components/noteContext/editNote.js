import { BaseNoteEdit } from "../baseNoteEdit/baseNoteEdit.js";

const main = document.querySelector("main");

const edit = function (note, contextMenu) {
  const editButton = document.querySelector(".edit");

  editButton.onclick = function () {
    const editNote = new BaseNoteEdit("a", "b", "c", "1111", "ww");
    main.append(editNote.createBaseNoteEdit());
    editNote.cancelEdit(note);

    let savedNotes = JSON.parse(localStorage.getItem("baseNotes"));
    savedNotes.forEach((savedNote) => {
      if (savedNote.ID === note.id) console.log(savedNote.textArea);
    });
  };
};

export default edit;
