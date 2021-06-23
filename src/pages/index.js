import "./index.css";

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
  profileName,
  profileJob,
} from "../utils/constants.js";

import Section from "../components/Section";

import { UserInfo } from "../components/UserInfo.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import { Card } from "../components/Card";

import { FormValidator } from "../components/FormValidator";

// открытие попапа картинки
const handleOpenImage = (name, link) => {
  popupWithImage.open(name, link);
};
//

const creatCard = () => {
  const card = document.createElement("template");
  return card;
};

// экземпляр класса Section для создания начального списка//
const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "template", handleOpenImage).generateCard();
      defaultCardList.addItem(card);
    },
  },
  elements
);
//

console.log(creatCard);

// эксземпляр класса PopupWithForm для попапа картинки
const popupAddImageForm = new PopupWithForm({
  popup: popupImage,
  handleFormSubmit: () => {
    const newCard = new Card(
      {
        name: inputImage.value,
        link: inputImageLink.value,
      },
      "template",
      handleOpenImage
    ).generateCard();
    defaultCardList.addItem(newCard);
    popupAddImageForm.close();
  },
});
//

// метод отображение начальных карточек
defaultCardList.renderItem();
//

// экземпляр класса PopupWithImage
const popupWithImage = new PopupWithImage(popupPhoto);
//

// экземпляр класса PopupWithForm для попапа профайла
const popupProfileForm = new PopupWithForm({
  popup: popupProfile,
  handleFormSubmit: () => {
    user.setUserInfo({ name: inputName.value, prof: inputJob.value });
    popupProfileForm.close();
  },
});

// экземпляр класса UserInfo
const user = new UserInfo(profileName, profileJob);
//

// экземпляр класса "FormValidator"
const addImagePopupValidator = new FormValidator(config, formPopupImage); // экземпляр валидайии попапа добавления картинки
const profilePopupValidator = new FormValidator(config, formPopupProfile); // экземпляр валидации папапа профайла
//

// метод закрытие попапа "popupProfile"
popupProfileForm.setEventListener();
//

// метод закрытие попапа "popupImage"
popupAddImageForm.setEventListener();
//

// метод закрытие попапа "popupPhoto"
popupWithImage.setEventListener();
//

// // LISTENERS // //

// открытие попапа "popupProfile" (инпут = тексту профайла )
buttonEditPopupProfile.addEventListener("click", () => {
  popupProfileForm.open(); // метод открытия попапа
  const userData = user.getUserInfo();
  inputName.value = userData.name;
  inputJob.value = userData.prof;

  profilePopupValidator.resetValidation();
});
//

// открытие попапа "popupImage"
buttonAddPopupImage.addEventListener("click", () => {
  popupAddImageForm.open(); // метод открытия попапа "popupImage"
  addImagePopupValidator.resetValidation();
});
//

// VALIDATORS //
// валидатор формы профайла
profilePopupValidator.enableValidation();
//
// валидатор формы добавления картинок
addImagePopupValidator.enableValidation();
//
