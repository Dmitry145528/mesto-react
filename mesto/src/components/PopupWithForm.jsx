function PopupWithForm(props) {
	return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Кнопка в форме крестика"></button>
        <h2 className="popup__header">{props.title}</h2>
        <form className="popup__form" action="#" name={props.name} method="post" noValidate>
          {props.children}
          <button type="submit" className="popup__button" aria-label="Кнопка с надписью сохранить">{props.button}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm