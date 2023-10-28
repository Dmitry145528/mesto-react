import { useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from '../components/PopupWithForm'
import PopupWithImg from './ImagePopup'

function app() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  return (
    <>
      <div className="center-pos">
        <Header />
        <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick} />
        <Footer />
      </div>
      <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      button="Сохранить"
      isOpen={isEditProfilePopupOpen}>
        <fieldset className="popup__contact-info">
          <div className="popup__field">
            <input className="popup__input" id="name" placeholder="Имя и Фамилия" name="name" type="text" minLength="2" maxLength="40" required />
            <span className="name-error popup__input-error"></span>
          </div>
          <div className="popup__field">
            <input className="popup__input" id="activity" placeholder="Деятельность" name="about" type="text" minLength="2" maxLength="200" required />
            <span className="activity-error popup__input-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
      title="Новое место"
      name="add-card"
      button="Добавить"
      isOpen={isAddPlacePopupOpen}>
        <fieldset className="popup__contact-info">
          <div className="popup__field">
            <input className="popup__input" placeholder='Название' id="title" name="name" type="text" minLength="2" maxLength="30" required />
            <span className="title-error popup__input-error"></span>
          </div>
          <div className="popup__field">
            <input className="popup__input" placeholder='Ссылка на картинку' id="img-url" name="link" type="url" required />
            <span className="img-url-error popup__input-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      button="Сохранить"
      isOpen={isEditAvatarPopupOpen}>
        <fieldset className="popup__contact-info">
          <div className="popup__field">
            <input className="popup__input" placeholder='Ссылка на картинку' id="avatar-url" name="avatar" type="url" required />
            <span className="avatar-url-error popup__input-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
      title="Вы уверены?"
      name="delete-card"
      button="Да"/>
      <PopupWithImg />
      <template className="card-template">
        <li className="element">
          <button className="element__trash" type="button" aria-label="Кнопка в виде мусорной корзины"></button>
          <img className="element__img" />
          <div className="element__pos-element">
            <h2 className="element__title"></h2>
            <button className="element__heart" type="button" aria-label="Кнопка в виде сердца">
              <span className="element__heart_like-count">0</span>
            </button>
          </div>
        </li>
      </template>
    </>
  )
}

export default app