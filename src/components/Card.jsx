function Card(props) {

  return (
      <li className="element">
        <button className="element__trash" type="button" aria-label="Кнопка в виде мусорной корзины"></button>
        <img className="element__img" src={props.src} alt={props.title} />
        <div className="element__pos-element">
          <h2 className="element__title">{props.title}</h2>
          <button className="element__heart" type="button" aria-label="Кнопка в виде сердца">
            <span className="element__heart_like-count">{props.likes}</span>
          </button>
        </div>
      </li>
  );
}

export default Card