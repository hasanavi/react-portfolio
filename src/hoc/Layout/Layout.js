import React from 'react';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import Intro from '../../components/Intro/Intro';
import Navigation from '../../components/Navigation/Navigation';
import TwitterTimeline from '../../components/TwitterTimeline/TwitterTimeline';

import './Layout.css';

const Layout = (props) => (
    <div className="grid-container">
        <div className="grid-x grid-padding-x">
            <aside className="cell small-12 medium-4 large-3">
                <ProfilePicture />
                <Intro className="h1 short">
                    I am a<span className="secondary-color">Javascript</span> <span className="tertiary-color">Enthusiast</span>
                </Intro>
                <Navigation />
                <TwitterTimeline userName="hasanavi" />
            </aside>

            <main className="cell auto main-content" id="main-content">
                {props.children}
            </main>
        </div>
    </div>
);

export default Layout;