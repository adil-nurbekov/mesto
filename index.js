const  openPupupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');



let nameInput = document.querySelector('.popup__name');
let professionInput = document.querySelector('.popup__profession');

function addPopup(event){
    event.preventDefault();
    popup.classList.add('popup__is-opened');
    let name = profileName.value;
let job = profileJob.value;

nameInput.textContent = name;
professionInput.textContent = job

}
openPupupButton. addEventListener('click', addPopup);


function closePopup(event){
    event.preventDefault();
    popup.classList.remove('popup__is-opened')
}

closePopupButton.addEventListener('click',closePopup);

const saveButton = document.querySelector('.popup__save');



function addText () {
let name = nameInput.value;
let job = professionInput.value;

profileName.textContent = name;
profileJob.textContent = job
}
saveButton.addEventListener('click',addText);
saveButton.addEventListener('click',closePopup);



