import { NavLink } from 'react-router-dom';


const Contacts = () => {
	return (
		<div className="container">
			<h1 className="title-1">Контакты</h1>
			<h2 className="title-2">Место жительства</h2>
			<span className="title-2">Россия, Ярославская обл., г. Ростов Великий</span>
			<h2 className="title-2">Telegram / WhatsApp</h2>
			<p className="title-2">
				<a href="tel:+79051234567">+7 (905) 647-72-83</a>
			</p>
			<h2 className="title-2">Email</h2>
			<p className="title-2">
				<a href="mailto:stolyarov1986@inbox.ru">
					stolyarov1986@inbox.ru
				</a>
			</p>
			<NavLink to="/about" className="title-2">
				<strong>Моя проф. биография</strong>
			</NavLink>
		</div>
	);
}

export default Contacts;