import BackendSkills from "../Skills/BackendSkills";
import FrontendSkills from "../Skills/FrontendSkills";
import "./style.css";

const Header = () => {
	return (
		<div className="container">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Привет, меня зовут <em>Алексей</em>
					</strong>
					<br />я fullstack разработчик
					<br />
					<br />мои основные <em>навыки</em>
				</h1>
			</div>
			<FrontendSkills />
			<BackendSkills />
		</div>
	);
}

export default Header;