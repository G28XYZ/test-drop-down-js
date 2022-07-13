class DropDown {
  constructor({ template, title = "Заголовок", text = "Текст" }) {
    this._itemTemplate = template;
    this._title = title;
    this._text = text;
  }

  _getTemplate() {
    const itemElement = this._itemTemplate.content
      .querySelector(".drop-down__item")
      .cloneNode(true);
    return itemElement;
  }

  _handleToggleItem = () => {
    this._toggleButton.classList.toggle("drop-down__toggle-button_active");
    this._item.classList.toggle("drop-down__item_active");
  };

  _setHandlerListener() {
    this._toggleButton.addEventListener("click", this._handleToggleItem);
  }

  generateItem() {
    this._item = this._getTemplate();
    this._item.querySelector(".drop-down__title").textContent = this._title;
    this._item.querySelector(".drop-down__text").textContent = this._text;
    this._toggleButton = this._item.querySelector(".drop-down__toggle-button");
    this._setHandlerListener();

    return this._item;
  }
}

export default DropDown;
