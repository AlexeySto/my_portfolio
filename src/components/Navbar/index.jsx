import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../ButtonDarkMode';
import { links } from '../../helpers/linksList';
import './style.css';
import Link from './Link';

const Navbar = () => {

	return (
		<nav className="nav">
			<div className="nav-row">
				<NavLink to="/" className="logo">
					<strong>Портфолио</strong>
				</NavLink>

				<BtnDarkMode />

				<ul className="nav-list">
					{links.map((link, index) => {
						return (
							<Link
								key={index}
								path={link.path}
								name={link.name} />
						)
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
