function Main(props) {

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__pos-left">
					<img className="profile__avatar"
						alt="Цветная фотография крупным планом человека в красной шапке на улице, лицо в фокусе, фон размыт" />
					<button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
					<div className="profile-info">
						<div className="profile-info__line">
							<h1 className="profile-info__title"></h1>
							<button className="profile-info__edit-button" type="button" aria-label="Кнопка в виде ручки в рамке" onClick={props.onEditProfile}></button>
						</div>
						<p className="profile-info__subtitle"></p>
					</div>
				</div>
				<button className="profile__addbutton" type="button" aria-label="Кнопка с символом плюс" onClick={props.onAddPlace}></button>
			</section>
			<section className="elements">
				<ul className="elements__grid-items">
				</ul>
			</section>
		</main>
	);
}

export default Main