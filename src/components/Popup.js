class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._buttonClosePopup = this._popup.querySelector(".popup__close");
  }
  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClose);
  }
  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClose);
  }
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }
  _handleOverlayClose(e) {
    if (e.target.classList.contains("popup")) {
      this.close();
    }
  }
  setEventListener() {
    this._buttonClosePopup.addEventListener("click", (e) => {
      this.close();
    });
  }
}

export { Popup };
