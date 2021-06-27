import { Popup } from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
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
    this._form.addEventListener("submit", () =>
      this._handleFormSubmit(this._getInputValues())
    );
  }

  close() {
    super.close();
    this._form.reset();
  }
}
