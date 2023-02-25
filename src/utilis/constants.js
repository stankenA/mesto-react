export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const buttonProfileEdit = document.querySelector('.profile__edit-button');

export const buttonPhotoAdd = document.querySelector('.profile__add-button');

export const avatarEdit = document.querySelector('.profile__picture');

export const buttonsPopupClose = document.querySelectorAll('.popup__close-button');

export const cardTitle = document.querySelector('.popup__input_type_photo-title');
export const cardHref = document.querySelector('.popup__input_type_photo-href');

export const allPopups = document.querySelectorAll('.popup');

export const selectorList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'ebcc8864-4ebe-4d94-adc1-0ab4457f09d1'
  }
};
