import React from 'react';
import "./ScoreCard.css";

const ScoreCard = ({ scoresData }) => {
    return (
        <>
            <div className="scores-container">
                <div className="scores-heading">
                    Our Achievements
                </div>
                <div className="scores-items-container">
                    {
                        scoresData.map((val, index) => {
                            return (
                                <span className="score-card-item" key={val.info}>
                                    <span className='score-icon-container'>
                                        <span className="material-icons score-icon">
                                            {val.iconName}
                                        </span>
                                    </span>
                                    <span className='score-details'>
                                        <p className='score-count'>
                                            {val.count}
                                        </p>
                                        <p className='score-info'>
                                            {val.info}
                                        </p>
                                    </span>
                                </span>
                            );
                        })
                    }
                    {/* <span className="score-card-item">
                        <span className='score-icon-container'>
                            <span className="material-icons score-icon">
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
                    <span className="score-card-item">
                        <span className='score-icon-container'>
                            <span className="material-icons score-icon">
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
                    <span className="score-card-item">
                        <span className='score-icon-container'>
                            <span className="material-icons score-icon">
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
                    </span> */}
                </div>
                <br />
            </div>
        </>
    )
};

export default ScoreCard;