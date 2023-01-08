import React from 'react';
import "./Signup.css";
import loginImg from "../../assets/images/signup/signup.svg";

import {Particles, SignupForm} from "../../components/components";

const Signup = () => {
  return (
    <>
    <Particles />
      <div className="signup-container">
            <div className="signup-items">
              <span id="signup-image-container">
                <img src={loginImg} alt="logo" id='signup-image'/>
              </span>
              <SignupForm />
            </div>
        </div>
    </>
  )
};

export default Signup;