import React from 'react';
import { NavLink } from 'react-router-dom';

const NavElement = (props) => {
    const { openNewWindow, link, title } = props.navItems;

    return (
        <li className="nav-list-item">
            {openNewWindow ?
                <a className="nav-list-item-link" href={link} title={title} target="_blank" rel="noopener noreferrer">{title}</a> :
                <NavLink className="nav-list-item-link" to={link} title={title}>{title}</NavLink>}
        </li>
    );
}

export default NavElement;