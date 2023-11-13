// Card.js
import React from 'react';
import './Card.css';
import cardLeftImage from '../assets/card-left-2.png';
import lockImage from '../assets/Lock.png';
import profileImage from '../assets/Profile.png';

const Card = () => {
  return (
    <div className="card">
        <div className="image-container">
            <img src={cardLeftImage} alt="Card" />
        </div>
        <div className="content-block">
            <div className="header">
                <div className="badge">
                    <img src={lockImage} alt="Lock" />
                    <span>Members only</span>
                </div>
                <div className="title-badge">
                    <h2>Can coffee make you a better developer?</h2>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="info">
                <img src={profileImage} alt="Profile" />
                <div className="info-text">
                    <p className="name">Jonathan Reinink</p>
                    <p className="date">Aug 18</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
