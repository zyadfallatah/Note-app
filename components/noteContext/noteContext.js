class NoteContext {
  constructor(xAxis, yAxis) {
    this.x = xAxis - 64;
    this.y = yAxis - 33;
  }

  removeNote = function (note) {
    const deleteNote = document.querySelector(".delete");

    deleteNote.addEventListener("click", function () {
      let savedBaseNotes = JSON.parse(localStorage.getItem("baseNotes"));

      savedBaseNotes = savedBaseNotes.filter((savedNote) => {
        return savedNote.ID !== note.id;
      });

      localStorage.setItem("baseNotes", JSON.stringify(savedBaseNotes));

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

    return noteContext;
  };
}

document.addEventListener("click", function () {
  const context = document.querySelector(".note-context");
  context !== null ? context.remove() : "";
});

export default NoteContext;
