import { Card } from "../components/Card.js";
import { Popup } from "../components/Popup.js";
import {
  elements,
  inputImage,
  inputImageLink,
  formPopupImage,
  saveButton,
  popupImage,
} from "./constants.js";

export { addImage };

// функция добавления новых карточек
const addImage = (e) => {
  e.preventDefault();
  const card = new Card(
    {
      name: inputImage.value,
      link: inputImageLink.value,
    },
    "template"
  ).generateCard();
  document.querySelector(elements).prepend(card);
  formPopupImage.reset();
  saveButton.disabled = true;
  const closePopup = new Popup(popupImage).close();
};

// функция скрытия ошибок при открытии попапа
export const hideError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(errorActiveClass);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
};
//

// функция закрытия попапа
export function closePopup(popup) {
  popup.classList.remove("popup_open");
}
//

//
// buttonEditPopupProfile.addEventListener("click", function () {
//   inputName.value = profileName.textContent;
//   inputJob.value = profileJob.textContent;
//   Popup(popupProfile);
//   const form = popupProfile.querySelector(config.formSelector);
//   const inputList = form.querySelectorAll(config.inputSelector);
//   inputList.forEach((input) => {
//     hideError(form, input, config);
//   });
// });

// функция открытия попапа
// export function openPopup(popup) {
//   popup.classList.add("popup_open");
//   document.addEventListener("keydown", closePopupOnEsc);
// }

// удаление попапа по кнопке ESC
// function closePopupOnEsc(e) {
//   if (e.key === "Escape") {
//     const popupIsOpened = document.querySelector(".popup_open");
//     closePopup(popupIsOpened);
//   }
// }
//
