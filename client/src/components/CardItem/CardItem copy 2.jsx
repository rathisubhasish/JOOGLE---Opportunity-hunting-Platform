import React from 'react';
import "./CardItem.css";
import Img from "../../assets/images/global/cardBack.jpg";

const CardItem = ({data}) => {
  return (
    <> 
      <a href="/" className="card-container">
          <div className="card-content">
            <div className="card-header">
              <div className="card-logo-container">
                <span className="card-company-logo">
                <img src={Img} alt="logo" className='card-company-img'/>
                </span>
              </div>
              <div className="card-head-detail">
                <p className="card-title" id="cardName">
                  {data.postName}
                </p>
                <p className="card-title" id="cardOwnerName">
                  {data.organization}
                </p>
              </div>
            </div>
            <div className="card-info">
                <span className='card-info-container'>
                  <span className="material-icons">
                    how_to_reg
                  </span>
                  <p>25 Registered</p>
                </span>
                <span className='card-info-container'>
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

