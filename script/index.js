import { Card } from "./Card.js";
// переменные секций элемент и элементс
const elements = document.querySelector(".elements");
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
const popupList = document.querySelectorAll(".popup");
const saveButton = document.querySelector(".popup__save");
const formPopupImage = document.querySelector(".popup__form_image");
//

//
// создание списка//
initialCards.forEach((item) => {
  const card = new Card(item, "template").generateCard();
  document.querySelector(".elements").append(card);
});
//

// функция добавления новых карточек
function addImage(e) {
  e.preventDefault();
  const card = new Card(
    {
      name: inputImage.value,
      link: inputImageLink.value,
    },
    "template"
  ).generateCard();
  elements.prepend(card);
  formPopupImage.reset();
  saveButton.disabled = true;
  closePopup(popupImage);
}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.addEventListener("keydown", closePopupOnEsc);
}
//

const config = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inputErrorClass: "popup__input_type_error",
  errorActiveClass: "popup__input-error_active",
};
// включение валидации вызовом enableValidation
enableValidation(config);
//

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupOnEsc);
  const form = popup.querySelector(config.formSelector);
  const inputList = form.querySelectorAll(config.inputSelector);
  inputList.forEach((input) => {
    hideError(form, input, config);
  });
}

// удаление попапа по кнопке ESC
function closePopupOnEsc(e) {
  if (e.key === "Escape") {
    const popupIsOpened = document.querySelector(".popup_open");
    closePopup(popupIsOpened);
  }
}
//

// // лисенеры

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
  inputImage.value = "";
  inputImageLink.value = "";
});

// закрытие попапа по клику за приделами контента
Array.prototype.forEach.call(popupList, function (item) {
  item.addEventListener("mousedown", function (e) {
    if (e.target === e.currentTarget) {
      closePopup(item);
    }
  });
});
//
