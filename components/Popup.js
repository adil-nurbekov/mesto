export { Popup };
class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
  }
  open() {
    this._popup.classList.add("popup_open");
  }
  close() {
    this._popup.classList.remove("popup_open");
  }
  _handleEscClose() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }
  setEventListener(buttonClass) {
    this._popup.querySelector(buttonClass).addEventListener("click", () => {
      this.close();
    });
    this._handleEscClose();
  }
}
