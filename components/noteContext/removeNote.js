import { emptyStyles } from "../../app/main.js";

const main = document.querySelector("main");
const nothingText = document.createTextNode("Nothing To Show Here");

const removeNote = function (note, contextMenu) {
  const deleteNote = document.querySelector(".delete");

  deleteNote.onclick = function () {
    let savedBaseNotes = JSON.parse(localStorage.getItem("baseNotes"));
    savedBaseNotes = savedBaseNotes.filter((savedNote) => {
      return savedNote.ID !== note.id;
    });

    localStorage.setItem("baseNotes", JSON.stringify(savedBaseNotes));

    note.remove();
    contextMenu.remove();

    if (savedBaseNotes.length === 0) {
      main.append(nothingText);
      main.style.cssText = emptyStyles;
    }
  };
};

export default removeNote;
