import React from 'react';
import { NavLink } from 'react-router-dom';


const Link = ({ path, name }) => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';
    
    
    return (
        <li className="nav-list__item">
            <NavLink
                to={path}
                className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                }
            >
                {name}
            </NavLink>
        </li>
    );
}

export default Link;
