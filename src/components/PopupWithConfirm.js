import { Popup } from "./Popup";

export class PopupWithConfirm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  setOnSubmit = (callback) => {
    this._handleFormSubmit = callback;
  };

  setEventListener = () => {
    super.setEventListener();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    });
  };
}
