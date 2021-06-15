import "../pages/index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  buttonEditPopupProfile,
  buttonAddPopupImage,
  popupProfile,
  formPopupProfile,
  buttonClosePopupProfile,
  inputName,
  inputJob,
  popupImage,
  buttonClosePopupImage,
  inputImage,
  inputImageLink,
  popupList,
  formPopupImage,
  buttonClosePopupPhoto,
  popupPhoto,
  config,
  initialCards,
  elements,
} from "../utils/constants.js";
import Section from "../components/Section.js";

import { addImage } from "../utils/utils.js";
//
import { Popup } from "../components/Popup";
//

import { UserInfo } from "../components/UserInfo.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

import { closePopup } from "../utils/utils.js";
import { hideError } from "../utils/utils.js";

// создание списка//
const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "template");
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  elements
);

//
defaultCardList.renderItem();

// открытие попапа картинки
export const handleOpenImage = (name, link) => {
  const popupImage = new PopupWithImage(popupPhoto).open(name, link);
};
//

// закрытие попапа фото
const ClosePopupPhoto = new Popup(popupPhoto).setEventListener(
  buttonClosePopupPhoto
);
//

// добавление картинки
formPopupImage.addEventListener("submit", addImage);
//

// // LISTENERS // //

// открытие попапа "popupProfile" (инпут = тексту профайла )
buttonEditPopupProfile.addEventListener("click", () => {
  const popupOpenProfile = new PopupWithForm(popupProfile).open();
  const popupInputValue = new UserInfo(inputName, inputJob).getUserInfo();
});
//

// закрытие попапа "popupProfile"
const ClosePopupProfile = new Popup(popupProfile).setEventListener(
  buttonClosePopupProfile
);
//

// открытие попапа "popupImage"
buttonAddPopupImage.addEventListener("click", function () {
  const popupOpenImage = new Popup(popupImage).open();
  inputImage.value = "";
  inputImageLink.value = "";
  const form = document
    .querySelector(popupImage)
    .querySelector(config.formSelector);
  const inputList = form.querySelectorAll(config.inputSelector);
  inputList.forEach((input) => {
    hideError(form, input, config);
  });
});
// //

// // закрытие попапа "popupImage"
const ClosePopupImage = new Popup(popupImage).setEventListener(
  buttonClosePopupImage
);
//

// добавление данных в профайл (текст профайла = инпут)
formPopupProfile.addEventListener("submit", () => {
  const profileTextContent = new UserInfo(inputName, inputJob).setUserInfo();
  const submitProfile = new PopupWithForm(popupProfile).close();
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

// VALIDATORS //
// валидатор формы профайла
const profilePopup = new FormValidator(
  config,
  formPopupProfile
).enableValidation();
//
// валидатор формы добавления картинок
const addImagePopup = new FormValidator(
  config,
  formPopupImage
).enableValidation();
//
