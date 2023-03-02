import React, { useContext, useState, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { UserContext } from '../contexts/CurrentUserContext';


export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const currentUser = useContext(UserContext);

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    setAvatar(currentUser.avatar)
  }, [currentUser]);

  const avatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm name="new-avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input type="url" id="avatar-href" className="popup__input popup__input_type_new-avatar"
        placeholder="Ссылка на картинку" name="avatarHref" required autoComplete="off" ref={avatarRef} />
      <span className="popup__input-error avatar-href-error"></span>
    </PopupWithForm>
  )
}
