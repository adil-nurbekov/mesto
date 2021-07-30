// переменные массива данных
export {
  elements,
  buttonEditPopupProfile,
  profileName,
  profileJob,
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
  saveButton,
  formPopupImage,
  buttonClosePopupPhoto,
  popupPhoto,
  popupPhotoZoom,
  popupPhotoText,
  config,
  popupOpen,
  buttonClosePopup,
  profileImage,
  popupConfirm,
  avatarImage,
  popupAvatar,
  counter,
  formPopupAvatar,
  options,
};

const config = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inputErrorClass: "popup__input_type_error",
  errorActiveClass: "popup__input-error_active",
};
// данные для класса Api
const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-26",
  token: "50c40ac8-f6bb-40c6-a49e-ec56d515b265",
};
//

// переменные секций элемент и элементс
const formPopupAvatar = document.querySelector(".popup__form_avatar");
const elements = ".elements";
const buttonEditPopupProfile = document.querySelector(".profile__edit-button");
const profileName = ".profile__name";
const profileJob = ".profile__profession";
const buttonAddPopupImage = document.querySelector(".profile__add-button");
const counter = document.querySelector(".element__counter");
//
const popupOpen = document.querySelector(".popup_open");
const buttonClosePopup = document.querySelectorAll(".popup__close");
// переменные попапа профайла
const popupProfile = ".popup_profile_add";
const buttonClosePopupProfile = ".popup__close_profile";

const formPopupProfile = document.querySelector(".popup__form_profile");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_job");
//
const profileImage = ".profile__image";
// переменные попапа добавления картинок
const popupImage = ".popup_image_add";
const buttonClosePopupImage = ".popup__close_image";
const popupConfirm = ".popup_confirm";
const inputImage = document.querySelector(".popup__input_type_img");
const inputImageLink = document.querySelector(".popup__input_type_link");
const popupList = document.querySelectorAll(".popup");
const saveButton = document.querySelector(".popup__save");
const formPopupImage = document.querySelector(".popup__form_image");

const buttonClosePopupPhoto = ".popup__close_photo";
const popupPhoto = ".popup_photo_add";
const popupAvatar = ".popup_avatar-add";
//

const avatarImage = document.querySelector(".profile__edit-image");

//переменные попапа увеличения картинки
const popupPhotoZoom = document.querySelector(".popup__image");
const popupPhotoText = document.querySelector(".popup__image-text");
//
