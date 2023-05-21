import BaseNote from "../baseNote/baseNote.js";
import BaseNoteContent from "../baseNoteContent/baseNoteContent.js";

export class BaseNoteEdit extends BaseNote {
  constructor(ID, noteName, subTitle, date, noteContent) {
    super(ID, noteName, subTitle, date);
    this.noteContent = noteContent;
  }

  createBaseNoteEdit = function () {
    let subTitle = document.createElement("h3");
    subTitle.className = "sub-title";
    let subTitleText = document.createTextNode(this.subTitle);
    subTitle.append(subTitleText);

    let date = document.createElement("p");
    date.className = "date";

    let dateText = document.createTextNode(this.date);
    date.append(dateText);

    let subInfo = document.createElement("div");
    subInfo.className = "sub-info";
    subInfo.appendChild(subTitle);
    subInfo.appendChild(date);

    let noteName = document.createElement("h2");
    noteName.className = "note-name";
    let noteNameText = document.createTextNode(this.noteName);
    noteName.append(noteNameText);

    let noteInfo = document.createElement("nav");
    noteInfo.className = "note-info";
    noteInfo.append(noteName);
    noteInfo.append(subInfo);

    const noteContent = document.createElement("p");
    noteContent.className = "note-content";
    noteContent.classList.add("edit");
    const textArea = document.createElement("textarea");
    textArea.style.resize = "none";
    const textAreaOldContent = document.createTextNode(this.noteContent);
    textArea.append(textAreaOldContent);
    noteContent.appendChild(textArea);

    const cancel = document.createElement("button");
    cancel.classList.add("cancel");
    cancel.append(document.createTextNode("cancel"));
    noteContent.appendChild(cancel);

    const confirm = document.createElement("button");
    confirm.classList.add("confirm");
    confirm.append(document.createTextNode("confirm"));
    noteContent.appendChild(confirm);

    let baseNoteContent = document.createElement("div");
    baseNoteContent.className = "base-note-content";
    baseNoteContent.classList.add("edit");

    baseNoteContent.append(noteInfo);
    baseNoteContent.append(noteContent);

    return baseNoteContent;
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
