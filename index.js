const openPupupButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close");
const savePopupButton = document.querySelector(".popup__save");

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__profession");

let inputName = document.querySelector(".popup__name");
let inputJob = document.querySelector(".popup__name-job");

function addPopup(event) {
  event.preventDefault();
  popup.classList.add("popup_state_opened");
}

function closePopup(event) {
  event.preventDefault();
  popup.classList.remove("popup_state_opened");
}

function addText(event) {
  event.preventDefault();
  popup.classList.remove("popup_state_opened");

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}

openPupupButton.addEventListener("click", addPopup);
closePopupButton.addEventListener("click", closePopup);
savePopupButton.addEventListener("click", addText);
