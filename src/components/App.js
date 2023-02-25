import { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input type="text" id="name-input" className="popup__input popup__input_type_name" placeholder="Имя" name="name"
            required minLength="2" maxLength="40" autoComplete="off" />
          <span className="popup__input-error name-input-error"></span>
          <input type="text" id="about-input" className="popup__input popup__input_type_description" placeholder="О себе"
            name="about" required minLength="2" maxLength="200" autoComplete="off" />
          <span className="popup__input-error about-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="new-photo" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input type="text" id="title-input" className="popup__input popup__input_type_photo-title" placeholder="Название"
            name="photoTitle" required minLength="2" maxLength="30" autoComplete="off" />
          <span className="popup__input-error title-input-error"></span>
          <input type="url" id="href-input" className="popup__input popup__input_type_photo-href"
            placeholder="Ссылка на картинку" name="photoHref" required autoComplete="off" />
          <span className="popup__input-error href-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="new-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input type="url" id="avatar-href" className="popup__input popup__input_type_new-avatar"
            placeholder="Ссылка на картинку" name="avatarHref" required autoComplete="off" />
          <span className="popup__input-error avatar-href-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
