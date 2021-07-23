class Card {
  constructor(
    data,
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
    if (this._ownerId === this._myId) {
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
    this._myId = "986b932711e1c5d3df1e33a3";
    //
    this._image.src = this._imageLink;
    this._image.setAttribute("alt", this._imageName);
    this._imageTitle.textContent = this._imageName;
    this._setEventListener();
    this._createDeleteButton();
    this._isLiked(this._like);
    this._counter.textContent = this._likes.length;
    return this._element;
  };

  // метод закрашивания лайка при нажатии
  _isLiked = (like) => {
    this._likes.forEach((element) => {
      if (element._id === this._myId) {
        like.classList.add("element__logo_active");
      }
    });
  };

  // метод отображения количества лайков
  _addLike = (data) => {
    this._like.classList.add("element__logo_active");
    return (this._counter.textContent = String(data));
  };

  _deleteLike = (data) => {
    this._like.classList.remove("element__logo_active");
    return (this._counter.textContent = String(data));
  };

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
        this._deleteLike(this._likes.length);
      } else {
        this._addLikeToServer(this._cardId);
        this._addLike(this._likes.length);
      }
    });
    //
  };
}
export { Card };
