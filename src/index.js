import "../src/index.css";

import {
  buttonEditPopupProfile,
  buttonAddPopupImage,
  popupProfile,
  formPopupProfile,
  inputName,
  inputJob,
  popupImage,
  inputImage,
  inputImageLink,
  formPopupImage,
  popupPhoto,
  config,
  initialCards,
  elements,
} from "./utils/constants.js";

import Section from "./components/Section.js";

import { UserInfo } from "./components/UserInfo.js";

import PopupWithImage from "./components/PopupWithImage.js";

import PopupWithForm from "./components/PopupWithForm.js";

import { Card } from "./components/Card";

import { FormValidator } from "./components/FormValidator";

// открытие попапа картинки
const handleOpenImage = (name, link) => {
  popupWithImage.open(name, link);
};
//

const addImage = (e) => {
  e.preventDefault();
  const card = new Card(
    {
      name: inputImage.value,
      link: inputImageLink.value,
    },
    "template",
    handleOpenImage
  ).generateCard();
  document.querySelector(elements).prepend(card);
  formPopupImage.reset();
  popupAddImageForm.close();
};

// экземпляр класса Section для создания начального списка//
const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "template", handleOpenImage);
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  elements
);
//
// const createCard = (item) => {
//   const card = new Card(item, "template", handleOpenImage);
//   const cardElement = card.generateCard();
// };
// console.log(createCard);
// метод отображение начальных карточек
defaultCardList.renderItem();
//

// экземпляр класса PopupWithImage
const popupWithImage = new PopupWithImage(popupPhoto);

// экземпляр класса PopupWithForm
const popupProfileForm = new PopupWithForm(popupProfile, handleFormSubmit); // экземпляр формы профайла
const popupAddImageForm = new PopupWithForm(popupImage, handleFormSubmit); // экземпляр формы добавления картинки
//

// метод закрытие попапа "popupProfile"
popupProfileForm.setEventListener();
//

function handleFormSubmit() {
  user.setUserInfo(inputName, inputJob); // метод добавления данных инпута в инфо профайла
  popupProfileForm.close(); // метод закрытия попапа профайла
}
// метод закрытие попапа "popupImage"
popupAddImageForm.setEventListener();
//

// метод закрытие попапа "popupPhoto"
popupWithImage.setEventListener();
//

// экземпляр класса UserInfo
const user = new UserInfo(inputName, inputJob);
//

// экземпляр класса "FormValidator"
const addImagePopupValidator = new FormValidator(config, formPopupImage); // экземпляр валидайии попапа добавления картинки
const profilePopupValidator = new FormValidator(config, formPopupProfile); // экземпляр валидации папапа профайла
//

// // LISTENERS // //

// добавление картинки
formPopupImage.addEventListener("submit", addImage);
//

// открытие попапа "popupProfile" (инпут = тексту профайла )
buttonEditPopupProfile.addEventListener("click", () => {
  popupProfileForm.open(); // метод открытия попапа
  user.getUserInfo(); // метод отображения инфо профайла в инпутах профайла
  profilePopupValidator.resetValidation();
});
//

// открытие попапа "popupImage"
buttonAddPopupImage.addEventListener("click", () => {
  popupAddImageForm.open(); // метод открытия попапа "popupImage"
  inputImage.value = "";
  inputImageLink.value = "";
  addImagePopupValidator.resetValidation();
});
//

// добавление данных в профайл (текст профайла = инпут)
// formPopupProfile.addEventListener("submit", () => {
//   user.setUserInfo(inputName, inputJob); // метод добавления данных инпута в инфо профайла
//   popupProfileForm.close(); // метод закрытия попапа профайла
// });
//

// VALIDATORS //
// валидатор формы профайла
profilePopupValidator.enableValidation();
//
// валидатор формы добавления картинок
addImagePopupValidator.enableValidation();
//
