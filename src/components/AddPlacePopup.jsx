import PopupWithForm from "./PopupWithForm"
import { useRef } from 'react'

function AddPlacePopup(props) {

  const inputTitleRef = useRef();
  const inputUrlRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: inputTitleRef.current.value,
      link: inputUrlRef.current.value
    });

    inputTitleRef.current.value = '';
    inputUrlRef.current.value = '';
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      button="Добавить"
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className="popup__contact-info">
        <div className="popup__field">
          <input className="popup__input" ref={inputTitleRef} placeholder='Название' id="title" name="name" type="text" minLength="2" maxLength="30" required />
          <span className="title-error popup__input-error"></span>
        </div>
        <div className="popup__field">
          <input className="popup__input" ref={inputUrlRef} placeholder='Ссылка на картинку' id="img-url" name="link" type="url" required />
          <span className="img-url-error popup__input-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup 