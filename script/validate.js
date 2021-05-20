// функция реагирования на события
function setEeventListener(formElement, config) {
  const { inputSelector, submitButtonSelector, ...restConfig } = config;
  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  //

  // переменные
  const formInput = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  //

  //цикл для всех инпутов
  formInput.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, restConfig);
      checkButtonState(buttonElement, formInput);
    });
  });
  checkButtonState(buttonElement, formInput);
}
//

// функция показывающая ошибку
const showError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorActiveClass);
};
//

// функция скрывающая ошибку
function hideError(formElement, inputElement, config) {
  const { errorActiveClass, inputErrorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorActiveClass);
  errorElement.textContent = "";
}
//

// функция проверки на валидность
function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, config);
  } else {
    hideError(formElement, inputElement, config);
  }
}
//

// функция проверки заполнености полей
const checkAllInputsValidity = (formInput) => {
  return formInput.some((inputElement) => !inputElement.validity.valid);
};
//

// функция проверки активности кнопки
function checkButtonState(buttonElement, formInput) {
  if (checkAllInputsValidity(formInput)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}
//

// функция валидации
function enableValidation(config) {
  const { formSelector, ...restConfig } = config;
  const form = Array.from(document.querySelectorAll(formSelector));
  form.forEach((formElement) => {
    setEeventListener(formElement, restConfig);
  });
}
//
