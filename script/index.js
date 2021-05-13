// переменные массива данных
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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
  imageCard.setAttribute("alt", "Ой, что-то пошло не так...");
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
  popup.classList.remove("popup-open");
}
//

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup-open");
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
