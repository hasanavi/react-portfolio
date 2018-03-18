import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => {
    let activeClass = '';
    if(props.active) {
        activeClass = 'navigation-item__link--active';
    }

    return (
        <li className="navigation-item">
            <a className={['navigation-item__link',activeClass].join(' ')} href={props.href}>{props.text}</a>
        </li>
    );
}

export default navigationItem;