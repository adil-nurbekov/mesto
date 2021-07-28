import { elements } from "../utils/constants";

class Card {
  constructor(
    data,
    ownersId,
    classElement,
    handleOpenImage,

    { handleDeleteCard, addLikeToServer, removeLikeFromServer }
  ) {
    this._data = data;
    this._imageName = data.name;
    this._imageLink = data.link;
    this._classElement = classElement;
    this._handleOpenImage = handleOpenImage;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._handleDeleteCard = handleDeleteCard;
    this._cardId = data._id;
    this._addLikeToServer = addLikeToServer;
    this._removeLikeFromServer = removeLikeFromServer;
    this._id = ownersId;
  }

  // метод получения темплейта
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._classElement)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  };
  //

  // метод создания кнопки удаления
  _createDeleteButton() {
    if (this._ownerId === this._id) {
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("element__delete-button");
      deleteButton.type = "button";
      this._element.append(deleteButton);
      this._element
        .querySelector(".element__delete-button")
        .addEventListener("click", () => {
          this._handleDeleteCard(this._cardId);
        });
    }
  }

  // метод генирации карточек
  generateCard = () => {
    this._element = this._getTemplate();
    // переменные
    this._image = this._element.querySelector(".element__image");
    this._imageTitle = this._element.querySelector(".element__title");
    this._like = this._element.querySelector(".element__logo");
    this._counter = this._element.querySelector(".element__counter");
    //
    this._image.src = this._imageLink;
    this._image.setAttribute("alt", this._imageName);
    this._imageTitle.textContent = this._imageName;
    this._counter.textContent = this._likes.length;
    this._setEventListener();
    this._createDeleteButton();
    this._isLiked();

    return this._element;
  };
  deleteCard = () => {
    this._element.remove();
  };

  // метод закрашивания лайка при нажатии
  _isLiked = () => {
    this._likes.forEach((element) => {
      if (element._id === this._id) {
        this._like.classList.add("element__logo_active");
      }
    });
  };

  // setLikeInfo = (data) => {
  //   // this._likes = data.likes;
  //   // this._updateLikesView();

  // };
  // _updateLikesView = () => {
  //   this._counter.textContent = this._likes.length;
  //   if (this._like.classList.contains("element__logo_active")) {
  //   } else {
  //     this._like.classList.add("element__logo_active");
  //   }
  // };
  // метод отображения количества лайков
  // _addLike = (data) => {
  //   this._like.classList.add("element__logo_active");
  //   return (this._counter.textContent = data);
  // };

  // _deleteLike = (data) => {
  //   this._like.classList.remove("element__logo_active");
  //   return (this._counter.textContent = data);
  // };

  // метод листенеров
  _setEventListener = () => {
    //открытие попапа по нажатию на картинку
    this._image.addEventListener("click", () =>
      this._handleOpenImage(this._imageName, this._imageLink)
    );
    //

    // кнопка лайка
    this._like.addEventListener("click", () => {
      if (this._like.classList.contains("element__logo_active")) {
        this._removeLikeFromServer(this._cardId);
        this.setLikeInfo();
      } else {
        this._addLikeToServer(this._cardId);
      }
    });
    //
  };
}
export { Card };
