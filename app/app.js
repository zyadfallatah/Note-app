import BaseNote from "/components/baseNote/baseNote.js";

let myNote = new BaseNote("first note", "today works", "15/4/2023");

document.querySelector("main").innerHTML = myNote.createBaseNote();
