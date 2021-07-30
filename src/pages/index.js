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
  elements,
  profileName,
  profileJob,
  profileImage,
  popupAvatar,
  formPopupAvatar,
  options,
} from "../utils/constants.js";

import { showError } from "../utils/utils";

import Section from "../components/Section";

import { UserInfo } from "../components/UserInfo.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import { Card } from "../components/Card";

import { FormValidator } from "../components/FormValidator";

import { Api } from "../components/Api";

import { PopupWithConfirm } from "../components/PopupWithConfirm";

// экземпляр класса PopupWithConfirm
const popupWithConfirm = new PopupWithConfirm(popupConfirm);
//

// экземпляр класса PopupWithImage
const popupWithImage = new PopupWithImage(popupPhoto);
//

// экземпляр класса UserInfo
const user = new UserInfo(profileName, profileJob, profileImage);
//

let ownersId = "00000";

//  функция создания карточки
const creatCard = (data) => {
  const card = new Card({
    data: data,
    ownersId: ownersId,
    classElement: "template",
    handleOpenImage: () => {
      popupWithImage.open(data.name, data.link);
    },
    handleDeleteCard: (cardId, thisCard) => {
      popupWithConfirm.open();
      popupWithConfirm.setOnSubmit(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            thisCard.deleteCard();
            popupWithConfirm.close();
          })
          .catch((err) => showError(err));
      });
    },
    handleClickLike: (cardId, thisCard) => {
      api.handleLike(cardId, thisCard.isLiked()).then((data) => {
        thisCard.setLikeInfo(data);
      });
    },
  }).generateCard();

  return card;
};
//
popupWithConfirm.setEventListener();
// экземпляр класса Section для создания начального списка//
const section = new Section(
  {
    data: "",
    renderer: (item) => {
      section.addItems(creatCard(item));
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

// создание экземпляра класса Api
const api = new Api(options);
//

// экземпляр класса PopupWithForm для попапа профайла
const popupProfileForm = new PopupWithForm({
  popup: popupProfile,
  handleFormSubmit: (input) => {
    api
      .editProfileInfo({
        name: input["input-profile-name"],
        about: input["input-profile-profession"],
      })
      .then((data) => {
        user.setUserInfo(data.name, data.about);
        popupProfileForm.renderLoading(false);
        popupProfileForm.close();
      })
      .catch((err) => showError(err))
      .finally(() => popupProfileForm.renderLoading(false));
    popupProfileForm.renderLoading(true);
  },
});
// метод закрытие попапа "popupProfile"
popupProfileForm.setEventListener();
//
// экземпляр класса PopupWithForm для попапа аватарки
const popupAvatarForm = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: (input) => {
    api
      .editAvatarImage({
        avatar: input["input-avatar-name"],
      })
      .then((data) => {
        user.setUserAvatar(data.avatar);
        popupAvatarForm.renderLoading(false);
        popupAvatarForm.close();
      })
      .catch((err) => showError(err))
      .finally(() => popupProfileForm.renderLoading(false));
    popupAvatarForm.renderLoading(true);
  },
});
//
popupAvatarForm.setEventListener();

// эксземпляр класса PopupWithForm для попапа картинки
const popupAddImageForm = new PopupWithForm({
  popup: popupImage,
  handleFormSubmit: (input) => {
    popupAddImageForm.renderCreating(true);
    api
      .postCard({
        name: input["input-image-name"],
        link: input["input-image-url"],
      })
      .then((data) => {
        section.addItem(creatCard(data), popupAddImageForm.close());
        popupAddImageForm.renderCreating(false);
      })
      .catch((err) => showError(err))
      .finally(() => popupAddImageForm.renderCreating(false));
  },
});

// метод setEventListener попапа "popupImage"
popupAddImageForm.setEventListener();
//

// метод setEventListener попапа "popupPhoto"
popupWithImage.setEventListener();
//

// метод ожидания ответа от сервера
api
  .getDataFromServer()
  .then((items) => {
    const [getCardInfo, getProfileInfo] = items;
    addProfileInfo(getProfileInfo); // функция отображения начальной информации профайла
    ownersId = getProfileInfo._id;
    section.renderItems(getCardInfo); // метод отображения начальной информации карточек
  })
  .catch((err) => showError(err));
//

// экземпляр класса "FormValidator"
const addImagePopupValidator = new FormValidator(config, formPopupImage); // экземпляр валидайии попапа добавления картинки
const profilePopupValidator = new FormValidator(config, formPopupProfile); // экземпляр валидации папапа профайла
const avatarPopupValidator = new FormValidator(config, formPopupAvatar); // экземпляр валидации папапа аватарки
//

// // LISTENERS // //

document.querySelector(profileImage).addEventListener("click", () => {
  popupAvatarForm.open();
  avatarPopupValidator.resetValidation();
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

avatarPopupValidator.enableValidation();

//
