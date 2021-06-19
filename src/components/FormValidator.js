class FormValidator {
  constructor(settings, form) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._inputActiveClass = settings.errorActiveClass;
    this._form = form;

    this._inputList = Array.from(
      this._form.querySelectorAll(settings.inputSelector)
    );
    this._buttonElement = this._form.querySelector(
      settings.submitButtonSelector
    );
  }

  // функция включения валидации
  enableValidation = () => {
    this._setEventListener();
  };

  // функция навешивания листенеров
  _setEventListener = () => {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidity(input);
        this._toggleButtonState(input);
      });
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
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.classList.add(this._inputActiveClass);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
  };
  //

  // функция скрывающая ошибку
  _hideError = (input) => {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.classList.remove(this._inputActiveClass);
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  };
  //

  // функция проверки на валидность
  _hasInvalidInput = () => {
    return this._inputList.some((input) => !input.validity.valid);
  };
  //

  // функция состояния кнопки

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  };
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }
}
export { FormValidator };
