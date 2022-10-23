// importing modules
import React from 'react';
import "./Logo.css";
import { useNavigate } from "react-router-dom";
const Logo = () => {

  const hitLogo = () =>{
    navigate("/");
  };

  const navigate = useNavigate();
  return (
    <>
        <h2 className="logo-name" onClick={hitLogo}>
                J
                <span className="material-icons logoSize">
                update
                </span>
                <span className="material-icons logoSize">
                alarm
                </span>
                gle
        </h2>
    </>
  )
};

export default Logo;