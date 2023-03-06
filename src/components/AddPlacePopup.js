import React, { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading, onBgClose }) {

  const nameRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    nameRef.current.value = '';
    linkRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="new-photo"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      onBgClose={onBgClose}
    >
      <input type="text" id="title-input" className="popup__input popup__input_type_photo-title" placeholder="Название"
        name="photoTitle" required minLength="2" maxLength="30" autoComplete="off" ref={nameRef} />
      <span className="popup__input-error title-input-error"></span>
      <input type="url" id="href-input" className="popup__input popup__input_type_photo-href"
        placeholder="Ссылка на картинку" name="photoHref" required autoComplete="off" ref={linkRef} />
      <span className="popup__input-error href-input-error"></span>
    </PopupWithForm>
  )
}
