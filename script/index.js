// переменные секций элемент и элементс
const elements = document.querySelector(".elements");
const element = document.querySelector(".element");
const buttonTrash = document.querySelector(".element__delete-button");
const buttonEditPopupProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const buttonAddPopupImage = document.querySelector(".profile__add-button");
//

// переменные попапа профайла
const popupProfile = document.querySelector(".popup_profile_add");
const formPopupProfile = document.querySelector(".popup__form_profile");
const buttonClosePopupProfile = document.querySelector(".popup__close_profile");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_job");
//

// переманные попапа добавления картинок
const popupImage = document.querySelector(".popup_image_add");
const buttonClosePopupImage = document.querySelector(".popup__close_image");
const inputImage = document.querySelector(".popup__input_type_img");
const inputImageLink = document.querySelector(".popup__input_type_link");
const formPopupImage = document.querySelector(".popup__form_image");
const popupList = document.querySelectorAll(".popup");
//

// переменная темплейт
const cardsTemplate = document.querySelector(".template");
//

//переменные попапа увеличения картинки
const popupPhoto = document.querySelector(".popup_photo_add");
const buttonClosePopupPhoto = document.querySelector(".popup__close_photo");
const popupPhotoZoom = document.querySelector(".popup__image");
const popupPhotoText = document.querySelector(".popup__image-text");
//

// создание списка//
function createCards(cardText) {
  const createCardsTemplate = cardsTemplate.content
    .querySelector(".element")
    .cloneNode(true);
  const imageCard = createCardsTemplate.querySelector(".element__image");
  createCardsTemplate.querySelector(".element__title").textContent =
    cardText.name;
  imageCard.src = cardText.link;
  imageCard.setAttribute("alt", cardText.name);
  //

  // открытие попапа картинки
  imageCard.addEventListener("click", function () {
    popupPhotoZoom.src = cardText.link;
    popupPhotoText.textContent = cardText.name;
    openPopup(popupPhoto);
  });
  //

  // кнопка лайка
  createCardsTemplate
    .querySelector(".element__logo")
    .addEventListener("click", toggleClass);

  // кнопка удаления
  createCardsTemplate
    .querySelector(".element__delete-button")
    .addEventListener("click", removeCard);
  return createCardsTemplate;
}

// включение валидации вызовом enableValidation
const config = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inputErrorClass: "popup__input_type_error",
  errorActiveClass: "popup__input-error_active",
};
enableValidation(config);
//

// функция добавления новых карточек
function addImage(e) {
  e.preventDefault();
  const name = inputImage.value;
  const link = inputImageLink.value;
  const card = createCards({ name, link });
  elements.prepend(card);
  formPopupImage.reset();
  closePopup(popupImage);
}
//

// функция добавления лайка
function toggleClass(evt) {
  evt.target.classList.toggle("element__logo_active");
}
//

// функция удаления карточки
function removeCard(e) {
  e.target.closest(".element").remove();
}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.addEventListener("keydown", closePopupOnEsc);
}
//

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupOnEsc);

  // const form = document.querySelector(".form");
  // const popupInput = document.querySelector(".popup__input");    уточнить у наставника, как реализовать!!!!!!
  // hideError(form, popupInput, config);
}
//

// удаление попапа по кнопке ESC
function closePopupOnEsc(e) {
  if (e.key === "Escape") {
    const popupIsOpened = document.querySelector(".popup_open");
    closePopup(popupIsOpened);
    console.log("hi");
  }
}
//

// Начальный список
initialCards.forEach(function (currentCards) {
  const current = createCards(currentCards);
  elements.append(current);
});

// лисенеры

// добавление картинки
formPopupImage.addEventListener("submit", addImage);
//

// открытие попапа "popupProfile" (инпут = тексту профайла )
buttonEditPopupProfile.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
});
//

// закрытие попапа "popupProfile"
buttonClosePopupProfile.addEventListener("click", function () {
  closePopup(popupProfile);
});
//

// добавление данных в профайл (текст профайла = инпут)
formPopupProfile.addEventListener("submit", function (e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
});
//

// закрытие попапа "popupImage"
buttonClosePopupImage.addEventListener("click", function () {
  closePopup(popupImage);
});
//

// открытие попапа "popupImage"
buttonAddPopupImage.addEventListener("click", function () {
  openPopup(popupImage);
});

// закрытие попапа "popupPhoto"
buttonClosePopupPhoto.addEventListener("click", function () {
  closePopup(popupPhoto);
});
//
// закрытие попапа по клику за приделами контента
Array.prototype.forEach.call(popupList, function (item) {
  item.addEventListener("mousedown", function (e) {
    if (e.target === e.currentTarget) {
      closePopup(item);
    }
  });
});
//
