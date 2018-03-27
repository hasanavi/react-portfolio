import React from 'react';
import testImg from '../../assets/images/yahoo-hackathon.jpg';

const work = (props) => (
    <React.Fragment>
        <div className="grid-x grid-padding-x">
            <div className="cell small-12">
                <h1>Work</h1>
            </div>
        </div>
        <div className="grid-x grid-padding-x">
            <div className="cell small-12 medium-5">
                HSBC Login
            </div>
            <div className="cell small-12 medium-7">
                <img src={testImg} alt=""/>
            </div>
        </div>
        <div className="grid-x grid-padding-x">
            <div className="cell small-12 medium-5">
                National trust
            </div>
            <div className="cell small-12 medium-7">
                <img src={testImg} alt=""/>
            </div>
        </div>
    </React.Fragment>
);

export default work;