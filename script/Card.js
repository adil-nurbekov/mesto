export { Card };
//переменные попапа увеличения картинки
const popupPhoto = document.querySelector(".popup_photo_add");
const buttonClosePopupPhoto = document.querySelector(".popup__close_photo");
const popupPhotoZoom = document.querySelector(".popup__image");
const popupPhotoText = document.querySelector(".popup__image-text");

class Card {
  constructor(data, place) {
    this._imageName = data.name;
    this._imageLink = data.link;
    this._place = place;
  }

  // метод получения темплейта
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._place)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  };
  //

  // метод генирации карточек
  generateCard = () => {
    this._element = this._getTemplate();
    this._element.querySelector(".element__image").src = this._imageLink;
    this._element.querySelector(".element__title").textContent =
      this._imageName;
    this._element
      .querySelector(".element__image")
      .setAttribute("alt", this._imageName);
    this._setEventListener();
    return this._element;
  };
  //

  // метод открытия попапа картинки
  _handleOpenPopup = () => {
    popupPhotoZoom.src = this._imageLink;
    popupPhotoText.textContent = this._imageName;
    popupPhotoZoom.setAttribute("alt", this._imageName);
    popupPhoto.classList.add("popup_open");
  };
  //

  // метод закрытия попапа картинки
  _handleClosePopup = () => {
    popupPhoto.classList.remove("popup_open");
  };
  //

  // метод листенеров
  _setEventListener = () => {
    //открытие попапа по нажатию на картинку
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });
    //
    // закрыте попапа по нажатию на крестик
    buttonClosePopupPhoto.addEventListener("click", () => {
      this._handleClosePopup();
    });
    //
    // кнопка лайка
    this._element
      .querySelector(".element__logo")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__logo_active");
      });
    //
    // удаление карточки
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", (e) => {
        e.target.closest(".element").remove();
      });
  };
}
