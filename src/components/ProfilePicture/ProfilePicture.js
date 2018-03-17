import React from 'react';
import './ProfilePicture.css';
import myPicture from '../../assets/images/hasan-haque.jpg';

const profilePicture = (props) => (
    <div className="profile-picture">
        <img src={myPicture} alt="Hasan Haque" />
    </div>
);

export default profilePicture;