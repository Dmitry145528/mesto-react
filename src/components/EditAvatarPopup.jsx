import PopupWithForm from "./PopupWithForm"
import { useRef } from 'react'

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });

    inputRef.current.value = '';
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      button="Сохранить"
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className="popup__contact-info">
        <div className="popup__field">
          <input className="popup__input" ref={inputRef} placeholder='Ссылка на картинку' id="avatar-url" name="avatar" type="url" required />
          <span className="avatar-url-error popup__input-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup