import React from 'react';
import "./Brochure.css";
import Hiring from "../../assets/images/brochure/Hiring.gif";



const Brochure = ({brochureData}) => {
  return (
    <>
      <div className="brochure-container">
        {brochureData.map((val, key) => {
          return (
            <div className="brochure-item">
              <p className="brochure-title">
                {val.title}
              </p>
              <div className="brochure-content">
                <div className="brochure-image">
                  <span><img src={require(`../../assets/images/brochure/${val.image}`)} alt="" /></span>
                </div>
                <div className="brochure-detail">
                  <p className='brochure-info'>
                    {val.detail}
                  </p>
                  <span className='brochure-btn-container'>
                    <a href="/" className='brochure-btn'>
                    {val.pathName}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
};

export default Brochure;