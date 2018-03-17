import React from 'react';

const Layout = (props) => (
    <div class="grid-container">
        <div className="grid-x grid-padding-x">
            <aside className="cell small-12 medium-4 large-3">Left Column</aside>
            <main className="cell auto" id="main-content">
                {props.children}
            </main>
        </div>
    </div>
);

export default Layout;