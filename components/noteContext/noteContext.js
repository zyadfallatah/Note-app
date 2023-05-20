import options from "./options.js";

class NoteContext {
  constructor(xAxis, yAxis) {
    this.x = xAxis - 64;
    this.y = yAxis - 33;
  }

  createNoteContext = function () {
    const noteContext = document.createElement("div");
    noteContext.classList.add("note-context");
    noteContext.style.left = `${this.x}px`;
    noteContext.style.top = `${this.y}px`;

    options.forEach((el) => noteContext.append(el));

    return noteContext;
  };
}

document.addEventListener("click", function () {
  const context = document.querySelector(".note-context");

  if (context === null) return;

  context.remove();
});

export default NoteContext;
