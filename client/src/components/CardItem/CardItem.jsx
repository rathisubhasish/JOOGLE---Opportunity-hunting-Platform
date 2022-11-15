import React from 'react';
import "./CardItem.css";
import Img from "../../assets/images/global/cardBack.jpg";
const CardItem = () => {
  return (
    <>
      <a href="/" className="card-container">
        <span className="card-image-container">
          <img src={Img} alt="Img" className="image-element" />
        </span>
        <div className="card-content">
          <p className="card-title" id="cardName">
            Azure Hackos 2022
          </p>
          <p className="card-title" id="cardOwnerName">
            Microsoft
          </p>
          <div className='card-info'>
              <span className='info-container'>
                <span className="material-icons">
                  how_to_reg
                </span>
                <p>25 Registered</p>
              </span>
              <span className='info-container'>
                <span className="material-icons">
                  timer
                </span>
                <p>3 days left</p>
              </span>
          </div>
        </div>
      </a>
      <a href="/" className="card-container">
        <span className="card-image-container">
          <img src={Img} alt="Img" className="image-element" />
        </span>
        <div className="card-content">
          <p className="card-title" id="cardName">
            Azure Hackos 2022
          </p>
          <p className="card-title" id="cardOwnerName">
            Microsoft
          </p>
          <div className='card-info'>
              <span className='info-container'>
                <span className="material-icons">
                  how_to_reg
                </span>
                <p>25 Registered</p>
              </span>
              <span className='info-container'>
                <span className="material-icons">
                  timer
                </span>
                <p>3 days left</p>
              </span>
          </div>
        </div>
      </a>
      
      
    </>
  )
};

export default CardItem;