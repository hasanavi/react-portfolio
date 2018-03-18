import React from 'react';
import './Navigation.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => (
    <nav className="navigation">
        <ul className="navigation__list">
            <NavigationItem href="/" text="HOME" active />
            <NavigationItem href="/" text="WORK" />
            <NavigationItem href="/" text="BLOG" />
            <NavigationItem href="/" text="ACHIEVEMENT" />
            <NavigationItem href="/" text="CONTACT" />
        </ul>
    </nav>
);

export default navigation;