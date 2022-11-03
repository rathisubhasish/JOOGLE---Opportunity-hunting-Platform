import React from 'react';
import "./Brochure.css";

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
                  <span><img src={require(`../../assets/images/brochure/${val.imageName}`)} alt={val.imageName} /></span>
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