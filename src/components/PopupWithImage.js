import { Popup } from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);

    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupImageText = this._popup.querySelector(".popup__image-text");
  }
  open(name, link) {
    super.open();
    this._popupImage.src = link;
    this._popupImageText.textContent = name;
    this._popupImageText.setAttribute("alt", name);
  }
}
