class BaseNoteCreation {
  static createContainer = function (noteInfoType, inputId, limitId, limit) {
    let input = document.createElement("input");
    input.type = "text";
    input.id = inputId;

    let span = document.createElement("span");
    span.id = limitId;
    let spanText = document.createTextNode(limit);
    span.append(spanText);

    let readLimit = document.createElement("div");
    readLimit.className = "read-limit";
    readLimit.append(input);
    readLimit.append(span);

    let noteInfo = document.createElement("h3");
    noteInfo.className = "note-info";
    let noteInfoText = document.createTextNode(noteInfoType);
    noteInfo.append(noteInfoText);

    let container = document.createElement("div");
    container.className = "container";
    container.append(noteInfo);
    container.append(readLimit);

    return container;
  };

  createBaseNoteCreationPage = function () {
    let cancel = document.createElement("input");
    cancel.id = "cancel";
    cancel.type = "button";
    cancel.value = "Cancel";

    let create = document.createElement("input");
    create.id = "create";
    create.type = "button";
    create.value = "Create";

    let confirm = document.createElement("div");
    confirm.className = "confirm";
    confirm.append(cancel);
    confirm.append(create);

    let features = document.createElement("div");
    features.className = "features";
    let featuresText = document.createTextNode("more features will be added");
    features.append(featuresText);

    let title = document.createElement("h2");
    title.className = "title";
    let titleText = document.createTextNode("Creation Page");
    title.append(titleText);

    let options = document.createElement("aside");
    options.className = "options";
    options.append(title);
    options.append(features);
    options.append(confirm);

    let headerData = document.createElement("div");
    headerData.className = "header-data";

    headerData.append(
      BaseNoteCreation.createContainer(
        "Note Name",
        "read-note-name",
        "note-name-limit",
        "15"
      )
    );

    headerData.append(
      BaseNoteCreation.createContainer(
        "Sub Title",
        "read-sub-title",
        "sub-title-limit",
        "25"
      )
    );

    let textContent = document.createElement("h3");
    textContent.className = "text-content";
    let textContentText = document.createTextNode("Text Content");
    textContent.append(textContentText);

    let textArea = document.createElement("textarea");
    textArea.style.resize = "none";
    textArea.id = "read-text-content";

    let mainData = document.createElement("div");
    mainData.className = "main-data";
    mainData.append(textContent);
    mainData.append(textArea);

    let readingData = document.createElement("div");
    readingData.className = "reading-data";
    readingData.append(headerData);
    readingData.append(mainData);

    let createBaseNote = document.createElement("section");
    createBaseNote.className = "create-base-note";
    createBaseNote.append(options);
    createBaseNote.append(readingData);

    return createBaseNote;
  };

  show = function () {
    document.querySelector(".create-base-note").style.transform = "scale(1)";
  };
  // cancelCreation = function () {
  //   let cancel = document.querySelector("#cancel");

  // };
}

export default BaseNoteCreation;
