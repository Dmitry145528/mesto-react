import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from '../components/PopupWithForm'
import ImagePopup from './ImagePopup'
import api from '../utils/Api'
import Card from './Card'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Функция для выполнения запросов к API
    const fetchData = () => {
      
      Promise.all([
        api.getProfileInfo(),
        api.getInitialCards()
      ])
        .then(([userData, initialCards]) => {
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
          setCards(initialCards);
        })
        .catch(err => {
          console.error('Ошибка при запросе к API:', err);
        });
    };

    fetchData(); // Вызов функции
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <>
      <div className="center-pos">
        <Header />
        <Main
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cardItems={cards.map(card => (
              <Card
                key={card._id} // Добавляем ключ карточке
                title={card.name}
                likes={card.likes.length}
                src={card.link}
                onCardClick={handleCardClick} // Передаём обработчик
                card={card} // Передаём карточку
              />
            ))}
            />
        <Footer />
      </div>
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        button="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
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
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
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
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
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
        button="Да" />
      <ImagePopup
        name="update-avatar"
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  )
}

export default App