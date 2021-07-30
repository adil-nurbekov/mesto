import { Popup } from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__save");
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = "Сохранить";
    }
  }

  renderCreating(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Добавляю...";
    } else {
      this._submitButton.textContent = "Добавить";
    }
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener("submit", () =>
      this._handleFormSubmit(this._getInputValues())
    );
  }

  close() {
    super.close();
    this._form.reset();
  }
}
