// переменные массива данных
export {
  initialCards,
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
};
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

const config = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inputErrorClass: "popup__input_type_error",
  errorActiveClass: "popup__input-error_active",
};

// переменные секций элемент и элементс

const elements = ".elements";
const buttonEditPopupProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const buttonAddPopupImage = document.querySelector(".profile__add-button");
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

// переменные попапа добавления картинок
const popupImage = ".popup_image_add";
const buttonClosePopupImage = ".popup__close_image";

const inputImage = document.querySelector(".popup__input_type_img");
const inputImageLink = document.querySelector(".popup__input_type_link");
const popupList = document.querySelectorAll(".popup");
const saveButton = document.querySelector(".popup__save");
const formPopupImage = document.querySelector(".popup__form_image");

const buttonClosePopupPhoto = ".popup__close_photo";
const popupPhoto = ".popup_photo_add";
//

//переменные попапа увеличения картинки
const popupPhotoZoom = document.querySelector(".popup__image");
const popupPhotoText = document.querySelector(".popup__image-text");
//
