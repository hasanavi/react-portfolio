import React from 'react';
import Intro from '../../components/Intro/Intro';
import clients from '../../assets/images/clients.png';

const homePage = (props) => (
    <React.Fragment>
        <h1>About Me</h1>
        <Intro className="long" >
            <p className="intro-text">Hello, My name is Hasan Azizul Haque</p>
            <p className="intro-copy">I'm a London based Javascript Developer. I have over 10 years experience (4 years full stack + 6 years front-end) 
                developing web and mobile application. I love building unique, efficient site and passionate about writing clean code.</p>
        </Intro>
        <h2>I've been lucky to work on these projects:</h2>
        <img src={clients} alt="clients logo" />
    </React.Fragment>
);

export default homePage;