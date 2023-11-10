import { useContext } from 'react';
import CurrentCardContext from '../contexts/CurrentCardContext';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const cards = useContext(CurrentCardContext); // Получим массив карточек
  const currentUser = useContext(CurrentUserContext);

  const handleClick = (card) => {
    props.onCardClick(card);
  }

  return (
    cards.map(card => {
      const isOwn = card.owner._id === currentUser._id;
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      const cardLikeButtonClassName = `element__heart ${isLiked ? 'element__heart_active' : ''}`;

      return (
        <li className="element" key={card._id}>
          {isOwn && <button className="element__trash" type="button" aria-label="Кнопка в виде мусорной корзины"></button>}
          <img className="element__img" src={card.link} alt={card.name} onClick={() => handleClick(card)} />
          <div className="element__pos-element">
            <h2 className="element__title">{card.name}</h2>
            <button className={cardLikeButtonClassName} type="button" aria-label="Кнопка в виде сердца">
              <span className="element__heart_like-count">{card.likes.length}</span>
            </button>
          </div>
        </li>
      );
    })
  );
}

export default Card;