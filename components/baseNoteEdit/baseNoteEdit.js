import BaseNoteContent from "../baseNoteContent/baseNoteContent.js";

export class BaseNoteEdit extends BaseNoteContent {
  createBaseNoteEdit = function () {
    return this.createBaseNoteContent("edit");
  };

  cancelEdit = function () {
    const cancel = document.querySelector(".note-content .cancel");

    if (cancel === null) return;

    cancel.onclick = function () {
      // console.log(cancel.parentNode);
      // console.log(cancel.parentNode);
      cancel.parentElement.parentElement.remove();
    };
  };
}
