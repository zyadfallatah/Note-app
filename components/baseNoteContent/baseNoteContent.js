import BaseNote from "/components/baseNote/baseNote.js";

class BaseNoteContent extends BaseNote {
  constructor(ID, noteName, subTitle, date, noteContent) {
    super(ID, noteName, subTitle, date);
    this.noteContent = noteContent;
  }

  createBaseNoteContent = function () {
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

    let noteContent = document.createElement("p");
    noteContent.className = "note-content";
    let noteContentText = document.createTextNode(this.noteContent);
    noteContent.append(noteContentText);

    let baseNoteContent = document.createElement("div");
    baseNoteContent.className = "base-note-content";
    baseNoteContent.append(noteInfo);
    baseNoteContent.append(noteContent);

    return baseNoteContent;
  };
}

export default BaseNoteContent;
