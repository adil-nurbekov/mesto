import "./index.css";

import {
  buttonEditPopupProfile,
  buttonAddPopupImage,
  popupProfile,
  formPopupProfile,
  inputName,
  inputJob,
  popupImage,
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

// функция создания
const creatCard = (item) => {
  const card = new Card(item, "template", handleOpenImage).generateCard();
  return card;
};

// экземпляр класса Section для создания начального списка//
const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      creatCard(item);
      defaultCardList.addItem(creatCard(item));
    },
  },
  elements
);
//

// экземпляр класса PopupWithForm для попапа профайла
const popupProfileForm = new PopupWithForm({
  popup: popupProfile,
  handleFormSubmit: (item) => {
    user.setUserInfo(item);
    popupProfileForm.close();
  },
});

// эксземпляр класса PopupWithForm для попапа картинки
const popupAddImageForm = new PopupWithForm({
  popup: popupImage,
  handleFormSubmit: (input) => {
    creatCard({
      name: input["input-image-name"],
      link: input["input-image-url"],
    });
    defaultCardList.addItem(
      creatCard({
        name: input["input-image-name"],
        link: input["input-image-url"],
      })
    );
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
