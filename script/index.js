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

let popupButtonSave = document.querySelector(".popup__form_profile");
const deleteButton = document.querySelector(".element__delete-button");
const elements = document.querySelector(".elements");

const openPupupButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup_profile_add");
const closePopupButton = document.querySelector(".popup__close_profile");
const addImageButton = document.querySelector(".profile__add-button");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__profession");

let inputName = document.querySelector(".popup__input_type_name");
let inputJob = document.querySelector(".popup__input_type_job");
const popupImage = document.querySelector(".popup_image_add");

const closePopupImageButton = document.querySelector(".popup__close_image");

const inputImage = document.querySelector(".popup__input_type_img");
const inputImageLink = document.querySelector(".popup__input_type_link");
const element = document.querySelector(".element");
const popupImageSave = document.querySelector(".popup__form_image");

const container = document.querySelector(".element__container");

const cardsTemplate = document.querySelector(".template");
const titleImage = cardsTemplate.content.querySelector(".element__title");
const linkImage = cardsTemplate.content.querySelector(".element__image");

const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoButton = document.querySelector(".popup-photo__close");
const popupPhotoZoom = document.querySelector(".popup-photo-img");
const popupPhotoText = document.querySelector(".popup-photo-text");

// Создание списка//
function createCards(cardText) {
  const createCardsTemplate = cardsTemplate.content
    .querySelector(".element")
    .cloneNode(true);
  createCardsTemplate.querySelector(".element__title").textContent =
    cardText.name;
  createCardsTemplate.querySelector(".element__image").src = cardText.link;
  //попап картинки
  createCardsTemplate
    .querySelector(".element__image")
    .addEventListener("click", addPhoto);

  function addPhoto() {
    popupPhoto.classList.add("popup-photo__open");
    popupPhotoZoom.src = cardText.link;
    popupPhotoText.textContent = cardText.name;
    console.log("hi");

    function closePhotoPopup() {
      popupPhoto.classList.remove("popup-photo__open");
    }
    popupPhotoButton.addEventListener("click", closePhotoPopup);
  }

  // кнопка лайка
  createCardsTemplate
    .querySelector(".element__logo")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__logo_active");
      console.log(evt, "hello");
    });
  // кнопка удаления
  createCardsTemplate
    .querySelector(".element__delete-button")
    .addEventListener("click", function (e) {
      e.target.closest(".element").remove();
      console.log("hello", e);
    });
  elements.append(cardsTemplate);
  return createCardsTemplate;
}

function addImage(e) {
  e.preventDefault();
  const newText = cardsTemplate.content
    .querySelector(".element")
    .cloneNode(true);
  newText.querySelector(".element__title").textContent = inputImage.value;
  newText.querySelector(".element__image").src = inputImage.value;
  // кнопка лайка
  newText
    .querySelector(".element__logo")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__logo_active");
      console.log(evt, "hello");
    });
  // кнопка удаления
  newText
    .querySelector(".element__delete-button")
    .addEventListener("click", function (e) {
      e.target.closest(".element").remove();
      console.log("hello", e);
    });
  elements.prepend(newText);
  removePopupImage();
}

// Начальный список
initialCards.forEach(function (currentCards) {
  const current = createCards(currentCards);
  elements.append(current);
});

function removePopupImage() {
  popupImage.classList.remove("popup-open");
}

function addPopupImage() {
  popupImage.classList.add("popup-open");
}
function addPopup() {
  popup.classList.add("popup-open");

  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove("popup-open");
}

function addText(e) {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

popupImageSave.addEventListener("submit", addImage);
openPupupButton.addEventListener("click", addPopup);
closePopupButton.addEventListener("click", closePopup);
popupButtonSave.addEventListener("submit", addText);
closePopupImageButton.addEventListener("click", removePopupImage);
addImageButton.addEventListener("click", addPopupImage);
