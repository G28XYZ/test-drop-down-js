import DropDown from "./DropDown.js";
const state = { countDropDown: 0 };

const dropDownItemTemplate = document.querySelector("#drop-down-template");
const itemsContainer = document.querySelector(".drop-down__list");

function addItem(title = "Заголовок", text = "Текст") {
  const newItem = new DropDown({ template: dropDownItemTemplate, title, text });
  itemsContainer.append(newItem.generateItem());
}

document.addEventListener("DOMContentLoaded", () => {
  Array.from({ length: 5 }, () => {
    state.countDropDown += 1;
    addItem(`${state.countDropDown}. Заголовок`, "Текст");
  });
});
