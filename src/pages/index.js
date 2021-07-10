import "./index.css";

import {
  buttonEditPopupProfile,
  buttonAddPopupImage,
  popupProfile,
  formPopupProfile,
  inputName,
  inputJob,
  popupImage,
  popupConfirm,
  formPopupImage,
  popupPhoto,
  config,
  initialCards,
  elements,
  profileName,
  profileJob,
  profileImage,
  inputImage,
  inputImageLink,
  deleteButton,
  avatarButton,
  popupAvatar,
} from "../utils/constants.js";

import Section from "../components/Section";

import { UserInfo } from "../components/UserInfo.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import { Card } from "../components/Card";

import { FormValidator } from "../components/FormValidator";

import { Api } from "../components/Api";
import { PopupWithConfirm } from "../components/PopupWithConfirm";
import { PopupWithAvatar } from "../components/PopupWithAvatar";

// открытие попапа картинки
const handleOpenImage = (name, link) => {
  popupWithImage.open(name, link);
};

//  функция создания карточки
const creatCard = (item) => {
  const card = new Card(item, "template", handleOpenImage).generateCard();
  return card;
};
//

// экземпляр класса Section для создания начального списка//
const defaultCardList = new Section(
  {
    data: "",
    renderer: (item) => {
      defaultCardList.addItems(creatCard(item));
    },
  },
  elements
);
//

// функция добавления данных с серевера в профайл
const addProfileInfo = (items) => {
  document.querySelector(profileName).textContent = items.name;
  document.querySelector(profileJob).textContent = items.about;
  document.querySelector(profileImage).src = items.avatar;
};
//

// данные для класса Api
const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-25",
  token: "236a1e48-2d85-4cef-ba03-6e49fa3c5b91",
};
//

// создание экземпляра класса Api
const api = new Api(options);
//

// экземпляр класса PopupWithForm для попапа профайла
const popupProfileForm = new PopupWithForm({
  popup: popupProfile,
  handleFormSubmit: (item) => {
    user.setUserInfo(item);
    popupProfileForm.close();
    api.editProfileInfo({
      name: item["input-profile-name"],
      about: item["input-profile-profession"],
    });
  },
});

const popupAvatarForm = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: (input) => {
    api.editAvatarImage({
      avatar: input["input-avatar-name"],
    });
    popupAvatarForm.close();
  },
});

// эксземпляр класса PopupWithForm для попапа картинки
const popupAddImageForm = new PopupWithForm({
  popup: popupImage,
  handleFormSubmit: (input) => {
    defaultCardList.addItems(
      creatCard({
        name: input["input-image-name"],
        link: input["input-image-url"],
      })
    );
    api.postCard({
      name: input["input-image-name"],
      link: input["input-image-url"],
    });
    popupAddImageForm.close();
  },
});
//
// api.deleteCard();

// метод для отображения начального списка
api.getCards().then((items) => defaultCardList.renderItems(items));
// .then((items) => console.log(items));
//
api.getProfileInfo().then((items) => addProfileInfo(items));

Promise.all([api.getCards(), api.getProfileInfo()]);
// экземпляр класса PopupWithImage
const popupWithImage = new PopupWithImage(popupPhoto);
//
const popupWithConfirm = new PopupWithConfirm(popupConfirm);

const popupWithAvatar = new PopupWithAvatar(popupAvatar);

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
popupWithConfirm.setEventListener();

popupAvatarForm.setEventListener();

// // LISTENERS // //

deleteButton.addEventListener("click", () => {
  popupWithConfirm.open();
});

avatarButton.addEventListener("click", () => {
  popupWithAvatar.open();
});

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
