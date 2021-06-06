export { Card };
//переменные попапа увеличения картинки
import { openPopup } from "./index.js";
const popupPhotoZoom = document.querySelector(".popup__image");
const popupPhotoText = document.querySelector(".popup__image-text");
const popupPhoto = document.querySelector(".popup_photo_add");
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
    this._image = this._element.querySelector(".element__image");
    this._imageTitle = this._element.querySelector(".element__title");
    this._image.src = this._imageLink;
    this._image.setAttribute("alt", this._imageName);
    this._imageTitle.textContent = this._imageName;
    this._setEventListener();
    return this._element;
  };
  //

  // метод открытия попапа картинки
  _handleOpenPopup = () => {
    popupPhotoZoom.src = this._imageLink;
    popupPhotoText.textContent = this._imageName;
    popupPhotoZoom.setAttribute("alt", this._imageName);
    openPopup(popupPhoto);
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
