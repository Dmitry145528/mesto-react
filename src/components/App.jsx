import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from '../components/PopupWithForm'
import ImagePopup from './ImagePopup'
import api from '../utils/Api'
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext';
import CurrentCardContext from '../contexts/CurrentCardContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    // Функция для выполнения запросов к API
    const fetchData = () => {

      Promise.all([
        api.getProfileInfo(),
        api.getInitialCards()
      ])
        .then(([userData, initialCards]) => {
          setCurrentUser(userData);
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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Определяем, какой метод использовать
    const likeAction = () => isLiked ? api.deleteLike(card._id) : api.setLiked(card._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    likeAction(card._id)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((error) => {
        console.error('Error changing like status:', error);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => {
        console.error('Error deleting card:', error);
      });
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentCardContext.Provider value={cards}>
          <div className="center-pos">
            <Header />
            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              cardItems={<Card onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={handleCardClick} />}
            />
            <Footer />
          </div>
        </CurrentCardContext.Provider>
      </CurrentUserContext.Provider>
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
        name="popup-img-back"
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  )
}

export default App