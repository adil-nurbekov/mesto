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
} from "../utils/constants.js";

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

const showError = (err) => {
  console.log(err);
};

const handleOpenImage = (name, link) => {
  popupWithImage.open(name, link);
};

//  функция создания карточки
const creatCard = (data) => {
  const card = new Card(data, ownersId, "template", handleOpenImage, {
    handleDeleteCard: (cardId) => {
      popupWithConfirm.open();
      popupWithConfirm.setOnSubmit(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            card.remove();
            popupWithConfirm.close();
          })
          .catch((err) => showError(err));
      });

      popupWithConfirm.setEventListener();
    },
    addLikeToServer: (cardId) => {
      api.handleLike(cardId, data, true).then((data) => {
        card.querySelector(".element__counter").textContent = data.likes.length;
        card
          .querySelector(".element__logo")
          .classList.add("element__logo_active");
        // card.setLikeInfo();
      });
    },
    removeLikeFromServer: (cardId) => {
      api.handleLike(cardId, data, false).then((data) => {
        card.querySelector(".element__counter").textContent = data.likes.length;
        card
          .querySelector(".element__logo")
          .classList.remove("element__logo_active");
      });
    },
  }).generateCard();

  return card;
};
//

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

// данные для класса Api
const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-26",
  token: "50c40ac8-f6bb-40c6-a49e-ec56d515b265",
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
    api
      .postCard({
        name: input["input-image-name"],
        link: input["input-image-url"],
      })
      .then((data) => {
        section.addItem(creatCard(data), popupAddImageForm.close());
      })
      .catch((err) => showError(err));
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
