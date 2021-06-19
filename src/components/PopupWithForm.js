import { Popup } from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._formValues = this._popup.querySelector(".popup__form");
    this._inputList = this._formValues.querySelectorAll(".popup__input");
    this._submitButton = document.querySelector(".profile__image");
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }
  setEventListener() {
    super.setEventListener();
    this._formValues.addEventListener("submit", () => this._handleFormSubmit());
  }

  close() {
    super.close();
    this._formValues.reset();
  }
}
