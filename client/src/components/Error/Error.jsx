import React from 'react';
import "./Error.css";
import notfound from "../../assets/images/global/error/404.gif";
import { useNavigate } from "react-router-dom";

const Error = ({errorTitle, errorRedirectName, errorRedirectPath}) => {
    const handleRedirect = () => {
        navigate(errorRedirectPath);
    };
    
    const navigate = useNavigate();
    return (
    <>
        <div className="error-container">
            <div className="error-items">
                <div className="error-heading">
                    {errorTitle}
                </div>
                <div className="error-image">
                    <span className="error-image-container">
                        <img src={notfound} alt="error" />
                    </span>
                </div>
                <div className="error-path">
                    <button 
                        className='error-redirect-btn'
                        onClick={handleRedirect}
                    >
                        {errorRedirectName}
                    </button>
                </div>
            </div>
        </div>
    </>
  )
};

export default Error;