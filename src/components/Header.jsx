import Logo from '../images/Logo.svg'

function header() {
	return (
		<header className="header">
			<img src={Logo} alt="Логотип в виде надписи Место Россия" className="header__logo" />
		</header>
	);
}

export default header;