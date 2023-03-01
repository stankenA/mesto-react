import React from 'react'

export default function PopupWithForm({ name, title, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h3 className="popup__header">{title}</h3>
        <form name={`${name}`} className="popup__form" noValidate>
          <fieldset className="popup__form-container">
            {children}
            <button type="submit" className="popup__submit-button">Сохранить</button>
          </fieldset>
        </form>
        <button type="button" className="popup__close-button" aria-label="Кнопка закрытия попапа" onClick={onClose}></button>
      </div>
    </div>
  )
}