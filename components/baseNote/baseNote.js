class BaseNote {
  constructor(ID, noteName, subTitle, date) {
    this.ID = ID;
    this.noteName = noteName;
    this.subTitle = subTitle;
    this.date = date;
  }

  createBaseNote = function () {
    let noteName = document.createElement("h2");
    noteName.className = "note-name";
    let noteNameText = document.createTextNode(this.noteName);
    noteName.append(noteNameText);

    let date = document.createElement("p");
    date.className = "date";
    let dateText = document.createTextNode(this.date);
    date.append(dateText);

    let noteInfo = document.createElement("div");
    noteInfo.className = "note-info";
    noteInfo.append(noteName);
    noteInfo.append(date);

    let subTitle = document.createElement("h3");
    subTitle.className = "sub-title";
    let subTitleText = document.createTextNode(this.subTitle);
    subTitle.append(subTitleText);

    let baseNote = document.createElement("section");
    baseNote.className = "base-note";
    baseNote.id = this.ID;
    baseNote.append(subTitle);
    baseNote.append(noteInfo);

    return baseNote;
  };
}

export default BaseNote;
