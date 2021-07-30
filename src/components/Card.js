class Card {
  constructor({
    data,
    ownersId,
    classElement,
    handleOpenImage,
    handleDeleteCard,
    handleClickLike,
  }) {
    // переменные
    this._data = data;
    this._imageName = data.name;
    this._imageLink = data.link;
    this._classElement = classElement;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._id = ownersId;
    //
    // функции
    this._handleOpenImage = handleOpenImage;
    this._handleDeleteCard = handleDeleteCard;
    this._handleClickLike = handleClickLike;
    //
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
          this._handleDeleteCard(this._cardId, this);
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
    this._setLikeInfo(this._data);

    return this._element;
  };
  deleteCard = () => {
    this._element.remove();
  };

  // метод закрашивания лайка при нажатии
  isLiked = () => {
    return this._likes.some((element) => element._id === this._id);
  };

  _setLikeInfo = (item) => {
    this._likes = item.likes;
    this.updateLikesView(item);
  };

  updateLikesView = (item) => {
    this._likes = item.likes;
    this._counter.textContent = item.likes.length;
    if (this.isLiked()) {
      this._like.classList.add("element__logo_active");
    } else {
      this._like.classList.remove("element__logo_active");
    }
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
      this._handleClickLike(this._cardId, this);
    });
    //
  };
}
export { Card };
