let options = [];

const createOption = function (className, textNode, background = "#2196f3") {
  const option = document.createElement("p");
  option.classList.add(className);

  const optionText = document.createTextNode(textNode);
  option.appendChild(optionText);

  option.style.cssText = `--bg-hover: ${background};`;
  return option;
};

options.push(createOption("edit", "Edit"));

options.push(createOption("delete", "Delete", "#ED2939"));

export default options;
