import React from 'react';
import "./error.css";
import notfound from "../../assets/images/error/404.gif";


const error = () => {
  return (
    <>
        <div className="error-container">
            <div className="error-items">
                <div className="error-heading">
                    oops!
                </div>
                <div className="error-image">
                    <span className="error-image-container">
                        <img src={notfound} alt="error" />
                    </span>
                </div>
                <div className="error-path">
                    <button className='error-redirect-btn'>
                        sadf
                    </button>
                </div>
            </div>
        </div>
    </>
  )
};

export default error;