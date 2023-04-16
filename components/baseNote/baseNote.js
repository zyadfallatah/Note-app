class BaseNote {
  constructor(noteName, subTitle, date) {
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
    baseNote.append(subTitle);
    baseNote.append(noteInfo);

    return baseNote;
  };

  // createBaseNote = function () {
  //   return `
  //   <section class="base-note">
  //     <h3 class="sub-title">${this.subTitle}</h3>
  //     <div class="note-info">
  //       <h2 class="note-name">${this.noteName}</h2>
  //       <p class="date">${this.date}</p>
  //     </div>
  //   </section>
  //   `;
  // };
}

export default BaseNote;
