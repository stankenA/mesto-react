import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utilis/Api.js';
import Card from './Card.js';

export default function Main({ cards, handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick, handleCardLike }) {

  const currentUser = useContext(UserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__picture-container">
          <img src={currentUser.avatar} alt="Фотография профиля" className="profile__picture" onClick={handleEditAvatarClick} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="profile__edit-button" aria-label="Кнопка редактирования профиля" onClick={handleEditProfileClick}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Кнопка добавления фото в галлерею" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="gallery">
        <ul className="gallery__grid">
          {cards.map((card, i) => (
            <Card card={card} key={card._id} onCardClick={handleCardClick} onCardLike={handleCardLike} />
          ))}
        </ul>
      </section>
    </main>
  )
}
