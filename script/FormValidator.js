export { FormValidator };
const formList = Array.from(document.querySelectorAll(".form"));

class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._inputActiveClass = config._inputActiveClass;
    this._form = document.querySelector(form);
  }
  enableValidation = () => {
    console.log(this._formSelector);
  };
  _setEventListener = () => {
    config.formSelector.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("hi!");
    });
  };
}

console.log(inputList);
const form = new FormValidator()._checkInputValidity();
console.log(form);

// // функция включения валидации
// const enableValidation = (config) => {
//   const { formSelector, ...restOfConfig } = config;
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     setEventListener(formElement, restOfConfig);
//   });
// };
// //

// // функция навешивания лисенеров на валидацию
// const setEventListener = (formElement, config) => {
//   const { inputSelector, submitButtonSelector, ...restOfConfig } = config;
//   formElement.addEventListener("submit", function (e) {
//     e.preventDefault();
//   });
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       checkInputValidity(formElement, inputElement, restOfConfig);
//       toggleButtonState(buttonElement, inputList);
//     });
//   });
//   toggleButtonState(buttonElement, inputList);
// };
// //

// // функция реагирования  на  валидность
// const checkInputValidity = (formElement, inputElement, config) => {
//   if (inputElement.validity.valid) {
//     hideError(formElement, inputElement, config);
//   } else {
//     showError(formElement, inputElement, config);
//   }
// };
// const toggleButtonState = (buttonElement, inputList) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.disabled = false;
//   }
// };
// //

// // фунция проверки валидности
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => !inputElement.validity.valid);
// };
// //

// // функция скрывающая ошибки
// const hideError = (formElement, inputElement, config) => {
//   const { inputErrorClass, errorActiveClass } = config;
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   errorElement.classList.remove(errorActiveClass);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.textContent = "";
// };
// //

// // функция показывающая ошибки
// const showError = (formElement, inputElement, config) => {
//   const { inputErrorClass, errorActiveClass } = config;
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   errorElement.classList.add(errorActiveClass);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage;
// };
// //
