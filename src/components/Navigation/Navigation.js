import React from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => (
    <nav className="navigation">
        <ul className="navigation__list">
            <NavigationItem href="/" text="HOME" />
            <NavigationItem href="/work" text="WORK" />
            <NavigationItem href="/blog" text="BLOG" />
            <NavigationItem href="/achievement" text="ACHIEVEMENT" />
            <NavigationItem href="/contact" text="CONTACT" />
        </ul>
    </nav>
);

export default navigation;