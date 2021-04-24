const openPupupButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close");

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__profession");

let inputName = document.querySelector(".popup__input_type_name");
let inputJob = document.querySelector(".popup__input_type_job");

let popupButtonSave = document.querySelector(".popup__form");

function addPopup() {
  popup.classList.add("popup_open");

  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove("popup_open");
}

function addText(e) {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

openPupupButton.addEventListener("click", addPopup);
closePopupButton.addEventListener("click", closePopup);
popupButtonSave.addEventListener("submit", addText);
