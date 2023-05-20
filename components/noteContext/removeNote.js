const removeNote = function (note, contextMenu) {
  const deleteNote = document.querySelector(".delete");

  deleteNote.addEventListener("click", function () {
    let savedBaseNotes = JSON.parse(localStorage.getItem("baseNotes"));

    savedBaseNotes = savedBaseNotes.filter((savedNote) => {
      return savedNote.ID !== note.id;
    });

    localStorage.setItem("baseNotes", JSON.stringify(savedBaseNotes));

    note.remove();
    contextMenu.remove();

    if (savedBaseNotes.length === 0) {
      const nothingText = document.createTextNode("Nothing To Show Here");
      main.append(nothingText);
      main.style.cssText = emptyStyles;
    }
  });
};

export default removeNote;
