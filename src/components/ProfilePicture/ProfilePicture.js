import React from 'react';
import { Link } from 'react-router-dom';

import './ProfilePicture.css';
import myPicture from '../../assets/images/hasan-haque.jpg';

const profilePicture = (props) => (
    <div className="profile-picture">
        <Link to="/">
            <img src={myPicture} alt="Hasan Haque" />
        </Link>
    </div>
);

export default profilePicture;