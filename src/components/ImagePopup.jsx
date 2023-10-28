function PopupWithImg() {
	<div className="popup popup_popup-img-back" id="popup_image">
		<div className="popup__container-img">
			<button className="popup__close" type="button" aria-label="Кнопка в форме крестика"></button>
			<figure className="popup__figure">
				<img className="popup__image" />
				<figcaption className="popup__caption"></figcaption>
			</figure>
		</div>
	</div>
}

export default PopupWithImg