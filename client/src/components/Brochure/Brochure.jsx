import React from 'react';
import "./Brochure.css";
import Img1 from "../../assets/images/brochure/jobs.svg";
import { trial } from "../../a";

const Brochure = () => {
  return (
    <>
      <div className="brochure-container">
        {trial.map((val, key) => {
          return (
            <div className="brochure-item">
              <p className="brochure-title">
                {val.title}
              </p>
              <div className="brochure-content">
                <div className="brochure-image">
                  <span><img src={Img1} alt="" /></span>
                </div>
                <div className="brochure-detail">
                  <p className='brochure-info'>
                    {val.detail}
                  </p>
                  <span className='brochure-btn-container'>
                    <a href="/" className='brochure-btn'>
                      Explore
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