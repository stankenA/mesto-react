import React, { useState, useEffect } from 'react';
import { api } from '../utilis/Api.js';
import Card from './Card.js';

export default function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick }) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.receiveUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserAvatar(userData.avatar);
        setUserDescription(userData.about);
      });
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData)
      })
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__picture-container">
          <img src={userAvatar} alt="Фотография профиля" className="profile__picture" onClick={handleEditAvatarClick} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-button" aria-label="Кнопка редактирования профиля" onClick={handleEditProfileClick}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Кнопка добавления фото в галлерею" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="gallery">
        <ul className="gallery__grid">
          {cards.map((card, i) => (
            <Card card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}
