function Main() {

	const handleEditAvatarClick = () => {
    const popup = document.querySelector('#popup_update-avatar');
    popup.classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    const popup = document.querySelector('#popup_edit-profile');
    popup.classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    const popup = document.querySelector('#popup_add-card');
    popup.classList.add('popup_opened');
  };

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__pos-left">
					<img className="profile__avatar"
						alt="Цветная фотография крупным планом человека в красной шапке на улице, лицо в фокусе, фон размыт" />
					<button className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
					<div className="profile-info">
						<div className="profile-info__line">
							<h1 className="profile-info__title"></h1>
							<button className="profile-info__edit-button" type="button" aria-label="Кнопка в виде ручки в рамке" onClick={handleEditProfileClick}></button>
						</div>
						<p className="profile-info__subtitle"></p>
					</div>
				</div>
				<button className="profile__addbutton" type="button" aria-label="Кнопка с символом плюс" onClick={handleAddPlaceClick}></button>
			</section>
			<section className="elements">
				<ul className="elements__grid-items">
				</ul>
			</section>
		</main>
	);
}

export default Main;