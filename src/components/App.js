import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import { api } from '../utilis/Api';
import { UserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.receiveUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      });
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData)
      });
  }, [])

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
  }

  function handleUpdateUser(data) {
    api.setNewProfileInfo(data)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
  }

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            cards={cards}
            handleAddPlaceClick={handleAddPlaceClick}
            handleEditAvatarClick={handleEditAvatarClick}
            handleEditProfileClick={handleEditProfileClick}
            handleCardClick={handleCardClick}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
