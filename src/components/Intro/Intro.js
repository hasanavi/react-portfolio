import React from 'react';

import './Intro.css';

const intro = (props) => (
    <p className={["Intro", props.className].join(' ')}>
        {props.children}
    </p>
);

export default intro;