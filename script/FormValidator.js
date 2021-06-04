export { FormValidator };
const forms = Array.from(document.forms);
const inputList = Array.from(document.querySelectorAll(".popup__input"));
const buttonElement = document.querySelector(".popup__save");
const config = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inputErrorClass: "popup__input_type_error",
  errorActiveClass: "popup__input-error_active",
};

class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._inputActiveClass = config.errorActiveClass;
    this._form = form;
  }

  // функция включения валидации
  enableValidation = () => {
    this._setEventListener();
  };

  // функция навешивания листенеров
  _setEventListener = () => {
    forms.forEach((element) => {
      element.addEventListener("submit", () => {
        console.log("submit");
      });
    });
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidity(input);
        this._toggleButtonState(input);
      });
      this._toggleButtonState(input);
    });
  };
  //

  // функция реагирования на валидность
  _checkValidity = (input) => {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  };
  //

  // функция показывающая ошибку
  _showError = (input) => {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.classList.add("popup__input-error_active");
    input.classList.add("popup__input_type_error");
    errorElement.textContent = input.validationMessage;
  };
  //

  // функция скрывающая ошибку
  _hideError = (input) => {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.classList.remove("popup__input-error_active");
    input.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
  };
  //

  // функция проверки на валидность
  _hasInvalidInput = () => {
    return inputList.some((input) => !input.validity.valid);
  };
  //

  // функция состояния кнопки
  _toggleButtonState = (input) => {
    if (this._hasInvalidInput(input)) {
      buttonElement.disabled = true;
    } else {
      buttonElement.disabled = false;
    }
  };
}
//

forms.forEach(function (element) {
  new FormValidator(element).enableValidation();
});

// // функция включения валидации
// const enableValidation = (config) => {
//   const { formSelector, ...restOfConfig } = config;
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     setEventListener(formElement, restOfConfig);
//   });
// };
// console.log(enableValidation.formList);
// // //

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

// // функция проверки валидности
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
