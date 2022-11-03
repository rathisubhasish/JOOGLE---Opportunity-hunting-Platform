import React from 'react';
import "./ScoreCard.css";

const ScoreCard = () => {
    return (
        <>
            <div className="scores-container">
                <div className="scores-heading">
                    Our Achievements
                </div>
                <div className="scores-items">
                    <span className="score-card-item">
                        <span className='score-icon-container'>
                            <span class="material-icons score-icon">
                                people_alt
                            </span>
                        </span>
                        <span className='score-details'>
                            <p className='score-count'>
                                5000
                            </p>
                            <p className='score-info'>
                                users
                            </p>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
};

export default ScoreCard;