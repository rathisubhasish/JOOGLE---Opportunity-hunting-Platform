import React from 'react';
import "./Info.css";
import Img from "../../assets/images/global/card/back.jpg";
import logo from "../../assets/images/global/companies/snapchat-logo-svgrepo-com.svg";

const Info = () => {
  return (
    <>
        <div className="info-container">
          <div className="info-cover-container">
            <span className='info-cover'>
              <img src={Img} alt="" className='cover-img'/>
            </span>  
          </div>
          <div className="info-items">

            <div className="company-info-logo">
              <span className='company-logo-container'>
                <img src={logo} alt="logo" className='company-logo'/>
              </span>
            </div>
            <br />
            <br />
            <div className="info-title">
              <h3>CodeOhNinja 2022</h3>
              <h4>Snapchat</h4>
            </div>

          </div>
        </div>
    </>
  )
};

export default Info;