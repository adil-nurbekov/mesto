// import { Api } from "./Api";
// import { options } from "../pages/index";
// deleteCard = new Api(options);
class Card {
  constructor(data, place, handleOpenImage) {
    this._imageName = data.name;
    this._imageLink = data.link;
    this._place = place;
    this._handleOpenImage = handleOpenImage;
    // this.ownerId = ownerId._id;
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
    // переменные
    this._image = this._element.querySelector(".element__image");
    this._imageTitle = this._element.querySelector(".element__title");
    this._like = this._element.querySelector(".element__logo");
    this._deleteButton = this._element.querySelector(".element__delete-button");
    //

    this._image.src = this._imageLink;
    this._image.setAttribute("alt", this._imageName);
    this._imageTitle.textContent = this._imageName;
    this._setEventListener();
    return this._element;
  };
  //

  // метод листенеров
  _setEventListener = () => {
    //открытие попапа по нажатию на картинку
    this._image.addEventListener("click", () =>
      this._handleOpenImage(this._imageName, this._imageLink)
    );

    //

    // кнопка лайка
    this._like.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__logo_active");
      // console.log(this.ownerId);
    });
    //

    // удаление карточки
    this._deleteButton.addEventListener("click", (e) => {
      e.target.closest(".element").remove();
    });
  };
}
export { Card };
