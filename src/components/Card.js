import React from 'react'

export default function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="gallery__card">
      <img className="gallery__picture" src={card.link} onClick={handleClick} alt={card.name} />
      <div className="gallery__card-container">
        <h2 className="gallery__caption">{card.name}</h2>
        <div className="gallery__like-container">
          <button type="button" className="gallery__like-button" aria-label="Кнопка лайка"></button>
          <span className="gallery__like-counter">{card.likes.length}</span>
        </div>
        <button className="gallery__delete-button"></button>
      </div>
    </li>
  )
}
