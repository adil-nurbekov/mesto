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
const popupProfileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const popupImageAddButton = document.querySelector(".profile__add-button");
//

// переменные попапа профайла
const popupProfile = document.querySelector(".popup_profile_add");
const popupProfileSaveButton = document.querySelector(".popup__form_profile");
const popupProfileCloseButton = document.querySelector(".popup__close_profile");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_job");
//

// переманные попапа добавления картинок
const popupImage = document.querySelector(".popup_image_add");
const popupImageCloseButton = document.querySelector(".popup__close_image");
const inputImage = document.querySelector(".popup__input_type_img");
const inputImageLink = document.querySelector(".popup__input_type_link");
const popupImageSaveButton = document.querySelector(".popup__form_image");
//

// переменная темплейт
const cardsTemplate = document.querySelector(".template");
//

const container = document.querySelector(".element__container");

const titleImage = cardsTemplate.content.querySelector(".element__title");
const linkImage = cardsTemplate.content.querySelector(".element__image");

//переменные попапа увеличения картинки
const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoCloseButton = document.querySelector(".popup-photo__close");
const popupPhotoZoom = document.querySelector(".popup-photo__image");
const popupPhotoText = document.querySelector(".popup-photo__text");
//

// создание списка//
function createCards(cardText) {
  const createCardsTemplate = cardsTemplate.content
    .querySelector(".element")
    .cloneNode(true);
  createCardsTemplate.querySelector(".element__title").textContent =
    cardText.name;
  createCardsTemplate.querySelector(".element__image").src = cardText.link;
  createCardsTemplate
    .querySelector(".element__image")
    .setAttribute("alt", "Ой, что-то пошло не так...");
  //

  // попап картинки
  createCardsTemplate
    .querySelector(".element__image")
    .addEventListener("click", function () {
      popupPhotoZoom.src = cardText.link;
      popupPhotoText.textContent = cardText.name;
      openPopup(popupPhoto);
      // popupPhoto.classList.add("popup-photo__open");
    });

  function closePhotoPopup() {
    popupPhoto.classList.remove("popup-photo__open");
  }
  popupPhotoCloseButton.addEventListener("click", closePhotoPopup);

  // кнопка лайка
  createCardsTemplate
    .querySelector(".element__logo")
    .addEventListener("click", toggleClass);
  // кнопка удаления
  createCardsTemplate
    .querySelector(".element__delete-button")
    .addEventListener("click", removeCard);
  elements.append(cardsTemplate);
  return createCardsTemplate;
}
// функция добавления новых карточек
function addImage(e) {
  e.preventDefault();
  const name = inputImage.value;
  const link = inputImageLink.value;
  const card = createCards({ name, link });
  elements.prepend(card);
  popupImageSaveButton.reset();
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
popupImageSaveButton.addEventListener("submit", addImage);

popupProfileEditButton.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
});

popupProfileCloseButton.addEventListener("click", function () {
  closePopup(popupProfile);
});

popupProfileSaveButton.addEventListener("submit", function (e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
});

popupImageCloseButton.addEventListener("click", function () {
  closePopup(popupImage);
});

popupImageAddButton.addEventListener("click", function () {
  openPopup(popupImage);
});
//
