import PopupWithForm from "./PopupWithForm"
import { useRef, useState } from 'react'

function EditAvatarPopup(props) {
  const [submitButtonText, setSubmitButtonText] = useState('Сохранить');
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitButtonText('Сохранение...'); // Изменение текста кнопки при отправке формы

    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    })
      .then(() => {
        inputRef.current.value = '';
      })
      .catch((err) => {
        console.error('Ошибка обновления аватара:', err);
      })
      .finally(() => {
        setSubmitButtonText('Сохранить');
      })
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      button={submitButtonText}
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