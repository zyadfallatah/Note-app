class NoteContext {
  constructor(xAxis, yAxis) {
    this.x = xAxis - 64;
    this.y = yAxis - 33;
  }

  removeNote = function (note) {
    const deleteNote = document.querySelector(".delete");

    deleteNote.addEventListener("click", function () {
      this.remove();
      note.remove();
    });
  };

  createNoteContext = function () {
    const deleteNote = document.createElement("p");
    deleteNote.classList.add("delete");

    const deleteNoteText = document.createTextNode("Delete");
    deleteNote.appendChild(deleteNoteText);

    const noteContext = document.createElement("div");
    noteContext.classList.add("note-context");
    noteContext.style.left = `${this.x}px`;
    noteContext.style.top = `${this.y}px`;
    noteContext.append(deleteNote);

    deleteNote.addEventListener("click", function () {
      console.log(this);
    });
    return noteContext;
  };
}

export default NoteContext;
