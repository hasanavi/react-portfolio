import React from 'react';

import './Intro.css';

const intro = (props) => (
    <p className={["intro", props.className].join(' ')}>
        {props.children}
    </p>
);

export default intro;