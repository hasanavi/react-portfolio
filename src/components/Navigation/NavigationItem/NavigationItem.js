import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <li className="navigation-item">
            <NavLink exact
                to={props.href} 
                className='navigation-item__link'
                activeClassName='navigation-item__link--active'>{props.text}</NavLink>
        </li>
    );
}

export default navigationItem;