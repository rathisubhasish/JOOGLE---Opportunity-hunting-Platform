import React from 'react';
import "./Brochure.css";
import { NavLink } from 'react-router-dom';

const Brochure = ({brochureData}) => {
  return (
    <> 
      <div className="brochure-container">
        {brochureData.map((val, key) => {
          return (
            <div className="brochure-item" key={key}>
              <p className="brochure-title">
                {val.title}
              </p>
              <div className="brochure-content" key={key}>
                <div className="brochure-image">
                  <span><img src={require(`../../assets/images/joogle/brochure/${val.imageName}`)} alt={val.imageName} /></span>
                </div>
                <div className="brochure-detail">
                  <p className='brochure-info'>
                    {val.detail}
                  </p>
                  <span className='brochure-btn-container'>
                    <NavLink to={val.path} className='brochure-btn'>
                    {val.pathName}
                    </NavLink>
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