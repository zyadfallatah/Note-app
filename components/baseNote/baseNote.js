class BaseNote {
  constructor(noteName, subTitle, date) {
    this.noteName = noteName;
    this.subTitle = subTitle;
    this.date = date;
  }

  createBaseNote = function () {
    return `
    <section class="base-note" id="id-1">
      <h3 class="sub-title">${this.subTitle}</h3>
      <div class="note-info">
        <h2 class="note-name">${this.noteName}</h2>
        <p class="date">${this.date}</p>
      </div>
    </section>
    `;
  };
}

export default BaseNote;
